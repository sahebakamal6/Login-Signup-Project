import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQciTU9FfWQxTw-bq-qLSx-0giZt69hKw",
  authDomain: "authentication-9f1bd.firebaseapp.com",
  projectId: "authentication-9f1bd",
  storageBucket: "authentication-9f1bd.firebasestorage.app",
  messagingSenderId: "16574654487",
  appId: "1:16574654487:web:5fe664929ebf6619919452",
  measurementId: "G-DTZ6ZWDYEW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginForm = document.getElementById("loginForm");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitButton = document.getElementById("submit");
const googleLoginButton = document.getElementById("googleButton");

if (loginForm) {
  loginForm.setAttribute("novalidate", "true");
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email and password are required!",
      confirmButtonText: "Try Again",
    });
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome!",
        confirmButtonText: "OK",
      });
      window.location.href = "/index.html";
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        confirmButtonText: "Try Again",
      });
    });
});


googleLoginButton.addEventListener("click", (ev) => {
  ev.preventDefault();


  emailField.removeAttribute("required");
  passwordField.removeAttribute("required");

  signInWithPopup(auth, provider)
    .then((result) => {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome, ${result.user.displayName}!`,
        confirmButtonText: "OK",
      });
      window.location.href = "/index.html";
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        confirmButtonText: "Try Again",
      });
    });
});

const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});


let homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/index.html";
  });
}
