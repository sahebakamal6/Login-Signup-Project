import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_DijBcNiQKU47Y8Qyk7qUZ8RECygVnLA",
  authDomain: "login-with-94dcf.firebaseapp.com",
  projectId: "login-with-94dcf",
  storageBucket: "login-with-94dcf.firebasestorage.app",
  messagingSenderId: "606364453713",
  appId: "1:606364453713:web:69123ba2aa96245c9a2170",
  measurementId: "G-CJG4G3RNLM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

let submit = document.getElementById('googleButton');
submit.addEventListener('click', function(event){
    event.preventDefault();
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
    window.location.href = "/index.html";
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        confirmButtonText: "Try Again",
      });
    const email = error.customData.email;
  
    const credential = GoogleAuthProvider.credentialFromError(error);

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
