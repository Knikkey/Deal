"use strict";

const prizes = [
  0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000,
  25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000,
];

const prizesLeft = document.querySelector(".prizes--left");
const prizesRight = document.querySelector(".prizes--right");
const cases = document.querySelector(".cases");

const renderPrizes = function () {
  for (let i = 0; i < 13; i++) {
    const prize = document.createElement("span");
    prize.className = "prize";
    prize.innerHTML = `$${prizes[i].toLocaleString("en-US")}`;
    prizesLeft.appendChild(prize);
  }

  for (let i = 13; i < 26; i++) {
    const prize = document.createElement("span");
    prize.className = "prize";
    prize.innerHTML = `$${prizes[i].toLocaleString("en-US")}`;
    prizesRight.appendChild(prize);
  }
};

const renderCases = function () {
  for (let i = 1; i < 27; i++) {
    const caseBox = document.createElement("div");
    const caseImg = document.createElement("img");
    const caseNum = document.createElement("span");

    caseBox.className = "img-div";
    caseNum.className = "number";
    caseImg.className = "case-img";

    caseBox.appendChild(caseImg);
    caseBox.appendChild(caseNum);

    caseImg.src = "img/briefcase upright.png";
    caseNum.innerText = i;
    cases.appendChild(caseBox);
  }
};

renderPrizes();
renderCases();

//////////////////////////////////////////////////////////////////////////////
// Choose your case
const imgDiv = document.querySelectorAll(".img-div");
const playerNum = document.querySelector(".player-number");
let casesInPlay = 26;

const removeChooseCase = function () {
  if (casesInPlay < 26)
    imgDiv.forEach((div) => div.removeEventListener("click", chooseCase));
};

const chooseCase = function () {
  imgDiv.forEach((div) => {
    div.addEventListener("click", function () {
      div.classList.add("hidden");
      const num = div.lastElementChild.textContent;
      playerNum.textContent = num;
      casesInPlay--;
    });
  });
};
chooseCase();

removeChooseCase();

//////////////////////////////////////////////////////////////////////////////
// Bank offer
const offerFunc = function () {
  const offer = prizes.reduce((acc, prize, _, arr) => {
    return acc + prize * (1 / arr.length);
  }, 0);
  console.log(`Off: ${Math.round((offer / 100) * 100)}`);
  return Math.round((offer / 100) * 100);
};

//////////////////////////////////////////////////////////////////////////////
// Case elim

const prizesAll = document.querySelectorAll(".prize");

const caseElim = function () {
  imgDiv.forEach((div) => {
    if (prizes) {
      div.addEventListener("click", function () {
        const i = Math.round(Math.random() * (prizes.length - 1));
        console.log(i);
        const prizeAmount = `$${prizes[i].toLocaleString("en-US")}`;
        prizes.splice(i, 1);
        console.log(prizeAmount);

        prizesAll.forEach((prize) => {
          if (prize.textContent === prizeAmount) {
            prize.style.opacity = 0;
          }
        });
        div.classList.add("hidden");
        if (prizes.length === 19)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 0.2) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 14)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 0.3) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 10)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 0.6) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 7)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 0.8) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 5)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 0.9) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 4)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 1.1) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 3)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 1.15) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 2)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 1.25) / 100) * 100
            ).toLocaleString("en-US")}`
          );
        if (prizes.length === 1)
          console.log(
            `Offer: $${(
              Math.round((offerFunc() * 1.25) / 100) * 100
            ).toLocaleString("en-US")}`
          );
      });
    }
  });
};

caseElim();
