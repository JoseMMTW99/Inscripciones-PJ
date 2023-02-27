import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_V-rJiNKjqN8PVUzfdoNDYu6t5VenM1o",
    authDomain: "pascua-joven-tuc.firebaseapp.com",
    projectId: "pascua-joven-tuc",
    storageBucket: "pascua-joven-tuc.appspot.com",
    messagingSenderId: "479349897856",
    appId: "1:479349897856:web:a65cdc7aa6c0e4cf054465"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    App / >
);