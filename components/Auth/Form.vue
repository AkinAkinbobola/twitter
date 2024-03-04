<script setup>
const supabase = useSupabaseClient()

const credentials = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: credentials.value.email,
    password: credentials.value.password,
  })
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