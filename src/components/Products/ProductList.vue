<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  image: string;
}

const products = ref<Product[]>([
  {
    id: "1",
    name: "Gorro siliconado - Azul marino",
    image: "/products/Gorro siliconado - Azul marino.png",
  },
  {
    id: "2",
    name: "Gorro siliconado - Blanco hueso",
    image: "/products/Gorro siliconado - Blanco hueso.png",
  },
  {
    id: "3",
    name: "Polo de algodón - Azul marino",
    image: "/products/Polo de algodón - Azul marino.png",
  },
  {
    id: "4",
    name: "Polo de algodón - Blanco hueso",
    image: "/products/Polo de algodón - Blanco hueso.png",
  },
  {
    id: "5",
    name: "Libreta - Azul acero",
    image: "/products/Libreta - Azul acero.png",
  },
  {
    id: "6",
    name: "Gorro siliconado - Azul marino",
    image: "/products/Gorro siliconado - Azul marino.png",
  },
  {
    id: "7",
    name: "Gorro siliconado - Blanco hueso",
    image: "/products/Gorro siliconado - Blanco hueso.png",
  },
  {
    id: "8",
    name: "Polo de algodón - Azul marino",
    image: "/products/Polo de algodón - Azul marino.png",
  },
  {
    id: "9",
    name: "Polo de algodón - Blanco hueso",
    image: "/products/Polo de algodón - Blanco hueso.png",
  },
]);
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white border rounded-2xl px-8 py-12 flex flex-col justify-between gap-y-4 h-[540px]"
    >
      <div class="m-auto">
        <img
          :src="product.image"
          alt=""
          class="object-contain rounded-lg mx-auto max-h-[340px]"
        />
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">{{ product.name }}</h3>
        <Button class="w-full rounded-xl font-bold">Comprar</Button>
      </div>
    </div>
  </div>
</template>
