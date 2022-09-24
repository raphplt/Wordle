import * as lib from './lib';

const wordToGuess: string = lib.getRandomWord();
console.log(wordToGuess);
for (let a : number = 0; a < 6; a += 1) {
  const playerInput : string = lib.getInput('Type a word');
  if (playerInput !== playerInput.toUpperCase() || playerInput.length !== 5) {
    console.log('Please, type a correct answer');
    a -= 1;
  }
  if (playerInput === wordToGuess) {
    console.log('Congratulations, you guessed the word.');
    break;
  } if (playerInput !== wordToGuess) {
    const inputTab : any[] = [];
    for (let b : number; b < 6; b += 1) {
      if (wordToGuess[b] === playerInput[b]) {
        inputTab.push(`\x1b[33m${b} \x1b[10m`);
      }
      if (inputTab[b].includes(wordToGuess[b]) === true) {
        inputTab.push(`\x1b[33m${b} \x1b[14m`);
      } else {
        inputTab.push(b);
      }
    }
    console.log(inputTab);
  }
}
