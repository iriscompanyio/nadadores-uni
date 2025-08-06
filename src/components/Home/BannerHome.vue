<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-01.png?updatedAt=1754436610429",
    href: "",
  },
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-02.png?updatedAt=1754436609966",
    href: "",
  },
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-03.png?updatedAt=1754436610484",
    href: "/ruta-del-nadador",
  },
];
const navigateToSlide = (href: string) => {
  window.location.href = href;
};

</script>
<template>
  <Carousel
    v-slot="{ scrollTo, selectedSlideIndex }"
    class="relative z-20"
    :plugins="[
      Autoplay({
        delay: 6000,
      }),
    ]"
  >
    <CarouselContent>
      <CarouselItem v-for="slide in slides" :key="slide">
        <div
          class="w-full h-[560px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
          @click="navigateToSlide(slide.href)"
        ></div>
      </CarouselItem>
    </CarouselContent>
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 transform flex space-x-4"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="w-[20px] h-[20px] rounded-full"
        :class="
          selectedSlideIndex === index ? '!bg-[#2F326E]' : 'bg-[#ffffff9c]'
        "
        @click="scrollTo(index)"
      ></button>
    </div>
  </Carousel>
</template>
