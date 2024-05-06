<script setup>
import {ref} from "vue"
import LanguageSwitcher from '@/components/homepage/LanguageSwitcher.vue'
import {db} from "@/db/firebase.config.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from 'vue-router';

import {
  Input,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Input, Ripple});



const formData = ref({
    name:'',
    email : "",
    password: "",

})

const {name, email, password} = formData

const onSubmit = async ()=>{

  try {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    updateProfile(auth.currentUser, {
      displayName:name
    })

    const router = useRouter();
    router.push('/');

  } catch (error) {

    
  }

}



</script>

<template>
  <div
    class="overflow-hidden bg-cover bg-no-repeat"
     style="background-image: url('https://tecdn.b-cdn.net/img/new/slides/041.webp'); height: 100vh;"
    >
    <div
     class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style="background-color: rgba(0, 0, 0, 0.6)"
    >
  
<section class="h-screen">
  <div class="container h-full px-6 py-24">
    <language-switcher/>
    <div
      class="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <!-- Left column container with background-->
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <div class="flex flex-col text-center  hidden md:block  ">
        <h1 class="text-red-700 font-extrabold text-3xl">Welcome to Googoom!</h1>
        <p class="text-2xl text-white">Googoom let you connet to the East Turkistani community around world</p>
    </div>
      </div>

      <!-- Right column container with form -->
      <div class="bg-white rounded-lg px-7 py-10 md:w-8/12 lg:ms-6 lg:w-4/12">
        <h1 class="text-lg text-center pb-3 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {{ $t("register.header") }}
              </h1>
        <form @submit.prevent="onSubmit"> 
          <!--name input-->
             <!-- User Name input-->
             <div class="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="text"
              v-model="formData.name"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="User Name" />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("register.name") }}
            </label>
          </div>
          <!-- Email input -->
          <div class="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              v-model="formData.email"
             />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >{{ $t("register.email") }}
            </label>
          </div>

          <!-- Password input -->
          <div class="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              v-model="formData.password"
              />
            <label
              for="exampleFormControlInput33"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >{{ $t("register.password") }}
            </label>
          </div>
          <div class="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="password"
              class="peer block bg-blue-100 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              />
            <label
              for="exampleFormControlInput33"
              class="pointer-events-none  absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("register.confirmPassword") }}
            </label>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            {{ $t("register.button") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div>

</template>



