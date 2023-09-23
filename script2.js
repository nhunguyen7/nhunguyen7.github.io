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
  
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navBar = document.querySelector('.nav-bar');

  navbarToggle.addEventListener('click', function () {
    navBar.classList.toggle('active');
  });
});
  

  
