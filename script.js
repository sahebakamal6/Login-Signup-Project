var typed = new Typed(".auto-type",{
    strings : ["3 Students","Yumna","Asifa","Saheba."],
    typeSpeed: 200,
    backSpeed : 350,
    looped : true
})

let signUpButton = document.getElementById('signupButton');

if (signUpButton) {
    signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500/signup/signup.html"; 
  });
}

const cursor = document.querySelector('.cursor');
var timeout;

document.addEventListener('mousemove', (e) =>{
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = 'block';

  function mouseStopped(){
    cursor.style.display = 'none';
  }
  clearTimeout(timeout);
  timeout= setTimeout(mouseStopped, 1000);
});

document.addEventListener('mouseout', () =>{
  cursor.style.display = 'none';
});