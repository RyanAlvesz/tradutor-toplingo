'use strict'

const darkThemeButton = document.getElementById('dark-mode')

const addTheme = () => {
    if (localStorage.theme == 'dark'){
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}    

darkThemeButton.addEventListener('click', () => {

    if (localStorage.getItem('theme') == 'dark') {
        darkThemeButton.children[0].src = './assets/img/moon.svg'
        localStorage.theme = 'light'
        addTheme()
    } else {
        darkThemeButton.children[0].src = './assets/img/sun.svg'
        localStorage.theme = 'dark'
        addTheme()
    }


})

window.addEventListener('load', () => addTheme)
  