<script setup>
import FooterCom from "@/components/FooterCom.vue";
import LanguageSwitcher from "@/components/homepage/LanguageSwitcher.vue";

</script>

<template>
  <div
    class="flex flex-col mx-auto mb-4 justify-center h-screen font-alkatip_t"
  >
    <nav
      class="flex text-white p-3 h-[5rem] bg-[#893311] items-center justify-between"
    >
      <div class="flex justify-center gap-2 items-center">
        <img class="w-[7rem]" src="../assets/googoom-logo-aq.png" alt="" />
        <font-awesome-icon icon="fa-solid fa-user" class="text-[2rem]" />
        <LanguageSwitcher class="bg-[#893311] border-none rounded-lg flex justify-center items-center"/>
      </div>
      <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl md:hidden" />
      <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl hidden" />
      <p class="text-3xl hidden md:block">Googoom</p>
    </nav>
    <div class="mb-auto flex flex-col justify-center items-center md:h-[65%]">
      <div>{{ $t("appTitle") }}</div>
      <div
        class="flex flex-col mb-5 justify-center items-center w-[300px] md:flex-row mb:gap-5 md:w-[450px] md:gap-7 md:mb-[6rem]"
      >
        <img src="../assets/shiir1.png" />
        <img src="../assets/shiir2.png" />
      </div>

      <ul class="flex pb-3 gap-3 md:gap-5 md:text-xl">
        <li>
          <router-link
            to="/wiki"
            class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >{{ $t("arishPedia") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/googoomnews"
            class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >{{ $t("news") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/termiler"
            class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >{{ $t("termiler") }}</router-link
          >
        </li>
        <!-- <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">سورالغۇ</router-link>
                </li> -->
        <!-- <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">كۆركەم</router-link>
                </li>
                <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">غۇنچىلار</router-link>
                </li>
                <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ئويۇق</router-link>
                </li>
                <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">كاككۇك</router-link>
                </li>
                <li>
                  <router-link to="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">تارىم</router-link>
                </li> -->
        <li>
          <router-link
            to="#"
            class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >{{ $t("websites") }}</router-link
          >
        </li>
      </ul>

      <form class="w-auto md:w-2/5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >ئىزدەش</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 pr-[6rem] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="مەزمۇن كىرگۈزۈڭ..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ئىزدەش
          </button>
        </div>
      </form>
    </div>
    <FooterCom />
  </div>
</template>
