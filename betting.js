function askForBet(){
  return parseInt(prompt("How much do you want to bet?"))
}
function askForGuess(){
  return parseInt(prompt("Guess a number between 1 and 10"));
}
function getRandom(){
  return Math.ceil(Math.random() * 10)
}

function evalBet(){
  bet = askForBet();
  guess = askForGuess();
  correct = getRandom();
  win = 0;
  if(guess == correct ){
    win = bet * 2;
  }else{
    if(Math.abs(correct - guess) == 1){
      win = bet;
    }
  }
  return win;
}

}