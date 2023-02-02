<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  post: Object,
  qanal: String,
});
</script>

<template>
  <div
    class="max-w-sm flex flex-col bg-white border-2 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      class="rounded-t-lg w-full object-cover object-center lg:h-72 md:h-48"
      :src="`${post.image}`"
      alt=""
    />
    <div class="p-3 flex flex-col justify-center items-center">
      <p
        class="mb-2 text-lg font-bold font-alkatip_t tracking-tight text-gray-900 dark:text-white"
      >
        {{ post.title }}
      </p>
      <div class="flex gap-3">
        <p
          class="font-normal font-alkatip_t px-3 py-2 text-center rounded-lg bg-gray-100 text-blue-500 dark:text-gray-400"
        >
          {{ qanal }}
        </p>
        <p
          v-show="post.date"
          class="font-normal font-alkatip_t text-center px-3 py-1 pt-2 rounded-lg bg-gray-100 text-blue-500 dark:text-gray-400"
        >
          {{ post.date }}
        </p>
      </div>
      <a
        :href="post.url"
        class="font-alkatip_tt inline-flex items-center px-3 mt-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        تېخىمۇ كۆپ...
      </a>
    </div>
  </div>
</template>

<style></style>
