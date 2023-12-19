import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// import Config from "react-native-config";

const firebaseConfig = {
  apiKey: "AIzaSyDYI9Zt-M1nZQKPtJ5Ws8ePCEvhA1uPpQU",
  authDomain: "awesomeproject-8a96d.firebaseapp.com",
  projectId: "awesomeproject-8a96d",
  storageBucket: "awesomeproject-8a96d.appspot.com",
  messagingSenderId: "592402061125",
  appId: "1:592402061125:web:36b5b351ab677e95cdd02c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const favourites = collection(db, "favourites");

export default app;
