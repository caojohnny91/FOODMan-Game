/*-------------------------------- Constants --------------------------------*/

const winningWord = ['O', 'R', 'A', 'N', 'G', 'E'];

/*-------------------------------- Variables --------------------------------*/

let guessedLetters = []; // need to disable button when used

let targetWord = ['', '', '', '', '', '']

let mistakes = 0;

const maxMistakes = 4;

let winner = false;

let msg = '';






/*------------------------ Cached Element References ------------------------*/

const guessedButtonsEl = document.querySelectorAll('.guessed-letters button');
// console.dir(guessedButtonsEl);



const resultDisplayEl = document.querySelector('#result-display');
// console.log(resultDisplayEl);


const targetEls = document.querySelectorAll('.target')
// console.log(targetEl);



const resetBtnEl = document.querySelector('.reset');
// console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    guessedLetters = [];
    targetWord = ['', '', '', '', '', '']
    mistakes = 0;
    maxMistakes = 4;
    winner = false;
    guessedButtonsEl.forEach(button => {
        button.disabled = false;
    });
    render();
};

const render = () => {
    targetWord.forEach((letter, idx) => {
        targetEls[idx].textContent = letter;
    });
    resultDisplayEl.textContent = msg;
    updateTargetWord();
};

const updateMessage = () => {
    if (winner) {
        msg = 'Congratulations! You Won!'
    } else if (mistake >= maxMistakes) {
        msg = 'Sorry! You lost! The word was' + winningWord.join('');
    } else {
        msg = `You have ${maxMistakes - mistakes} mistakes left!`
    }
};

const updateTargetWord = () => {
    targetWord.forEach((element, idx) => {
        const targetEl = targetEls[idx];
        targetEl.textContent = element;
    })
}


const handleGuessedLetters = (event) => {
    if (event.target.tagName === 'BUTTON') {
        const guessedButton = event.target;
        const guessedLetter = guessedButton.textContent;
    }




};

const disableGuessedButtons = (handleGuessedLetters) => {
    const guessedButtonsEl = document.querySelectorAll('.guessed');
    guessedButtonsEl.forEach(guessedButton => guessedButton.disabled = true);
};
// console.dir(disableGuessedButtons);



// init();

/*----------------------------- Event Listeners -----------------------------*/
guessedButtonsEl.forEach(button => {
    document.addEventListener('click', handleGuessedLetters);
});

resetBtnEl.addEventListener('click', init);
