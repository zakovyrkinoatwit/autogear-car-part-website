/* Hero Slides */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


/* User Button */
document.addEventListener('DOMContentLoaded', (event) => {
  const userIcon = document.getElementById('user-icon');
  const loginForm = document.getElementById('login-form');
  const login = document.getElementById('login');
  const register = document.getElementById('register');

  userIcon.addEventListener('click', function(e) {
      loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
      e.stopPropagation();
  });

  document.addEventListener('click', function(e) {
      if (!loginForm.contains(e.target) && e.target !== userIcon) {
          loginForm.style.display = 'none';
      }
  });

  loginForm.addEventListener('click', function(e) {
      e.stopPropagation();
  });
});

function showRegister() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('register').style.display = 'block';
}

function showLogin() {
  document.getElementById('login').style.display = 'block';
  document.getElementById('register').style.display = 'none';
}

