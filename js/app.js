/*-------------------------------- Constants --------------------------------*/

const winningWord = ["O", "R", "A", "N", "G", "E"];

/*-------------------------------- Variables --------------------------------*/

let guessedLetters = [];

let targetWord = ["", "", "", "", "", ""];

let mistakes = 0;

const maxMistakes = 4;

let winner = false;

let msg = "";

/*------------------------ Cached Element References ------------------------*/

const guessedButtonsEl = document.querySelectorAll(".guessed-letters button");
// console.dir(guessedButtonsEl);

const resultDisplayEl = document.querySelector("#result-display");
// console.log(resultDisplayEl);

const targetEls = document.querySelectorAll(".target");
// console.log(targetEl);

const resetBtnEl = document.querySelector(".reset");
// console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

const init = () => {
  guessedLetters = [];
  targetWord = ["", "", "", "", "", ""];
  mistakes = 0;
  winner = false;
  guessedButtonsEl.forEach((button) => {
    button.disabled = false;
  });
  updateMessage();
  render();
};

const updateMessage = () => {
  if (winner) {
    msg = "Congratulations! You Won!";
  } else if (mistake >= maxMistakes) {
    msg = "Sorry! You lost! The word was" + winningWord.join("");
  } else {
    msg = `You have ${maxMistakes - mistakes} mistakes left!`;
  }
};

const updateTargetWord = () => {
  targetWord.forEach((element, idx) => {
    const targetEl = targetEls[idx];
    targetEl.textContent = element;
  });
};

const render = () => {
  targetWord.forEach((letter, idx) => {
    targetEls[idx].textContent = letter;
  });
  resultDisplayEl.textContent = msg;
};

const handleGuessedLetters = (event) => {
    const guessedButton = event.target.closest("button");
    const guessedLetter = guessedButton.textContent.trim();

    if (!guessedLetters.includes(guessedLetter)) {
      guessedLetters.push(guessedLetter);

      if (winningWord.includes(guessedLetter)) {
        winningWord.forEach((letter, idx) => {
          if (letter === guessedLetter) {
            targetWord[idx] = guessedLetter;
          }
        });
        updateTargetWord();
      } else {
        mistakes++;
        //update foodman
      }

      guessedButton.disabled = true;
    }

    if (targetWord.join("") === winningWord.join("")) {
      winner = true;
    }

    updateMessage();
    render();
  };

// function disableAllButtons() {
//     const buttons = document.querySelectorAll("#letters button");
//     buttons.forEach(button => button.disabled = true);
// }

// init();

/*----------------------------- Event Listeners -----------------------------*/
guessedButtonsEl.forEach((button) => {
  button.addEventListener("click", handleGuessedLetters);
});

resetBtnEl.addEventListener("click", init);
