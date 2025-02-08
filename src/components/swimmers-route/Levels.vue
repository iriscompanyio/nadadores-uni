<script setup lang="ts">
import { ref } from "vue";

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
    <span
      class="absolute top-[5%] left-[7.2%] text-[#2F326E] text-[2.5vw] font-bold"
      :class="{ 'left-[5.9%]': group > 0 }"
      >{{ Number(group * 10 + 0) }}</span
    >
    <span
      class="absolute top-[5%] right-[7.2%] text-[#2F326E] text-[2.5vw] font-bold"
      :class="{ 'right-[6.2%]': group > 0 }"
      >{{ Number(group * 10 + 9) }}</span
    >
    <div
      class="absolute bottom-0 right-0 w-[42%] h-[42%] flex justify-center items-center"
    >
      <div
        class="font-inter rounded-3xl px-[2vw] py-4 bg-white space-y-1 max-w-[400px] 2xl:max-w-[450px]"
      >
        <p class="text-center font-semibold text-[1.2vw] text-[#191825]">
          Tiburoncin Coral (Niveles {{ group * 10 + 0 }}-{{ group * 10 + 9 }})
        </p>
        <p class="text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw] text-[#19182580]">
          Beneficio: Sin beneficios específicos, pero estás en camino a algo
          grandioso.
        </p>
        <p class="text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw] text-[#19182580]">
          ¡Sigue avanzando!
        </p>
        <p class="text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw] text-[#19182580]">
          Penalidad: Tras 2 meses sin matrícula, bajas 2 niveles, luego 1 nivel
          por mes.
        </p>
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
              Nivel {{ group * 10 + 5 }}: Cuaderno de la academia gratis (precio
              regular: 18 soles).
            </p>
          </div>
        </div>
        <div v-if="userLevel === group * 10 + index - 1">
          <div class="absolute -top-[100px] -left-8 animate-bounce"
          :class="{'-top-[140px]': index === 5}">
            <div class="relative w-20 h-[90px] shadow-xl">
              <div class="bg-[#2F326E] rounded-md w-full h-full p-2">
                <p class="text-white font-semibold text-center text-sm">Nivel {{ group * 10 + index  }}</p>
                <img src="/baby-shark.png" alt="">
              </div>
              <div class="bg-[#2F326E] absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4"></div>
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
      class="font-inter rounded-3xl px-10 py-4 bg-white absolute lg:right-[5%] lg:top-[8vw] xl:right-[10%] xl:top-[12vw] 2xl:top-[14vw] 2xl:right-[20%] space-y-1 lg:max-w-[430px] xl:max-w-[430px] 2xl:max-w-[370px]"
    >
      <p class="text-center font-semibold text-[#191825] mb-2">
        Tiburoncin Legendario
      </p>
      <ul class="list-disc space-y-1">
        <li class="text-xs text-[#19182580]">
          Descuento de 25% en todas las matrículas futuras.
        </li>
        <li class="text-xs text-[#19182580]">
          Descuento de 50% en todo el merchandising de Nadadores UNI.
        </li>
        <li class="text-xs text-[#19182580]">
          Amigo Gratis: 6 horas mensuales para invitar a un amigo a clase.
        </li>
        <li class="text-xs text-[#19182580]">
          Vacante Garantizada en el horario que necesites.
        </li>
        <li class="text-xs text-[#19182580]">
          Premios Exclusivos: Polo, gorro y cuaderno gratis.
        </li>
        <li class="text-xs text-[#19182580]">
          Reconocimiento: Foto en la "Ruta de Honor" en nuestra página web.
        </li>
        <li class="text-xs text-[#19182580]">
          Recuperaciones: 4 recuperaciones por mes sin justificación.
        </li>
        <li class="text-xs text-[#19182580]">
          Penalidad: Tras 6 meses sin matrícula, bajas solo 1 nivel, luego 1
          nivel por mes.
        </li>
      </ul>
    </div>
  </div>
</template>
