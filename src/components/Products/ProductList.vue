<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from "vue";

interface Product {
  id: string;
  name: string;
  image: string;
}

const products = ref<Product[]>([
  {
    id: "1",
    name: "Gorro siliconado - Azul marino",
    image:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/products/nvuokurr70gkv5p14ipd",
  },
  {
    id: "2",
    name: "Gorro siliconado - Blanco hueso",
    image:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/products/ropl4n5wkytw2mdljsjy",
  },
  {
    id: "3",
    name: "Polo de algodón - Azul marino",
    image:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/products/vtnay9eikspdhc0ogkkx",
  },
  {
    id: "4",
    name: "Polo de algodón - Blanco hueso",
    image:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/products/huwvecvsaqrgxe2shpxk",
  },
  {
    id: "5",
    name: "Libreta - Azul acero",
    image:
      "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/products/dm1de8awvkkp8h9xlsbq",
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
        <a href="/products/sales">
          <Button class="w-full rounded-xl font-bold">Comprar</Button>
        </a>
      </div>
    </div>
  </div>
</template>
