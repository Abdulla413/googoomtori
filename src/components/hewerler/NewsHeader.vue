<script>
import LanguageSwitcher from "@/components/homepage/LanguageSwitcher.vue";

export default {
  components: { LanguageSwitcher },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
<template>
  <nav
    class="bg-[#893311] font-alkatip_t px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex justify-center gap-4 items-center text-white">
        <router-link to="/">
          <img class="w-[7rem]" src="../../assets/googoom-logo-aq.png" alt="" />
        </router-link>
        <font-awesome-icon icon="fa-solid fa-user" class="text-[2rem]" />
        <language-switcher class="bg-[#893311] border-none rounded-lg" />
      </div>
      <div class="flex md:order-2">
        <router-link to="/">
          <p
            class="text-white hidden font-medium text-2xl px-5 py-2.5 text-center mr-3 md:mr-0 md:block dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Googoom
          </p>
        </router-link>
        <button
          @click="showMenu = !showMenu"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-md text-green-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
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
      </div>
      <div
        class="items-center justify-between text-white w-full md:flex md:w-auto md:order-1"
        :class="showMenu ? 'flex' : 'hidden'"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-[#893311] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
        <li>
            <router-link
              to="/googoomnews"
              class="rounded font-medium hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              ></router-link
            >
          </li>
          <li>
            <router-link
              to="/googoomnews"
              class="rounded font-medium hover:bg-transparent hover:text-[#00FF7F] md:p-0 md: md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("newsAgency.googoomnews") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/istiqlalnews"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("newsAgency.istiqlalnews") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/turkistantimes"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("newsAgency.turkistantimes") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/iuyghurnews"
              class="rounded font-medium hover:text-[#00FF7F] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("newsAgency.iuyghurnews") }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
