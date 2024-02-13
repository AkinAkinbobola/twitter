<script setup>

const {title, loading} = defineProps(["title", "loading"])
const {twitterBorderColor} = useTailwindConfig()
</script>

<template>
  <div class="border-x h-screen" :class="twitterBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
      <div v-if="loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor">
        <Icon name="tabler:loader-2" class="w-8 h-8 mr-3 -ml-1 text-blue-400 animate-spin"/>
      </div>
      <div v-else>

      </div>
    </div>
  </div>
</template>