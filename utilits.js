import {lettersField} from './constants.js';
import {createOneLetterSpace} from './domcomponents.js';
function getUserLetter(){
    const userLetter = document.getElementById("userLetterField").value;
    return userLetter;
}
function splitWordToLetters(wordToSplit){
    return wordToSplit.split('');
}
function writeSpacesForLetters(word){
    for(let i=0;i<word.length;i++){
        createOneLetterSpace(lettersField);
    }
}