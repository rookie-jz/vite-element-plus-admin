<template>
  <div class="">
    <div class="p-3 text-blue-400 cursor-pointer" @click="toRoute">to-route-set</div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const app = 'app'
console.log(app)
const toRoute = () => {
  router.push('/auth/set')
}
</script>

<style lang="scss" scoped></style>
