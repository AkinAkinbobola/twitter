<script setup>

</script>

<template>
  <div class="flex h-screen">
    <div class="flex-1 relative hidden w-0 md:block ">
      <img
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="" class="absolute inset-0 object-cover w-full h-full">
    </div>
    <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 md:flex-none md:px-20">
      <div class="flex items-center h-full w-full max-w-sm mx-auto md:w-96">
        <AuthForm/>
      </div>
    </div>
  </div>
</template>