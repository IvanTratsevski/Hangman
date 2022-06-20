import {lettersField} from './constants.js';
function getUserLetter(){
    const userLetter = document.getElementById("userLetterField").value;
    return userLetter;
}
function splitWordToLetters(wordToSplit){
    return wordToSplit.split('');
}
function createSpaceForLetters(word){
    for(let i=0; i < word.length;i++){
        let letterWrapper = document.createElement('div');
        letterWrapper.className = `letterWrapper ${word[i]}`;
        letterWrapper.textContent = '_';
        lettersField.append(letterWrapper);
    }
}
function compareLetter(currentLetter,userLetter){
    if(currentLetter.toLowerCase() === userLetter.toLowerCase()){
        return true;
    } else {
        return false;
    }
}