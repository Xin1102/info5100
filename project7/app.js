const answerLine = document.querySelector("#anwserLine");
const leftHint = document.querySelector("#leftHint");
const rightHint = document.querySelector("#rightHint");
const inputNumber = document.querySelector("#inputNumber");
const guessButton = document.querySelector("#guessButton");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");

guessButton.addEventListener("click", inputGuessNumber);
resetButton.addEventListener("click", resetGame);
hintButton.addEventListener("click", hintNumber);
let roundNumber = 5;

function randomNumber(range) {
    let randomNumber = Math.floor(Math.random() * range) + 1;
    return randomNumber;
}

let guessingNumber = randomNumber(100);
console.log(guessingNumber);

function inputGuessNumber() {
    roundNumber--;
    let inputNum = inputNumber.value;
    let result = inputNum + hintSign(inputNum);
    if (roundNumber === 4) {
        document.querySelector("#firstBlank").innerHTML = result;
    } else if (roundNumber === 3) {
        document.querySelector("#secondBlank").innerHTML = result;
    } else if (roundNumber === 2) {
        document.querySelector("#thirdBlank").innerHTML = result;
    } else if (roundNumber === 1) {
        document.querySelector("#forthBlank").innerHTML = result;
    } else if (roundNumber === 0) {
        document.querySelector("#guessButton").disabled = true;
        document.querySelector("#guessButton").style.backgroundColor ="grey";
        document.querySelector("#fifthBlank").innerHTML = result;
        if (inputNum != guessingNumber) {
            document.querySelector("#fifthBlank").innerHTML = "❌";
        }
    }
}

function hintSign(inputNum) {
    if (inputNum == guessingNumber) {
        return " Corret! 🏆"
    } else if (inputNum < guessingNumber) {
        return "⬆";
    } else {
        return "⬇";
    }
}


function resetGame() {
    document.location.reload(true);
}


function hintNumber() {
    const hintArray = [];
    while (hintArray.length < 10) {
        hintArray.push(randomNumber(100));
    }
    if (hintArray.indexOf(guessingNumber) === -1) {
        hintArray[randomNumber(10)] = guessingNumber;
    }
    console.log(hintArray);
    console.log(guessingNumber);
    leftHint.textContent = hintArray.slice(0,5);
    rightHint.textContent = hintArray.slice(5,10);
    document.querySelector("#hintButton").disabled = true;
    document.querySelector("#hintButton").style.backgroundColor ="grey";
}