<script setup>
import TermilerHeader from '@/components/termiler/TermilerHeader.vue';
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import SpinnerCom from "@/components/icons/SpinnerCom.vue";
import { db } from "@/db/firebase.config.js";
import { ref as vueRef, reactive } from 'vue';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { doc } from 'firebase/firestore/lite';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';




const isLoading = vueRef(false)

const formData = reactive({
  title: '',
  content: '',
  topic: '',
  duration:'',
  fileInput:null
});

const fileName = vueRef('')



const onPickup = ()=>{
  fileInput.click()     
}
const onFilepicked =  (e)=>{

  const files = e.target.files
  fileName.value = files[0].name

  }



const handleSubmit = async ()=>{

  
  
  try {

    isLoading=true

    const formDataCopy = {...formData} 
    formDataCopy.date = serverTimestamp()
    const docRef = await addDoc(collection(db, "termiler"), formDataCopy);

  if(docRef){
    toast.success('Your story successfully published.')
  }

  const clearFormData =()=> {
  formData.title = '';
  formData.content = '';
  formData.topic = '';
  formData.duration = '';
  formData.fileInput = null;
  }
  
  clearFormData()

  isLoading.value = false
  
} catch (e) {
  
  toast.error('Some thing went wrong')
  isLoading.value = false
}

  
}





// const submitForm = async () => {
//   try {
//     // Upload file to Firebase Storage
//     const fileRef = projectStorage.ref().child(formData.file.name);
//     await fileRef.put(formData.file);

//     // Get download URL of uploaded file
//     const fileUrl = await fileRef.getDownloadURL();

//     // Save form data to Firestore
//     await projectFirestore.collection('forms').add({
//       text1: formData.text1,
//       text2: formData.text2,
//       text3: formData.text3,
//       fileUrl: fileUrl
//     });

//     // Reset form data
//     formData.value = {
//       text1: '',
//       text2: '',
//       text3: '',
//       file: null
//     };

//     // Optionally, show success message or redirect
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     // Optionally, show error message
//   }
// };

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   formData.file = file;
// };

</script>

<template>
    
        <TermilerHeader @submit-form="handleSubmit"/>
<div >
  
<section class="bg-gray-100">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <form action="#" class="space-y-4" @submit.prevent="submitForm">
          <div>
            <label class="sr-only" for="title">Title</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="title"
              type="text"
              id="title"
              v-model="formData.title"
              required
            />
          </div>

          <div>
            <label class="sr-only" for="story">Story...</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Please write your story here..."
              rows="20"
              id="story"
              v-model="formData.content"
              required
            ></textarea>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="duration">Reading time</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Reading Time"
                type="number"
                id="duration"
                v-model="formData.duration"
                required
              />
            </div>
            <div>
              <label class="sr-only" for="Topic">Topic</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Topic"
                type="Topic"
                id="topic"
                v-model="formData.topic"
                required
              />
            </div>
          </div>


          <div class="container mx-auto h-full flex flex-col justify-center items-center">
        <div id="images-container"></div>
        <div class="flex w-full justify-center">
            <div id="multi-upload-button"
                 @click="onPickup" 
                 class="inline-flex items-center px-4 py-2 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
                Click to browse
            </div>
            <div class="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between"
            >
                <span  v-if="fileName" class="p-2">{{ fileName }}</span>
                <span  v-else id="multi-upload-text" class="p-2">Pick image</span>

                <button id="multi-upload-delete" class="hidden" onclick="removeMultiUpload()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-red-700 w-3 h-3"
                         viewBox="0 0 320 512">
                        <path
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                    </svg>
                </button>
            </div>
        </div>

        <input  
         id="fileInput" 
         type="file" 
         accept="image/*"
         ref="fileInput"
         @change="onFilepicked"
         class="hidden"
         multiple: false
         />
    </div>
        </form>
      </div>
   
</section>
    
    

</div>
        


        

    
    

</template>