# All Projects

## Project link
[Click here to acsses projects](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code 


## Project 1-Color Changer
``` Javascript
let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.target);
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});

```

## Project 2-BMI Calculator

``` Javascript
const form = document.querySelector('form');
// don't select height and weight outside the eventlistener as it will hold empty value every time

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    const conditions = document.querySelector('.conditions');
    if (bmi < 18.6) {
      conditions.innerHTML = 'You are Under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      conditions.innerHTML = 'You are in normal range';
    } else if (bmi > 24.9) {
      conditions.innerHTML = 'You are Over weight';
    }
  }
});
```

## Project 3 - Digital CLOCK

```Javascript
const clock = document.getElementById('clock')

setInterval(function() {
  let date=new Date()
  clock.innerHTML=`${date.toLocaleTimeString()}`
},1000)
```

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('.guessSubmit');
const guessedNums = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultDiv = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfguess = 0;
let guess;
let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    guess = parseInt(userInput.value);
    validationOfGuess(guess);
  });
}

function validationOfGuess(guess) {
  if (isNaN(guess)) {
    displayMessage('Enter a valid number');
  } else if (guess < 1 || guess > 100) {
    displayMessage('Enter a number which is between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numOfguess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkingOfGuess(guess);
    }
  }
}
function checkingOfGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Guessed number is Too high');
  } else if (guess < randomNumber) {
    displayMessage('Guessed number is Too low');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessedNums.innerHTML += `${guess}  `;
  numOfguess++;
  remainingGuess.innerHTML = `${10 - numOfguess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='new-game'>Star Over</h2>`;
  resultDiv.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgame = document.querySelector('#new-game');
  newgame.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    userInput.removeAttribute('disabled');
    prevGuess = [];
    numOfguess = 0;
    guessedNums.innerHTML = '';
    remainingGuess.innerHTML = `${10}`;
    resultDiv.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}

```