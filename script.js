"user strict";

const boxDesktop = document.getElementById("box-desktop");
const patternDesktop = document.getElementById("pattern-desktop");
const patternMobile = document.getElementById("pattern-mobile");
const womanDesktop = document.getElementById("woman-desktop");
const womanMobile = document.getElementById("woman-mobile");
const answerList = Array.from(document.querySelectorAll(".answer"));
const questionList = Array.from(document.querySelectorAll(".question"));
const arrowList = Array.from(document.querySelectorAll(".arrow"));
const container = document.querySelector(".container");
const illustration = document.querySelector(".illustration");
const faq = document.querySelector(".faq");
const h1 = document.querySelector("h1");
const questionContainer = document.querySelector(".question-container");

const reset = function () {
  answerList.forEach((el) => {
    el.classList.add("hidden");
  });
  questionList.forEach((el) => {
    el.classList.remove("clicked");
  });
  arrowList.forEach((el) => {
    el.classList.remove("rotated");
  });
};
document
  .querySelector(".faq-container")
  .addEventListener("click", function (e) {
    if (
      e.target.classList.contains("question") ||
      e.target.classList.contains("arrow") ||
      e.target.classList.contains("question-container")
    ) {
      if (
        !e.target
          .closest(".question-container")
          .lastElementChild.classList.contains("hidden")
      ) {
        e.target
          .closest(".question-container")
          .querySelector(".answer")
          .classList.add("hidden");
        e.target
          .closest(".question-container")
          .querySelector(".question")
          .classList.remove("clicked");
        e.target
          .closest(".question-container")
          .querySelector(".arrow")
          .classList.remove("rotated");
      } else {
        reset();

        e.target
          .closest(".question-container")
          .querySelector(".answer")
          .classList.remove("hidden");
        e.target
          .closest(".question-container")
          .querySelector(".question")
          .classList.add("clicked");
        e.target
          .closest(".question-container")
          .querySelector(".arrow")
          .classList.add("rotated");
      }
    }
  });

const narrowWidth = window.matchMedia("(max-width:1000px)");

function portrait(width) {
  if (width.matches) {
    boxDesktop.classList.add("hidden");
    patternDesktop.classList.add("hidden");
    womanDesktop.classList.add("hidden");
    container.classList.add("narrowContainer");
    illustration.classList.add("narrowIllustration");
    faq.classList.add("narrowFaq");
    womanMobile.classList.remove("hidden");
    patternMobile.classList.remove("hidden");
    h1.classList.add("narrowH1");
    questionContainer.classList.add("narrowQuestionContainer");
  } else {
    boxDesktop.classList.remove("hidden");
    patternDesktop.classList.remove("hidden");
    womanDesktop.classList.remove("hidden");
    container.classList.remove("narrowContainer");
    illustration.classList.remove("narrowIllustration");
    faq.classList.remove("narrowFaq");
    womanMobile.classList.add("hidden");
    patternMobile.classList.add("hidden");
    h1.classList.remove("narrowH1");
    questionContainer.classList.remove("narrowQuestionContainer");
  }
}

portrait(narrowWidth);
narrowWidth.addEventListener("change", portrait);
