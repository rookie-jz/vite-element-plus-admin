<template>
  <el-date-picker v-model="value" :placeholder="placeholder" :type="type" :value-format="format" @change="handleChange"></el-date-picker>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'date'
  },
  format: {
    type: String,
    default: 'date'
  },
  placeholder: {
    type: String,
    default: ''
  },
  change: Function
})

const value = ref('')

const { change } = reactive(props)

const handleChange = (val: any) => {
  if (change) change(val)
}
</script>

<style lang="scss" scoped></style>
