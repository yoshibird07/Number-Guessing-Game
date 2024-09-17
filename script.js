// generates random number to guess
const randomNumber = Math.floor(Math.random() * 10) + 1;

// places html code into the variable so that java knows what to do after i click something like if I were to click button also it tell it where to do it
const input = document.getElementById("squareBox");
const submitButton = document.getElementById("button");
const message = document.getElementById('errorOrNot');

// the command event listner allows for all the if and else if statments to work when the submit button is clicked
submitButton.addEventListener('click', checkGuess);

// allows for the number that was put inside the input to be seen as an integer and not a string
function checkGuess() {
    const userGuess = parseInt(input.value);

// what actually happens when the button is clicked, here it is telling the user weather or not its a valid number between 1 and 10 
    if (userGuess < 1 || userGuess > 10) {
        message.textContent = "Please enter a valid number between 1 and 10.";
        message.style.color = "red";
        input.value = '';
        return;
    }

// here it tells the user if he guessed correct based on the random number chosen and if not then it tells you weather its higher or lower
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