
<script>
export default {

}
</script>

<template>
    <div>
        <nav class="flex text-white pr-3 gap-5 h-[5rem] bg-[#893311] items-center">
            <div class="flex items-center gap-4">
              <img class="w-[7rem]" src="../../assets/googoom-logo-aq.png" alt="">
              <P class="font-alkatip_Ui text-2xl mt-2 text-white lg:text-[2rem] md:text-[2rem] "> خەۋەر قانىلى</P>
            </div>      
        <font-awesome-icon icon="fa-solid fa-user" class="text-2xl lg:text-[2rem]" />
        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-2xl lg:text-[2rem]" />
        <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl lg:text-[2rem]" />
        <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl hidden lg:text-[2rem]" />
        <ul class="text-sm hidden lg:flex gap-3">
          <li>
            <router-link to="#" class="block pl-3 text-md font-alkatip_tt rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">تىزىملىتىش</router-link>
          </li>
          <li>
            <router-link to="#" class="block pl-3 text-md font-alkatip_tt rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">كېرىش</router-link>
          </li>
          <li>
            <router-link to="#" class="block pl-3 text-md font-alkatip_tt rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">چىكىنىش</router-link>
          </li>
        </ul>
      </nav>
    </div>
  
</template>


<style>

</style>