// querySelector target word container
// create new div for each letter in winning word
// append target el div to target word container
// assign class name of target to each element

const targetContainer = document.querySelector('.target-word');

const createTargetWordDisplay = () => {
    winningWord.forEach((letter) => {
    const targetEl = document.createElement('div');
    targetEl.classList.add("target");
    targetContainer.appendChild(targetEl)
});
};

const updateTargetWordDisplay = () => {
    const targetEls = document.querySelectorAll(".target");
    targetEls.forEach((targetEl, idx) => {
      targetEl.textContent = targetWord[idx] || "_";
    });
  };