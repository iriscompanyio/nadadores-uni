<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MoveLeft, MoveRight } from "lucide-vue-next";

const cards = [
  {
    name: "Lizet Meza",
    testimonial: "Llevo dos años en la comunidad y es increíble cómo he mejorado. Los profes no solo te enseñan técnica, sino que crean un ambiente donde todos nos apoyamos. Me encanta que después de las clases siempre nos quedamos charlando y compartiendo consejos.",
    photo:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/pckdz7fnr7vsxell1pfg",
  },
  {
    name: "Israel Leon",
    testimonial:
      "Al principio venía solo a aprender a nadar, pero encontré mucho más que eso. Los compañeros son geniales y siempre hay alguien dispuesto a ayudar. Me motiva ver cómo todos progresamos juntos y celebramos los logros de cada uno.",
    photo:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/ve5c5holpsgnjnab0sjs",
  },
  {
    name: "Katteryne Polo",
    testimonial:
      "La mejor decisión fue unirme a esta comunidad. El ambiente es súper motivador y los profes tienen una paciencia infinita. Me encanta que organizamos actividades juntos fuera de las clases. Es como una segunda familia.",
    photo:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/w9nok3vt5qz5xrg2fymx",
  },
];
</script>
<template>
  <div class="relative">
    <div
      class="relative flex flex-col w-[90%] md:max-w-[65%] xl:max-w-[55%] mx-auto my-24"
    >
      <p
        class="text-[#0B5EBF] font-bold text-[32px] md:text-[44px] text-center mb-8"
      >
        Lo que dice la gente
      </p>
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
          <CarouselItem v-for="card in cards" :key="card.name">
            <div
              class="flex flex-col justify-center items-center w-full space-y-10"
            >
              <div
                class="w-[128px] h-[128px] bg-cover bg-center rounded-full"
                :style="{ backgroundImage: `url(${card.photo})` }"
              ></div>
              <p class="text-[#2F326E] font-bold text-[28px]">
                {{ card.name }}
              </p>
              <p class="text-[#191825BF] text-[23px] font-medium text-center">
                {{ card.testimonial }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="flex space-x-4 justify-center mt-12">
          <button
            v-for="(_, index) in cards"
            :key="index"
            class="w-[20px] h-[20px] rounded-full"
            :class="
              selectedSlideIndex === index ? '!bg-[#2F326E]' : 'bg-[#1918250D]'
            "
            @click="scrollTo(index)"
          ></button>
        </div>
        <button
          class="w-[64px] h-[64px] md:w-[100px] md:h-[100px] border-2 rounded-full flex justify-center items-center absolute -bottom-20 left-0 md:top-1/2 md:-left-32 md:-translate-y-1/2 bg-white hover:bg-[#3FB4C6] hover:border-none group"
          @click="
            selectedSlideIndex === 0
              ? scrollTo(cards.length - 1)
              : scrollTo(selectedSlideIndex - 1)
          "
        >
          <MoveLeft class="w-6 h-6 text-[#2F326E] group-hover:text-white" />
        </button>
        <button
          class="w-[64px] h-[64px] md:w-[100px] md:h-[100px] border-2 rounded-full flex justify-center items-center absolute -bottom-20 right-0 md:top-1/2 md:-right-32 md:-translate-y-1/2 bg-white hover:bg-[#3FB4C6] hover:border-none group"
          @click="
            selectedSlideIndex === cards.length - 1
              ? scrollTo(0)
              : scrollTo(selectedSlideIndex + 1)
          "
        >
          <MoveRight class="w-6 h-6 text-[#2F326E] group-hover:text-white" />
        </button>
      </Carousel>
    </div>
    <img
      src="/fish-bg4.svg"
      alt=""
      class="absolute bottom-0 left-0 z-10 hidden md:block"
    />
  </div>
</template>
