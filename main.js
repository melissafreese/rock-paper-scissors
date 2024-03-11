let compScore = 0;
let playerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

const computerPlay = () => {
	const arrOfChoices = ["rock", "paper", "scissors"];
	const randomNum = Math.floor(Math.random() * arrOfChoices.length);
	return arrOfChoices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		const p = document.createElement("p");
		p.innerText = `You tied! You both picked ${playerSelection}`;
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		compScore++;
		const p = document.createElement("p");
		p.innerText = "You lost! Rock crushes scissors";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		const p = document.createElement("p");
		p.innerText = "You won! Scissors cuts paper";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		compScore++;
		const p = document.createElement("p");
		p.innterText = "You lost! Paper covers rock";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		const p = document.createElement("p");
		p.innterText = "You won! Rock crushed scissors";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		compScore++;
		const p = document.createElement("p");
		p.innerText = "You lost! Scissors cuts paper";
		outcomeDiv.appendChild(p);
	} else (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++;
		const p = document.createElement("p");
		p.innerText = "You won! Paper covers rock";
		outcomeDiv.appendChild(p);
	}
};

const checkForWinner = (playerScore, compScore) => {
	if (playerScore === 5) {
		const h2 = document.createElement("h2");
		h2.classList.add("player-won");
		h2.innerText = `You won ${playerScore} to ${compScore}. Great Job!`;
		outcomeDiv.appendChild(h2);
	}
	if (compScore === 5) {
		const h2 = document.createElement("h2");
		h2.classList.add("computer-won");
		h2.innerText = `You lost ${playerScore} to ${compScore}. Better luck next time!`;
		outcomeDiv.appendChild(h2);
	}
};

const updateScores = (playerScore, compScore) => {
	playerScoreSpan.innerText = `Player Score: ${playerScore}`;
	computerScoreSpan.innerText = `Computer Score: ${compScore}`;
};

rockButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "rock";
	playRound(playerSelection, computerSelection);
	playerScoreSpan.innerText = `Player Score: ${playerScore}`;
	computerScoreSpan.innerText = ` Computer Score: ${compScore}`;
	checkForWinner(playerScore, compScore);
});

paperButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "paper";
	playRound(playerSelection, computerSelection);
	playerScoreSpan.innerText = `Player Score: ${playerScore}`;
	computerScoreSpan.innerText = `Computer Score: ${compScore}`;
	checkForWinner(playerScore, compScore);
});

scissorsButton.addEventListener("click", () => {
	const computerSelection = computerPlay();
	const playerSelection = "scissors";
	playRound(playerSelection, computerSelection);
	playerScoreSpan.innerText = `Player Score: ${playerScore}`;
	computerScoreSpan.innerText = `Computer Score: ${compScore}`;
	checkForWinner(playerScore, compScore);
});
