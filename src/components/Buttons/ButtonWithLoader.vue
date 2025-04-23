<script setup lang="ts">
const props = defineProps({
  isDisabled: Boolean,
})
</script>

<template>
  <template v-if="props.isDisabled">
    <button type="button" disabled class="w-full text-white bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
      <i class="fa-solid fa-gear fa-spin"></i> Loading
    </button>
  </template>
  <template v-else>
    <button type="button" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <slot></slot>
    </button>
  </template>
</template>

<style scoped>
</style>