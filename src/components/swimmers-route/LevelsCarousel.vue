<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Levels from "@/components/swimmers-route/Levels.vue";
import { computed, ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

import { infoLevels } from "../Certificates/Data";
import type { ResponseSuccess, User } from "@/types/certificates";
import { LoaderCircle } from "lucide-vue-next";

const userDni = ref("");
const currentUser = ref();
const userLevel = ref<number | undefined>();
const groupLevel = computed(() => {
  if (userLevel.value) {
    return Math.floor(userLevel.value / 10);
  }
  return 0;
});
const alreadySearched = ref(false);
const isLoading = ref(false);

const carouselRef = ref<HTMLElement | null>(null);

const auth = () =>
  btoa(
    `${import.meta.env.PUBLIC_AUTH_BASIC_USER}:${import.meta.env.PUBLIC_AUTH_BASIC_PASS}`,
  );

// Fail https://mocki.io/v1/cbddc697-4b6e-4eec-8539-f84d36989142
// Success https://mocki.io/v1/9150398b-8e54-4034-9525-443a5a3121a3
const fetchUser = async () => {
  isLoading.value = true;
  fetch(`${import.meta.env.PUBLIC_API_URL}/services/profile/level?dni=${ userDni.value }`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${auth()}`,
    }
  }).then(async (response) => {
    const res: ResponseSuccess<User> = await response.json();
    if (res.data.length > 0) {
      currentUser.value = res.data[0];
      alreadySearched.value = true;
      if (currentUser.value) {
        userLevel.value = Number(currentUser.value.level);
        carouselRef.value?.scrollTo(
          Math.floor(userLevel.value! / 10) as ScrollOptions,
        );
      }
      console.log(currentUser.value);
    } else {
      alreadySearched.value = true;
      currentUser.value = null;
      userLevel.value = undefined;
    }
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    isLoading.value = false;
  })
};

const search = () => {
  if(!userDni.value) return
  fetchUser();
};
</script>
<template>
  <div
    class="max-w-screen-2xl flex flex-col m-auto w-full px-5 md:px-14 gap-y-12 mb-16"
  >
    <div class="flex gap-x-10 flex-col gap-y-5 w-full">
      <p
        class="text-[#2F326E] font-bold text-[24px] leading-tight sm:text-left"
      >
        Consulta tu progreso
      </p>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 items-end w-full"
      >
        <div class="w-full">
          <p class="text-[#666666] text-xs font-semibold mb-2">Nº DNI</p>
          <input
            v-model="userDni"
            class="w-full border-[#CCCCCC] rounded-lg border-[1px] p-3 outline-none"
            placeholder="Escribe tu Nº DNI"
          />
        </div>
        <Button @click="search" class="rounded-xl w-full" size="lg">
          Buscar
        </Button>
      </div>
      <LoaderCircle v-if="isLoading" class="w-10 h-10 animate-spin" />
      <div v-if="!isLoading && currentUser">
        <p class="font-inter font-semibold text-sm text-[#666666] mb-2">
          Resultados:
        </p>
        <p class="font-inter text-sm text-[#666666]">
          {{ currentUser.name }} {{ currentUser.lastName }} -
          {{ currentUser.category }}
        </p>
      </div>
      <div v-if="!currentUser && alreadySearched">
        <p class="font-inter font-semibold text-sm text-[#666666] mb-2">
          Resultados:
        </p>
        <p class="font-inter text-sm text-[#666666]">
          No se encontraron resultados
        </p>
      </div>
    </div>
  </div>
  <div class="hidden lg:block">
    <Carousel
      ref="carouselRef"
      v-slot="{ scrollTo, selectedSlideIndex }"
      class="relative z-20"
    >
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
        >{{ userLevel || 0 }}</span
      >
      <div
        class="absolute top-[20%] h-[82%] left-0 w-full justify-center flex items-center"
      >
        <div
          class="font-inter rounded-3xl px-[6vw] py-6 bg-white w-[90%] max-h-[90%] flex"
        >
          <div class="w-full max-h-full overflow-auto">
            <p
              class="text-center font-semibold text-[#191825] mb-1 sm:text-2xl"
            >
              {{
                `${infoLevels.categories[groupLevel].name} (Nivel ${infoLevels.categories[groupLevel].levels})`
              }}
            </p>
            <p
              v-if="infoLevels.categories[groupLevel].benefits.length === 1"
              class="text-sm sm:text-lg mb-1 text-[#19182580]"
            >
              <span class="font-semibold">Beneficios:</span>
              {{ infoLevels.categories[groupLevel].benefits[0] }}
            </p>
            <span v-else class="text-sm sm:text-lg mb-1 text-[#19182580]">
              <span class="font-semibold">Beneficios:</span>
              <ul class="list-disc pl-4">
                <li
                  v-for="benefit in infoLevels.categories[groupLevel].benefits"
                  :key="benefit"
                >
                  {{ benefit }}
                </li>
              </ul>
            </span>
            <p class="text-sm sm:text-lg mb-1 text-[#19182580]">
              <span class="font-semibold">Penalidad:</span>
              {{ infoLevels.categories[groupLevel].penalty }}
            </p>
            <p
              v-if="infoLevels.categories[groupLevel].recoveries"
              class="text-sm sm:text-lg mb-1 text-[#19182580]"
            >
              <span class="font-semibold">Recuperaciones:</span>
              {{ infoLevels.categories[groupLevel].recoveries }}
            </p>
            <div
              class="bg-[#2F326C] text-white rounded-lg mt-4 p-2 flex space-x-2 items-center"
            >
              <div class="w-[40px]">
                <img src="/gift.png" alt="" />
              </div>
              <p class="relative text-xs sm:text-lg font-inter z-2">
                {{
                  `Nivel ${groupLevel * 10 + 5}: ${infoLevels.milestone_rewards[groupLevel].reward}`
                }}
              </p>
            </div>
          </div>
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
        class="absolute top-[48%] h-[52%] left-0 w-full flex justify-center items-center"
      >
        <div
          class="font-inter rounded-3xl px-5 py-3 sm:py-8 bg-white space-y-1 w-[90%] max-h-full flex"
        >
          <div class="w-full max-h-full overflow-auto pr-2">
            <p class="text-center font-semibold text-[#191825] mb-1 sm:text-xl">
              {{
                `${infoLevels.categories[groupLevel].name} (Nivel ${infoLevels.categories[groupLevel].levels})`
              }}
            </p>
            <p
              v-if="infoLevels.categories[groupLevel].benefits.length === 1"
              class="text-sm sm:text-lg mb-1 text-[#19182580]"
            >
              <span class="font-semibold">Beneficios:</span>
              {{ infoLevels.categories[groupLevel].benefits[0] }}
            </p>
            <span v-else class="text-sm sm:text-lg mb-1 text-[#19182580]">
              <span class="font-semibold">Beneficios:</span>
              <ul class="list-disc pl-4">
                <li
                  v-for="benefit in infoLevels.categories[groupLevel].benefits"
                  :key="benefit"
                >
                  {{ benefit }}
                </li>
              </ul>
            </span>
            <p class="text-sm sm:text-lg mb-1 text-[#19182580]">
              <span class="font-semibold">Penalidad:</span>
              {{ infoLevels.categories[groupLevel].penalty }}
            </p>
            <p
              v-if="infoLevels.categories[groupLevel].recoveries"
              class="text-sm sm:text-lg mb-1 text-[#19182580]"
            >
              <span class="font-semibold">Recuperaciones:</span>
              {{ infoLevels.categories[groupLevel].recoveries }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
