<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ref, onMounted } from "vue";

const isMobile = ref(false);

const desktopSlides = [
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

const mobileSlides = [
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-01-mov.jpeg?updatedAt=1754613247703",
    href: "",
  },
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-02-mov.jpeg?updatedAt=1754613248004",
    href: "",
  },
  {
    image: "https://ik.imagekit.io/iriscompany/nadadores-uni/banner-03-mov.jpeg?updatedAt=1754613247974",
    href: "/ruta-del-nadador",
  },
];

const navigateToSlide = (href: string) => {
  if (href) {
    window.location.href = href;
  }
};

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  return () => {
    window.removeEventListener('resize', checkMobile);
  };
});
</script>

<template>
  <Carousel
    v-slot="{ scrollTo, selectedSlideIndex }"
    class="relative z-20"
    :key="isMobile ? 'mobile' : 'desktop'"
    :plugins="[
      Autoplay({
        delay: 5000,
      }),
    ]"
  >
    <CarouselContent>
      <CarouselItem 
        v-for="(slide, index) in (isMobile ? mobileSlides : desktopSlides)" 
        :key="`slide-${index}-${isMobile ? 'mobile' : 'desktop'}`"
      >
        <div
          class="w-full h-[560px] bg-cover bg-center cursor-pointer"
          :style="{ backgroundImage: `url(${slide.image})` }"
          @click="navigateToSlide(slide.href)"
        ></div>
      </CarouselItem>
    </CarouselContent>
    
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform flex space-x-4">
      <button
        v-for="(_, index) in (isMobile ? mobileSlides : desktopSlides)"
        :key="`indicator-${index}`"
        class="w-[20px] h-[20px] rounded-full"
        :class="selectedSlideIndex === index ? '!bg-[#2F326E]' : 'bg-[#ffffff9c]'"
        @click="scrollTo(index)"
      ></button>
    </div>
  </Carousel>
</template>
