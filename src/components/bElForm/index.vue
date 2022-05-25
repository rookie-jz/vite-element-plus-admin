<template>
  <el-form ref="formRef" :model="form" :rules="rules" :label-width="labelWidth">
    <el-row :gutter="gutter">
      <b-el-form-item v-for="(item, index) in options" :key="index" v-bind="item" :form="form"></b-el-form-item>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { reactive, ref } from 'vue'
import bElFormItem from './items/bElFormItem.vue'

const props = defineProps({
  form: {
    type: Object,
    default() {
      return {}
    }
  },
  options: {
    type: Object,
    default() {
      return {}
    }
  },
  gutter: {
    type: Number,
    default: 0
  },
  labelWidth: {
    type: String,
    default: ''
  }
})
const { form, options } = reactive(props)
const formRef: any = ref(null)
const rules = computed(() => {
  const oRule: any = {}
  options.forEach((item: any) => {
    if (item.validates) {
      oRule[item.field] = item.validates
    }
  })
  return oRule
})

const validate = async () => {
  if (formRef.value) {
    return await formRef.value.validate(async (valid: boolean) => {
      return valid
    })
  } else {
    return false
  }
}

defineExpose({
  validate
})
</script>

<style lang="scss" scoped></style>
