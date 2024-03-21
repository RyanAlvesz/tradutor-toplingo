'use strict'

const languageButton = document.getElementsByClassName('language-button')
let standardTranslate = true

for (let button of languageButton) {

    button.children[1].addEventListener('click', (e) => {
        
        e.target.parentNode.parentNode.appendChild(createLanguageButtons(languages[0]))
        e.target.parentNode.parentNode.remove(e.target.parentNode)

    })

}

const languages = [

    {
        id: 'pt-br',
        src: './img/brazil-flag.png',
        alt: 'Bandeira do Brasil'
    },
    {
        id: 'en',
        src: './img/us-flag.png',
        alt: 'Bandeira dos Estados Unidos'
    }

]


const createLanguageButtons = (language) => {

    const div = document.createElement('div')
    div.classList.add('language-button', 'flex', 'items-center', 'justify-center', 'rounded-full')
    
    const img = document.createElement('img')
    language.classList.add('w-12', 'h-12')
    img.src = language.src
    img.alt = language.languageButton
    img.id = language.id
     
    div.appendChild(img)

    return div

}