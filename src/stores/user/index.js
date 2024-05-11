import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { auth } from "@/db/firebase.config.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { useRouter, useRoute } from 'vue-router'

import { setDoc, doc, serverTimestamp} from "firebase/firestore"



export const useStoreAuth = defineStore('storeAuth', {

  state:()=>{
    return {
      
      }
      
  },

  actions:{

   async registerUser(credential){

    try {

      const userCredential=await createUserWithEmailAndPassword(auth, credential.email, credential.password)
        
      const user = userCredential.user;

      updateProfile(auth.currentUser, {displayName:credential.name})

      if(user){
        const router = useRouter();
        router.push({ path: '/' })
      }

    
      
      
      
    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      
      if(errorMessage.includes('email-already-in-use')){
        toast.error('This email already used!')
      }else {
        toast.error(errorMessage)
      }
    }
    },

    async signInUser(credential){
      const userCredential=await signInWithEmailAndPassword(auth, credential.email, credential.password)
      const user = userCredential.user;
      console.log(user,  ' sign in user in user store pinia')

      toast.success('You have successfully loged in !')

    }


  }

  
});
