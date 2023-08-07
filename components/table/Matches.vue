<template>
  <el-table :data="tableData" :row-class-name="tableRowClassName">
    <el-table-column label="Hero" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <img
              :src="`${config.public.imagesStorageBaseURL}${scope.row.hero_avatar}`"
              :alt="scope.row.hero_avatar"
              class="max-w-[48px]"
          >
          <span class="ml-2 whitespace-nowrap shrink-0">{{ scope.row.hero_name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="kills" label="K/D/A">
      <template #default="scope">
          <span>
            {{ getUnifiedString([scope.row.kills, scope.row.deaths, scope.row.assists], ' / ') }}
          </span>
      </template>
    </el-table-column>
    <el-table-column prop="duration" label="Duration">
      <template #default="scope">
          <span>
            {{ getHumanizedDuration(scope.row.duration) }}
          </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">

type MatchTableItem = {
  kills: number,
  deaths: number,
  assists: number,
  hero_avatar: string,
  hero_name: string,
  duration: number,
  status: 'lose' | 'win' | 'abandoned'
}

const props = defineProps<{
  tableData: MatchTableItem[]
}>()

const config = useRuntimeConfig()
const dayjs = useDayjs()

const getHumanizedDuration = (duration: number) => {
  const formatString = duration >= 3600 ? 'H:mm:ss' : 'm:ss';

  return dayjs.duration(duration, 'seconds').format(formatString)
}
const tableRowClassName = ({ row }: {row: MatchTableItem}) => {
  if (row.status === 'lose') {
    return 'warning-row'
  }

  if (row.status === 'win') {
    return 'success-row'
  }

  return ''
}
</script>

<style>
.el-table .el-table__row {
  @apply cursor-pointer;
}

.el-table .warning-row {
  @apply bg-red/40;
}
.el-table .success-row {
  @apply bg-green/40;
}
</style>