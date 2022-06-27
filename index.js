import {getRandomWord, splitWordToLetters, writeSpacesForLetters,getUserLetter,getPostitionOfTrueLetters,showTrueLetters, changeImageOfMan,isVictory} from './utilits.js';
import {words,submitButton,images,popBtnClose} from './constants.js';
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   const text=document.getElementsByClassName('popup__text');
   submitButton.onclick = function(event) {
      let userLetter = getUserLetter();
      if(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter).length !==0){
         showTrueLetters(getPostitionOfTrueLetters(lettersOfSecretWord,userLetter),userLetter);
      } else {
         deathScore++;
         console.log('FFF');
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
      event.preventDefault();
   };
}
startTheGame();