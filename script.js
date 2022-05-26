'use strict';

let message = document.querySelector(".message");

const check = document.querySelector(".check");

const number = document.querySelector(".number");

let score = document.querySelector(".score").textContent =  20;

let secretNumber = Math.trunc(Math.random()*20) + 1; 

let highScore = 0;

check.addEventListener('click', () => {
  
  const guess = Number(document.querySelector(".guess").value);
  
  
  if(!guess){
    message.textContent = "No number being placed!!";

  }
  else if( guess > secretNumber){
    message.textContent = "Too big number guessed!!";
    score -= 1;
  if(score > 0){
    document.querySelector(".score").textContent = score;
  }else{
    number.textContent = secretNumber;
    message.textContent = "You have lost the game!!";
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = 'red';
  }
    
  }else if( guess < secretNumber)
  {
    message.textContent = "Too low number guessed!!";
    score -= 1;
    
    if(score > 0){
      document.querySelector(".score").textContent = score;
    }else{
      number.textContent = secretNumber;    
      message.textContent = "You have lost the game!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = 'red';
    }

  }else if( guess == secretNumber)
  {
    message.textContent = "congratulations!! you have guessed the correct answer"
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
     
  }
 

  document.querySelector(".again").addEventListener('click', ()=> {
   score = 20;
   let secretNumber = Math.trunc(Math.random()*20) + 1; 
   document.querySelector("body").style.backgroundColor = '#222';
   message.textContent = "Start guessing...";
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('.number').style.width = '15rem';
  })

  })