<template>
  <div class="max-w-[880px] w-full">
    <div class="flex gap-3">
      <BaseInput v-model="searchValue" placeholder="Enter player id" />
      <BaseButton @click="onSearch">Lez go</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchValue = ref('')
const onSearch = () => {
  navigateTo({ name: 'profile-id', params:  { id: searchValue.value } })
}
</script>


<style scoped>


</style>