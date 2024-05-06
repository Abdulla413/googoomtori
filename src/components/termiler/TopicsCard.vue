
<script setup>

const props = defineProps({
    termiler:Object
})
console.log(props.termiler.topic, "this is topic")

</script>

<template>
    <p class="bg-gray-300 px-2 rounded-xl"> {{ termiler.topic }}</p>
</template>