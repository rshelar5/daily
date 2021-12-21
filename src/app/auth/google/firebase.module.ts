
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [

  ],
  imports: [


  ],
  providers: [],

  exports: [
  ]
})
export class FirebaseModule { }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAfrg6BAQug6VFVbb5AdSIF8vNRKIc3sT4",
  authDomain: "cryptic-hawk-335512.firebaseapp.com",
  projectId: "cryptic-hawk-335512",
  storageBucket: "cryptic-hawk-335512.appspot.com",
  messagingSenderId: "406286066768",
  appId: "1:406286066768:web:89830a76042d1099d11d55",
  measurementId: "G-DTGYWQ9VQ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
