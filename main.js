const buttons = document.querySelectorAll(".buttons");
let result = document.getElementById("display");
let score = document.querySelector(".score");
let pScore = document.querySelector(".p-score");
let resulting = document.getElementById("resulting");
let computerScore = 0;
let playerScore = 0;


buttons.forEach(but => but.addEventListener("click", play));

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const outcome = getWinner(playerChoice, computerChoice);
  result.innerHTML = `The computer chose ${computerChoice} you ${outcome}!`

}

//Get Computer Choice

function getComputerChoice() {
  let comp = Math.floor(Math.random() * 3);
  if (comp === 0) {
    return "rock";
  }
  if (comp === 1) {
    return "paper";
  }
  if (comp === 2) {
    return "scissors";
  }
}

//Calculate winner

function getWinner(player, computer) {
  if (player === computer) return "draw";

  else if (player === "rock" && computer === "paper") {
    lose();
    return "lose";
  }

  else if (player === "paper" && computer === "scissors") {
    lose();
    return "lose";
  }
  else if (player === "scissors" && computer === "rock") {
    lose();
    return "lose";
  }

  else if (player === "rock" && computer === "scissors") {
    win();
    return "win";
  }
  else if (player === "paper" && computer === "rock") {
    win();
    return "win";
  }
  else if (player === "scissors" && computer === "paper") {
    win();
    return "win";
  }
}

function win() {
  playerScore++;
  pScore.textContent = playerScore;
}

function lose() {
  computerScore++;
  score.textContent = computerScore;
}