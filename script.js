
const totalScore = {computerScore: 0, playerScore: 0}
//computer choice for random Selection
//using Math.random and Math.floor
function getComputerChoice () {
    let rpsChoice = ['Rock', 'Paper', 'Scissor']
    let randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}

//get result campares playerChoice and computerChoice and returns the result
//if human wins get the point - 1
//if computer wins get the point - -1
//if draws get the point - 0
//using ifelse statement
function getResult(playerChoice, computerChoice) {
    let score;

    //if draws
    if (playerChoice == computerChoice) {
        score = 0
    //if human wins
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
        score = 1
    }else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score =1
    }else if (playerChoice == 'Scissor' && computerChoice == 'Paper') {
        score = 1
    }
    //if computerChoice wins
    else {
        score = -1
    }

    return score
}

function showResult(score, playerChoice, computerChoice) {
    //we will show the result with div id = 'result'
    //we will be showing result who is the loser or winner
    //using if else statement
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    if (score == -1) {
        resultDiv.innerText = 'You Lose!'
    } else if (score == 0) {
        resultDiv.innerText = "It's a tie!"
    } else {
        resultDiv.innerText = 'You Won!'
    }
        handsDiv.innerText = `🧑${playerChoice} vs 🤖${computerChoice}`
        playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}


// Calculate who won and show it on the screen
function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice}) 
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice, computerChoice)
}

// ... (rest of the code remains the same)

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(rpsButton => {
        rpsButton.addEventListener('click', () => onClickRPS(rpsButton.value));
    });

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}

window.onload = playGame; // Call playGame when the page loads


function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()