
<script setup>

import {ref} from 'vue'

const props = defineProps({
    uniqtopics:Array
})
const uniqTopic = ref([])

const topic =new Set(props.uniqtopics) 
uniqTopic.value = [...topic]
</script>

<template>
    <p class="bg-gray-300 px-2 rounded-xl "
    v-for="onetopic in uniqTopic"
    > {{ onetopic }}</p>
</template>