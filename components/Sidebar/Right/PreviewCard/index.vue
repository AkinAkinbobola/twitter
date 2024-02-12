<script setup>

const {title} = defineProps(["title"])
const {twitterBorderColour, defaultTransition} = useTailwindConfig()
</script>

<template>
<div class="m-2 rounded-2xl border bg-gray-50 dark:bg-dim-700 overflow-hidden" :class="twitterBorderColour">
  <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColour">{{title}}</h1>
  <slot></slot>
  <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300" :class="defaultTransition">
    Show more
  </div>
</div>
</template>