function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];

    let randInt=Math.floor(Math.random() * 2);

    return choice[randInt];
}



function playRound(playerSelection, computerSelection) {
    if(playerSelection==computerSelection){
        return "Winner";
    }else{
        return "Losser";
    }
  }
  
  
function game(){
    let you=0;
    let pc=0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter your name").toLowerCase();
    const computerSelection = getComputerChoice();
    let x=playRound(playerSelection, computerSelection);
    console.log(x);
    if (x=="Winner"){
        you=you+1;
    }else{
        pc=pc+1;
    }
  }
  if(you>pc){
    return "You won best of five";
  }else{
    return "You lost best of five";
  }
}

console.log(game());
