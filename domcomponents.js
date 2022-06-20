import {lettersField} from './constants.js';
export function createOneLetterSpace(lettersField){
    const letterSpace = document.createElement('div');
    letterSpace.className = "unknownLetter";
    letterSpace.textContent = "_";
    lettersField.append(letterSpace);
}
createOneLetterSpace(lettersField);