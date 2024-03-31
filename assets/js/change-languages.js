'use strict'

const filter1 = document.getElementById('language-filter-1')
const filter2 = document.getElementById('language-filter-2')

// Definindo as línguas e suas informações

export const languages = [

    {
        id: 'pt-br',
        src: './assets/img/brazil-flag.png',
        alt: 'Bandeira do Brasil',
        placeholder: 'Olá, Mundo!',
        lang: 'pt-BR',
        voice: 16,
    },
    {
        id: 'en',
        src: './assets/img/us-flag.png',
        alt: 'Bandeira dos Estados Unidos',
        placeholder: 'Hello, World!',
        lang: 'en-ES',
        voice: 3
    },
    {
        id: 'es-es',
        src: './assets/img/spain-flag.png',
        alt: 'Bandeira da Espanha',
        placeholder: 'Hola, Mundo!',
        lang: 'es-ES',
        voice: 6
    }

]



// Trocar a língua

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
