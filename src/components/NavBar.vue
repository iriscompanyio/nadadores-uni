<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { disableScroll, enableScroll } from "@/lib/scroll";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-vue-next";
import { ref, watch } from "vue";
import DropdownMenuSub from "./ui/dropdown-menu/DropdownMenuSub.vue";
import DropdownMenuSubTrigger from "./ui/dropdown-menu/DropdownMenuSubTrigger.vue";

import { type Ref } from "vue";

interface MenuItem {
  label: string;
  link: string;
}

interface Page {
  label: string;
  link: string;
  isOpen?: boolean;
  isOpenMobile?: boolean;
  menu?: MenuItem[];
}

const pages: Ref<Page[]> = ref([
  {
    label: "Conócenos",
    link: "/aboutus",
  },
  {
    label: "Trámites",
    link: "/tramites",
    isOpen: false,
    isOpenMobile: false,
    menu: [
      {
        label: "Certificados",
        link: "/certificates",
      },
      {
        label: "Recuperaciones",
        link: "/retakes",
      },
    ],
  },
  {
    label: "Productos",
    link: "/products",
    isOpen: false,
    isOpenMobile: false,
  },
  {
    label: "Eventos",
    link: "/events",
  },
  {
    label: "Ruta del Nadador",
    link: "/swimmers-route",
  },
]);

const isOpen = ref(false);

watch(isOpen, () => {
  if (isOpen.value) {
    disableScroll();
  } else {
    enableScroll();
  }
});
</script>
<template>
  <div
    class="hidden lg:block bg-white h-[100px] sticky top-0 w-full z-30 shadow"
  >
    <div
      class="w-[95%] xl:w-[82%] h-full mx-auto flex items-center justify-between"
    >
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
      <div>
        <ul class="flex gap-5 lg:gap-8 xl:gap-12">
          <li v-for="page in pages" :key="page.label" class="group">
            <DropdownMenu v-if="page.menu" v-model:open="page.isOpen">
              <DropdownMenuTrigger>
                <span
                  class="text-sm text-[#8C8B92] font-medium group-hover:text-black group-hover:font-bold"
                  :class="{ 'text-black !font-bold': page.isOpen }"
                >
                  {{ page.label }}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" class="rounded-lg">
                <a :href="sub.link" v-for="sub in page.menu" :key="sub.label">
                  <DropdownMenuItem>
                    <div class="w-[150px] h-[25px] flex items-center">
                      <span class="text-sm text-[#69607B] font-bold">{{
                        sub.label
                      }}</span>
                    </div>
                  </DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              v-else
              class="text-sm text-[#8C8B92] font-medium group-hover:text-black group-hover:font-bold"
              :class="{ 'text-black !font-bold': page.isOpen }"
              :href="page.link"
              >{{ page.label }}</a
            >
          </li>
        </ul>
      </div>
      <a href="/matricula">
        <button
          class="bg-[#2F326E] px-8 py-4 rounded-full text-white text-xs font-bold"
        >
          INSCRÍBETE
        </button>
      </a>
    </div>
  </div>
  <div class="lg:hidden h-[80px] bg-white sticky top-0 w-full z-30">
    <div
      v-if="!isOpen"
      class="flex justify-between items-center w-[90%] mx-auto h-full"
    >
      <div class="w-[154px]">
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <button
        class="bg-[#2F326E] p-2 rounded-xl text-white"
        @click="isOpen = true"
      >
        <Menu class="w-6 h-6" />
      </button>
    </div>
    <div v-else class="fixed top-0 w-screen h-full bg-white z-50">
      <div
        class="flex justify-between items-center w-[95%] mx-auto h-[62px] border-b"
      >
        <div class="w-[154px]">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div>
          <button class="p-2 rounded-xl">
            <Search class="w-6 h-6" />
          </button>
          <button class="p-2 rounded-xl" @click="isOpen = false">
            <X class="w-6 h-6" />
          </button>
        </div>
      </div>
      <div class="h-[calc(100%-135px)] bg-white">
        <ul class="flex flex-col h-full">
          <li v-for="page in pages" :key="page.label" class="group">
            <a
              :href="page.menu ? '#' : page.link"
              class="flex w-full h-[56px] items-center justify-between px-5"
              @click="page.isOpenMobile = !page.isOpenMobile"
            >
              <span class="text-[#544A69] font-bold">{{ page.label }}</span>
              <ChevronDown
                v-if="page.menu && !page.isOpenMobile"
                class="w-6 h-6"
              />
              <ChevronUp
                v-if="page.menu && page.isOpenMobile"
                class="w-6 h-6"
              />
            </a>
            <div
              class="grid transition-all duration-300"
              :class="page.isOpenMobile ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <ul class="pl-6 overflow-hidden">
                <li
                  v-for="sub in page.menu"
                  :key="sub.label"
                  class="text-[#69607B] text-sm font-medium"
                >
                  <a
                    :href="sub.link"
                    class="flex w-full h-[46px] items-center justify-between px-5"
                  >
                    {{ sub.label }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="fixed bottom-0 p-4 border-t w-full bg-white">
        <a href="/matricula">
          <button
            class="w-full h-[40px] bg-[#2F326E] text-white font-semibold rounded-lg"
          >
            Inscríbete
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
