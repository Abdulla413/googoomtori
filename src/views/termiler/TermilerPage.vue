<script setup>
import TermilerHeader from '../../components/termiler/TermilerHeader.vue';
import TermilerCard from '../../components/termiler/TermilerCard.vue';
import { ref } from 'vue';



const allTermiler = ref({
  termiler1:{
    image:"/src/assets/logo-aq.png",
    author:"Abdulla Arish",
    title:'Where is East Turkistan?',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  },
  termiler2:{
    image:"/src/assets/logo-aq.png",
    author:"Tohti Arish",
    title:'Who is East Turkistan?',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  },
  termiler3:{
    image:"/src/assets/logo-aq.png",
    author:"Tohti Arish",
    title:'What is going on in East Turkistan?',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
  }
})



</script>

<template>
  <div  class="flex flex-col mx-auto mb-4 w-full h-screen">
    <TermilerHeader/>
    <div class="flex justify-center space-x-10 ">
    <main class="w-2/3 m-5">
      <TermilerCard 
      :termilerData="allTermiler"
      v-for="(termiler, index) in allTermiler"
        :key="index"
        :termiler="termiler"/>
    </main>
    <div class="flex flex-col border border-gray-300 shadow m-10 w-1/3">
      <h2 class="text-center font-bold text-lg pt-10">Topics</h2>
      <div class="flex space-x-5 p-5">
          <p class="bg-gray-300 rounded-lg px-2">Politics</p>
          <p class="bg-gray-300 rounded-lg px-2">Music</p>
          <p class="bg-gray-300 rounded-lg px-2">Topic3</p>
          <p class="bg-gray-300 rounded-lg px-2">Topic4</p>
          <p class="bg-gray-300 rounded-lg px-2">Topic5</p>
    </div>
    </div>
  </div>
    
</div>

</template>

<style>

</style>