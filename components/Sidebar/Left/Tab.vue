<script setup>
const {defaultTransition} = useTailwindConfig()
</script>
<template>
  <div class="w-min flex flex-col space-y-3 mt-2">
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition" to="/">
      <Icon name="heroicons:home-20-solid" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Home</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="ph:hash-straight-bold" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Explore</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="ph:bell-light" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Notifications</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="ic:sharp-mail-outline" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Messages</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="ic:baseline-bookmark-border" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Bookmarks</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="heroicons:document-text" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Lists</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="material-symbols:account-circle-full" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">Profile</p>
    </NuxtLink>
    <NuxtLink
        class="flex gap-4 items-center p-3 text-black dark:text-white dark:bg-dim-900 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-dim-200 rounded-full"
        :class="defaultTransition">
      <Icon name="heroicons:ellipsis-horizontal-circle" class="text-dark h-6 w-6"/>
      <p class="text-xl hidden sm:block">More</p>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'Tab'
}
</script>