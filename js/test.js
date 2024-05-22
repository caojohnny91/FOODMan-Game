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
