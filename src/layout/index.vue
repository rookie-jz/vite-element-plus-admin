<template>
  <div class="layout">
    <v-header />
    <div class="app-main flex">
      <div class="h-full bg-white nav-wrapper">
        <v-nav />
      </div>
      <div class="flex-1">
        <div class="tag-view-wrapper">
          <tag-view />
        </div>
        <div class="view-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import vNav from './components/nav/index.vue'
import vHeader from './components/vHeader.vue'
import tagView from './components/tagView/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  background-color: rgb(240, 242, 245);

  .app-main {
    height: calc(100% - 48px);

    .nav-wrapper {
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    }
  }
}
</style>
