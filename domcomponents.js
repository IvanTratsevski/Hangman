export function createOneLetterSpace(lettersField){
    const letterSpace = document.createElement('div');
    letterSpace.className = "unknownLetter";
    letterSpace.textContent = "_";
    lettersField.append(letterSpace);
}