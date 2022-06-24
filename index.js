import {getRandomWord, splitWordToLetters, writeSpacesForLetters} from './utilits.js';
import {words,submitButton} from './constants.js';
import {gameIteration} from './handlers.js'
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   writeSpacesForLetters(lettersOfSecretWord);
   submitButton.addEventListener("click",gameIteration(deathScore,lettersOfSecretWord));
}
startTheGame();