<!--
 * @Author: HJZ
 * @Date: 2022-04-22 11:08:44
 * @LastEditTime: 2022-04-22 14:48:08
 * @FilePath: \v3-ele-puls-admin\src\views\auth\role.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by HJZ, All Rights Reserved. 
-->
<template>
  <div class="">
    <el-button type="primary" @click="back">back</el-button>
  </div>
</template>
<script setup lang="ts">
import { useBack } from '@/hooks/usePage'
const back = useBack()
</script>
<style scoped lang="scss"></style>
