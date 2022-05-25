<template>
  <el-col :span="span">
    <el-form-item :label="label" :label-width="labelWidth" :prop="field">
      <template v-if="inputTypes.includes(type)">
        <b-input :type="type" :rows="rows" :placeholder="placeholder" :change="handleChange" :input="handleInput"></b-input>
      </template>
      <template v-if="type === 'select'">
        <b-select :change="handleChange" :options="options" :props="props"></b-select>
      </template>
      <template v-if="type === 'checkbox'">
        <b-checkbox :change="handleChange" :options="options" :props="props"></b-checkbox>
      </template>
      <template v-if="type === 'radio'">
        <b-radio :change="handleChange" :options="options" :props="props"></b-radio>
      </template>
    </el-form-item>
  </el-col>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import bInput from './bInput.vue'
import bSelect from './bSelect.vue'
import bCheckbox from './bCheckbox.vue'
const _props = defineProps({
  form: {
    type: Object,
    required: true
  },
  span: {
    type: Number,
    default: 24
  },
  label: {
    type: String,
    default: ''
  },
  field: {
    type: String,
    required: true
  },
  labelWidth: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
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
  // select
  options: {
    type: Array,
    default() {
      return []
    }
  },
  props: Object,
  change: Function,
  input: Function
})
const inputTypes: string[] = ['input', 'textarea', 'number']
const { change, input, field, form, type } = reactive(_props)
const handleChange = (value: any, row: any = null) => {
  if (type !== 'input') {
    form[field] = value
  }
  if (change) change(value, row)
}

const handleInput = (value: any) => {
  form[field] = value
  if (input) input(value)
}
</script>

<style lang="scss" scoped></style>
