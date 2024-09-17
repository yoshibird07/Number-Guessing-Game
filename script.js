const randomNumber = Math.floor(Math.random() * 10) + 1;

const input = document.getElementById("squareBox");
const submitButton = document.getElementById("button");
const message = document.getElementById('errorOrNot');


submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(input.value);

    if (userGuess < 1 || userGuess > 10) {
        message.textContent = "Please enter a valid number between 1 and 10.";
        message.style.color = "red";
        input.value = '';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed correctly!";
        message.style.color = "green";
        document.getElementById("backGroundOfGame").style.backgroundColor = "lightgreen";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
    }

    input.value = '';
}