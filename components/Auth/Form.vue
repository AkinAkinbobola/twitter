<script setup>
const {login} = useAuth();
const data = ref({
  username: '',
  password: '',
  loading: false
})
const handleLogin = async () => {
  try{
    const {username, password} = data.value
    data.value.loading = true
    const {response} = await login({username, password});

  }catch (e) {
    console.log(e)
  }finally {
    data.value.loading = false
  }
}
</script>

<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput label="Username" placeholder="@username" type="text" v-model="data.username"/>
      <UIInput label="Password" placeholder="********" type="password" v-model="data.password"/>
      <div>
        <button type="submit" @click="handleLogin">Log In</button>
      </div>
    </div>
  </div>
</template>