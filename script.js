const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (guess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Try a lower number.';
    }
}
