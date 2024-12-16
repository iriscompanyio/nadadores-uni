<script setup lang="ts">
import { ref } from "vue";

const userLevel = ref(1);
const levels = ref([
  "top-[24%] left-[9.4%]",
  "top-[55%] left-[13.8%]",
  "top-[72.3%] left-[23.5%]",
  "top-[55%] left-[32.5%]",
  "top-[32%] left-[39.4%]",
  "top-[32%] left-[49%]",
  "top-[39.2%] left-[60%]",
  "top-[28.2%] left-[73.5%]",
  "top-[24%] left-[86%]",
]);
</script>
<template>
  <div class="relative hidden md:block">
    <img src="/levels.png" alt="levels" />
    <p
      class="absolute bottom-[7vw] right-10 text-white font-bold text-[1.3vw] leading-relaxed"
    >
      Tiburoncin Coral (Niveles 1-9) <br />
      Beneficio: Sin beneficios específicos, pero estás en camino a algo
      grandioso.
      <br />
      ¡Sigue avanzando! <br />
      Penalidad: Tras 2 meses sin matrícula, bajas 2 niveles, luego 1 nivel por
      mes.
    </p>
    <div
      v-for="(_, index) in levels"
      :key="index"
      class="absolute -ml-2 -mt-2 lg:-mt-1 xl:mt-0 lg:ml-0 2xl:mt-1 flex rounded-full items-center justify-center w-7 h-7"
      :class="[
        levels[index],
        { 'bg-white/40 border border-white': userLevel === index + 1 },
      ]"
    >
      <div class="rounded-full h-4 w-4 bg-white" />
    </div>
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-4 items-center justify-center"
    >
      <div
        v-for="(_, index) in 5"
        :key="index"
        class="bg-white/50 w-3 h-3 lg:w-5 lg:h-5 rounded-full cursor-pointer"
        :class="{ '!bg-[#2F326E]': index + 1 === 1 }"
      ></div>
    </div>
  </div>
  <div class="relative md:hidden">
    <img src="/levelsMobile.png" alt="levels" />
    <span
      class="absolute top-[1.5vw] left-[17%] text-[#2F326E] text-[8vw] font-bold"
      >{{ userLevel }}</span
    >
    <div
      class="absolute w-[80%] left-1/2 -translate-x-1/2 bottom-[20vw] text-white font-bold text-[16px] sm:text-[26px] leading-relaxed"
    >
      <p class="mb-2">Tiburoncin Coral (Niveles 1-9)</p>
      <p class="mb-2">
        Beneficio: Sin beneficios específicos, pero estás en camino a algo
        grandioso.
      </p>
      <p class="mb-2">¡Sigue avanzando!</p>
      <p class="mb-2">
        Penalidad: Tras 2 meses sin matrícula, bajas 2 niveles, luego 1 nivel
        por mes.
      </p>
    </div>
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-4 items-center justify-center"
    >
      <div
        v-for="(_, index) in 5"
        :key="index"
        class="bg-white/50 w-4 h-4 lg:w-5 lg:h-5 rounded-full cursor-pointer"
        :class="{ '!bg-[#2F326E]': index + 1 === 1 }"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
