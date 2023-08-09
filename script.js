const images = ["assets/huddleUp2.png", "assets/huddleUp.png", "assets/WME2.png", "assets/WME.png", "assets/nhuly.png", "assets/nhuly2.png"];
images.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
});

window.addEventListener('DOMContentLoaded', function() {
    var pageUrl = window.location.pathname;
    var homeHeading = document.getElementById('home-btn');
    var aboutHeading = document.getElementById('about-btn');
    
    if (pageUrl.includes('index.html')) {
      homeHeading.classList.add('bold');
    } else if (pageUrl.includes('about.html')) {
      aboutHeading.classList.add('bold');
    }
  });

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-bar');
  var navBtns = document.querySelector('.chngNav');
  var homeHeading = document.getElementById('home-btn');
  var aboutHeading = document.getElementById('about-btn');
  var contact = document.getElementById('contact-btn');

  
  // var landingSection = document.querySelector('.landing-section');

  // if (pageUrl.includes('index.html')){}

  // if (window.scrollY > 0 && pageUrl.includes('index.html')) {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
    navBtns.style.color = 'white';
    homeHeading.style.color = 'white';
    aboutHeading.style.color = 'white';
    contact.style.color = 'white';
  }
  else {
    navbar.classList.remove('navbar-scrolled');
    navBtns.style.color = 'black';
    homeHeading.style.color = 'black';
    aboutHeading.style.color = 'black';
    contact.style.color = 'black';
  }
});

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