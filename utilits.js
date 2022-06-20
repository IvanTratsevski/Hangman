import {lettersField,words} from './constants.js';
import {createOneLetterSpace} from './domcomponents.js';
function getRandomWord(words){
    return words[Math.round(Math.random()*(words.length-1))];
}
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
function compareLetters(currentLetter,userLetter){
    if(currentLetter.toLowerCase() === userLetter.toLowerCase()){
        return true;
    } else {
        return false;
    }
}
function getPostitionOfTrueLetters(word,userLetter){
    let positions = [];
    word.forEach(function(item, index){
        compareLetters(item,userLetter) ? positions.push(index) : null;
    });
    return positions;
}
function showTrueLetters(positions, userLetter){
    let unknownLetters = document.getElementsByClassName('unknownLetter');
    positions.forEach(function(item){
        unknownLetters[item].textContent = userLetter;
    });