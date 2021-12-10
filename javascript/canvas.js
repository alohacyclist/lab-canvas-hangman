class HangmanCanvas {
  constructor(secretWord) {

    this.ctx = document.getElementById('hangman').getContext('2d');

    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }

  drawLines() {
    const letterLines = this.secretWord.length;

    let letterLine = 25;

    let linePosY = this.height - 100;
    let linePosX = 500;

    for (let i = 0; i < letterLines; i++) {
      
      this.ctx.beginPath();
      this.ctx.moveTo(linePosX, linePosY);
      this.ctx.lineTo(linePosX + 20, linePosY);
      this.ctx.stroke();

      linePosX += letterLine;
      
    }
  }

  writeCorrectLetter(index) {
    
    let correctLetterPosX = 500;
    let correctLetterPosY = this.height - 100;

    this.ctx.font = '40px Arial';
    this.ctx.fillText(this.secretWord[index], correctLetterPosX * index, correctLetterPosY)
  }

  writeWrongLetter(letter, errorsLeft) {
    
    let wrongLetterPosX = 800;
    let wrongLetterPosY = this.height - 500;

    this.ctx.font = '40px Arial';
    for (let i = 0; i < errorsLeft; i + 25) {
      this.ctx.fillText(letter, wrongLetterPosX + [i], wrongLetterPosY);
    }
    

  }

  drawHangman(errorsLeft) {
    
    const drawInstructions = (startPosX, startPosY, endPosX, endPosY) => {
      this.ctx.moveTo(startPosX, startPosY);
      this.ctx.lineTo(endPosX, endPosY);
      this.ctx.stroke();
    }

    switch(errorsLeft) {
      case 9:
        console.log('asdfdsfgsdgsdgdsgsdgsdgsdgsdgs')
        drawInstructions(300, this.height - 100, 450, this.height - 100);
        drawInstructions(450, this.height - 100, 375, this.height - 200);
        drawInstructions(375, this.height - 200, 300, this.height - 100);
    
        break;
    
      case 8:
        drawInstructions(375, this.height - 200, 375, this.height - 400);
    
        break;
    
      case 7:
        drawInstructions(375, this.height - 400, 550, this.height - 400);
    
        break;
    
      case 6:
        drawInstructions(550, this.height - 400, 550, this.height - 350);
    
        break;
    
      case 5:
        this.ctx.arc(550, this.height - 275, 75, 0, Math.PI * 2, false);
    
        break;
    
      case 4:
        drawInstructions(550, this.height - 200, 550, this.height - 150);
    
        break;
    
      case 3:
        drawInstructions(550, this.height - 205, 500, this.height - 175);
    
        break;
    
      case 2:
        drawInstructions(550, this.height - 205, 600, this.height - 175);
    
        break;
    
      case 1:
        drawInstructions(550, this.height - 150, 500, this.height - 145);
        drawInstructions(550, this.height -150, 600, this.height - 145);
    
        break;
    
        }   


}
  
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
