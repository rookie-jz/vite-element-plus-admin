<template>
  <div class="item">
    <el-sub-menu :index="item.path">
      <template #title>
        <span v-if="item.meta && item.meta.icon" class="mr-1">
          <svg-icon :name="item.meta.icon" />
        </span>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :index="child.path"
          >{{ child.meta.title }}
        </el-menu-item>
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup>
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

console.log(item)
</script>

<style lang="scss" scoped></style>
