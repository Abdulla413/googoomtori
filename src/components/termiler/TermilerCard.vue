<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  termiler: Object
})

const isVisible = ref(false);






const handleLike = () => {
  console.log('Liked')
}

const handleDislike = () => {
  console.log('Disliked')
}

const toggleMenu = () => {
  isVisible.value = !isVisible.value
}

const followAuthor = () => {
  console.log('Follow Author clicked')
  showMenu.value = false;
}

const reportStory = () => {
  console.log('Report This Story clicked')
  showMenu.value = false;
}



// formating the date

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
</script>

<template>
  <div class="flex justify-between items-center bg-white border border-gray-300 mt-5 rounded-lg shadow-md overflow-hidden relative">
    <!-- Left Side: Author Info and Content -->
    <div class="flex-1 p-6">
      <!-- Author Info -->
      <div class="flex items-center gap-3 mb-4">
        <div>
          <img v-if="termiler.data.photo" :src="termiler.image" alt="Author Image" class="rounded-full h-12 w-12">
          <img v-else src="/images/003-yarkant.jpg" alt="Author Image" class="rounded-full h-12 w-12">
        </div>
        <div>
          <p class="text-gray-700 font-medium">{{ termiler.data.author }}</p>
          <p class="text-gray-500 text-sm ">{{ termiler.data.date?.toDate().toLocaleDateString('en-US', options) }}</p>
        </div>
      </div>

      <!-- Title and Content -->
      <router-link :to="'/termiler/' + termiler.id" class="block mb-4 no-underline hover:underline">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 mb-2">{{ termiler.data.title }}</h5>
        <p class="text-gray-700 line-clamp-3">{{ termiler.data.content }}</p>
      </router-link>

      <!-- Bottom Section: Topic, Reading Time, Like, Dislike, Kebab Menu -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <p class="text-gray-700 bg-gray-200 rounded-lg px-3">{{ termiler.data.topic }}</p>
          <p class="text-gray-700">{{ termiler.data.readingTime}} min read</p>
          <button @click="handleLike" class="text-gray-600 hover:text-green-600">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
          </button>
          <button @click="handleDislike" class="text-gray-600 hover:text-red-600">
            <font-awesome-icon icon="fa-solid fa-thumbs-down" />
          </button>
        </div>
        <div class="relative z-10">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </button>
          <div v-if="isVisible" class="absolute left-2 top-[-70px] mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            <ul class="">
              <li @click="followAuthor" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Follow Author</li>
              <li @click="reportStory" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report This Story</li>
            </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Image -->
    <router-link :to="'/termiler/' + termiler.id">
      <div class="flex justify-center items-center w-36 h-36 mx-5">
          <img class="object-cover w-full h-full" :src="termiler.data.imageUrl" alt="Content Image">
      </div>
    </router-link>
    
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