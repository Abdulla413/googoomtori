
<script setup>
import LanguageSwitcher from "@/components/homepage/LanguageSwitcher.vue";
import { ref, computed, defineEmits } from "vue";
import { useStoreAuth } from '@/stores/user/index.js';
import { auth } from "../../db/firebase.config";
import ProfileCard from "../user/ProfileCard.vue";


const isDropdownOpen = ref(false);
const isNavbarOpen = ref(false);


const emit=defineEmits()

const authStore = useStoreAuth();
const logOut = () => authStore.userSignOut();

const user = computed (()=>authStore.user)



// console.log(user.value.email, user.value.displayName, 'this is user in googoom header')







const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const fristAlphebit = user.value?.email.charAt(0).toUpperCase();


</script>

<template>
  <nav
    class="bg-[#893311] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="containe max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex justify-center items-center text-white">
        <router-link to="/">
          <img class="w-[5rem] md:w-[7rem]" src="../../assets/logo-aq.png" alt="" />
        </router-link>
      </div>
      <language-switcher class="bg-[#893311] border-none rounded-lg" />
      <div class="flex items-center justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reserve cursor-pointer">
        <div  class="relative flex items-center justify-center" >
            <div v-if="user" class="w-[3rem] h-[3rem] rounded-full" @click="toggleDropdown" type="button">
             <img v-if="user.photo" class="w-[3rem] h-[3rem] rounded-full" src="../../assets/041.png" alt="profile image" />
             <div v-else="user.email" class="flex justify-center items-center rounded-full w-10 h-10 bg-white md:w-14 md:h-14 rtl:pt-3">
              <h2 class="text-3xl font-sans">{{user.email?.charAt(0).toUpperCase()}} </h2> 
             </div>
         <!-- <font-awesome-icon icon="fa-solid fa-right-from-bracket" /> -->
            </div>
            <div v-else class="flex gap-1">    
              <router-link to="/signin"  class="bg-white text-[#C37E4C] py-1.5  px-2 flex justify-center items-center ltr:rounded-l-lg rtl:rounded-r-lg  ">
              <p class=""> كىرىمەن</p> </router-link>
              <router-link to="/register"  class="bg-white text-[#C37E4C] py-1.5 px-2 flex justify-center items-center ltr:rounded-r-lg rtl:rounded-l-lg ">
              <p class=""> خەتلىنىمەن </p> 
              </router-link>
            </div> 
         <!--Dropdown menu -->
         <Teleport to="body">
          <div
          v-if="user"
          :class="isDropdownOpen ? 'block' :'hidden'"
          class="felx flex-col bg-gray-100 rounded-[20px] fixed z-50 top-[16%] left-[4%] w-[400px] -ml-[10px] md:top-[14%] md:left-[25%] md:w-[400px] md:-ml-[150px]">
          
          <font-awesome-icon icon="fa-solid fa-xmark" @click="isDropdownOpen=false" class="m-3 text-2xl"/>
          <div class="flex justify-center items-center flex-col">
            <img v-if="user.photo" class="w-[3rem] h-[3rem] rounded-full border-4 border-gray-300" src="../../assets/041.png" alt="profile image" />
             <div v-else="user.email" class="flex justify-center items-center bg-[#893311] rounded-full border-4 border-gray-300 w-10 h-10 bg-white md:w-14 md:h-14">
              <h2 class="block text-3xl font-sans top-2 text-white">{{user.email.charAt(0).toUpperCase()}} </h2>
             </div> 
          </div>
          <router-link to="/profilephoto">
            <font-awesome-icon icon="block fa-solid fa-file-pen" class="left-[213px] z-100 top-[-30px] text-gray-800 text-sm md:text-lg md:left-[215px] md:top-[-32] "/>
          </router-link>
          <p class="bg-gray-300 rounded-lg text-center px-2 pt-3 pb-2 m-3 ">{{ user.email }}</p>
          <div class="flex text-blue-700 justify-center items-center flex-row-reverse gap-2">
            <div class="text-center pt-2 px-2 rounded-lg ">
              <h5>ئەگەشكۈچىلەر</h5>
              <p>15K</p>
            </div>
            <div class="text-center pt-2 px-2 rounded-lg">
              <h5>ئەسەرلەر</h5>
              <p>50</p>
            </div>
            <div class="text-center pt-2 px-2 rounded-lg">
              <h5>ئەگەشكەنلىرى</h5>
              <p>500</p>
            </div>
            
          </div>

          <div class="flex gap-2 justify-center items-center pb-5">
             <div class="flex gap-2 text-xl py-2 px-4 mx-2 text-white bg-blue-700 rounded-[50px] ">
              <font-awesome-icon icon="fa-solid fa-file-pen" />
              <p class="flex-end">ئارخىپ</p>
            </div>
           <div @click="logOut" class="flex gap-2 text-xl py-2 px-4 mx-2 text-white bg-blue-700 rounded-[50px] ">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            <button>چىكىنىش</button>
            
          </div>

          </div>
        </div> 
    </Teleport>
         
 
        </div> 
      </div>

       <button
          @click="toggleNavbar"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-md text-green-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-contro ls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      <div
        class=" items-center justify-between text-white w-full md:flex md:w-auto md:order-1"
        :class="isNavbarOpen ? 'block' : 'hidden'"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 space-y-3 md:flex-row md:space-x-6 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-[#893311] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="#"
              class="rounded font-medium hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              ></router-link
            >
          </li>
          <li>
            <router-link
              to="/arishpedia"
              class="rounded font-medium hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.arishPedia") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/googoomnews"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.news") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/termilerpage"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.termiler") }}</router-link
            >
          </li>
          <!-- <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.soralghu") }}</router-link
            >
          </li> -->
           <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.korkem") }}</router-link
            >
          </li>
          <!-- <li>
            <router-link
              to="#"
              class="font-medium rounded-full md:bg-blue-500 md:mx-[1rem] md:px-[1rem] md:py-2 md:hover:bg-blue-500 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.freeEastturkistan") }}</router-link
            >
          </li> -->
          <!-- <li>
            <router-link
              to="#"
              class="font-medium rounded hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.oyuq") }}</router-link
            >
          </li> -->
           <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.kakkuk") }}</router-link
            >
          </li>

          <!-- <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.tarim") }}</router-link
            >
          </li> -->
          <!-- <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.ghunchilar") }}</router-link
            >
          </li> -->
          <li>
            <router-link
              to="#"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("pageHeader.websites") }}</router-link
            >
          </li>
        </ul>
        <!-- <div class="text-bold md:block">
          <ProfileIcon />
        </div> -->
      </div>

    
    </div>
  </nav>


</template>

<style scoped>
/* Add any additional custom styles here if needed */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


/* 
.modal {
  background-color: rgb(210, 205, 205);
  border-radius: 20px;
  position: fixed;
  z-index: 999;
  top:10%;
  left: 20%;
  width: 300px;
  margin-left: -150px;
} */
</style>







  