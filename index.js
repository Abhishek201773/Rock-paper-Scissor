function RandomC() {
    const moves = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    const computerMove = moves[randomIndex];
    
    document.getElementById('computerMove').innerText = computerMove;
    return computerMove;
}

function playerMove(playerSelection) {
    document.getElementById('playerMove').innerText = playerSelection;
    
    const computerSelection = RandomC();
    determineWinner(playerSelection, computerSelection);
}

function determineWinner(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }
    
    document.getElementById('result').innerText = result;
}
