import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { auth, db } from "@/db/firebase.config.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { setDoc, doc, serverTimestamp, getDoc} from "firebase/firestore"



export const useStoreAuth = defineStore('storeAuth', {

  state: ()=>{
      
  },

  actions:{

   async registerUser(credential){

    try {

      const userCredential=await createUserWithEmailAndPassword(auth, credential.email, credential.password)
        
      const user = userCredential.user;

      updateProfile(auth.currentUser, {displayName:credential.name})

      const copyCredential = {...credential}
      delete copyCredential.password
      delete copyCredential.confirmpassword


      copyCredential.timestamp = serverTimestamp();

      console.log(copyCredential, 'this is credential')


      await setDoc(doc(db, 'users', user.uid), copyCredential)

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(error, 'error message ')
      
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
      toast.success('You have successfully loged in !')

    }


  }

  
});
