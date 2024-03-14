'use strict'

const mainLanguage = document.getElementById('main-language')
const secundaryLanguage = document.getElementById('secundary-language')
const changeLanguageButton = document.getElementById('change-translate')
const translateContainer = document.getElementById('translate-container')
let standardTranslate = true

changeLanguageButton.addEventListener('click', () => {

    if (standardTranslate) {
        mainLanguage.classList.add('order-last')
        secundaryLanguage.classList.add('order-first')
        standardTranslate = false
    } else {
        mainLanguage.classList.remove('order-last')
        secundaryLanguage.classList.remove('order-first')
        standardTranslate = true
    }

})