<script setup>






const props = defineProps(
   {
    modelValue:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        default:"No title specified!"
    },

   }
)


// const handleClick = () =>{
//     emit('update:modelValue', false)
// }

const emit = defineEmits(["update:modelValue"])








</script>


<template>
    <div class="" v-if="modelValue">
        <h1>{{ props.title }}</h1>
        <p><slot name="content"/></p>
        <button @click="$emit('update:modelValue')" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 border border-blue-700 rounded"> Hide Modal</button>
    </div>

</template>