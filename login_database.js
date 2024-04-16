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
const database = getDatabase(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("final_email").value;
    const password = document.getElementById("final_password").value;
    const role = document.getElementById("role").value; // Corrected line
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        set(ref(database, 'users/' + user.uid),{
          email : email,
          verified: "YES"
        })
    
        if(email && password){
          
          // Redirect based on role should be inside this block
          switch (role) {
            case 'student':
                window.location.href = "dashboard.html";
                break;
            case 'warden':
                window.location.href = 'warden_dashboard.html';
                break;
            case 'security':
                window.location.href = 'security_dashboard.html';
                break;
            default:
                console.error('Invalid role');
          }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Incorrect Credentials")
      });
  });
