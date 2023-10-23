'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number!')
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage() = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }

  console.log('Hello');
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing....')
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
