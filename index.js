import {getRandomWord, splitWordToLetters,isVictory, getUserLetter,getPostitionOfTrueLetters, writeSpacesForLetters,showTrueLetters, changeImageOfMan} from './utilits.js';
import {words,images,submitButton} from './constants.js';
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   while(deathScore !==3 || isVictory()){
      let userLetter = '';
      submitButton.addEventListener("click",function iteration(){
         userLetter = getUserLetter();
      });
      if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter) !== []){
         showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter));
      } else {
         changeImageOfMan(deathScore,images)
         deathScore++;
      }
      if(deathScore ===3){
         alert("proigrish");
         break;
      } else if(isVictory()) {
         alert("pobeda");
         break;
      }
   }
   
}
startTheGame();