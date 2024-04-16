import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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

const warden_signup_submit = document.getElementById("warden_signup_submit");

warden_signup_submit.addEventListener("click", function (event) {
  event.preventDefault();

  const wname = document.getElementById("wname").value;
  const wId_no = document.getElementById("wId").value;
  const wmobile = document.getElementById("wmobile").value;
  const wemail = document.getElementById("wemail").value;
  const wpassword = document.getElementById("wpassword").value;

  createUserWithEmailAndPassword(auth, wemail, wpassword)
      .then((userCredential) => {
          const user = userCredential.user;
          set(ref(database, 'Warden/' + user.uid), {
              name: wname,
              id: wId_no,
              mobile: wmobile,
              email: wemail,
              password: wpassword
          }).then(() => {
              alert("Warden Signed Up successfully!");
              // Redirect user to desired page after signup
              window.location.href = "index.html";
          }).catch((error) => {
              alert("Error: " + error.message);
          });
      })
      .catch((error) => {
          alert("Error: " + error.message);
      });
});