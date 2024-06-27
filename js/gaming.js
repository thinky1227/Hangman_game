const letterBox = [
  "cinema",
  "fruit",
  "anatomy",
  "library",
  "onion",
  "stomach",
  "teacher",
  "spinach",
];

const lengthBox = letterBox.length;

const index = Math.floor(Math.random() * lengthBox);

const computerWord = letterBox[index];

const computerWordArray = Array.from(computerWord);

const sentenceDiv = document.querySelector(".correct");

const myLetter = [];

const makeDiv = (i) => {
  const div = document.createElement("div");
  div.className = "alphabet";
  div.id = i;
  div.innerHTML = "";
  sentenceDiv.appendChild(div);
};

for (let i = 0; i < computerWordArray.length; i++) {
  myLetter.push("_");
  makeDiv(i);
}

let life = 5;
let leftLetter = myLetter.length;

const guessInput = document.querySelector("#letter");
const guessForm = document.querySelector("#guessForm");
const description = document.querySelector(".description");
const heart = document.querySelectorAll(".life i");

const handleHM = (event) => {
  event.preventDefault();
  let correct = 0;
  let answer = guessInput.value;
  guessInput.value = "";
  for (let i = 0; i < computerWordArray.length; i++) {
    if (answer == computerWordArray[i]) {
      correct += 1;
      myLetter[i] = answer;
      leftLetter -= 1;
      document.querySelectorAll(".alphabet")[i].innerHTML = answer;
    }
  }
  if (correct == 0) {
    life -= 1;
    description.innerHTML = `생명이 1 차감되었습니다. 남은 생명은 ${life}입니다. `;
    heart[4 - life].className = "fa-regular fa-heart";
  } else {
    description.innerHTML = `${answer}은(는) 포함됩니다. 현재 단어는 ${myLetter.join(
      ""
    )}입니다.`;
  }
  if (life == 0) {
    description.innerHTML = `생명이 0이 되어 게임이 종료되었습니다.`;
    guessForm.style.visibility = "hidden";
  } else if (leftLetter == 0) {
    description.innerHTML = `${answer}은(는) 포함됩니다. 모든 단어를 완성하셨습니다. 최종 단어는 ${myLetter.join(
      ""
    )}입니다.`;
    guessForm.style.visibility = "hidden";
  }
};

guessForm.addEventListener("submit", handleHM);
