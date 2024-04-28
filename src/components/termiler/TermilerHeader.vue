<script setup>
import LanguageSwitcher from "@/components/homepage/LanguageSwitcher.vue";

// export default {
//   components: { LanguageSwitcher },
//   data() {
//     return {
//       showMenu: false,
//     };
//   },
// };
</script>

<script setup>





</script>
<template>
  <nav
    class="flex bg-[#893311] justify-between  px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 font-alkatip_t"
  >
    <div class="container flex justify-between items-center mx-auto ">
      <div class="flex justify-center gap-4 items-center text-white">
        <router-link to="/">
          <img class="w-[7rem]" src="../../assets/logo-aq.png" alt="" />
        </router-link>
          <font-awesome-icon icon="fa-solid fa-user" class="text-[2rem] mb-2" />
        
        <language-switcher class="bg-[#893311] border-none rounded-lg" />
      </div>
      <div >
        <router-link
              to="/new-story"
              class="flex justify-center gap-4 items-center text-white rounded font-medium text-white hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-[1.5rem] mb-2" />
             <p> {{ $t("termilerPage.write") }}</p>
             

        </router-link>
        <!-- <font-awesome-icon icon="fa-regular fa-pen-to-square" /> -->
    </div>
    </div>     
  </nav>
</template>

<style></style>
