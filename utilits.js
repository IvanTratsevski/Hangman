import {lettersField} from './constants.js';
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