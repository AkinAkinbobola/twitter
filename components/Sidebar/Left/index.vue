<script setup>
const {defaultTransition} = useTailwindConfig()
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 w-min rounded-full hover:bg-blue-50 dark:hover:bg-white/20"
         :class="defaultTransition"
    >
      <NuxtLink to="/">
        <Icon name="mdi:twitter" class="text-blue-400 dark:text-white h-8 w-8"/>
      </NuxtLink>
    </div>
    <div class="w-min flex flex-col space-y-3 mt-2">
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="heroicons:home-20-solid" class="text-dark h-6 w-6"/>
        <p class="text-xl">Home</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="ph:hash-straight-bold" class="text-dark h-6 w-6"/>
        <p class="text-xl">Explore</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="ph:bell-light" class="text-dark h-6 w-6"/>
        <p class="text-xl">Notifications</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="ic:sharp-mail-outline" class="text-dark h-6 w-6"/>
        <p class="text-xl">Messages</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="ic:baseline-bookmark-border" class="text-dark h-6 w-6"/>
        <p class="text-xl">Bookmarks</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="heroicons:document-text" class="text-dark h-6 w-6"/>
        <p class="text-xl">Lists</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="material-symbols:account-circle-full" class="text-dark h-6 w-6"/>
        <p class="text-xl">Profile</p>
      </div>
      <div class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full" :class="defaultTransition">
        <Icon name="heroicons:ellipsis-horizontal-circle" class="text-dark h-6 w-6"/>
        <p class="text-xl">More</p>
      </div>
    </div>
  </div>
</template>