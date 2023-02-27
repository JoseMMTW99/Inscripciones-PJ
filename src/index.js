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
    apiKey: "AIzaSyCe_riE42NLhgw1b2nRMpqVa5w-HfepR9Y",
    authDomain: "pascuajoven-tuc.firebaseapp.com",
    projectId: "pascuajoven-tuc",
    storageBucket: "pascuajoven-tuc.appspot.com",
    messagingSenderId: "263850726025",
    appId: "1:263850726025:web:8bb33b27db1b397aa42c58"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    App / >
);