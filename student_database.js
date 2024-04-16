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


const signup_submit = document.getElementById("signup_submit");

signup_submit.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const course_name = document.getElementById("cname").value;
  const branch_name = document.getElementById("bname").value;
  const Admission_No = document.getElementById("Admissionno").value;
  const year = document.getElementById("year").value;
  const block_name = document.getElementById("blname").value;
  const Room_No = document.getElementById("roomno").value;
  const mobile = document.getElementById("mobile").value;
  const parent_name = document.getElementById("pname").value;
  const parent_mobile = document.getElementById("pmobile").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          set(ref(database, 'student/' + user.uid), {
              name: name,
              course_name: course_name,
              branch_name: branch_name,
              Admission_No: Admission_No,
              year: year,
              block_name: block_name,
              Room_No: Room_No,
              mobile: mobile,
              parent_name: parent_name,
              parent_mobile: parent_mobile,
              email: email,
              password: password
          }).then(() => {
              alert("Student Signed Up successfully");
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