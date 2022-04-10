// Preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('fade-out')
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none'
  }, 600)
})

// Nav
const toggler = document.getElementById('toggle-menu')
const navMenu = document.getElementById('nav-menu')

function navToggle() {
  navMenu.classList.toggle('active')
  toggler.classList.toggle('active')
}

toggler.addEventListener('click', navToggle)

document.addEventListener('click', event => {
  const isClickInsideNav = navMenu.contains(event.target)
  const isClickInsideToggler = toggler.contains(event.target)
  if(!(isClickInsideNav || isClickInsideToggler) && navMenu.classList.contains('active')) {
    navToggle()
  }
})

const navLinks = navMenu.querySelectorAll('a')

navLinks.forEach(link => {
  link.addEventListener('click', navToggle)
})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('header-visible')
  } else {
    header.classList.remove('header-visible')
  }
})

// Theme switcher
function themeSwitcher() {
  const switcherBtn = document.getElementById('switcher-btn')
  const icon = switcherBtn.querySelector('i')

  function changeIcon() {
    if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('fa-moon')
      icon.classList.add('fa-sun')
    } else {
      icon.classList.add('fa-moon')
      icon.classList.remove('fa-sun')
    }
  }

  switcherBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    changeIcon()

    if(document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark-theme')
    } else {
      localStorage.setItem('theme', 'light-theme')
    }
  })

  function getCurrentTheme() {
    if (selectedTheme === 'dark-theme') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }

  const selectedTheme = localStorage.getItem('theme')
  if (selectedTheme) {
    getCurrentTheme()
  }
  changeIcon()
}

themeSwitcher()