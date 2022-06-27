import {getUserLetter,getPostitionOfTrueLetters,showTrueLetters, changeImageOfMan,isVictory} from './utilits.js';
export function letterSubmitHandler(lettersOfSecretWord, deathScore, images){
    let userLetter = getUserLetter();
    document.getElementById("userLetterField").value = "";
    if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter).length !==0){
        showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter),userLetter);
    } else {
        deathScore++;
        changeImageOfMan(deathScore,images);
    }
    if(deathScore === 3){
        //loss
    } else if (isVictory()){
        //win
    }
    return deathScore;
}