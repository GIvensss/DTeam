<template>
  <div class="card__container">
    <div v-if="slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div v-if="slots.body" class="card__body">
      <slot name="body"></slot>
    </div>
    <div v-if="slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots()
</script>


<style scoped>
.card__container {
  @apply border rounded-md border-darker-purple bg-white p-4
}

.card__header {
  @apply flex justify-between
}

</style>