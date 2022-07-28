<template>
  <el-input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :rows="rows"
    @change="handleChange"
    @input="handleInput"
  ></el-input>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'input'
  },
  rows: {
    type: [String, Number],
    default: 1
  },
  placeholder: {
    type: String,
    default: ''
  },
  change: Function,
  input: Function
})

const value = ref('')

const { change, input } = reactive(props)

const handleInput = (val: any) => {
  if (input) input(val)
}

const handleChange = (val: any) => {
  if (change) change(val)
}
</script>

<style lang="scss" scoped></style>
