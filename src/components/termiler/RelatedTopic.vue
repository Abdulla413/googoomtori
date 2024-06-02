

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';
import {db } from "@/db/firebase.config.js";
import {collection, query, limit, getDocs, where , orderBy, addDoc} from "firebase/firestore";
import { defineProps } from 'vue'
import SpinnerCom from "@/components/icons/SpinnerCom.vue"
import { faker } from '@faker-js/faker'


const props = defineProps({
    topic: String,
    termilerId:String
})


const {topic, termilerId} = toRefs(props)


const latestTermiler = ref([])
let isLoading = ref(false)
const lastVisble = ref(null)



const fetchPosts = async (topicValue, excludePostId) => {
    
  if (!topicValue) {
    console.error('Topic is undefined');
    return;
  }
console.log(topicValue, 'this is topic value')
  try {
    isLoading.value = true;

    const docsRef = collection(db, 'termiler');
    const q = query(
      docsRef,
      where('topic', '==', topicValue),
      orderBy('date', 'desc'),
      limit(15)
    );

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot, 'بۇ سىنەپشوت');

    const posts = [];

    for (const docSnap of querySnapshot.docs) {
      const postData = docSnap.data();
      console.log(docSnap.id, postData, 'this is inside querysnapshot');

      // Exclude the current post by its ID
      if (docSnap.id !== excludePostId) {
        posts.push({ id: docSnap.id, ...postData });
      }
    }
    

    latestTermiler.value = posts;


    console.log(latestTermiler.value, ' this is latest termiler in related tipic');

    // lastVisble.value = 
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    isLoading.value = false; // Stop loading after the data is fetched
  }
};

// Watch the topic and fetch posts when it changes or when component mounts
watch([topic, termilerId], ([newTopic, newTermilerId]) => {
  if (newTopic && newTermilerId) {
    fetchPosts(newTopic, newTermilerId);
  }
}, { immediate: true });

// More termiler 

// const moreTermiler = ()=>{
// alert('iam clicked')


// }



const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const moreTermiler =async () =>{

  const topics = ['Language', 'History', 'Politics', 'IT', 'Javascript', 'Java'];
  const number = [1,2,3,4,5,6,7];
  const images=['https://firebasestorage.googleapis.com/v0/b/googoom-153e0.appspot.com/o/termilerImages%2Ftermiler-images.jpg-aa3c0b88-c3a9-4c42-92a3-bd79020785fb?alt=media&token=8b2b6232-a8fb-426e-b124-a71f899c33c8', 'https://firebasestorage.googleapis.com/v0/b/googoom-153e0.appspot.com/o/termilerImages%2Ftermiler-sabit%20damollam.jpg-64e692bf-e10e-4aae-920a-40bb9bb8c428?alt=media&token=0ad03d71-5b0f-485b-9cdf-30c040e2244a']

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
    <div>
      <div v-if="isLoading">
        <SpinnerCom />
      </div>
  
      <h1 class="text-2xl text-center text-bold py-5 border-y-2">ئەڭ يېڭى مۇناسىۋەتلىك تەرمىلەر</h1>
  
      <div class="container flex flex-wrap gap-10 justify-center py-5 pb-15 border-b-2 pb-10 mb-10">
        <div 
          v-for="post in latestTermiler" 
          :key="post.id" 
          class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div 
            class="relative h-56 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
          >
            <img :src="post.imageUrl" alt="card-image" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {{ post.title }}
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit line-clamp-3">
              {{ post.content }}
            </p>
          </div>
          <button class="p-6 pt-0 align-middle select-none ">
          <router-link 
            :to="'/termiler/' + post.id" 
            target="_blank"
            class=" font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            Read More            
          </router-link>
        </button>
        </div>  
      </div>


      <button @click="moreTermiler" class="p-6 pt-0 align-middle select-none">
        <div class="font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-10 rounded-lg rounded-3xl border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"  >تېخمۇ كۆپ تەرمىلەر</div>
      </button>
    </div>
  </template>
   

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>