<template>
  <input
      v-bind="$attrs"
      :model-value="modelValue"
      class="base-input"
      @input="emits('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string,
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', updatedValue: string): void
}>()
</script>

<style scoped>
.base-input {
  @apply w-full h-full rounded-sm border border-dark-gray min-h-[40px] outline-none px-4 py-2
}

</style>