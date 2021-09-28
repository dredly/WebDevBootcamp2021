const playingToDefault = 7;
let [p1Score, p2Score] = [0, 0];
let playingTo = playingToDefault;

const p1Button = document.querySelector('#plusP1');
const p2Button = document.querySelector('#plusP2');
const resetButton = document.querySelector('#reset');
const buttonGroup = document.querySelector('#buttonGroup');
const score = document.querySelector('#score');
const playingToDisplay = document.querySelector('#playingTo');

const checkWin = function (playerScore, opponentScore) {
    if (playerScore === parseInt(playingTo)) {
        //Implement the win by 2 rule
        if (playerScore - opponentScore > 1) {
            p1Button.setAttribute('disabled', true);
            p2Button.setAttribute('disabled', true);
            return true;
        } else playingTo++;
    }
}

playingToDisplay.addEventListener('input', function () {
    playingTo = this.children[0].value;
})

p1Button.addEventListener('click', () => {
    p1Score++
    if (checkWin(p1Score, p2Score)) {
        score.children[0].className = 'winText';
        score.children[1].className = 'loseText';
    }
});
p2Button.addEventListener('click', () => {
    p2Score++
    if (checkWin(p2Score, p1Score)) {
        score.children[1].className = 'winText';
        score.children[0].className = 'loseText';
    }
});
resetButton.addEventListener('click', () => {
    [p1Score, p2Score] = [0, 0];
    [...score.children].map(child => child.className = '');
    p1Button.removeAttribute('disabled');
    p2Button.removeAttribute('disabled');
});

//Update the score on display whenever any button is clicked
buttonGroup.addEventListener('click', () => {
    score.children[0].innerText = p1Score;
    score.children[1].innerText = p2Score;
});