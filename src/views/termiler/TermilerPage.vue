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
    <div class="flex justify-center space-x-20 p-20">
    <main>
      <TermilerCard 
      :termilerData="allTermiler"
      v-for="(termiler, index) in allTermiler"
        :key="index"
        :termiler="termiler"/>
    </main>
    <div class="border-l border-gray-300 p-5">
      <h2>Topict</h2>
      <p>Topic1</p>
      <p>Topic2</p>
      <p>Topic3</p>
      <p>Topic4</p>
      <p>Topic5</p>
    </div>
  </div>
    
</div>

</template>

<style>

</style>