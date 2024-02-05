let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

const computerPlay = () => {
	const arrOfChoices = ["rock", "paper", "scissors"];
	const randomNum = Math.floor(Math.random() * arrOfChoices.length);
	return arrOfChoices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		const p = document.createElement("p");
		p.innerText = `You tied! You both picked ${playerSelection}`;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		compScore++;
		return "You lost! Rock crushes scissors";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerscore++;
		return " You won! Scissors cuts paper";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		compScore++;
		return "You lost! Paper covers rock";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		return "You won! Rock crushed scissors";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		compScore++;
		return "You lost! Scissors cuts paper";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++;
		return "You won! Paper covers rock";
	}
};

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
