<template>
  <nav class="nav h-full">
    <el-menu default-active="1" :router="true">
      <template v-for="(item, index) in routes">
        <menu-item v-if="!item.hidden" :key="index" :item="item" />
      </template>
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import menuItem from './item.vue'
import router from '@/router'
const routes: any = router.options.routes

</script>

<style lang="scss" scoped>
.nav {
  width: 200px;

  :deep(.el-menu) {
    border: none;
  }
}
</style>
