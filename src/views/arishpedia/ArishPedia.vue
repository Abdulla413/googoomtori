<script setup>

import Modals from '../Modals.vue';
import GoogoomHeader from '@/components/homepage/GoogoomHeader.vue'
import FooterCom from "@/components/homepage/FooterCom.vue";
import { ref } from 'vue';


const showModal = ref(false)





</script>

<template>
    
    <div   class="flex flex-col mx-auto mb-4 justify-center h-screen font-alkatip_t">
        <googoom-header />

        <h1>Arishpedia</h1>

        <button @click="showModal= true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Show Modal</button>

        <modals 
        v-model="showModal"
        @hide-modal="showModal=false"
    
       >
            
            <template v-slot:content >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt omnis eius id accusantium libero, maxime eaque iste tempora! Quos sequi totam laudantium asperiores culpa aliquam ipsam similique voluptas illum fuga!
            </template>
        
        
        </modals>


        <footer-com/>

    </div>
</template>