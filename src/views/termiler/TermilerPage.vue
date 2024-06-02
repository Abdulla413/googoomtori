<script setup>
import TermilerHeader from '../../components/termiler/TermilerHeader.vue';
import TermilerCard from '../../components/termiler/TermilerCard.vue';
import TopicsCard from '@/components/termiler/TopicsCard.vue'
import { collection, addDoc } from "firebase/firestore"
import { doc, getDoc, setDoc, query, limit, getDocs, orderBy  } from "firebase/firestore"
import {db} from "@/db/firebase.config.js"
import { getFirestore } from 'firebase/firestore'
import {onMounted, ref, reactive} from 'vue'
import SpinnerCom from "@/components/icons/SpinnerCom.vue"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker'




// import {useTermilerStore} from "@/stores/termiler"


// const allTermiler = useTermilerStore()




    const allTermiler = ref([])
    const isLoading =ref(false)
    const uniqTopics=ref([])
    const isVisible = ref(false)
    
    



    onMounted( async()=>{


      try {

        isLoading.value = true
            const termilerRef = collection(db, 'termiler');
            const q = query(
              termilerRef,
              orderBy('date', 'desc'),
              limit(15)
    );
            const querySnapshot = await getDocs(q);

            console.log(querySnapshot,'بۇ سىنەپ شوت')

            allTermiler.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
    }));

    isLoading.value = false;

      } catch (error) {

      toast.error(error.message)
      console.log(error)

      isLoading.value = false;
        
      }


      // get uniq tipic 
      const topics = []
      const uniqTopic = () =>{
        for (const element of allTermiler.value){
         topics.push(element.data.topic) 
        }   
        uniqTopics.value = topics
      }

      uniqTopic()


    })

    const showMenu = (coords) =>{
      isVisible.value = !isVisible.value
      
    }
      

    const handleClick = ()=>{
      console.log('i am clicked')
    }


    

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const moreTermiler =async () =>{

  const topics = ['Language', 'History', 'Politics', 'IT', 'Javascript', 'Java'];
  const number = [1,2,3,4,5,6,7];
  const images=['/images/003-yarkant.jpg', '/images/360_Urumqi_0707.jpg', '1436201625014.jpg']

  for (let i = 0; i < 100; i++) {
    try {
      await addDoc(collection(db, 'termiler'), {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
        imageUrl:getRandomElement(images),
        readingTime: getRandomElement(number),
        date: faker.date.recent(),
        topic: getRandomElement(topics)
      });
      console.log(`Document ${i + 1} successfully written!`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
 
  alert('Dummy data generation complete!');

}




</script>

<template>
  <div  class="w-full h-screen flex flex-col mx-auto mb-4 ">
    <TermilerHeader/>
    <div v-if="isLoading" class="flex justify-center items-center w-full m-5 h-screen ">
      <SpinnerCom />
    </div>

    <div v-if="!isLoading" class="flex justify-center space-x-10 border-b-3 "
    :termilerData="allTermiler"
    >
    <div  class="w-2/3 m-5 relative">
      <TermilerCard 
       v-for="(termiler) in allTermiler"
        :key="termiler.id"
        :termiler="termiler"
        
        />
    </div>
    
    <div class="fixed flex flex-col border gap-5 py-5 border-gray-300 shadow m-10 w-1/3 sticky-container">
      <h2 class="text-center font-bold text-lg">Topics</h2>
      <div class="flex flex-wrap gap-2 justify-center">
        <TopicsCard
        :key="uuidv4()"
        :uniqtopics="uniqTopics"
      />
      </div>      
    </div>

  </div>
  <button @click="moreTermiler" class="p-6 pt-0 align-middle ">
        <div class="select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-10 rounded-lg rounded-3xl border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"  >تېخمۇ كۆپ تەرمىلەر</div>
      </button>
</div>

</template>

<style scoped>
.sticky-container {
  position: sticky;
  top: 20px; /* Adjust as needed */
}

</style>