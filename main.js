//Global Variables

const buttons = document.querySelectorAll(".buttons");
let result = document.getElementById("display");
let score = document.querySelector(".score");
let pScore = document.querySelector(".p-score");
let resulting = document.getElementById("resulting");
let computerScore = 0;
let playerScore = 0;
//Button click

buttons.forEach(but => but.addEventListener("click", play));

//Store choices

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  result.innerHTML =
    "The Computer chose " + computerChoice + " you " + winner + "";
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

  if (player === "rock" && computer === "paper") {
    lose();
    return "lose";
  }

  if (player === "paper" && computer === "scissors") {
    lose();
    return "lose";
  }
  if (player === "scissors" && computer === "rock") {
    lose();
    return "lose";
  }

  if (player === "rock" && computer === "scissors") {
    win();
    return "win";
  }
  if (player === "paper" && computer === "rock") {
    win();
    return "win";
  }
  if (player === "scissors" && computer === "paper") {
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
