<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const years = [
  {
    year: 2020,
    title: "Lorem ipsum",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem.",
  },
  {
    year: 2020,
    title: "Lorem ipsum",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem.",
  },
  {
    year: 2020,
    title: "Lorem ipsum",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem.",
  },
  {
    year: 2020,
    title: "Lorem ipsum",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem.",
  },
];
</script>
<template>
  <div class="hidden sm:flex w-full">
    <div
      v-for="(year, index) in years"
      :key="index"
      class="w-1/5 flex-shrink-0"
      :class="{ '!w-full': index === years.length - 1 }"
    >
      <div class="flex items-center mb-8">
        <div
          class="bg-[#DCECFF] border-[6px] rounded-full border-[#2F326E] w-6 h-6 flex-shrink-0"
        />
        <div class="border-[3px] border-[#2F326E] w-full" />
      </div>
      <div class="max-w-[150px] pr-2 space-y-3">
        <p class="text-[#2F326E] font-bold">{{ year.year }}</p>
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
            <div class="w-[200px] pr-4 space-y-3">
              <p class="text-[#2F326E] font-bold">{{ year.year }}</p>
              <p class="text-[#858592] font-bold text-lg">{{ year.title }}</p>
              <p class="text-[#858592] text-sm">{{ year.description }}</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div class="flex space-x-4 mt-4 justify-center">
        <button
          v-for="(_, index) in 2"
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
