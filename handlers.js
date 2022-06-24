import {getUserLetter,getPostitionOfTrueLetters,showTrueLetters, changeImageOfMan,isVictory} from './utilits.js';
import {images} from './constants.js';
export function gameIteration(deathScore,lettersOfSecretWord){
    console.log('dddd');
    let userLetter = getUserLetter();
    // if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter) !== []){
    //    showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter));
    // } else {
    //    changeImageOfMan(deathScore,images)
    //    deathScore++;
    // }
    // if(deathScore ===3){
    //     alert("proigrish");
    //  } else if(isVictory()) {
    //     alert("pobeda");
    //  }
 }