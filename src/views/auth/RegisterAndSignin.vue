<script setup>

import {ref, computed, reactive} from "vue";
import {useStoreAuth} from "@/stores/user/index.js"



const storeAuth = useStoreAuth()
const register = ref(false)
const formData = reactive({
    email:'email@email.com',
    password:'123456'
})


const formTitle = computed(()=>{
    return register.value ? 'Register' : 'Sign In'
})




// submit 

const onSubmit = ()=>{
    
    if(!formData.email || !formData.password){
        
        alert('Please enter email and password')
    }else {
        if(register.value){
            console.log(register.value)
            storeAuth.registerUser(formData)
        }else{
            console.log('i am sign in know', formData )
        }
    }



}









</script>

<template>
    

    <section class="flex flex-col gap-10 bg-gray-100 font-[sans-serif] text-[#333] h-screen">
        <div class="">
            <div class="container top-10 flex flex-col items-center bg-gray-100">
               <h1>Register and login </h1>
                    <div>
                        <ul class="flex gap-4 text-white text-lg">
                            <li :class="{'bg-blue-500': register, 'bg-gray-700':!register}" class="px-4 py-2 rounded-lg" > 
                                <router-link to="" @click.prevent='register=true'> Register</router-link>
                            </li>
                            <li :class="{'bg-blue-500': !register, 'bg-gray-700':register}" class="px-4 py-2 rounded-lg">
                                <router-link @click.prevent="register=false" to="">Sign In</router-link>
                            </li><li class="bg-red-500 px-4 py-2 rounded-lg">
                                <router-link  to="">Logout</router-link>
                            </li>
                        </ul>
                    </div>

            </div>

           

        </div>
        <div>
            <div class=" flex justify-center dark:bg-gray-900">
         <div class="grid gap-8">
            <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
      >
                  <div
                    class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                    >
                    <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                    {{formTitle}}
                    </h1>
                    <form action="#" method="post" class="space-y-4" @submit.prevent="onSubmit">
                        <div>
                        <label for="email" class="mb-2  dark:text-gray-400 text-lg">Email</label>
                        <input

                            id="email"
                            class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                            type="email"
                            placeholder="Email"
                            required
                            v-model="formData.email"
                        />
                        </div>
                        <div>
                        <label for="password" class="mb-2 dark:text-gray-400 text-lg">Password</label>
                        <input
                            id="password"
                            class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                            type="password"
                            placeholder="Password"
                            required
                            v-model="formData.password"
                        />
                        </div>
                        <a
                        v-show="register===false"
                        class="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="#"
                        >
                        <span
                            class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                            Forget your password?
                        </span>
                        </a>
                        <button
                        class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                        type="submit"
                        >
                        {{formTitle}}
                        </button>
                    </form>
                    <div v-show="register===false" class="flex flex-col mt-4 items-center justify-center text-sm">
                        <h3 class="dark:text-gray-300">
                        Don't have an account?
                        <a
                            class="group text-blue-400 transition-all duration-100 ease-in-out"
                            href="#"
                        >
                            <span
                            class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                            >
                            Sign Up
                            </span>
                        </a>
                        </h3>
                    </div>
          <!-- Third Party Authentication Options -->
        </div>      
         
        </div>
      </div>
    </div>
            </div>
        

    </section>

    



</template>