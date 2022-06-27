import {getRandomWord, splitWordToLetters, writeSpacesForLetters,getUserLetter,getPostitionOfTrueLetters,showTrueLetters, changeImageOfMan,isVictory,showPopup} from './utilits.js';
import {words,submitButton,images} from './constants.js';
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   submitButton.onclick = function(event) {
      let userLetter = getUserLetter();
      if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter).length !==0){
         showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter),userLetter);
      } else {
         console.log('FFF');
         deathScore++;
         changeImageOfMan(deathScore,images);
      }
      if(deathScore === 3){
         showPopup('К сожалению, попытки кончились! Персонажа повесили...');
      } else if (isVictory()){
         showPopup('Поздравляем! Жизнь персонажа спасена! Вы молодец!');
      }
      event.preventDefault();
   };
}
startTheGame();