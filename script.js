const totalScore = { computerChoice: 0, playerChoice: 0 }

function getComputerChoice() {
    let choice;

    const arr = ['rock', 'paper', 'scissors']

    let rand = Math.random()

    let num = parseInt((rand * 100) % 3)

    choice = arr[num]

    return choice
}

function getResult(playerChoice, computerChoice) {

    console.log("computerChoice", computerChoice)
    let cscore;
    let pscore;

    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()) {
        pscore = 0;
        cscore = 0;
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        pscore = 1;
        cscore = -1;
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        pscore = 1;
        cscore = -1;
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        pscore = 1;
        cscore = -1;
    } else {
        pscore = -1;
        cscore = 1;
    }
    return [pscore, cscore]

}


function showResult(score, playerChoice, computerChoice) {
    let resultDiv = document.getElementById("result")
    let handsDiv = document.getElementById("hands")
    let playerScoreDiv = document.getElementById("player-score")
    let compScoreDiv = document.getElementById("comp-score")

    if (score == -1) {
        resultDiv.innerText = "You Lose"
    } else if (score == 1) {
        resultDiv.innerText = "You Win"
    } else if (score == 0) {
        resultDiv.innerText = "You Draw"
    }

    handsDiv.innerText = `👦${playerChoice} vs 🤖${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerChoice']}`
    compScoreDiv.innerText = `Computer Score: ${totalScore['computerChoice']}`
}


function onClickRPS(playerChoice) {
    console.log(playerChoice)

    const compChoice = getComputerChoice()

    let score = getResult(playerChoice, compChoice)

    totalScore['playerChoice'] += score[0]
    totalScore['computerChoice'] += score[1]

    showResult(score[0], playerChoice, compChoice)


}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    console.log(rpsButtons)

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = (e) => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

playGame()

function endGame() {
    totalScore['playerChoice'] += 0
    totalScore['computerChoice'] += 0

    let resultDiv = document.getElementById("result")
    let handsDiv = document.getElementById("hands")
    let playerScoreDiv = document.getElementById("player-score")

    resultDiv.innerText = ""
    handsDiv.innerText = ""
    playerScoreDiv.innerText = ""

}

