<template>
  <nav class="nav h-full">
    <el-menu :router="true" :default-active="activeRoute">
      <menu-item v-for="(item, index) in routes" :key="index" :item="item" :path="item.path" />
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import menuItem from './menu-item.vue'
import router from '@/router'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
const routes: any = router.options.routes.filter((route: any) => {
  return !route.hidden
})

const activeRoute = computed(() => {
  return useRoute().path
})
</script>

<style lang="scss" scoped>
.nav {
  width: 200px;

  :deep(.el-menu) {
    border: none;
  }
}
</style>
