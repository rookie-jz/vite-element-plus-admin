<template>
  <div class="tag-item">tag-item</div>
</template>

<script lang="ts" setup>
const { item } = defineExpose({
  item: {
    type: Object,
  },
})
</script>

<style lang="scss" scoped></style>
