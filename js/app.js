/*-------------------------------- Constants --------------------------------*/

// const winningWord = ['O', 'R', 'A', 'N', 'G', 'E'];
let winningWord = [];

const words = [ // food names
  "adjust",
  "crosswalk",
  "shrink",
  "flour",
  "variation",
  "cottage",
  "toast",
  "Venus",
  "grace",
  "resign",
  "housing",
  "view",
  "seminar",
  "licence",
  "compensation",
  "still",
  "girl",
  "recession",
  "review",
  "introduce",
];

const maxMistakes = 4;

/*-------------------------------- Variables --------------------------------*/

let guessedLetters = [];

let targetWord = [];

let mistakes = 0;

let winner = false;


/*------------------------ Cached Element References ------------------------*/

const guessedButtonsEl = document.querySelectorAll(".guessed-letters button");
// console.dir(guessedButtonsEl);

const resultDisplayEl = document.querySelector("#results-display");
// console.log(resultDisplayEl);

// const targetEls = document.querySelectorAll(".target");
// // console.log(targetEl);

const targetContainer = document.querySelector('.target-word');
// console.log(targetWordContainer);

const resetBtnEl = document.querySelector(".reset");
// console.log(resetBtnEl);

const foodmanImagesEl = document.querySelectorAll(".foodmanImage");
// console.log(foodmanImagesEl);

/*-------------------------------- Functions --------------------------------*/

const init = () => {
  createTargetWordDisplay();
  guessedLetters = [];
  targetWord = [];
  mistakes = 0;
  winner = false;
  guessedButtonsEl.forEach((button) => (button.disabled = false));
  updateFoodmanImage();
  updateTargetWord();
  updateMessage();
  render();
};

const createTargetWordDisplay = () => {
  targetContainer.innerHTML = ''
  let randomIndex = Math.floor(Math.random() * words.length);
  winningWord = words[randomIndex].toUpperCase().split("");
  winningWord.forEach((letter) => {
  let targetEl = document.createElement('div');
  targetEl.classList.add("target");
  targetContainer.appendChild(targetEl);

  targetWord.push('');
});
};










const render = () => {
  updateTargetWord();
};

const updateMessage = () => {
  if (winner) {
    resultDisplayEl.textContent = "Congratulations! You Won!";
  } else if (mistakes >= maxMistakes) {
    resultDisplayEl.textContent =
      "Sorry! You lost! The word was " + winningWord.join("");
  } else {
    resultDisplayEl.textContent = `Mistakes: ${mistakes}/${maxMistakes}`;
  }
};

const updateTargetWord = () => {
  const targetEls = document.querySelectorAll(".target");
  targetEls.forEach((targetEl, idx) => {
    targetEl.textContent = targetWord[idx];
  });
};

const handleGuessedLetters = (event) => {
  const guessedButton = event.target.closest("button");
  if (
    !guessedButton ||
    guessedButton.classList.contains("reset") ||
    guessedButton.disabled
  )
    return;
  const guessedLetter = guessedButton.textContent;

  if (!guessedLetters.includes(guessedLetter)) {
    guessedLetters.push(guessedLetter);

    if (winningWord.includes(guessedLetter)) {
      correctGuess(guessedLetter);
      updateTargetWord();
    } else {
      incorrectGuess();
    }

    disableButton(guessedButton);
    checkForWinner();
  }
};

const correctGuess = (guessedLetter) => {
  winningWord.forEach((letter, idx) => {
    if (letter === guessedLetter) {
      targetWord[idx] = guessedLetter;
    }
  });
};

const incorrectGuess = () => {
  mistakes++;
  updateFoodmanImage();
};

const updateFoodmanImage = () => {
  foodmanImagesEl.forEach((img, index) => {
    img.style.display = index === mistakes ? "block" : "none";
  });
};

const disableButton = (button) => {
  button.disabled = true;
};

const disableAllButtons = () => {
  guessedButtonsEl.forEach((button) => (button.disabled = true));
};

const checkForWinner = () => {
  if (targetWord.join("") === winningWord.join("")) {
    winner = true;
    disableAllButtons();
  } else if (mistakes >= maxMistakes) {
    disableAllButtons();
  }
  updateMessage();
  render();
};

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener("click", handleGuessedLetters);

resetBtnEl.addEventListener("click", (event) => {
  event.stopPropagation();
  init();
});

/*-------------------------------- Initialize --------------------------------*/

init();
