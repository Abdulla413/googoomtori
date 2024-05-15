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
    <TermilerHeader/>
    <div class=" container mx-auto flex flex-col py-10 ">
        <div class="">

           
            <h1 class="font-bold text-3xl text-center"> {{ termile.title }}</h1>
           
            <p>{{ termile.date }}</p>
            
            <p>{{ termile.content }}</p>

        </div>


    </div>


    <!-- <font-awesome-icon icon="fa-regular fa-thumbs-up" /> -->
</template>