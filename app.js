const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.getElementsByClassName("selectionBtn");
const resultUserDisplay = document.getElementById("result-user");
const resultCompDisplay = document.getElementById("result-comp");
const resetBtn = document.getElementById("resetBtn");

let userChoice, computerChoice, result;
let resultUser = 0;
let resultComp = 0;
Array.from(possibleChoices).forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML;
    generateComputerChoice();
    getResult();
}));

resetBtn.addEventListener('click', (e) => {
    reset();
});

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if(randomNumber === 0){
        computerChoice = '✊';
    }else if(randomNumber === 1){
        computerChoice = '✋';
    }else if(randomNumber === 2){
        computerChoice = '✌️';
    }
};

const getResult = () => {
    if(computerChoice === userChoice){
        result = 'It is a draw!';
    }else if(computerChoice === '✊' && userChoice === "✋"){
        result = 'You win! '+userChoice+' is stronger than '+computerChoice;
        resultUser++;
    }else if(computerChoice === '✊' && userChoice === "✌️"){
        result = 'Computer wins!'+computerChoice+' is stronger than '+userChoice;
        resultComp++;
    }else if(computerChoice === '✋' && userChoice === "✌️"){
        result = 'You win!'+userChoice+' is stronger than '+computerChoice;
        resultUser++;
    }else if(computerChoice === '✋' && userChoice === "✊"){
        result = 'Computer wins!'+computerChoice+' is stronger than '+userChoice;
        resultComp++;
    }else if(computerChoice === '✌️' && userChoice === "✊"){
        result = 'You win!'+userChoice+' is stronger than '+computerChoice;
        resultUser++;
    }else if(computerChoice === '✌️' && userChoice === "✋"){
        result = 'Computer wins!'+computerChoice+' is stronger than '+userChoice;
        resultComp++;
    }

    showData(result, resultUser, resultComp, computerChoice, userChoice);
}

const showData = (resultData, resultUserData, resultCompData, computerChoiceData, userChoiceData) => {
    resultDisplay.innerHTML = resultData;                     //1
    resultUserDisplay.innerHTML = resultUserData;             //2
    resultCompDisplay.innerHTML = resultCompData;             //3
    computerChoiceDisplay.innerHTML = computerChoiceData;     //4
    userChoiceDisplay.innerHTML = userChoiceData;             //5
}

const reset = () => {
    result = '';
    resultUser = 0;
    resultComp = 0;
    computerChoice = '';
    userChoice = '';
    showData(result, resultUser, resultComp, computerChoice, userChoice); 
}