<template>
  <header class="header w-full">
    <div class="float-left flex h-full items-center pl-3">
      <img src="@/assets/logo.png" class="h-3/6" />
      <h2 class="text-white text-md ml-2">{{ title }}</h2>
    </div>
    <div class="float-right flex items-center h-full pr-4">
      <el-dropdown trigger="hover">
        <span class="text-white cursor-pointer">
          <el-icon class="align-top mr-1">
            <i-ep-avatar />
          </el-icon>
          <span class="align-top mr-1">{{ userInfo.name }}</span>
        </span>
        <el-icon class="align-top">
          <i-ep-arrow-down class="text-white" />
        </el-icon>
        <template #dropdown>
          <el-dropdown-item>
            <div class="cursor-pointer" @click="logout">退出登录</div>
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import setting from '../../setting'
import { useUserStore } from '@/store/user'
const { title } = setting

interface User {
  name?: string
}

const { logout } = useUserStore()
const userInfo: User = useUserStore().userInfo
</script>

<style scoped lang="scss">
.header {
  height: 48px;
  line-height: 48px;
  background: #001529;
}
</style>
