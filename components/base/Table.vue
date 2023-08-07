<template>
  <el-table :data="dataTable">
    <el-table-column v-for="column in columns" :prop="column.prop" :label="column.label" >
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineProps<{
  columns: {
    prop: string,
    label: string,
  }[],
  dataTable: Record<string, string|number>[]
}>()
</script>