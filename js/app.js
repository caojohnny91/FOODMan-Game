/*-------------------------------- Constants --------------------------------*/

const word = "ORANGE"; // do i need this?

const winningWord = ['O', 'R', 'A', 'N', 'G', 'E'];

/*-------------------------------- Variables --------------------------------*/

let guessedLetters = []; // need to disable button when used

let targetWord = ['', '', '', '', '', '']

let mistakes = 0;

const maxMistakes = 4;

let winner = false;






/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.guessed');
// console.log(buttons);



const messageEl = document.querySelector('#message');
// console.log(messageEl);


const targetEls = document.querySelectorAll('.target')
// console.log(targetEl);



const resetBtnEl = document.querySelector('.reset');
// console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

// const init = () => {
//     // guessedLetters = []; not sure about this
//     targetWord = ['', '', '', '', '', '']
//     mistakes = 0;
//     maxMistakes = 4;
//     winner = false;
//     render ();
// }

const render = () => {
}

const updateMessage = () => {
}

const updateTargetWord = () => {
    targetWord.forEach((element, idx) => {
        const targetEl = targetEls[idx];
        targetEl.textContent = element; // not sure about this
    })
}







// init();
/*----------------------------- Event Listeners -----------------------------*/



