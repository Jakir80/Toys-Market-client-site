
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    // apiKey:import.meta.env.VITE_apiKey,
    // authDomain:import.meta.env.VITE_authDomain,
    // projectId:import.meta.env.VITE_projectId,
    // storageBucket:import.meta.env.VITE_storageBucket,
    // messagingSenderId:import.meta.env.VITE_messagingSenderId,
    // appId:import.meta.env.VITE_appId,
    apiKey: "AIzaSyA6VEmzGfslUs5-H22NgzQU11xP96vf7QA",
    authDomain: "toys-market-80a22.firebaseapp.com",
    projectId: "toys-market-80a22",
    storageBucket: "toys-market-80a22.appspot.com",
    messagingSenderId: "484842523887",
    appId: "1:484842523887:web:e3715b273958c30b1bdf1a"
};

const app = initializeApp(firebaseConfig);
export default app;