<template>
  <div class="bg-white pt-2 relative tag-views">
    <el-tabs
      :model-value="activePath"
      type="card"
      class="tabs"
      @tab-remove="tabRemove"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="item in tagViews"
        :key="item.path"
        :label="item.title"
        :name="item.fullPath"
        :closable="item.title !== '首页'"
      />
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useTagViewStore } from '@/store/tagView'
import { computed } from '@vue/reactivity'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const tagViewStore = useTagViewStore()
const tagViews = tagViewStore.tagViews

const activePath = computed(() => {
  return tagViewStore.active
})

const route = useRoute()
const { push } = useRouter()
const activeCurrentRoute = () => {
  const currItem: tagViewItem = {
    fullPath: route.fullPath,
    title: route.meta.title ? route.meta.title : ''
  }
  tagViewStore.addTagView(currItem)
}
activeCurrentRoute()
watch(
  () => route.fullPath,
  () => {
    activeCurrentRoute()
  }
)

const tabClick = (row: any) => {
  tagViewStore.activeTagView(row.paneName)
  push(row.paneName)
}

const tabRemove = (path: string) => {
  tagViewStore.removeTagView(path)
}
</script>

<style lang="scss" scoped>
.tabs {
  :deep(.el-tabs__header) {
    margin: 0;
  }
}
</style>
