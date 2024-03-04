import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyArt58WLHbSIcaz-WRgMAsxraVMQqa_WJE",
  authDomain: "chatboxkk-4e87c.firebaseapp.com",
  projectId: "chatboxkk-4e87c",
  storageBucket: "chatboxkk-4e87c.appspot.com",
  messagingSenderId: "337019165496",
  appId: "1:337019165496:web:60e107c5aeea4ef9467fcd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}