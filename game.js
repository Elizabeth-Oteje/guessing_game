let maximum = parseInt(prompt('Enter the maximum number'));

while(!maximum){
    maximum = parseInt(prompt('Enter a valid number'));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('GUESS GAME: Enter the first guess'));
// guess.style.backgroundColor = '#0d7d3c';
let attempts = 1;

while(guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Too high! Enter a new guess'));
    } else {
        guess = parseInt(prompt('Too low! Enter a new guess'));
    }
}

let showCase = document.getElementById('output');
showCase.innerHTML = `YOU GOT IT! It took you ${attempts} guesses`;
showCase.style.fontWeight = 'bold';
// showCase.style.padding = '20px';
showCase.style.backgroundColor = '#3ca413';
showCase.style.border = 'solid 3px #ffffff';


console.log(`YOU GOT IT! It took you ${attempts} guesses`)