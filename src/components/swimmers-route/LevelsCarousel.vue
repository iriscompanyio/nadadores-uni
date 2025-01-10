<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Levels from "@/components/swimmers-route/Levels.vue";
import { computed, ref } from "vue";

const userLevel = ref(44);
const groupLevel = computed(() => {
  return Math.floor(userLevel.value / 10) * 10;
});
</script>
<template>
  <div class="hidden lg:block">
    <Carousel v-slot="{ scrollTo, selectedSlideIndex }" class="relative z-20">
      <CarouselContent>
        <CarouselItem v-for="(n, index) in 6" :key="index">
          <Levels :group="index" :userLevel />
        </CarouselItem>
      </CarouselContent>
      <div
        class="absolute bottom-4 left-1/2 -translate-x-1/2 transform flex space-x-4"
      >
        <button
          v-for="(_, index) in 6"
          :key="index"
          class="w-[20px] h-[20px] rounded-full"
          :class="
            selectedSlideIndex === index ? '!bg-[#2F326E]' : 'bg-[#ffffff9c]'
          "
          @click="scrollTo(index)"
        ></button>
      </div>
    </Carousel>
  </div>
  <div class="relative lg:hidden select-none">
    <div v-if="userLevel !== 50" class="relative lg:hidden select-none">
      <img src="/levelsMobile.png" alt="levels" class="w-full" />
      <span
        class="absolute top-[4vw] left-[15%] text-[#2F326E] text-[8vw] font-bold"
        >{{ userLevel }}</span
      >
      <div
        class="font-inter rounded-3xl px-[6vw] py-6 bg-white absolute top-[45%] right-1/2 translate-x-1/2 w-[80%]"
      >
        <p class="text-center font-semibold text-[#191825] text-[3.5vw] mb-4">
          Tiburoncin Coral (Niveles {{ groupLevel + 0 }}-{{ groupLevel + 9 }})
        </p>
        <p class="text-[#19182580] text-[2.7vw]">
          Beneficio: Sin beneficios específicos, pero estás en camino a algo
          grandioso.
        </p>
        <p class="text-[#19182580] text-[2.7vw]">¡Sigue avanzando!</p>
        <p class="text-[#19182580] text-[2.7vw]">
          Penalidad: Tras 2 meses sin matrícula, bajas 2 niveles, luego 1 nivel
          por mes.
        </p>
        <div
          class="bg-[#2F326C] text-white rounded-lg mt-4 p-2 flex space-x-2 items-center"
        >
          <div class="w-[10vw]">
            <img src="/gift.png" alt="" />
          </div>
          <p class="relative text-[2.7vw] font-inter z-2">
            Nivel {{ groupLevel + 5 }}: Cuaderno de la academia gratis (precio
            regular: 18 soles).
          </p>
        </div>
      </div>
    </div>
    <div v-else class="relative">
      <img src="/levelPoseidonMobile.png" alt="levels" class="w-full" />
      <span
        class="absolute top-[5vw] left-[74%] text-[#2F326E] text-[8vw] font-bold"
        >{{ userLevel }}</span
      >
      <div
        class="absolute top-[53%] px-[8vw] left-1/2 -translate-x-1/2 font-inter rounded-3xl py-6 bg-white w-[85%]"
      >
        <p class="text-center font-semibold text-[3.5vw] text-[#191825] mb-2">
          Tiburoncin Legendario
        </p>
        <ul class="list-disc space-y-1">
          <li class="text-[2.7vw] text-[#19182580]">
            Descuento de 25% en todas las matrículas futuras.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Descuento de 50% en todo el merchandising de Nadadores UNI.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Amigo Gratis: 6 horas mensuales para invitar a un amigo a clase.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Vacante Garantizada en el horario que necesites.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Premios Exclusivos: Polo, gorro y cuaderno gratis.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Reconocimiento: Foto en la "Ruta de Honor" en nuestra página web.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Recuperaciones: 4 recuperaciones por mes sin justificación.
          </li>
          <li class="text-[2.7vw] text-[#19182580]">
            Penalidad: Tras 6 meses sin matrícula, bajas solo 1 nivel, luego 1
            nivel por mes.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
