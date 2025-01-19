<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

defineProps({
  title: String,
  url: String,
  class: String,
});
</script>
<template>
  <div class="mt-4">
    <Dialog>
      <DialogTrigger class="w-full">
        <button
          class="bg-[#0B5EBF] rounded-[16px] text-white py-3 font-bold w-full"
        >
          Ver el croquis
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ title }}</DialogTitle>
        </DialogHeader>
        <iframe
          class="w-full h-[400px]"
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals allow-storage-access-by-user-activation"
          frameborder="0"
          :src="url"
          allowfullscreen
        />
      </DialogContent>
    </Dialog>
  </div>
</template>
