// =====================================
// firebaseの設定
// ======================================
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyDmQfVetVy7NcaNjmsZH1PEt-_JCANN0hU",
        // ===================================
        authDomain: "chat-app-13-7d906.firebaseapp.com",
        databaseURL: "https://chat-app-13-7d906-default-rtdb.firebaseio.com",
        projectId: "chat-app-13-7d906",
        storageBucket: "chat-app-13-7d906.appspot.com",
        messagingSenderId: "786543280934",
        appId: "1:786543280934:web:6952d75556d5c175ef77e7"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// どこでもdbが使えるようにする
export default db;

import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}