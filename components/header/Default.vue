<template>
  <nav class="bg-dark-purple">
    <ul class="list-none flex justify-end gap-7 px-7 py-3 text-white">
      <li v-for="item in menuItems" class="cursor-pointer text-base font-sans">
        <NuxtLink :to="item.to">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuItems = ref([
  {
    name: 'Main',
    to: '/'
  },
  {
    name: 'Tournaments',
    to: '/tournaments',
  },
  {
    name: 'Teams',
    to: '/teams'
  }
])
</script>

<style scoped>

</style>