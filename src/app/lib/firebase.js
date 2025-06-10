
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCKMZ3AwLMkSDbkMVgSr6dQlkn6aOcGUls",
    authDomain: "web-project-ca895.firebaseapp.com",
    projectId: "web-project-ca895",
    storageBucket: "web-project-ca895.appspot.com",
    messagingSenderId: "77248367167",
    appId: "1:77248367167:web:1f99e6bb8bec200439068a",
    measurementId: "G-KNZ2J1MRL7"
  };
  
  const app = initializeApp(firebaseConfig);

  export {app};