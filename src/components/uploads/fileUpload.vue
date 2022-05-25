<template>
  <div class="file-upload"></div>
</template>

<script lang="ts" setup>
import { getToken } from '@/utils/auth'

const _props = defineProps({})

const token = getToken()
const action = 'https://www.baidu.com'
</script>

<style lang="scss" scoped></style>
