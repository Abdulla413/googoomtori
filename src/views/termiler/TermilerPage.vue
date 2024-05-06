<script setup>
import TermilerHeader from '../../components/termiler/TermilerHeader.vue';
import TermilerCard from '../../components/termiler/TermilerCard.vue';
import TopicsCard from '@/components/termiler/TopicsCard.vue'
import { collection, addDoc } from "firebase/firestore"
import { doc, getDoc, setDoc } from "firebase/firestore"
import {db} from "@/db/firebase.config.js"
import { getFirestore } from 'firebase/firestore'

// import {useTermilerStore} from "@/stores/termiler"
import { ref } from 'vue';


const hemmeTermiler = async () => {
  const docSnap = await getDoc(doc(db, 'Termiler'));

  if (docSnap.exists()) {
    console.log(docSnap.data());
  } else {
    console.log('Document does not exist');
  }
};

hemmeTermiler()



// console.log(hemmeTermiler, 'this is hemme termiler')

// const allTermiler = useTermilerStore()



const allTermiler = ref([
{
    id:"01",
    image:"/src/assets/logo-aq.png",
    author:"Abdulla Arish",
    title:'Where is East Turkistan?',
    topic:'Politic',
    date:'12/5/2024',
    duration:'5',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  },
  {
    id:"02",
    image:"/src/assets/logo-aq.png",
    author:"Tohti Arish",
    title:'Who is East Turkistan?',
    topic:'Culture',
    date:'12/5/2024',
    duration:'5',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  },
  {
    id:"03",
    image:"/src/assets/logo-aq.png",
    author:"Tohti Arish",
    topic:'Politic',
    date:'12/5/2024',
    duration:'5',
    title:'What is going on in East Turkistan?',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  }


]
  
)



</script>

<template>
  <div  class="flex flex-col mx-auto mb-4 w-full h-screen">
    <TermilerHeader/>
    <div class="flex justify-center space-x-10 "
    :termilerData="allTermiler"
    >
    <main class="w-2/3 m-5">
      <TermilerCard 
       v-for="(termiler) in allTermiler"
        :key="termiler.id"
        :termiler="termiler"/>
    </main>
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