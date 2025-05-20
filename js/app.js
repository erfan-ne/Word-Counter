const TextArea = document.querySelector("#textarea")
const CharactersElem = document.querySelector(".characters")
let WordsElem = document.querySelector(".words")
const SentencesElem = document.querySelector(".sentences")

function Counter() {
    const characters = TextArea.value.replace(/[^\p{L}\p{N}]/gu, "").length
    const words = TextArea.value.trim().split(/\s+/).filter(Boolean).length
    const sentences = TextArea.value
        .split(/[\.\!\؟\n]+|\s{4,}/)
        .filter(sentence => sentence.trim().length > 0)
        .length

    CharactersElem.innerHTML = characters
    WordsElem.innerHTML = words
    SentencesElem.innerHTML = sentences
}

TextArea.addEventListener("keyup" , Counter)