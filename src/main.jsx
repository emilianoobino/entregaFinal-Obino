import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY6lwqF0yuqu89xcgaZtzzEZ6wxI6UxxI",
  authDomain: "tony-react-c42fa.firebaseapp.com",
  projectId: "tony-react-c42fa",
  storageBucket: "tony-react-c42fa.appspot.com",
  messagingSenderId: "110667897395",
  appId: "1:110667897395:web:a8e6b80c206a26d4b76146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider>
        <App />
        </ChakraProvider>
      </React.StrictMode>
      ,
)
