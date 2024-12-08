<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/uqfmlcvde5pqtudzpvkh",
  "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/oceu2ugqyfvmxru3thdx",
  "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/mjewy77htaoz05f88god",
];
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
          :style="{ backgroundImage: `url(${slide})` }"
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
