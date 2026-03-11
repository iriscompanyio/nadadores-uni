<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { onMounted, ref } from "vue";

const years = [
  {
    year: 2017,
    title: "Origen de todo",
    description:
      "Desde 2017, Nadadores UNI crece con resiliencia e innovación, fruto de una iniciativa entre alumnos apasionados por la natación.",
  },
  {
    year: 2018,
    title: "Fundación y prima sede",
    description:
      "El 5 de abril de 2018 se formó la primera directiva y se aperturó la primera sede en el Colegio Mercedes Cabello",
  },
  {
    year: 2019,
    title: "Primera triatlón",
    description:
      "Bajo la organización del nuevo presidente, Leonardo Chavez, se desarrolló con éxito la primera Triatlón UNI, evento que se ha convertido en tradición de verano.",
  },
  {
    year: 2020,
    title: "Afrontando la pandemia",
    description:
      "En 2020 nos adaptamos a los retos de la pandemia, brindando charlas virtuales y talleres prácticos para ejercitarse desde casa.",
  },
  {
    year: 2021,
    title: " Segunda sede",
    description:
      "Con el objetivo de seguir fomentando el deporte y ayudar a más personas a aprender a nadar, se obtuvo un convenio con el Colegio Ricardo Bentin como segunda sede.",
  },
  {
    year: 2022,
    title: "Sistema de matrícula",
    description:
      "Fortalecimos nuestra comunidad con plataformas digitales e incluimos un sistema automático de matrícula, con  el objetivo de mejorar la experiencia de los usuarios",
  },
  {
    year: 2023,
    title: "Nivel competitivo",
    description:
      "Desde el 2023 venimos participando en competencias nacionales e internacionales, y sumamos disciplinas complementarias como el atletismo y el ciclismo. ",
  },
  {
    year: 2025,
    title: "Asociados a la Federaión",
    description:
      "Hoy, como club privado afiliado a la Federación Peruana de Triatlón, competimos nacional e internacionalmente y seguimos creciendo con orgullo. ",
  },
];

const scrollable = ref<HTMLElement>();

onMounted(() => {
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  const updateScrollableState = () => {
    if (scrollable.value!.scrollWidth > scrollable.value!.clientWidth) {
      scrollable.value!.classList.add("cursor-pointer"); // Activa cursor si es desplazable
    } else {
      scrollable.value!.classList.remove("cursor-pointer"); // Desactiva cursor si no es desplazable
    }
  };

  if (scrollable.value) {
    scrollable.value.addEventListener("mousedown", (e) => {
      isDragging = true;
      scrollable.value?.classList.add("cursor-grabbing");
      startX = e.pageX - scrollable.value?.offsetLeft!;
      scrollLeft = scrollable.value?.scrollLeft!;
    });

    scrollable.value.addEventListener("mouseleave", () => {
      isDragging = false;
      scrollable.value?.classList.remove("cursor-grabbing");
    });

    scrollable.value.addEventListener("mouseup", () => {
      isDragging = false;
      scrollable.value?.classList.remove("cursor-grabbing");
    });

    scrollable.value.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollable.value?.offsetLeft!;
      const walk = x - startX; // Multiplica por 2 para aumentar la velocidad
      scrollable.value!.scrollLeft = scrollLeft - walk;
    });
  }

  window.addEventListener("resize", updateScrollableState);
  updateScrollableState();
});
</script>
<template>
  <div
    ref="scrollable"
    class="hidden sm:flex overflow-auto relative z-20 cursor-pointer scrollbar-none"
  >
    <div
      v-for="(year, index) in years"
      :key="index"
      class="w-[200px] flex-shrink-0 nonDraggable"
      :class="{
        'w-[calc(100%-1400px)] min-w-[200px]': index === years.length - 1,
      }"
    >
      <div class="flex items-center mb-8">
        <div
          class="bg-[#DCECFF] border-[6px] rounded-full border-[#2F326E] w-6 h-6 flex-shrink-0"
        />
        <div class="border-[3px] border-[#2F326E] w-full" />
      </div>
      <div class="max-w-[170px] pr-2 space-y-3 select-none">
        <p class="text-[#2F326E] text-lg font-bold">{{ year.year }}</p>
        <p class="text-[#858592] font-bold text-lg">{{ year.title }}</p>
        <p class="text-[#858592] text-sm">{{ year.description }}</p>
      </div>
    </div>
  </div>
  <div class="w-full sm:hidden">
    <Carousel
      :opts="{
        slidesToScroll: 2,
      }"
      v-slot="{ scrollTo, selectedSlideIndex }"
      class="relative z-20"
    >
      <CarouselContent>
        <CarouselItem
          class="basis-1/2"
          v-for="(year, index) in years"
          :key="index"
        >
          <div class="select-none">
            <div class="flex items-center mb-4">
              <div
                class="bg-[#DCECFF] border-[6px] rounded-full border-[#2F326E] w-6 h-6 flex-shrink-0"
              />
              <div class="border-[3px] border-[#2F326E] w-full" />
            </div>
            <div class="w-[200px] pr-12 space-y-3">
              <p class="text-[#2F326E] text-lg font-bold">{{ year.year }}</p>
              <p class="text-[#858592] font-bold text-lg">{{ year.title }}</p>
              <p class="text-[#858592] text-sm">{{ year.description }}</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div class="flex space-x-4 mt-4 justify-center">
        <button
          v-for="(_, index) in 4"
          :key="index"
          class="w-[20px] h-[20px] rounded-full"
          :class="
            selectedSlideIndex === index ? '!bg-[#2F326E]' : 'bg-[#DCECFF]'
          "
          @click="scrollTo(index)"
        ></button>
      </div>
    </Carousel>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none; /* Oculta el scroll en navegadores basados en WebKit */
}
.scrollbar-none {
  scrollbar-width: none; /* Oculta el scroll en Firefox */
}
.nonDraggable {
  -webkit-user-drag: none;
}
</style>
