const difficulty = prompt('Welcome! Enter your max attempt:');
const randNum = Math.floor(Math.random() * (difficulty) + 1);
// console.log(randNum);

let guessed = false;
let forceQuit = false;
let guess = prompt('Enter your first guess');
let attempts = 0;
while (true) {
    if (guess === 'q') {
        console.log('You gave up');
        break;
    } else {
        guess = parseInt(guess);
        // console.log(guess)
        if (!guess) {
            console.log('Invalid input');
            break;
        } else {
            // console.log('Valid number')
            attempts++
            if (guess > randNum) {
                guess = prompt('Too high, guess a lower number')
            } else if (guess < randNum) {
                guess = prompt('Too low, guess a higher number')
            } else {
                console.log(`You guessed the number! It took you ${attempts} guesses.`)
                break;
            }
        }
    }
}