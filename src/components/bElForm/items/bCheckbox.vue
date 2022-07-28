<template>
  <el-checkbox-group v-model="value" @change="handleChange">
    <el-checkbox
      v-for="item in optionList"
      :key="item.key"
      :label="item.value"
      >{{ item.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { reactive, defineProps, ref } from 'vue'

interface option {
  label: string
  value: string
  key: string
}

const value = ref([])

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

const handleChange = (values: string[]) => {
  const rows: any[] = []
  options.forEach((row: any) => {
    if (values.includes(row[props.value])) {
      rows.push(row)
    }
  })
  if (change) change(values, rows)
}
</script>

<style lang="scss" scoped></style>
