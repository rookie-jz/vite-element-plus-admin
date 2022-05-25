<template>
  <el-sub-menu v-if="hasChildren() && !hasOneShowChildren()" :index="generalPath(item)">
    <template #title>
      <span v-if="item.meta && item.meta.icon" class="mr-1">
        <svg-icon :name="item.meta.icon" />
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <template v-if="item.children && item.children.length > 0">
      <menu-item v-for="(child, childIndex) in item.children" :key="childIndex" :item="child" :path="item.path"></menu-item>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="generalPath(oneItem)">
    <template #title>
      <span v-if="oneItem.meta && oneItem.meta.icon" class="mr-1">
        <svg-icon :name="oneItem.meta.icon" />
      </span>
      <span>{{ oneItem.meta.title }}</span>
    </template>
  </el-menu-item>
</template>
<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>
<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'

interface menuItem {
  path: string
  children?: any[]
  meta?: any
  hidden?: boolean
}

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  path: {
    type: String,
    default: ''
  }
})
const { item, path } = reactive(props)

const oneItem = computed(() => {
  if (hasOneShowChildren()) {
    const onShowItem = item.children.find((ele: menuItem) => {
      return !ele.hidden
    })
    if (item.meta.icon) {
      onShowItem.meta.icon = item.meta.icon
    }
    return onShowItem
  }
  return item
})

const generalPath = (row: any): string => {
  let finalPath = `${path}/${row.path}`
  while (finalPath[1] === '/') {
    finalPath = finalPath.substring(1)
  }
  return finalPath
}

const hasChildren = (): boolean => {
  return item.children && item.children.length !== 0
}

const hasOneShowChildren = (): boolean => {
  if (!item.children) return false
  const showChild = item.children.filter((ele: menuItem) => {
    return !ele.hidden
  })
  return showChild.length === 1
}
</script>

<style lang="scss" scoped></style>
