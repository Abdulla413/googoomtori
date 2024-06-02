import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { auth, db } from "@/db/firebase.config.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"; 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { setDoc, doc, serverTimestamp, getDoc} from "firebase/firestore"




export const useStoreAuth = defineStore('storeAuth', {

  state: ()=>({

    user : null,
    error: null
  
      
  }
),
  actions:{

    // User register Action
   async registerUser(credential){

    try {

      const userCredential=await createUserWithEmailAndPassword(auth, credential.email, credential.password)
        
      const user = userCredential.user;

      updateProfile(auth.currentUser, {displayName:credential.name})

      const copyCredential = {...credential}
      delete copyCredential.password
      delete copyCredential.confirmpassword


      copyCredential.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), copyCredential)


      this.user = {
        uid: user.uid,
        displayName: credential.name,
        email: credential.email,
        photoURL: user.photoURL
      };

      localStorage.setItem('user', JSON.stringify(this.user));
      toast.success('Registration successful!');

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


    // Sign in User action
    async signInUser(credential){

      try {

        const userCredential=await signInWithEmailAndPassword(auth, credential.email, credential.password)
        const user = userCredential.user;

        this.user = {
          uid: user.uid,
          displayName: user.name,
          email: user.email,
          photoURL: user.photoURL
        };
       
        localStorage.setItem('user', JSON.stringify(this.user));

        return Promise.resolve(); // Ensure the promise resolves on success

      } catch (error) {

        console.error('Error during sign-in:', error);
        toast.error('Invalid email or password.');
        return Promise.reject(error); // Ensure the promise rejects on error
      }
       

    },


    // Sign out User action

    async userSignOut(){

      try {
        await signOut(auth);
        this.user = null;
        localStorage.removeItem('user');
        toast.success('You have successfully logged out!');
      } catch (error) {
        console.error('Error during sign-out:', error);
        toast.error(error.message);
      }

    }, 

    // Fetch User 

    async fetchUser (){
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
  }

});
