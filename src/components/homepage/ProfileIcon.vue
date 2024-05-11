<script setup>
import {ref} from "vue"

const user=ref(true)
const userEmail = "abdulla"
const userImage = ref(false)

const fristAlphebit = userEmail.charAt(0).toUpperCase();
console.log(fristAlphebit, 'this is frist alphebit')


</script>

<template>
    <div v-if="user"  class="">
        <img v-if="userImage" class="w-[7rem]" src="../../assets/logo-aq.png" alt="" />
        <div v-else="userEmail" class="flex justify-center items-center rounded-full w-12 h-12 bg-[#C37E4C] pt-3">
            <h2 class="text-4xl font-sans">{{fristAlphebit}} </h2>     
        </div>
    </div>
</template>