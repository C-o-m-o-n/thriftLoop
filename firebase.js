// Import the functions you need from the SDKs you need
import {firebase} from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdj50Z4qDi5qgE8NZjmTbqhdTRtF7I5CQ",
  authDomain: "sigma-cortex-380813.firebaseapp.com",
  projectId: "sigma-cortex-380813",
  storageBucket: "sigma-cortex-380813.appspot.com",
  messagingSenderId: "99216476858",
  appId: "1:99216476858:web:1a120385e96c0fd0539083",
  measurementId: "G-68X3XWD60T"
};
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}
// Initialize Firebase
const auth = firebase.auth();
const analytics = getAnalytics(app);
export {auth}