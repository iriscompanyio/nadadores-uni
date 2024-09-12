<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownMenuSub from "./ui/dropdown-menu/DropdownMenuSub.vue";
import DropdownMenuSubTrigger from "./ui/dropdown-menu/DropdownMenuSubTrigger.vue";
import { ref } from "vue";
import { Menu, Search, X, ChevronDown, ChevronUp } from "lucide-vue-next";

const pages = ref([
  {
    label: "Conócenos",
    link: "/aboutUs",
  },
  {
    label: "Certificados",
    link: "/certificates",
  },
  {
    label: "Productos",
    link: "/products",
    isOpen: false,
    isOpenMobile: false,
    menu: [
      {
        label: "Implementos",
        link: "#",
      },
      {
        label: "Tibu Puntos",
        link: "#",
      },
    ],
  },
  {
    label: "Eventos",
    link: "/events",
  },
]);

const isOpen = ref(false);
</script>
<template>
  <div class="hidden md:block bg-white h-[132px]">
    <div
      class="w-[95%] lg:w-[82%] h-full mx-auto flex items-center justify-between"
    >
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
      <div>
        <ul class="flex gap-5 lg:gap-8 xl:gap-12">
          <li v-for="page in pages" :key="page.label" class="w-[80px] group">
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
                <DropdownMenuSub v-for="sub in page.menu" :key="sub.label">
                  <DropdownMenuSubTrigger>
                    <div class="w-[150px] h-[25px] flex items-center">
                      <span class="text-sm text-[#69607B] font-bold">{{
                        sub.label
                      }}</span>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem> {{ sub.label }} </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
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
      <button
        class="bg-[#2F326E] px-8 py-4 rounded-full text-white text-xs font-bold"
      >
        INSCRÍBETE
      </button>
    </div>
  </div>
  <div class="md:hidden h-[112px]">
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
    <div v-else class="absolute w-screen h-screen bg-white z-10">
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
      <div>
        <ul class="flex flex-col">
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
            <!-- <div v-if="page.menu && page.isOpenMobile" class="grid"> -->
            <div
              class="grid transition-all duration-500"
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
      <div class="p-4 border-t fixed bottom-0 w-full">
        <button
          class="w-full h-[40px] bg-[#2F326E] text-white font-semibold rounded-lg"
        >
          Inscríbete
        </button>
      </div>
    </div>
  </div>
</template>
