// Numbers game JavaScript 

const output = document.querySelector('output');
const myNumber = document.querySelector('txtMyNumber');
const btn = document.querySelector('btn btn-primary full-width');

myInput.setAttributes('type', number);
myInput.setAttributes('min, 0');
btn.addEventListener('btnSubmit', start);

function start(){
    console.log(myInput.value);
}

const rnd = Math.floor((Math.random() * 10) + 1); // generate a random number between 1 and 10
console.log(rnd); 

    if (myNumber > rnd) {
        break
        document.write("The number is less than" + myNumber);
        else if (myNumber == rnd) {
            document.querySelector('Congratulations! You picked the correct number!');
        }

// If the guess is higher than the number
else if (nyNumber > rnd) {
    document.querySelector('.message').textContent = 'The number is less than 10';

// If the guess is lower than the random number
else if (myNumber < rnd) {
    document.querySelector('.message').textContent = 'The number is greater than 0";

// Reset the game

document.querySelector('.reset').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 10 + 1);
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.qmark').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#043030';
  });
    }
}