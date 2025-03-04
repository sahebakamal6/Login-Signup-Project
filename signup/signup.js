import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAulFpjikb2gA6UUFZgqUp-n622sCX7Sr8",
  authDomain: "sign-up11.firebaseapp.com",
  projectId: "sign-up11",
  storageBucket: "sign-up11.firebasestorage.app",
  messagingSenderId: "1043471941719",
  appId: "1:1043471941719:web:7e09077775cf674548e312",
  measurementId: "G-ME84B49Q8X",
};

const app = initializeApp(firebaseConfig);

const button = document.getElementById("submit");
const email = document.getElementById("your-email");
const password = document.getElementById("your-password");
const name = document.getElementById("your-name");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Account created successfully",
        confirmButtonText: "OK",
      });
      name.value = "";
      email.value = "";
      password.value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
        confirmButtonText: "Try Again",
      });
    });
});
