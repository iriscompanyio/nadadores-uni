<script setup lang="ts">
import { ref } from "vue";
import { infoLevels } from "../Certificates/Data";

defineProps<{
  group: number;
  userLevel?: number;
}>();

const levels = ref([
  "top-[40%] left-[7%]",
  "top-[65%] left-[10.5%]",
  "top-[85.2%] left-[21.4%]",
  "top-[72%] left-[29.5%]",
  "top-[52%] left-[34.8%]",
  "top-[44.7%] left-[43%]",
  "top-[52.4%] left-[54%]",
  "top-[51.7%] left-[65%]",
  "top-[42%] left-[73.5%]",
  "top-[39.5%] left-[83.5%]",
]);
</script>
<template>
  <div v-if="group !== 5" class="relative hidden lg:block select-none">
    <img src="/levels.png" alt="levels" />
    <div class="absolute top-[2%] left-[4%] w-[8%] h-[15%] flex justify-center items-center">
        <span
          class="text-[#2F326E] text-[2.5vw] font-bold"
          >{{ Number(group * 10 + 0) }}</span
        >
    </div>
    <div
      class="absolute top-[2%] right-[4%] w-[8%] h-[15%] flex justify-center items-center"
    >
      <span
        class="text-[#2F326E] text-[2.5vw] font-bold"
        >{{ Number(group * 10 + 9) }}</span
      >
    </div>
    <div
      class="absolute bottom-0 right-0 w-[40%] h-[42%] flex justify-center items-center"
    >
      <div
        class="font-inter rounded-3xl px-5 py-3 bg-white space-y-1 w-[90%] 2xl:w-[70%] max-h-[90%] flex"
      >
        <div class="w-full max-h-full overflow-auto pr-2">
          <p class="text-center font-semibold text-[#191825] mb-1">
            {{
              `${infoLevels.categories[group].name} (Niveles ${infoLevels.categories[group].levels})`
            }}
          </p>
          <p
            v-if="infoLevels.categories[group].benefits.length === 1"
            class="text-sm mb-1 text-[#19182580]"
          >
            <span class="font-semibold">Beneficios:</span>
            {{ infoLevels.categories[group].benefits[0] }}
          </p>
          <span v-else class="text-sm mb-1 text-[#19182580]">
            <span class="font-semibold">Beneficios:</span>
            <ul class="list-disc pl-4">
              <li
                v-for="benefit in infoLevels.categories[group].benefits"
                :key="benefit"
              >
                {{ benefit }}
              </li>
            </ul>
          </span>
          <p class="text-sm mb-1 text-[#19182580]">
            <span class="font-semibold">Penalidad:</span>
            {{ infoLevels.categories[group].penalty }}
          </p>
          <p
            v-if="infoLevels.categories[group].recoveries"
            class="text-sm mb-1 text-[#19182580]"
          >
            <span class="font-semibold">Recuperaciones:</span>
            {{ infoLevels.categories[group].recoveries }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-for="(_, index) in levels"
      :key="index"
      class="group absolute -ml-2 -mt-2 lg:-mt-1 xl:mt-0 lg:ml-0 2xl:mt-1 flex rounded-full items-center justify-center w-7 h-7"
      :class="[
        levels[index],
        {
          'bg-white/40 border border-white': userLevel === group * 10 + index,
        },
      ]"
    >
      <div class="relative rounded-full h-4 w-4 bg-white overflow-visible">
        <img
          v-if="index === 5"
          class="absolute -top-10 -left-[10px] min-w-[35px]"
          src="/gift.png"
          alt=""
        />
        <div
          v-if="index === 5"
          class="opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 absolute -bottom-[75px] left-1/2 -translate-x-1/2 bg-[#2F326C] text-white rounded-lg w-[210px] p-2 transition-all duration-300"
        >
          <div class="relative">
            <div
              class="absolute left-1/2 -translate-x-1/2 -top-3 z-1 bg-[#2F326C] w-[30px] h-[30px] rounded-[3px] rotate-45"
            ></div>
            <p class="relative text-xs font-inter z-2">
              Nivel {{ group * 10 + 5 }}:
              {{ infoLevels.milestone_rewards[group].reward }}
            </p>
          </div>
        </div>
        <div v-if="userLevel === group * 10 + index">
          <div
            class="absolute -top-[100px] -left-8 animate-bounce"
            :class="{ '-top-[140px]': index === 5 }"
          >
            <div class="relative w-20 h-[90px] shadow-xl">
              <div class="bg-[#2F326E] rounded-md w-full h-full p-2">
                <p class="text-white font-semibold text-center text-sm">
                  Nivel {{ group * 10 + index }}
                </p>
                <img src="/baby-shark.png" alt="" />
              </div>
              <div
                class="bg-[#2F326E] absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="group === 5" class="relative hidden lg:block select-none">
    <img src="/levelPoseidon.png" alt="last level" />
    <span
      class="absolute left-[63%] top-[3%] text-[#2F326E] text-[2.5vw] font-bold"
      >{{ 50 }}
    </span>
    <div
      class="absolute bottom-0 right-0 w-[45%] h-[85%] xl:top-[20%] xl:left-[55%] xl:w-[40%] xl:h-[75%] 2xl:w-[30%] flex justify-center items-center"
    >
      <div
        class="font-inter rounded-3xl px-5 py-3 bg-white space-y-1 w-[90%] max-h-[90%] flex"
      >
        <div class="w-full max-h-full overflow-auto pr-2">
          <p class="text-center font-semibold text-[#191825] mb-1">
            {{
              `${infoLevels.categories[group].name} (Nivel ${infoLevels.categories[group].levels})`
            }}
          </p>
          <p
            v-if="infoLevels.categories[group].benefits.length === 1"
            class="text-sm mb-1 text-[#19182580]"
          >
            <span class="font-semibold">Beneficios:</span>
            {{ infoLevels.categories[group].benefits[0] }}
          </p>
          <span v-else class="text-sm mb-1 text-[#19182580]">
            <span class="font-semibold">Beneficios:</span>
            <ul class="list-disc pl-4">
              <li
                v-for="benefit in infoLevels.categories[group].benefits"
                :key="benefit"
              >
                {{ benefit }}
              </li>
            </ul>
          </span>
          <p class="text-sm mb-1 text-[#19182580]">
            <span class="font-semibold">Penalidad:</span>
            {{ infoLevels.categories[group].penalty }}
          </p>
          <p
            v-if="infoLevels.categories[group].recoveries"
            class="text-sm mb-1 text-[#19182580]"
          >
            <span class="font-semibold">Recuperaciones:</span>
            {{ infoLevels.categories[group].recoveries }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
