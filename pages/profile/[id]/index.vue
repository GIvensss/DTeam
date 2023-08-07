<template>
  <div class="flex flex-col w-full max-w-[880px] p-4">
    <CardUser :player-data="playerData" class="mb-4" />
    <BaseLoader v-if="matchesPending" />
    <TableMatches v-else :table-data="matchesData" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: playerData } = await useFetch(`/api/profile/${route.params.id}`)
const { data: matchesData, pending: matchesPending } = await useLazyFetch(`/api/matches/user/${route.params.id}`, {
  params: {
    limit: 10,
    offset: 0,
  },
  server: false,
})

</script>

<style scoped>

</style>