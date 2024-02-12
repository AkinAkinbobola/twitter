<script setup>
const transition = 'transition ease-in-out duration-350'
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 w-min rounded-full hover:bg-blue-50 dark:hover:bg-white/20"
         :class="transition"
    >
      <NuxtLink to="/">
        <Icon name="mdi:twitter" class="text-blue-400 dark:text-white h-8 w-8"/>
      </NuxtLink>
    </div>
  </div>
</template>