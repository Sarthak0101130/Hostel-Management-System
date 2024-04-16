import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getDatabase , set, ref} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBR1zfax1XxIPVtSl8UkJQUQfLSfR4Zb_0",
    authDomain: "hostel-management-system-b9257.firebaseapp.com",
    projectId: "hostel-management-system-b9257",
    storageBucket: "hostel-management-system-b9257.appspot.com",
    messagingSenderId: "240932865351",
    appId: "1:240932865351:web:2fbe2834a7500fd9ba7862",
    measurementId: "G-L02FZ4J1M8",
    databaseURL: "https://hostel-management-system-b9257-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

firebase.initializeApp(firebaseConfig);
const logoutBtn = document.getElementById("logout");

// Add event listener for logout button click
logoutBtn.addEventListener("click", function(event) {
  event.preventDefault();

  // Sign out the user
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log("User signed out successfully");
    // Redirect to the login page or any other page you want
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out:", error);
    alert("Error")
  });
});