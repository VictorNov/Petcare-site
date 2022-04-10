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