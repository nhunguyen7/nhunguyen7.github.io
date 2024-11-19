const images = ["assets/huddleUp2.png", "assets/huddleUp.png", "assets/WME2.png", "assets/WME.png", "assets/nhuly.png", "assets/nhuly2.png"];
images.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
});

var navBtns = document.querySelectorAll('.chngNav');
var navToggle = document.querySelector('.nav-toggle');
var navToggle2 = document.querySelector('.nav-toggle2');
var navToggle3 = document.querySelector('.nav-toggle3');
var navBar = document.querySelector('.nav-bar');

function updateColors(isActive, isScrolled) {
  navBtns.forEach(btn => {
    if (isActive || (isScrolled && !isActive)) {
      btn.style.color = 'white';
    } else {
      btn.style.color = 'black';
    }
  });

  if ((isActive || (isScrolled && !isActive))) {
    navToggle.style.backgroundColor = 'white';
    navToggle2.style.backgroundColor = 'white';
    navToggle3.style.backgroundColor = 'white';
  } else {
    navToggle.style.backgroundColor = 'black';
    navToggle2.style.backgroundColor = 'black';
    navToggle3.style.backgroundColor = 'black';
  }
}

// Handle hamburger menu click
var navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function() {
  navBar.classList.toggle('active');
  var isActive = navBar.classList.contains('active');
  var isScrolled = window.scrollY > 0;
  updateColors(isActive, isScrolled);
});

// Update styles based on scroll position
function updateScrollStyles() {
  var isActive = navBar.classList.contains('active');
  var isScrolled = window.scrollY > 0;

  if (!isActive) {
    updateColors(isActive, isScrolled);
  }

  if(isScrolled){
    navBar.classList.add('navbar-scrolled');
  }
  else{
    navBar.classList.remove('navbar-scrolled');
  }
}

// Initial styles on load
window.addEventListener('load', function() {
  updateScrollStyles();
});

// Handle scroll behavior
window.addEventListener('scroll', updateScrollStyles);

function revealOnScroll() {
const sections = document.querySelectorAll('.proj-img');
sections.forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    const images = section.querySelectorAll('.reveal-proj');
    images.forEach(image => {
      image.style.opacity = '1';
      image.style.transform = 'translateY(0)';
    });
  }
});
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



