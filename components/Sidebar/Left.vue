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
    <div class="w-min flex flex-col">
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="heroicons:home-20-solid"/>
        <p>Home</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="ph:hash-straight-bold"/>
        <p>Explore</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="ph:bell-light"/>
        <p>Notifications</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="ic:sharp-mail-outline"/>
        <p>Messages</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="ic:baseline-bookmark-border"/>
        <p>Bookmarks</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="heroicons:document-text"/>
        <p>Lists</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="material-symbols:account-circle-full"/>
        <p>Profile</p>
      </div>
      <div class="flex gap-3 items-center px-4 py-2 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-400 dark:hover:text-black dark:hover:bg-white  rounded-2xl" :class="defaultTransition">
        <Icon name="heroicons:ellipsis-horizontal-circle"/>
        <p>More</p>
      </div>
    </div>
  </div>
</template>