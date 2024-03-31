'use strict'

import { changeTheme } from "./theme.js"
import { changeLanguage, languages } from "./change-languages.js";

const textareaFrom = document.getElementById("main-language-input")
const textareaTo = document.getElementById("secundary-language-input")
const languageFrom = document.getElementById('language-filter-1')
const languageTo = document.getElementById('language-filter-2')
const buttonChangeTranslate = document.getElementById('change-translate')
let infoTraducao


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

const montarTraducao = async () => {
    if(!alice()){
        const traducao = await traduzir(textareaFrom.value?textareaFrom.value:'Olá Mundo!')
        textareaTo.value = traducao
        languages.forEach(languageJson => {
            if (languageJson.id == languageTo.value) {
                infoTraducao = languageJson 
            }
        })

        lerTexto(traducao, infoTraducao)
    
    }
}

const alice = () => {
    
    if (textareaFrom.value.toUpperCase() == 'ALICE') {
        localStorage.setItem('theme', 'light')
        changeTheme()
        textareaTo.value = 'Alice'
        return true
    }else{
        return false
    }
}

const lerTexto = async(texto, info) => {
    let mensagem = new SpeechSynthesisUtterance()
    let vozes = speechSynthesis.getVoices();
    mensagem.text = texto
    mensagem.lang = info.lang
    mensagem.voice = vozes[info.voice]
    mensagem.volume = 1
    speechSynthesis.speak(mensagem)
}

languageFrom.addEventListener('change', () => {
    montarTraducao()
})

languageTo.addEventListener('change', () => {
    montarTraducao()
})

buttonChangeTranslate.addEventListener('click', () => {
    
    textareaFrom.value = textareaTo.value
    let languageFromValue = languageFrom.value
    changeLanguage(languageFrom, languageTo.value)
    languageFrom.value = languageTo.value
    changeLanguage(languageTo, languageFromValue)
    languageTo.value = languageFromValue
    montarTraducao()

})

textareaFrom.addEventListener('keypress', (e) => {

    if (e.key == 'Enter') {
        montarTraducao()
    }

})



