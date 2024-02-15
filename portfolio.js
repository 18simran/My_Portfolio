let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
const readBtn = document.querySelector(".read-btn");
const readHidden = document.querySelector(".read-hidden");
const closeReadButton = document.querySelector(".close-read-btn");
const overlayButton = document.querySelector(".overlay");

const openModal = function () {
  readHidden.classList.remove("hidden");
  overlayButton.classList.remove("hidden");
};
const closeModal = function () {
  readHidden.classList.add("hidden");
  overlayButton.classList.add("hidden");
};
readBtn.addEventListener("click", openModal);
closeReadButton.addEventListener("click", closeModal);

//my skills circles
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  var dots = circle.getAttribute("data-dots");
  var marked = circle.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  console.log(percent);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
  }
  circle.innerHTML = points;
  const pointsMarked = circle.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
//sticky navbar
const header = document.querySelector("header");
const home = document.querySelector(".about");
const initialcoords = home.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > initialcoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
});
