// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjysNpUPrWnX_KrhPUS-TOrPDKScWbrFA",
  authDomain: "sewingprojectmanager.firebaseapp.com",
  projectId: "sewingprojectmanager",
  storageBucket: "sewingprojectmanager.appspot.com",
  messagingSenderId: "869916153830",
  appId: "1:869916153830:web:744f7b356a2a34dd0de827",
  measurementId: "G-VDJV3KWLS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//in the app's root directory for final deployment:
// firebase login
// firebase init
// firebase deploy

//go to:
// sewingprojectmanager.web.app
// OR
// sewingprojectmanager.firebaseapp.com
