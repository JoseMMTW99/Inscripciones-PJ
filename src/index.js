import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO5B7TJkUrhOem7gdUxxQn1GiubrIIdb8",
    authDomain: "pascua-joven-tuc-inscripciones.firebaseapp.com",
    projectId: "pascua-joven-tuc-inscripciones",
    storageBucket: "pascua-joven-tuc-inscripciones.appspot.com",
    messagingSenderId: "623374350126",
    appId: "1:623374350126:web:7bbb23f7eb76d663d8acbf",
    measurementId: "G-NG6TKYMJK9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    App / >
);