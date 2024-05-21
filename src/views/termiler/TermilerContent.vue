<script setup>
import TermilerHeader from "@/components/termiler/TermilerHeader.vue"
import {useTermilerStore} from "@/stores/termiler"
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from 'vue';
import {db } from "@/db/firebase.config.js"
import { doc, getDoc } from "firebase/firestore";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// const termiler = useTermilerStore()

const route = useRoute()
const isLoading = ref(false)

const paramId = computed(() => route.params.id);

console.log(paramId?.value, 'this is param id')

const termile = ref({})


onMounted( async()=>{

    console.log(`'${paramId.value}'`, 'this mounted')

try {

      isLoading.value = true

      const termilerRef = doc(db, 'termiler', `${paramId.value}`);  

      console.log(termilerRef, 'this is ref')

      const termilerSnap = await getDoc(termilerRef);

      
      console.log(termilerSnap?.data(), 'this is termiler ')
      if (termilerSnap.exists()) {
        termile.value = termilerSnap.data()
        console.log(termile?.value.topic, 'this is content of Termiler')
} else {
  // docSnap.data() will be undefined in this case
  toast.error('بۇ تەرمىلەر تېپىلمىدى')
}
    

isLoading.value = false;

} catch (error) {


toast.error(error.message)

isLoading.value = false;
  
}



})


const handleClick = ()=>{
console.log('i am clicked')
}







</script>

<template>
    <TermilerHeader />
    <div class="container mx-auto">
      <div class="bg-white p-6">
      
        <h1 class="font-bold text-3xl text-center mb-6">{{ termile.title }}</h1>
        <div class="flex flex-col gap-5 mb-4">
            <div class="flex gap-5 items-center text-xl"> 
                <img v-if="termile.photo" :src="termile.image" alt="Author Image" class="rounded-full h-12 w-12">
                <img v-else src="/images/003-yarkant.jpg" alt="Author Image" class="rounded-full h-12 w-12">
                <p class="text-gray-700 ">{{ termile.author }} Abdulla Arish</p>
                <p class="text-gray-500">{{ termile.date }}</p>
            </div>
            <div class="flex w-full justify-around border-y-2 my-5">
              <div class="flex gap-7 text-xl py-4 px-4">
                <div class="flex items-center gap-2">
                    <button @click="handleLike" class="text-gray-600 hover:text-green-600">
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                    </button>
                    <p>10</p>
                </div>                    
                <div class="flex items-center gap-2">
                    <button @click="handleDislike" class="text-gray-600 hover:text-red-600">
                    <font-awesome-icon icon="fa-solid fa-thumbs-down" />
                    </button>
                    <p>5</p>

                </div>
                    
                <div class="flex items-center gap-2">
                        <font-awesome-icon icon="fa-solid fa-comment" />
                        <p>15</p>
                </div>          
              </div>
              <div class="flex gap-7 text-2xl">
                <div class="flex items-center justify-centercursor-pointer p-4">
                  <font-awesome-icon icon="fa-solid fa-share" class="text-2xl" />
                </div>
                <div class="flex items-center justify-center cursor-pointer p-4">
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-2xl" />
                </div>
                <div class="flex items-center justify-center cursor-pointer p-4">
                  <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
                </div>

              </div>
            </div>

            </div>
            
        <div class="flex justify-center mb-4">
          <img :src="termile.imageUrl" alt="Image" class="w-full h-auto max-w-md rounded-lg shadow-md md:max-w-full ">
        </div>
        <p class="text-gray-800 leading-relaxed text-2xl">{{ termile.content }}</p>
      </div>
      <div class="">
        <!-- <h1> More from {{ termiler.author }} </h1> -->
        <AuthorMoreWorks /> 
      </div>
      <div>
        <h1>Related Topic</h1>
        <RelatedTopic/> 
      </div>
    </div>
  </template>
  
  <style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }



  
  </style>
  