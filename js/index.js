const modalMenu = document.querySelector('.modal_nav')
const clous = document.querySelector('#clous')

const hamburger = document.querySelector('.hamburger').addEventListener('click', () => {
    modalMenu.style.display = 'block'
})

clous.addEventListener('click', () => {
    modalMenu.style.display = 'none'
})