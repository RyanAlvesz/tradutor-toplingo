'use strict'

const filter1 = document.getElementById('language-filter-1')
const filter2 = document.getElementById('language-filter-2')
const buttonChangeTranslate = document.getElementById('change-translate')
let standardTranslate = true

const languages = [

    {
        id: 'pt-br',
        src: './assets/img/brazil-flag.png',
        alt: 'Bandeira do Brasil',
        placeholder: 'Olá, Mundo!'
    },
    {
        id: 'en',
        src: './assets/img/us-flag.png',
        alt: 'Bandeira dos Estados Unidos',
        placeholder: 'Hello, World!'
    },
    {
        id: 'es-es',
        src: './assets/img/spain-flag.png',
        alt: 'Bandeira da Espanha',
        placeholder: 'Hola, Mundo!'
    }

]

export const changeLanguage = (input, language) => {

    languages.forEach(languageJson => {
      
        if (languageJson.id == language) {

            input.nextElementSibling.children[1].children[0].src = languageJson.src
            input.nextElementSibling.children[1].children[0].alt = languageJson.alt
            input.nextElementSibling.children[0].placeholder = languageJson.placeholder

        }

    })

}


filter1.addEventListener('change', () => {
    changeLanguage(filter1, filter1.value)
})

filter2.addEventListener('change', () => {
    changeLanguage(filter2, filter2.value)
})
