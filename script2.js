document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navBar = document.querySelector('.nav-bar');

  navbarToggle.addEventListener('click', function () {
    navBar.classList.toggle('active');
  });
});
  

  
