<script setup>
import TermilerHeader from "@/components/termiler/TermilerHeader.vue"
import {useTermilerStore} from "@/stores/termiler"
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from 'vue';
import {db } from "@/db/firebase.config.js"
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import RelatedTopic from "../../components/termiler/RelatedTopic.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


// const termiler = useTermilerStore()

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const isVisible = ref(false)

const paramId = computed(() => route.params.id);

console.log(paramId?.value, 'this is param id')

const termile = ref({})

const dropDown = () =>{
  isVisible.value = !isVisible.value
}

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

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};


const handleClick = ()=>{
console.log('i am clicked')
}

// Format date for display
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};



// Delete Termıler

const deleteTermiler = async() =>{

confirm('؟سىز بۇ تەرمىلەرنى راستىنلا ئۆچۈرەمسىز')

console.log(`${paramId.value}`, 'this is id')

await deleteDoc(doc(db, "termiler", `${paramId.value}`));

router.push("/termilerpage")


  isVisible.value = !isVisible.value

}



</script>

<template>
    <TermilerHeader />
    <div class="container mx-auto">
      <div class="bg-white p-6">
        <div v-if="isLoading" class="flex justify-center items-center w-full m-5 h-screen ">
      <SpinnerCom />
    </div>
      
        <h1 class="text-3xl text-center mb-6  t">{{ termile.title }}</h1>
        <div class="flex flex-col gap-5 mb-4">
            <div class="flex gap-5 items-center text-xl"> 
                <img v-if="termile.photo" :src="termile.image" alt="Author Image" class="rounded-full h-12 w-12">
                <img v-else src="/images/003-yarkant.jpg" alt="Author Image" class="rounded-full h-12 w-12">
                <p class="text-gray-700 ">{{ termile.author }} Abdulla Arish</p>
                <p class="text-gray-500">{{ termile.date?.toDate().toLocaleDateString('en-US', options) }}</p>
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
                <div @click="dropDown" class="relative flex items-center justify-center cursor-pointer p-4">
                  <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
                </div>
                <div v-if="isVisible" class="absolute right-0 top-7 mt-5 w-48 text-[16px] bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <ul class="">
                      <li @click="followAuthor" class="block px-4 py-1 hover:bg-gray-100 cursor-pointer">ئاپتۇرغا ئەگىشىمەن</li>
                      <li @click="deleteTermiler" class="block px-4 py-1 hover:bg-gray-100 cursor-pointer">ئۆچۈرىمەن</li>
                    </ul>
                </div>

              </div>
            </div>

            </div>
            
        <div class="flex justify-center mb-4">
          <img :src="termile.imageUrl" alt="Image" class="w-full h-auto max-w-md rounded-lg shadow-md md:max-w-full ">
        </div>
        <p class="text-gray-800 leading-relaxed text-2xl  ">{{ termile.content }}</p>
      </div>
      <div class="">
        <!-- <h1> More from {{ termiler.author }} </h1> -->
        <AuthorMoreWorks /> 
      </div>
      <div>
        <h1>Related Topic</h1>
        <RelatedTopic :topic="termile.topic" :termilerId="paramId"/> 
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
  