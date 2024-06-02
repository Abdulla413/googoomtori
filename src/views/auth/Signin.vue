<script setup>
import {reactive, ref, computed} from "vue"
import LanguageSwitcher from '@/components/homepage/LanguageSwitcher.vue'
import {db, auth} from "@/db/firebase.config.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { useStoreAuth } from "../../stores/user";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';




const authStore = useStoreAuth();

const router = useRouter();




const credential = reactive({
  email :"",
  password :""
})


const onSubmit = async ()=>{

  try {

    if(!credential.email){
      toast.error('Please enter an Email')
    }else if(!credential.password){
      toast.error('Please enter the Password')
    }else {
      await authStore.signInUser(credential);
      router.push('/');
      toast.success('You have successfully logged in!');
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
            <h4 class="text-white text-lg"> {{ $t("signin.header") }}</h4>
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
            <h3 class="text-2xl font-bold  t">{{ $t("signin.header") }} </h3>
          </div>
          <div class="space-y-5">
            <div>
              <label class="text-sm mb-2 block">{{ $t("register.email") }}</label>
              <div class="relative flex items-center">
                <input name="email" type="email" v-model="credential.email" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="Enter email" />
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
                <input name="password" type="password" v-model="credential.password" required class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 pr-10 rounded-md outline-blue-500" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="!mt-10">
            <button type="button" class="w-full py-3 px-4 text-sm font-bold rounded text-white bg-[#893311] hover:bg-red-800 focus:outline-none" @click="onSubmit">
              {{ $t("signin.button") }}
            </button>
          </div>
          <p class="text-sm mt-6 text-center">{{ $t("signin.footer") }} <router-link to="/register" class="text-blue-600 font-semibold hover:underline ml-1">{{ $t("signin.registerhere") }}</router-link></p>
        </form>
      </div>
    </div>


 <!-- <div
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
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <div class="flex flex-col text-center  hidden md:block  ">
        <h1 class="text-red-700 font-extrabold text-3xl">Welcome to Googoom!</h1>
        <p class="text-2xl text-white">Googoom let you connet to the East Turkistani community around world</p>
    </div>
      </div>

       Right column container with form  
      <div class="bg-white px-5 py-14 rounded-lg md:w-8/12 lg:ms-6 lg:w-4/12">
        <form @submit.prevent="onSubmit">
            
             <div class="relative mb-6">
            <input
              type="text"
              v-model="formData.name"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="name"
              placeholder="User Name" />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("register.name") }}
            </label>
          </div> 
       
            Email input 
          <div class="relative mb-6"  >
            <input
              type="text"
              v-model="credential.email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="email"
              placeholder="Email address" />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("signin.email") }}
            </label>
          </div>

            Password input 
          <div class="relative mb-6"  >
            <input
              type="password"
              v-model="credential.password"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              placeholder="Password" />
            <label
              for="exampleFormControlInput33"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > {{ $t("signin.password") }}
            </label>
          </div>

            Remember me checkbox 
          <div class="mb-6 flex items-center justify-between">
            <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                value=""
                id="exampleCheck3"
                required
                checked />
              <label
                class="inline-block ps-[0.15rem] hover:cursor-pointer"
                for="exampleCheck3">
                Remember me
              </label>
            </div>
            <a
              href="#!"
              class="text-primary focus:outline-none dark:text-primary-400"
              >Forgot password?</a
            >
          </div>

            Submit button
          <button
            type="submit"
            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Sign in
          </button>

           Divider
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

            Social login buttons 
          <a
            class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style="background-color: #3b5998"
            href="#!"
            role="button"
            data-twe-ripple-init
            data-twe-ripple-color="light">
              Facebook -
            <span
              class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512">
                 !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
            Continue with Facebook 
          </a>
          <a
            class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style="background-color: #55acee"
            href="#!"
            role="button"
            data-twe-ripple-init
            data-twe-ripple-color="light">
              X -
            <span class="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                 !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
            Continue with X
          </a>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div>  -->

</template>



