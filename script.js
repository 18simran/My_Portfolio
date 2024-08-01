console.log("hiii");
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
const start = skills.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > start.top) {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      var dots = circle.getAttribute("data-dots");
      var marked = circle.getAttribute("data-percent");
      var percent = Math.floor((dots * marked) / 100);
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
  }
});
//skill-bar

document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector(".skills-main");
  const skillBars = document.querySelectorAll(".skill-bar .bar span");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            bar.style.width = "0%"; // Reset width
            bar.style.animation = "none"; // Reset animation
            setTimeout(() => {
              bar.style.width = bar.getAttribute("data-width");
              bar.style.animation = bar.classList[0] + " linear 3s"; // Restart animation
            }, 100); // Delay to allow reset
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(skillSection);
});

//sticky navbar
const header = document.querySelector("header");
const home = document.querySelector(".about");
const initialcoords = home.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > initialcoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

//toggle icon number

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
});

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
};

//reveal-on-scroll feature using intersectionObserver
const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
document.addEventListener("DOMContentLoaded", () => {
  const repoCards = document.querySelectorAll(".repo-card");

  repoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });

  // Add fade-in effect for GitHub profile and repo cards
  const githubProfile = document.querySelector(".github-profile");
  const repoCardsContainer = document.querySelector(".github-repos");

  githubProfile.style.opacity = 0;
  repoCardsContainer.style.opacity = 0;
  githubProfile.style.transition = "opacity 1s ease-in-out";
  repoCardsContainer.style.transition = "opacity 1s ease-in-out";

  setTimeout(() => {
    githubProfile.style.opacity = 1;
    repoCardsContainer.style.opacity = 1;
  }, 500);
});
