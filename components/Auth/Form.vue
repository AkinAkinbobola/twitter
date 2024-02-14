<script setup>
const data = ref({
  username: '',
  password: ''
})
const handleLogin = () => {
  console.log(data)
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