<script setup>
import LanguageSwitcher from "@/components/homepage/LanguageSwitcher.vue";
import { useStoreAuth } from '@/stores/user/index.js';
import { computed, ref, defineEmits } from "vue";

const emit = defineEmits()
const isDropdownOpen = ref(false)

const authStore = useStoreAuth()
const user = computed (()=>authStore.user)

const submitForm = () => {
  emit('submit-form');
};

const logOut = () => authStore.userSignOut();

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <nav class="flex bg-[#893311] justify-between px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex justify-between items-center mx-auto">
      <div class="flex justify-center gap-4 items-center text-white">
        <router-link to="/">
          <img class="w-[7rem]" src="../../assets/logo-aq.png" alt="" />
        </router-link>        
        <LanguageSwitcher class="bg-[#893311] border-none rounded-lg" />
      </div>

      <div class="flex justify-center items-center  gap-4">
        <div class="flex justify-center items-center gap-2">
        <div v-if="user" class="">
          <div v-if="$route.path.includes('new-story')" class="flex gap-2 jusfiry-center text-white rounded font-medium px-2 text-white hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <button @click="submitForm">Publish</button> 
            <font-awesome-icon icon="fa-solid fa-upload" class="text-[1.5rem] text-white mb-2" />
          </div>
          <router-link v-else to="/new-story" class="flex justify-center gap-4 items-center text-white rounded font-medium text-white hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-[1.5rem] mb-2" />
            <p>{{ $t("termilerPage.write") }}</p>
          </router-link>
        </div>
      </div>
      <div class="flex items-center justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reserve cursor-pointer">
        <div  class="relative flex items-center justify-center" >
            <div v-if="user" class="w-[3rem] h-[3rem] rounded-full" @click.prevent="toggleDropdown" type="button">
             <img v-if="user.photo" class="w-[3rem] h-[3rem] rounded-full" src="../../assets/041.png" alt="profile image" />
             <div v-else="user.email" class="flex justify-center items-center rounded-full w-10 h-10 bg-white md:w-14 md:h-14 rtl:pt-3">
              <h2 class="text-3xl font-sans">{{user.email?.charAt(0).toUpperCase()}} </h2> 
             </div>
         <!-- <font-awesome-icon icon="fa-solid fa-right-from-bracket" /> -->
            </div>
            <div v-else class="flex gap-1">    
              <router-link to="/signin"  class="bg-white text-[#C37E4C] py-1.5  px-2 flex justify-center items-center ltr:rounded-l-lg rtl:rounded-r-lg  ">
              <p class="hidden md:block"> كىرىمەن</p> </router-link>
              <span class="sr-only">Open User menu</span>
              <router-link to="/register"  class="bg-white text-[#C37E4C] py-1.5 px-2 flex justify-center items-center ltr:rounded-r-lg rtl:rounded-l-lg ">
              <p class="hidden md:block"> خەتلىنىمەن </p> 
              </router-link>
           
            </div> 
         <!--Dropdown menu -->
        <div  
          id="user-down"
          :class="isDropdownOpen ? 'block' :'hidden'"
          class="absolute top-6 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-[120px] md:top-10 dark:bg-gray-700 dark:divide-gray-600 rtl:space-x-reverse">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <router-link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">شەخسىي ئۇچۇر</router-link>
            </li>
            <li>
              <router-link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">تەڭشەكلەر</router-link>
            </li>
            <li>
              <button @click="logOut" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >چىكىنىش</button>
            </li>
          </ul>
          </div>

 
        </div> 
      </div>

      </div>
     
    </div>     
  </nav>
</template>

<style></style>
