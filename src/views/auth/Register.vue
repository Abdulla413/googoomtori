<script setup>
import {ref, reactive, registerRuntimeCompiler} from "vue"
import LanguageSwitcher from '@/components/homepage/LanguageSwitcher.vue'
import { db } from "../../db/firebase.config"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter, useRoute } from 'vue-router'
import { useStoreAuth } from "../../stores/user/index";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const storeAuth = useStoreAuth()
const router = useRouter();
const isValid = ref(true)

const credential = reactive({
    name:'', 
    email:'',
    password:'',
    confirmpassword:''
})

const passwordValidation = ()=>{
  const passwordPettern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  isValid.value = passwordPettern.test(credential.password)
}



const onSubmit = ()=>{

  try {
    if(!credential.email){
      toast.error('Please enter an Email')
    }else if(!credential.password){
      toast.error('Please enter the Password')
    }else if (credential.password != credential.confirmpassword){
      toast.error('Password not macht')
    } else if(!isValid.value){
      toast.error('Please enter the valid password')
    }else{
      storeAuth.registerUser(credential)
      router.push("/")

    }
    
  } catch (error) {

    console.log(error)
    
  }

   
}


</script>

<template>

<div class="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-red-900 to-red-700 lg:px-8 px-4 py-4">
          <div>
            <h4 class="text-white text-lg"> {{ $t("register.header") }}</h4>
            <p class="text-[13px] text-white mt-2">خەتلىنىش بېتىگە مەرھەمەت، گۇگۇم ئارقىلىق دىئاسپورادىكى شەرقىي تۈركىستانلىقلارغا ئۇلىنىڭ ۋە شەرقىي تۈركىستان جامائىتى ئۈچۈن تۆھپە قوشۇڭ!</p>
          </div>
          <div>
            <h4 class="text-white text-lg">ئاددى ۋە بىخەتەر خەتلىنىڭ!</h4>
            <p class="text-[13px] text-white mt-2">
           بېتىمىز خەتلىنىش جەريانى ئاددى ۋە بىخەتەر قىلىپ لاھىيەلەنگەن. بىز سىزنىڭ شەخسىيېتىڭىز ۋە ئۇچۇر بىخەتەرلىكىڭىزنى ئالاھىدە ئورۇنغا قويدۇق.</p>
          </div>
        </div>
        <form class="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div class="mb-6">
            <h3 class="text-2xl font-bold  t">{{ $t("register.header") }} </h3>
          </div>
          <div class="space-y-5">
            <div>
              <label class="text-md mb-2 block  ">{{ $t("register.name") }}</label>
              <div class="relative flex items-center rtl:space-x-reserve">
                <input name="name" type="text" v-model="credential.name" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="ئىسىمنى كىرگۈزۈڭ" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div>
              <label class="text-sm mb-2 block">{{ $t("register.email") }}</label>
              <div class="relative flex items-center">
                <input name="email" type="email" v-model="credential.email" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="ئې مەكتۇبنى كىرگۈزۈڭ" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <label class="text-sm mb-2 block">{{ $t("register.password") }}</label>
              <div class="relative flex items-center">
                <input name="password" type="password" v-model="credential.password" @input="passwordValidation" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="شىفىرنى كىرگۈزۈڭ" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
              <span v-if="!isValid" class="text-red-400">Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.</span>
            </div>
            <div>
              <label class="text-sm mb-2 block">{{ $t("register.confirmPassword") }}</label>
              <div class="relative flex items-center">
                <input name="password" type="password" v-model="credential.confirmpassword" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="شىفىرنى كىرگۈزۈڭ" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-3 block text-sm">
               <router-link to="#" class="text-blue-600 font-semibold hover:underline ml-1">{{ $t("register.terms") }}</router-link>  {{ $t("register.accept") }} 
              </label>
            </div>
          </div>
          <div class="!mt-10">
            <button type="button" class="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-[#893311] hover:bg-red-800 focus:outline-none" @click="onSubmit">
              {{ $t("register.button") }}
            </button>
          </div>
          <p class="text-sm mt-6 text-center">{{ $t("register.footer") }} <router-link to="/signin" class="text-blue-600 font-semibold hover:underline ml-1">{{ $t("register.loginhere") }}</router-link></p>
        </form>
      </div>
    </div>

<!-- 
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
      Left column container with background-
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <div class="flex flex-col text-center  hidden md:block  ">
        <h1 class="text-red-700 font-extrabold text-3xl">Welcome to Googoom!</h1>
        <p class="text-2xl text-white">Googoom let you connet to the East Turkistani community around world</p>
    </div>
      </div>

       Right column container with form 
      <div class="bg-white rounded-lg px-7 py-10 md:w-8/12 lg:ms-6 lg:w-4/12">
        <h1 class="text-lg text-center pb-3 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {{ $t("register.header") }}
              </h1>
        <form @submit.prevent="onSubmit"> 
         
              User Name input
             <div class="relative mb-6"  >
            <input
              type="text"
              v-model="credential.name"
              class="peer block bg-blue-100 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="User Name" />
            <label
              
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("register.name") }}
            </label>
          </div>
           Email input 
          <div class="relative mb-6"  >
            <input
              type="email"
              class="peer block bg-blue-100 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              v-model="credential.email"
              
             />
            <label
              
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >{{ $t("register.email") }}
            </label>
            
          </div>

           Password input 
          <div class="relative mb-6"  >
            <input
              type="password"
              class="peer block bg-blue-100 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              @input='passwordValidation'
              v-model="credential.password"
              />
              
            <label
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >{{ $t("register.password") }}
            </label>
            <span v-if="!isValid" class="text-red-400">Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.</span>
          </div>
          <div class="relative mb-6"  >
            <input
              type="password"  
              class="peer block bg-blue-100 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              v-model="credential.confirmpassword"
              />
            <label
              
              class="pointer-events-none  absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("register.confirmPassword") }}
            </label>
          </div>

           Submit button 
          <button type="submit" class="block w-full px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

{{ $t("register.button") }}

</button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div> -->

</template>



