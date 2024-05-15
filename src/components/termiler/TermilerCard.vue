<script setup>

 const props = defineProps({
    termiler : Object
 })

 console.log(props.termiler, 'this is termiler inside porosp', props.termiler.id, 'this is id')




</script>


<template>
 
 <div >
    <div class="bg-white border-t border-gray-300 mt-5">

    <div class="flex items-center space-x-4 ">
        <div>
        <img v-if="termiler.data.photo" :src="termiler.image" alt="Author Image" class="rounded-full h-12 w-12"> 
        <img v-else src="/public/images/003-yarkant.jpg" alt="Author Image" class="rounded-full h-12 w-12"> 
        
        </div>
        <p class="mt-2 text-gray-700 ">{{ termiler.data.author }}</p>
        <p class="mt-2 text-gray-700">{{termiler.data.date }}</p>
    </div>
    <router-link :to="'/termiler/'+ termiler.id" class="flex items-center md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg m-10 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src='`${termiler.image}`' alt="">
        <div class="flex flex-col items-end">
            
            <div class="flex flex-col grow p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{termiler.data.title}}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ termiler.data.content.slice(0,300) }}...</p>
            </div>
            <button class="bg-blue-500 w-[150px] h-[30px] ml-[50px] rounded-lg mb-4 text-white">Read More</button>
</div>
    </router-link>
    <div class="flex items-center space-x-4 ">
        <div></div>
        <p class="m-2 text-gray-700 bg-gray-200 rounded-lg pr-3 pl-3 mt-3 ">{{ termiler.data.topic }}</p>
        <p class="m-2 text-gray-700">{{ termiler.data.duration }} min read</p>
    </div>
</div>
    
</div>



</template>