'use strict';

// --------------variables------------------------

const displayMessage = (msg) =>{
  document.querySelector(".message").textContent= msg ;
}

const displayNumber = (num) => {
  document.querySelector(".number").textContent = num;
}

const check = document.querySelector(".check");

let score = document.querySelector(".score").textContent =  10;

const displayScore = (scr) => {
  document.querySelector(".score").textContent = scr;
}

let secretNumber = Math.trunc(Math.random()*20) + 1; 

let highScore = 0;

const displayHighScore = (hs) => {
  document.querySelector('.highscore').textContent = hs;
}

const changeBody = (bod) =>{
  document.querySelector("body").style.backgroundColor = bod;
}

const numberWdth = (numw) => {
  document.querySelector('.number').style.width = numw;
}

// --------------------------------------------------------------

// -------------game-logics----------------------------------

check.addEventListener('click', () => {
  
  const guess = Number(document.querySelector(".guess").value);
  
  
  if(!guess){
    displayMessage("No number being placed!!");
  }
  
  else if(guess !== secretNumber){
    displayMessage(guess > secretNumber ? "Too big number guessed!!" : "Too low number guessed!!");
    score -= 1;
  if(score > 0){
    displayScore(score)
  }else{
    displayNumber(secretNumber);
    displayMessage("You have lost the game!!");
    displayScore(0)
    changeBody('red')
  }
  }
  
  else if( guess == secretNumber)
  {
    displayMessage("congratulations!! you have guessed the correct answer");
    displayNumber(secretNumber);
    changeBody('#60b347')
    numberWdth('30rem');

    if(score > highScore){
      highScore = score;
      displayHighScore(score);
    }
     
  }

//--------------------reset------------------------------------  

  document.querySelector(".again").addEventListener('click', ()=> {
   score = 20;
   let secretNumber = Math.trunc(Math.random()*20) + 1; 
   changeBody('#222');
   displayMessage("Start guessing...");
   displayScore(score);
   displayNumber('?');
   document.querySelector('.guess').value = '';
   numberWdth('15rem');
  })

  })