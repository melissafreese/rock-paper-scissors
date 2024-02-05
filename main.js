const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".button");
const scissorsButton = document.querySelector(".scissors");

function getComputerChoice() {
	let choice = ["Rock", "Paper", "Scissors"];
	let randomRPS = choice[Math.floor(Math.random() * choice.length)];
	return randomRPS;
	console.log(randomRPS);
}
function playRound(playerSelection, computerSelection) {
	if (playerSelection == "Rock" && computerSelection == "Paper")
		return "You lose! Paper beats rock";
	else if (playerSelection == "Rock" && computerSelection == "Scissors")
		return "You win! Rock beats Scissors";
	else if (playerSelection == "Rock" && computerSelection == "Rock")
		return "It's a tie!";
	else if (playerSelection == "Paper" && computerSelection == "Paper")
		return "It's a tie!";
	else if (playerSelection == "Paper" && computerSelection == "Scissors")
		return "You lose! Scissors beats Paper";
	else if (playerSelection == "Scissors" && computerSelection == "Scissors")
		return "It's a tie!";
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
	// for (let i = 0; i < 5; i++) {
	// 	let playerSelection = prompt(
	// 		"Enter Rock, Paper or Scissors - CaseSensitive"
	// 	);
	// 	let computerSelection = getComputerChoice();
	// 	console.log(playRound(playerSelection, computerSelection));
	// }
}

rockButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "rock";
	playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "paper";
	playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "scissors";
	playRound(playerSelection, computerSelection);
});
game();
