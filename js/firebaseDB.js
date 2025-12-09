// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { collection, addDoc, getDocs, deleteDoc, updateDoc,
    doc} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js"
import { getFirestore }  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAVYuDakTf-tUXGXkcQymbWFtrlMCEUKLY",
    authDomain: "ecklawncare-reviews.firebaseapp.com",
    projectId: "ecklawncare-reviews",
    storageBucket: "ecklawncare-reviews.firebasestorage.app",
    messagingSenderId: "658968210000",
    appId: "1:658968210000:web:7f7cd9ed5122dd39063f55"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

  //Add a rsvp
export async function addMessage(messageData) {
    try {
        const docRef = await addDoc (collection(db, "messages"), messageData);
        return {id: docRef.id, ...messageData}
    }   catch (error) {
        console.error("error adding message:", error);
    }
}

//Get RSVPS
export async function getMessage() {
    const messages = [];
    try {const querySnapshot = await getDocs(collection(db, "messages"))
    querySnapshot.forEach((doc)=>{
        messages.push({id: doc.id, ...doc.data()})
    })
    } catch(error) {
        console.error("error retrieving messages: ", error);
    }
    return messages; 
}