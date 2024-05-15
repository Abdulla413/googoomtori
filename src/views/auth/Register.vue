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
      // router.push("/")
    
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
         
             <!-- User Name input-->
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
          <!-- Email input -->
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

          <!-- Password input -->
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

          <!-- Submit button -->
          <button type="submit" class="block w-full px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

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



