import {getRandomWord, splitWordToLetters,isVictory, getUserLetter,compareLetters} from './utilits.js';
import {words} from './constants.js';
function startTheGame() {
   let deathScore = 0;
   const secretWord = getRandomWord(words);
   const lettersOfSecretWord = splitWordToLetters(secretWord);
   while(deathScore !==3 || isVictory()){
      let userLetter = getUserLetter();
      if(com)
   }
}