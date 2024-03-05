<script setup>
const supabase = useSupabaseClient()
const userStore = useUserStore()
const credentials = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  userStore.isLoading = true
  const {data, error} = await supabase.auth.signInWithPassword({
    email: credentials.value.email,
    password: credentials.value.password,
  })
  if(!error){
    userStore.isLoading = false
  }
  navigateTo('/')
}
</script>

<template>
  <div>
    <UIInput label="Email" placeholder="@email" type="email" v-model="credentials.email"/>
    <UIInput label="Password" placeholder="********" type="password" v-model="credentials.password"/>
    <div>
      <button type="submit" @click="handleLogin">Log In</button>
    </div>
  </div>
</template>