// ===========================
// firebase
// ===========================
import "./index.css";
import db from "./firebase";
import {
    collection, addDoc, useEffect, useState, doc, onSnapshot
} from "firebase/firestore";
function App() {
    
    const [posts, setPosts] = useState();

    useEffect(() => {
    },[])
    return 
}

export default App;

// ===========================
// データを取得する
// ===========================
try {
  const docRef = await addDoc(collection(db, "muscle1"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
// ===========================
// データを読み取る
// ===========================
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

const unsub = onSnapshot(
  doc(db, "cities", "SF"),
  { includeMetadataChanges: true },
  (doc) => {
    // ...
  });