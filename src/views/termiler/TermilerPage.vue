<script setup>
import TermilerHeader from '../../components/termiler/TermilerHeader.vue';
import TermilerCard from '../../components/termiler/TermilerCard.vue';
import TopicsCard from '@/components/termiler/TopicsCard.vue'
import { collection, addDoc } from "firebase/firestore"
import { doc, getDoc, setDoc, getDocs  } from "firebase/firestore"
import {db} from "@/db/firebase.config.js"
import { getFirestore } from 'firebase/firestore'
import {onMounted, ref, reactive} from 'vue'
import SpinnerCom from "@/components/icons/SpinnerCom.vue"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



// import {useTermilerStore} from "@/stores/termiler"


// const allTermiler = useTermilerStore()




    const allTermiler = ref([])
    const isLoading =ref(false)

    onMounted( async()=>{

      

      try {

        isLoading.value = true
            const termilerRef = await getDocs(collection(db, 'termiler'));
            allTermiler.value = termilerRef.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
    }));

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
  <div  class="flex flex-col mx-auto mb-4 w-full h-screen">
    <TermilerHeader/>
    <div v-if="isLoading" class="flex justify-center items-center w-full m-5 h-screen ">
      <SpinnerCom />
    </div>

    <div v-if="!isLoading" class="flex justify-center space-x-10 "
    :termilerData="allTermiler"
    >
    <div  class="w-2/3 m-5">
      <TermilerCard 
       v-for="(termiler) in allTermiler"
        :key="termiler.id"
        :termiler="termiler"/>
    </div>
    <div class="flex flex-col border border-gray-300 shadow m-10 w-1/3">
      <h2 class="text-center font-bold text-lg pt-10">Topics</h2>
      <div class="flex flex-wrap space-x-4 justify-center pt-5">
        <TopicsCard
        v-for="(termiler) in allTermiler"
        :key="termiler.id"
        :termiler="termiler"
      />
      </div>      
    </div>
  </div>
</div>

</template>

<style>

</style>