import {getRandomWord, splitWordToLetters, writeSpacesForLetters} from './utilits.js';
import {words,submitButton,images,popBtnClose} from './constants.js';
import {letterSubmitHandler} from './handlers.js'
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   popBtnClose.addEventListener("click",() => {
         location.reload();
      }
   );
   submitButton.addEventListener("click",(e) => {
      deathScore = letterSubmitHandler(lettersOfSecretWord,deathScore,images);
      e.preventDefault();
   });
}
startTheGame();
