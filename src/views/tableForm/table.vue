<template>
  <div class="p-3">
    <vxe-grid v-bind="gridOptions" ref="xGrid">
      <template #toolbar_buttons>
        <el-button @click="gridOptions.align = 'left'">居左</el-button>
        <el-button @click="gridOptions.align = 'center'">居中</el-button>
        <el-button @click="gridOptions.align = 'right'">居右</el-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeGridProps } from 'vxe-table'
import { getGridOptions } from '@/hooks/useVxeTable'
const xGrid = ref('')
const options: VxeGridProps = {
  columns: [
    { type: 'seq', width: 50, title: 'seq' },
    { field: 'name', title: 'name' },
    { field: 'sex', title: 'sex', showHeaderOverflow: true },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      nickname: 'T1',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'Shenzhen'
    },
    {
      id: 10002,
      name: 'Test2',
      nickname: 'T2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou'
    },
    {
      id: 10003,
      name: 'Test3',
      nickname: 'T3',
      role: 'PM',
      sex: 'Man',
      age: 32,
      address: 'Shanghai'
    },
    {
      id: 10004,
      name: 'Test4',
      nickname: 'T4',
      role: 'Designer',
      sex: 'Women',
      age: 23,
      address: 'Shenzhen'
    },
    {
      id: 10005,
      name: 'Test5',
      nickname: 'T5',
      role: 'Develop',
      sex: 'Women',
      age: 30,
      address: 'Shanghai'
    },
    {
      id: 10006,
      name: 'Test6',
      nickname: 'T6',
      role: 'Designer',
      sex: 'Women',
      age: 21,
      address: 'Shenzhen'
    },
    {
      id: 10007,
      name: 'Test7',
      nickname: 'T7',
      role: 'Test',
      sex: 'Man',
      age: 29,
      address: 'Shenzhen'
    },
    {
      id: 10008,
      name: 'Test8',
      nickname: 'T8',
      role: 'Develop',
      sex: 'Man',
      age: 35,
      address: 'Shenzhen'
    }
  ]
}
const gridOptions = reactive<VxeGridProps>(getGridOptions(options))
</script>

<style lang="scss" scoped></style>
