const textareaFrom = document.getElementById("main-language-input")
const textareaTo = document.getElementById("secundary-language-input")

const traduzir = async (texto) => {
    const url = `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|en`
    const response = await fetch(url) 
    const data = await response.json()
    return data.responseData.translatedText
}

const montarTraducao = async () => {
    const traducao = await traduzir(textareaFrom.value)
    textareaTo.value = traducao
}

textareaFrom.addEventListener('change', montarTraducao)

