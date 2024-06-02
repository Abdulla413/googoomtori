<script setup>
import FooterCom from "@/components/homepage/FooterCom.vue";
import GoogoomHeader from "@/components/homepage/GoogoomHeader.vue";
</script>

<template>
  <div
    class="flex flex-col mx-auto mb-4 justify-center h-screen"
  >
    <googoom-header />

    <div
      class="mb-auto flex flex-col justify-center items-center pt-[6rem] md:pt-[8rem]"
    >
      <div
        class="flex flex-col justify-center items-center md:gap-8 md:flex-row"
      >
        <img
          src="../assets/shiir1.png"
          alt="Googoom shir1"
          class="w-[350px] w-3/5 md:w-4/5 md:w-[450px]"
        />

        <img
          src="../assets/shiir2.png"
          alt="Googoom shir2"
          class="w-[350px]  w-3/5 md:w-4/5 md:w-[450px] "
        />
      </div>

      <form class="w-auto mt-[2rem] md:w-2/5 md:mt-[5rem]">
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
