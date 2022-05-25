<template>
  <div class="form p-20">
    <b-el-form ref="formRef" :form="form" :options="options" :gutter="20" label-width="100px">
      <template #rang>
        <el-input-number v-model="form.rang" :min="1" :max="10" />
      </template>
    </b-el-form>
    <div class="text-center pt-4">
      <el-button type="primary" @click="submit">submit</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bElForm from '@/components/bElForm/index.vue'
import { reactive, ref } from 'vue'

const form: any = reactive({})
const formRef: any = ref(null)
const options = [
  {
    type: 'input',
    field: 'name',
    placeholder: 'input your name',
    label: 'Name',
    span: 12,
    validates: [{ required: true, message: 'place input your name' }]
  },
  {
    type: 'select',
    field: 'gender',
    label: 'gender',
    options: [
      { label: 'man', value: 'man' },
      { label: 'woman', value: 'woman' }
    ],
    span: 12,
    validates: [{ required: true, message: 'place select your gender' }]
  },
  {
    type: 'checkbox',
    field: 'nation',
    label: 'nation',
    options: [
      { label: 'china', value: 'china' },
      { label: 'other', value: 'other' }
    ],
    span: 12,
    validates: [{ required: true, message: 'place select your nation' }]
  },
  {
    type: 'radio',
    field: 'radio',
    label: 'radio',
    options: [
      { label: 'radio1', value: 'radio1' },
      { label: 'radio2', value: 'radio2' }
    ],
    span: 12,
    validates: [{ required: true, message: 'place select your radio' }]
  },
  {
    type: 'date',
    field: 'birthday',
    label: 'birthday',
    span: 12,
    validates: [{ required: true, message: 'place select your radio' }]
  },
  {
    label: 'rang',
    field: 'rang',
    span: 12,
    slot: { name: 'rang' },
    validates: [{ required: true, message: 'slot rang' }]
  }
]

const submit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate()
    if (!valid) return
    console.log('do submit form data is:')
    console.log(form)
  }
}
</script>

<style lang="scss" scoped></style>
