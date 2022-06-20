import {lettersField} from './constants.js';
function getUserLetter(){
    const userLetter = document.getElementById("userLetterField").value;
    return userLetter;
}
function splitWordToLetters(wordToSplit){
    return wordToSplit.split('');
}