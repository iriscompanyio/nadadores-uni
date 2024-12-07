<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { students, type Student } from "@/components/Certificates/Data";
import { computed, ref } from "vue";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next";

const data = ref([...students]);

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Nombre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("certificateCode", {
    header: () => "Código Certificado",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("studentCode", {
    header: () => "Código Alumno",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("period", {
    header: () => "Periodos",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("completedHours", {
    header: () => "Horas Completadas",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("issueDate", {
    header: () => "Fecha de expedición",
    cell: (info) => info.getValue(),
  }),
];

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageIndex: 0,
      pageSize: 5,
    },
  },
});

const visiblePageNumbers = computed(() => {
  if (table.getPageCount() <= 5) {
    return table.getPageCount();
  }

  if (table.getState().pagination.pageIndex <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (table.getState().pagination.pageIndex >= table.getPageCount() - 2) {
    return [
      table.getPageCount() - 4,
      table.getPageCount() - 3,
      table.getPageCount() - 2,
      table.getPageCount() - 1,
      table.getPageCount(),
    ];
  }

  return [
    table.getState().pagination.pageIndex - 2,
    table.getState().pagination.pageIndex - 1,
    table.getState().pagination.pageIndex,
    table.getState().pagination.pageIndex + 1,
    table.getState().pagination.pageIndex + 2,
  ];
});
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-6 items-end w-full flex-wrap">
      <div class="w-[350px]">
        <p class="text-[#666666] text-xs font-semibold mb-2">Nombre</p>
        <input
          class="w-full border-[#CCCCCC] rounded-lg border-[1px] p-3 outline-none"
          placeholder="Escribe el nombre del alumno"
        />
      </div>
      <div class="w-[350px]">
        <p class="text-[#666666] text-xs font-semibold mb-2">Apellidos</p>
        <input
          class="w-full border-[#CCCCCC] rounded-lg border-[1px] p-3 outline-none"
          placeholder="Escribe los apellidos del alumno"
        />
      </div>
      <Button class="rounded-xl w-[350px]" size="lg"> Buscar </Button>
    </div>
    <div class="font-inter">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              class="text-[11px] font-semibold uppercase"
            >
              <FlexRender
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="text-sm">
          <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
            <TableCell v-for="cell in row.getAllCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div class="flex sm:gap-x-1 justify-end mt-4">
        <Button
          size="sm"
          class="rounded-lg"
          variant="outline"
          :disabled="table.getState().pagination.pageIndex === 0"
          @click="table.setPageIndex(0)"
        >
          <ChevronsLeft :size="16" />
        </Button>
        <Button
          size="sm"
          class="rounded-lg"
          variant="outline"
          :disabled="table.getState().pagination.pageIndex === 0"
          @click="table.setPageIndex(table.getState().pagination.pageIndex - 1)"
        >
          <ChevronLeft :size="16" />
        </Button>

        <template v-for="page in visiblePageNumbers" :key="page">
          <Button
            class="rounded-lg max-w-9 max-h-9"
            :variant="
              table.getState().pagination.pageIndex === page - 1
                ? 'default'
                : 'outline'
            "
            @click="table.setPageIndex(page - 1)"
          >
            {{ page }}
          </Button>
        </template>

        <Button
          size="sm"
          class="rounded-lg"
          variant="outline"
          :disabled="
            table.getState().pagination.pageIndex === table.getPageCount() - 1
          "
          @click="table.setPageIndex(table.getState().pagination.pageIndex + 1)"
        >
          <ChevronRight :size="16" />
        </Button>
        <Button
          size="sm"
          class="rounded-lg"
          variant="outline"
          :disabled="
            table.getState().pagination.pageIndex === table.getPageCount() - 1
          "
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <ChevronsRight :size="16" />
        </Button>
      </div>
    </div>
  </div>
</template>
