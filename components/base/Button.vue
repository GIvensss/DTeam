<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>


<style scoped>
.base-button {
  @apply w-fit h-full min-w-[140px] flex justify-center items-center min-h-[40px] text-white bg-dark-purple rounded-sm
}
</style>