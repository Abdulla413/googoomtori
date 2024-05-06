<script setup>

 const props = defineProps({
    termiler : Object
 })



</script>


<template>
 
 <router-link to="/" >
    <div class="bg-white border-t border-gray-300 mt-5">
    <div class="flex items-center space-x-4 ">
        <div>
        <img v-if="termiler.photo" :src="termiler.photo" alt="Author Image" class="rounded-full h-12 w-12"> 
        <font-awesome-icon v-else :icon="['fas', 'user']" class="text-[1.5rem] m-5"/>
        </div>
        <p class="mt-2 text-gray-700 ">{{ termiler.author }}</p>
        <p class="mt-2 text-gray-700">{{termiler.date }}</p>
    </div>
    <div class="flex items-center md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg m-10 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src='`${termiler.image}`' alt="">
        <div class="flex flex-col p-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{termiler.title}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ termiler.content }}</p>
        </div>
    </div>
    <div class="flex items-center space-x-4 ">
        <div></div>
        <p class="m-2 text-gray-700 bg-gray-200 rounded-lg pr-3 pl-3 mt-3 ">Topics</p>
        <p class="m-2 text-gray-700">{{ termiler.duration }} min read</p>
    </div>
</div>
    
</router-link>



</template>