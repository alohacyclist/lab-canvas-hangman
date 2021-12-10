class Hangman {
  constructor(words) {

    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {

    const randomIndex = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomIndex];
    return `${randomWord}`;
  }

  checkIfLetter(keyCode) {

    if (!keyCode) return false;
    if (keyCode < 65 || keyCode > 90) return false;
    if (keyCode > 64 || keyCode < 91) return true;
  }

  checkClickedLetters(letter) {
    
    if (!this.letters.includes(letter)) return true;
    if (this.letters.includes(letter)) return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters = this.guessedLetters.concat(letter);
    return this.secretWord.includes(letter);
  }

  addWrongLetter(letter) {
    
    this.errorsLeft = this.errorsLeft - 1;
    this.letters = this.letters.push(letter);
    return this.errorsLeft;
  }

  checkGameOver() {

    return this.errorsLeft > 0 ? false : true;       
  }

  checkWinner() {
    let guessedLetArr = [...this.guessedLetters];
    let secretWordArr = [...this.secretWord]; 
    let youGuessedRight;

    if (guessedLetArr.sort() === secretWordArr.sort() && secretWordArr.length === this.secretWord.length) {
      youGuessedRight === true;
    }
    if(this.checkGameOver() === false && youGuessedRight === true) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  
  if(hangman.checkIfLetter(event.keyCode)) {
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (hangman.checkClickedLetters(letter)) {
      hangmanCanvas.writeCorrectLetter(hangman.addCorrectLetter(letter));
    } else {
      hangman.addWrongLetter(letter);
      hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    }
    
  }
  console.log(event.keyCode);
  hangmanCanvas.drawHangman(hangman.errorsLeft);
  
});
