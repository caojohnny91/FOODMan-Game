/*-------------------------------- Constants --------------------------------*/

const winningWord = ['O', 'R', 'A', 'N', 'G', 'E'];

/*-------------------------------- Variables --------------------------------*/

let guessedLetters = [];

let targetWord = ['', '', '', '', '', '']

let mistakes = 0;

const maxMistakes = 4;

let winner = false;

let msg;






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
    winner = false;
    guessedButtonsEl.forEach(button => {
        button.disabled = false;
    });
    updateTargetWord();
    updateMessage();
    render();
};





const handleGuessedLetters = (event) => {
    const guessedButtonsEl = winningWord.find((letter) {
        return 
    })



    winningWord.forEach((letter) => {
        if (letter === event.target.id) {
            winningWord.find[idx] = guessedButton;
            updateTargetWord();
            // correct guessed
         } else if (targetWord.join('') === winningWord.join('')) {
                winner = true;
            } else {
                mistakes++;
                //reveal part of Foodman
            }
         
        
        // guessedButton.disabled = true;
    });






    // if (event.target.tagName === 'BUTTON' || event.target.tagName === 'DIV') {
    //     const guessedButton = event.target;
    //     const guessedLetter = guessedButton.textContent;
    // }
    
    
    
};

// const disableGuessedButtons = (handleGuessedLetters) => {
    //     const guessedButtonsEl = document.querySelectorAll('.guessed-letters button');
    //     guessedButtonsEl.forEach(guessedButton => guessedButton.disabled = true);
    // };
    // console.dir(disableGuessedButtons);
    
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
    
    
    const render = () => {
        resultDisplayEl.textContent = `${msg}`;
    };
    
    
    // init();
    
    /*----------------------------- Event Listeners -----------------------------*/
    guessedButtonsEl.forEach(button => {
        button.addEventListener('click', handleGuessedLetters);
    });
    
    resetBtnEl.addEventListener('click', init);
