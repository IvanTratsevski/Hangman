import { lettersField} from './constants.js';
import { createOneLetterSpace } from './domcomponents.js';
function getRandomWord(words) {
    return words[Math.round(Math.random() * (words.length - 1))];
}
function getUserLetter() {
    const userLetter = document.getElementById("userLetterField").value;
    return userLetter;
}
function splitWordToLetters(wordToSplit) {
    return wordToSplit.split('');
}
function writeSpacesForLetters(word) {
    word.forEach((element) => createOneLetterSpace(lettersField));
}
function compareLetters(currentLetter, userLetter) {
    return currentLetter.toLowerCase() === userLetter.toLowerCase();
}
function getPostitionOfTrueLetters(word, userLetter) {
    let positions = [];
    word.forEach(function (item, index) {
        if(compareLetters(item, userLetter)){
            positions.push(index)
        }
    });
    return positions;
}
function showTrueLetters(positions, userLetter) {
    let unknownLetters = document.getElementsByClassName('unknownLetter');
    positions.forEach(function (item) {
        unknownLetters[item].textContent = userLetter;
    });
}
function changeImageOfMan(deathScore,images){
    const imageOfMan = document.getElementById('imageOfMan');
    imageOfMan.src = 'img/' + images[deathScore]+'.png';
}
function isVictory(){
    const lettersSpaces = [...document.getElementsByClassName('unknownLetter')];
    return lettersSpaces.every((el) => el.textContent !== "_");
}
export {
    getRandomWord,
    splitWordToLetters,
    isVictory,
    getUserLetter,
    getPostitionOfTrueLetters,
    writeSpacesForLetters,
    showTrueLetters,
    changeImageOfMan
};