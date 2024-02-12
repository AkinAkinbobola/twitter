<script setup>
import {computed} from "vue";

const {twitterBorderColour, defaultTransition} = useTailwindConfig()
const wrapperClasses = computed(() => {`${twitterBorderColour} ${defaultTransition}`})
</script>

<template>
<div class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b" :class="wrapperClasses">
  <slot></slot>
</div>
</template>