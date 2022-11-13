"use strict";

// Preloader
window.addEventListener('load', function () {
  document.getElementById('preloader').classList.add('fade-out');
  setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
  }, 600);
}); // Nav

var toggler = document.getElementById('toggle-menu');
var navMenu = document.getElementById('nav-menu');

function navToggle() {
  navMenu.classList.toggle('active');
  toggler.classList.toggle('active');
}

toggler.addEventListener('click', navToggle);
document.addEventListener('click', function (event) {
  var isClickInsideNav = navMenu.contains(event.target);
  var isClickInsideToggler = toggler.contains(event.target);

  if (!(isClickInsideNav || isClickInsideToggler) && navMenu.classList.contains('active')) {
    navToggle();
  }
});
var navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(function (link) {
  link.addEventListener('click', navToggle);
});
var header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('header-visible');
  } else {
    header.classList.remove('header-visible');
  }
}); // Theme switcher

function themeSwitcher() {
  var switcherBtn = document.getElementById('switcher-btn');
  var icon = switcherBtn.querySelector('i');

  function changeIcon() {
    if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    }
  }

  switcherBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    changeIcon();

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark-theme');
    } else {
      localStorage.setItem('theme', 'light-theme');
    }
  });

  function getCurrentTheme() {
    if (selectedTheme === 'dark-theme') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  var selectedTheme = localStorage.getItem('theme');

  if (selectedTheme) {
    getCurrentTheme();
  }

  changeIcon();
}

themeSwitcher();
//# sourceMappingURL=scripts.js.map