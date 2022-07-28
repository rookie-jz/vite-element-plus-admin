<template>
  <div class="components">
    <el-button type="primary" @click="back">back</el-button>
    <el-button type="primary" @click="reload">reload</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useBack, useReload } from '@/hooks/usePage'
import { onMounted } from 'vue'
const back = useBack()
const reload = useReload()
onMounted(() => {
  console.log('on mounted')
})
</script>

<style lang="scss" scoped></style>
