'use strict'

import { changeTheme } from "./theme.js"
import { changeLanguage, languages } from "./change-languages.js";

const textareaFrom = document.getElementById("main-language-input")
const textareaTo = document.getElementById("secundary-language-input")
const languageFrom = document.getElementById('language-filter-1')
const languageTo = document.getElementById('language-filter-2')
const buttonChangeTranslate = document.getElementById('change-translate')
const form = document.getElementById('form')
const copyButton = document.getElementById('copy-button')
const talkButton = document.getElementById('talk-button')



// Função para selecionar o JSON com as informações de determinada língua baseada no valor do select

const getTranslateInfo = (select) => {

    let json

    languages.forEach(languageJson => {
        if (languageJson.id == select.value) {
            json = languageJson 
        }
    })

    return json

}



// Utilizando api para traduzir

const traduzir = async (texto) => {
    if (languageFrom.value != languageTo.value) {
        const url = `https://api.mymemory.translated.net/get?q=${texto} &langpair=${languageFrom.value}|${languageTo.value}`
        const response = await fetch(url)
        const data = await response.json()
        return data.responseData.translatedText
    } else {
        return texto
    }
}



// Montando tradução 

const montarTraducao = async () => {
    
    let traducao, infoTraducao = getTranslateInfo(languageTo)

    if(!alice()){
        traducao = await traduzir(textareaFrom.value?textareaFrom.value:'Olá Mundo!')
        textareaTo.value = traducao    
    }

    lerTexto(textareaTo.value, infoTraducao)

}



// Trocar de fundo ao digitar ou falar alice

const alice = () => {
    
    if (textareaFrom.value.toUpperCase() == 'ALICE') {
        changeTheme()
        textareaTo.value = 'Alice'
        return true
    }else{
        return false
    }
}



// Ler o texto traduzido

const lerTexto = async(texto, info) => {
    let mensagem = new SpeechSynthesisUtterance()
    let vozes = speechSynthesis.getVoices();
    mensagem.text = texto
    mensagem.lang = info.lang
    mensagem.voice = vozes[info.voice]
    mensagem.volume = 1
    speechSynthesis.speak(mensagem)
}



// Traduzindo após trocar as línguas

languageFrom.addEventListener('change', () => {
    montarTraducao()
})

languageTo.addEventListener('change', () => {
    montarTraducao()
})



// Invertendo línguas

buttonChangeTranslate.addEventListener('click', () => {
    
    textareaFrom.value = textareaTo.value
    let languageFromValue = languageFrom.value
    changeLanguage(languageFrom, languageTo.value)
    languageFrom.value = languageTo.value
    changeLanguage(languageTo, languageFromValue)
    languageTo.value = languageFromValue
    montarTraducao()

})



// Traduzir após apertar enter

textareaFrom.addEventListener('keypress', (e) => {

    if (e.key == 'Enter') {
        montarTraducao()
    }

})



// Impedir form de recarregar página 

form.addEventListener('submit', (e) => {
    e.preventDefault()
})



// Copiar texto Traduzido

copyButton.addEventListener('click', () => {

    navigator.clipboard.writeText(textareaTo.value)

    let span = document.createElement('span')
    span.classList.add('absolute', 'top-[150%]', 'w-32', 'py-2', 'rounded-md', 'font-semibold', 'text-sm', 'bg-main', 'text-white', 'max-md:right-0', 'max-md:top-[200%]')
    span.textContent = 'Texto copiado!'

    copyButton.appendChild(span)
    
    setTimeout(() => {
        copyButton.removeChild(span)
    }, 2000);

})



// Reconhecimento de Fala

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition(); 

talkButton.addEventListener('click', () => {
    recognition.lang = getTranslateInfo(languageFrom).lang
    recognition.start()
})

recognition.addEventListener('result', (e) => {
    let text = e.results[0][0].transcript
    textareaFrom.value = text
    montarTraducao()
})

recognition.addEventListener('audiostart', () => {
    let img = talkButton.children[0]
    img.src = './assets/img/mic-full.svg',
    img.classList.add('animate-scale')
})

recognition.addEventListener('audioend', () => {
    let img = talkButton.children[0]
    img.src = './assets/img/mic-empty.svg',
    img.classList.remove('animate-scale')
})
