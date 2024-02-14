<script setup>
const {modelValue, label, placeholder, type} = defineProps(["modelValue", "label", "placeholder", "type"])
</script>

<template>
  <div>
    <label for="" v-if="label" class="block pl-3 ml-px text-sm font-medium text-gray-700">{{ label }}</label>
    <input @input="$emit('update:modelValue', $event.target.value)"
           :type="type" :value="modelValue"
           class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500"
           :placeholder="placeholder">
  </div>
</template>