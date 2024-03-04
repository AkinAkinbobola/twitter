<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  const {data, error} = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <form @submit.prevent="handleRegister">
      <div class="flex gap-3">
        <label for="email">Email</label>
        <input type="email" v-model='email' id="email" class="border">
      </div>
      <div class="flex gap-3">
        <label for="password">Password</label>
        <input type="password" v-model='password' id="password" class="border">
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>