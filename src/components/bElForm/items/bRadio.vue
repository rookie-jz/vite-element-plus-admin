<template>
  <el-radio-group v-model="value" @change="handleChange">
    <el-radio v-for="item in optionList" :key="item.key" :label="item.value">{{ item.label }}</el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { reactive, defineProps, ref } from 'vue'

interface option {
  label: string
  value: string
  key: string
}

const value = ref('')

const _props = defineProps({
  change: Function,
  options: {
    type: Array,
    required: true
  },
  props: {
    type: Object,
    default() {
      return {
        label: 'label',
        value: 'value',
        key: 'value'
      }
    }
  }
})

const { options, props, change } = reactive(_props)

const optionList: option[] = options.map((it: any) => {
  return {
    label: it[props.label],
    value: it[props.value],
    key: it[props.key]
  }
})

const handleChange = (val: any) => {
  const row = optionList.find((item: any) => {
    return item[props.value] === val
  })
  if (change) change(val, row)
}
</script>

<style lang="scss" scoped></style>
