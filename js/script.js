const menu = document.querySelector('.header__list')
const button = document.querySelector('.header__menu-button')
const login = document.querySelector('.header__login')
const body = document.body

button.addEventListener("click", function () {
    body.classList.toggle('active')
})