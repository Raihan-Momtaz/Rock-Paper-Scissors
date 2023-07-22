function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];

    let randInt=Math.floor(Math.random() * 2);

    return choice[randInt];
}

  
let you=0;
let pc= 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection =="rock" && computerSelection == "rock"){
        
      return "It's a tie";

    }else if(playerSelection =="rock" && computerSelection == "scissor"){
      return "You Win ! rock beats scissor";
    
    }else if(playerSelection =="rock" && computerSelection == "paper"){
      return "You Lose ! paper beats rock"
  
    }else if(playerSelection =="scissor" && computerSelection == "scissor"){
      return "It's a tie";

    }else if(playerSelection =="scissor" && computerSelection == "rock"){
      return "You Win ! rock beats scissor";

    }else if(playerSelection =="scissor" && computerSelection == "paper"){
      return "You Lose ! paper beats scissor";

    }else if(playerSelection =="paper" && computerSelection == "paper"){
      return "It's a tie";

    }else if(playerSelection =="paper" && computerSelection == "rock"){ 
      return "You Win ! paper beats rock";

    }else if(playerSelection =="paper" && computerSelection == "scissor"){
      return "You Lose ! scissor beats paper";

    }
  }
  const container = document.querySelector('#green');
  const content = document.createElement('div');
  content.classList.add('gre');
  let result="You: "+you+" PC: "+pc;
  content.textContent = result;

  container.appendChild(content);


  const buttons = document.querySelectorAll(".play");
  


  const bcontainer = document.querySelector('#blue');
  const bcontent = document.createElement('div');
  bcontent.classList.add('blu');
  bcontent.textContent = "Let's START !";

  bcontainer.appendChild(bcontent);
  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if(you==5 || pc==5) {
          return;
        }
        const container = document.getElementById('blue');
        container.replaceChildren();
        const gcontainer = document.getElementById('green');
        gcontainer.replaceChildren();
        game(button.id);

  });
});

function reseteverything(y){


    const container = document.querySelector('#orange');
    const content = document.createElement('div');
    content.classList.add('orange');
    content.textContent = y;
    container.appendChild(content);
    const butorange = document.createElement('button');
    butorange.classList.add('butorange');
    butorange.textContent = "Play Again?";
    container.appendChild(butorange);
    const c= document.querySelector(".butorange");
    c.addEventListener('click', () => {

      you=0;
      pc=0;

      const g = document.getElementById('orange');
      g.replaceChildren();

      const xcontainer = document.querySelector('#green');
      xcontainer.replaceChildren();
      const xcontent = document.createElement('div');
      xcontent.classList.add('gre');
      let result="You: "+you+" PC: "+pc;
      xcontent.textContent = result;

      xcontainer.appendChild(xcontent);


      const h = document.getElementById('blue');
      h.replaceChildren();
      const ycontainer = document.querySelector('#blue');
      const ycontent = document.createElement('div');
      ycontent.classList.add('blu');
      ycontent.textContent = "Let's START !";
      ycontainer.appendChild(ycontent);



      
    });
    container.appendChild(c);

}



function game(playerSelection){
    const computerSelection = getComputerChoice();
    let x=playRound(playerSelection, computerSelection);
    const container = document.querySelector('#blue');
    const content = document.createElement('div');
    content.classList.add('blu');
    content.textContent = x;

container.appendChild(content);

    console.log(x);
    const win = "Win";
    const lose= "Lose";
    
    if(x.includes(win)){
      you=you+1;
    }else if(x.includes(lose)){
      pc=pc+1;
    }

  const gcontainer = document.querySelector('#green');
  const gcontent = document.createElement('div');
  gcontent.classList.add('gre');
  let result="You: "+you+" PC: "+pc;
  gcontent.textContent = result;

  gcontainer.appendChild(gcontent);
if(you==5){
  let y="You won best of five";
    console.log( "You won best of five");
    reseteverything(y);
  }else if(pc==5){
    let y="You lost best of five";
    console.log( "You lost best of five");
    reseteverything(y);
  }
}