const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const resultUserDisplay = document.getElementById("result-user");
const resultCompDisplay = document.getElementById("result-comp");

let userChoice, computerChoice, result;
let resultUser = 0;
let resultComp = 0;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if(randomNumber === 0){
        computerChoice = 'rock';
    }else if(randomNumber === 1){
        computerChoice = 'paper';
    }else if(randomNumber === 2){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
    if(computerChoice === userChoice){
        result = 'It is a draw!';
    }else if(computerChoice === 'rock' && userChoice === "paper"){
        result = 'You win!';
    }else if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'Computer wins!';
    }else if(computerChoice === 'paper' && userChoice === "scissors"){
        result = 'You win!';
    }else if(computerChoice === 'paper' && userChoice === "rock"){
        result = 'Computer wins!'
    }else if(computerChoice === 'scissors' && userChoice === "rock"){
        result = 'You win!';
    }else if(computerChoice === 'scissors' && userChoice === "paper"){
        result = 'Computer wins!'
    }

    if(result === "You win!"){
        resultUser++;
    }else if(result === "Computer wins!"){
        resultComp++;
    }

    resultUserDisplay.innerHTML = resultUser;
    resultCompDisplay.innerHTML = resultComp;
    resultDisplay.innerHTML = result;
}