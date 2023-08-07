<template>
  <BaseCard>
    <template #header>
      <div class="user__info">
        <img :src="playerData.profile.avatarfull" :alt="`${playerData.profile.personaname}-avatar`" class="max-w-[120px]" />
        <span class="text-lg font-semibold">{{ playerData.profile.personaname }}</span>
      </div>
      <div class="user__general-info">
        <span>{{ getUserRank(playerData.rank_tier) }}</span>
        <span>
          <span class="text-green">{{ playerData.win }}</span> - <span class="text-red">{{ playerData.lose }}</span>
        </span>
        <span>{{ playerData.mmr_estimate.estimate }} MMR</span>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import {UserEntity} from "~/types/entities";

const props = defineProps<{
  playerData: UserEntity
}>()

</script>

<style scoped>
.user__general-info {
  @apply grid grid-cols-[repeat(3,auto)] gap-4
}

.user__info {
  @apply flex gap-3
}

</style>