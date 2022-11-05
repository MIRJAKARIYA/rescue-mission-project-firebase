
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADOztXkf_wK0p_2j7CV7yd753kSznFcxw",
  authDomain: "ph-auth-rescue.firebaseapp.com",
  projectId: "ph-auth-rescue",
  storageBucket: "ph-auth-rescue.appspot.com",
  messagingSenderId: "250242130267",
  appId: "1:250242130267:web:5e07e57e6e65c870de7a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;