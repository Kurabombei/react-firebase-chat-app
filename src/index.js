import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyC-_zSmMKOAbMunOhjTtydcAqFKK0PnSFE",
    authDomain: "chat-react-d33f0.firebaseapp.com",
    projectId: "chat-react-d33f0",
    storageBucket: "chat-react-d33f0.appspot.com",
    messagingSenderId: "571498690587",
    appId: "1:571498690587:web:c5fcc011fc6971ac0e20be",
    measurementId: "G-TE8WPWFP8Z"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();
firebase.analytics();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>,
  document.getElementById('root')
);
