<template>
  <div class="h-full login-page flex items-center justify-center">
    <div class="login-box shadow-md bg-white p-8">
      <h1 class="text-center mb-10 text-2xl">{{ setting.title }}</h1>
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prepend>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码">
            <template #prepend>
              <el-icon>
                <i-ep-Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full" @click="submit(formRef)">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup type="ts">
import setting from '@/setting'
import { setToken } from '@/utils/auth'
import router from '@/router'
import { useUserStore } from "@/store/user"

const formRef = ref('')
const form = reactive({
  username: 'admin',
  password: '1'
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submit = async(formEl) => {
  const userStore = useUserStore()
  await formEl.validate(async(valid) => {
    if (!valid) return false
    const token = await userStore.login(form)
    setToken(token)
    router.push('/')
  })
}
</script>

<style scoped lang="scss">
.login-page {
  background-image: url('../../assets/login-bg.svg');
  background-size: cover;
  background-color: #f0f2f5;
  .login-box {
    width: 450px;
  }
}
</style>
