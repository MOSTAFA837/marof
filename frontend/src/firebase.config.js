// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHpkp06igUMGSgbavYWhvTAaime8uPPNY",
  authDomain: "profile-6f9f3.firebaseapp.com",
  projectId: "profile-6f9f3",
  storageBucket: "profile-6f9f3.appspot.com",
  messagingSenderId: "757959704412",
  appId: "1:757959704412:web:105783ea0dd2f0db580b99",
  measurementId: "G-R875G8M871",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "it";
auth.useDeviceLanguage();
