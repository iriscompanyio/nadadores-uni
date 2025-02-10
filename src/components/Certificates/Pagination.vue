<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "@/components/ui/button/Button.vue";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const props = defineProps<PaginationProps>();

const currentPage = ref(props.currentPage);

const totalPages = computed(() => props.totalPages);

const handlePageChange = (page: number) => {
  currentPage.value = page;
  props.onPageChange(page);
};
</script>

<template>
  <div class="flex gap-x-1 justify-end mt-4">
    <Button
      size="sm"
      class="rounded-lg"
      variant="outline"
      :disabled="currentPage === 1"
      @click="handlePageChange(1)"
    >
      <ChevronsLeft :size="16" />
    </Button>
    <Button
      size="sm"
      class="rounded-lg"
      variant="outline"
      :disabled="currentPage === 1"
      @click="handlePageChange(currentPage - 1)"
    >
      <ChevronLeft :size="16" />
    </Button>

    <template v-for="page in totalPages" :key="page">
      <Button
        size="sm"
        class="rounded-lg"
        variant="outline"
        @click="handlePageChange(page - 1)"
      >
        {{ page }}
      </Button>
    </template>

    <Button
      size="sm"
      class="rounded-lg"
      variant="outline"
      :disabled="currentPage === totalPages"
      @click="handlePageChange(currentPage + 1)"
    >
      <ChevronRight :size="16" />
    </Button>
    <Button
      size="sm"
      class="rounded-lg"
      variant="outline"
      :disabled="currentPage === totalPages"
      @click="handlePageChange(totalPages)"
    >
      <ChevronsRight :size="16" />
    </Button>
  </div>
</template>
