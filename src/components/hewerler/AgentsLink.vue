<script setup>
import { RouterLink } from "vue-router";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  direction: String,
  message: String,
});
</script>

<template>
  <RouterLink :to="`${direction}`">
    <div
      class="py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    >
      {{ message }}
    </div>
  </RouterLink>
</template>

<style></style>
