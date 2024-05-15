
<script setup>

const props = defineProps({
    termiler:Object
})

</script>

<template>
    <p class="bg-gray-300 px-2 rounded-xl"> {{ termiler.data.topic }}</p>
</template>