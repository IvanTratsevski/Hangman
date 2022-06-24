import {getRandomWord, splitWordToLetters, writeSpacesForLetters,getUserLetter,getPostitionOfTrueLetters,showTrueLetters, changeImageOfMan,isVictory} from './utilits.js';
import {words,submitButton,images} from './constants.js';
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   const text=document.getElementsByClassName('popup__text');
   submitButton.onclick = function() {
      let userLetter = getUserLetter();
      if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter).length !==0){
         showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter),userLetter);
      } else {
         console.log('FFF');
         deathScore++;
         changeImageOfMan(deathScore,images);
      }
      if(deathScore === 3){
         popup.style.opacity = "1";
         popup.style.visibility = "visible";
         text[0].innerText = 'К сожалению, попытки кончились! Персонажа повесили';
      } else if (isVictory()){
         popup.style.opacity="1";
         popup.style.visibility="visible";
         text[0].textContent='Поздравляем! Жизнь персонажа спасена! Вы молодец!';
      }
   };
}
startTheGame();