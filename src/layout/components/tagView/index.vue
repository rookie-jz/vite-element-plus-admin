<template>
  <div class="bg-white pt-2 pl-2 pr-8 relative tag-views">
    <el-tabs type="card" closable @tab-remove="tabRemove">
      <el-tab-pane
        v-for="item in tagViews"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      />
    </el-tabs>
    <div class="cursor-pointer absolute right-1 top-1">22</div>
  </div>
</template>

<script lang="ts" setup>
const tagViews = [
  { title: '首页', path: '/' },
  { title: '权限', path: '/auth' }
]

const tabRemove = (name: string) => {
  console.log(name)
}
</script>

<style lang="scss" scoped>
.tag-views {
}
</style>
