// FOR DICE 1
var Num = Math.random() * 6;
Num = Math.ceil(Num);

// FOR DICE 2
var Num2 = Math.random() * 6;
Num2 = Math.ceil(Num2);

// FUNCTION FOR DICE 1
function DiceRoller() {
  if (Num === 1) {
    document.querySelector(".dice1 span").classList.add("one");
  } else if (Num === 2) {
    document.querySelector(".dice1 span").classList.add("two");
  } else if (Num === 3) {
    document.querySelector(".dice1 span").classList.add("three");
  } else if (Num === 4) {
    document.querySelector(".dice1 span").classList.add("four");
  } else if (Num === 5) {
    document.querySelector(".dice1 span").classList.add("five");
  } else if (Num === 6) {
    document.querySelector(".dice1 span").classList.add("six");
  }
}

DiceRoller();

// FUNCTION FOR DICE 2
function DiceRoller2() {
  if (Num2 === 1) {
    document.querySelector(".dice2 span").classList.add("one");
  } else if (Num2 === 2) {
    document.querySelector(".dice2 span").classList.add("two");
  } else if (Num2 === 3) {
    document.querySelector(".dice2 span").classList.add("three");
  } else if (Num2 === 4) {
    document.querySelector(".dice2 span").classList.add("four");
  } else if (Num2 === 5) {
    document.querySelector(".dice2 span").classList.add("five");
  } else if (Num2 === 6) {
    document.querySelector(".dice2 span").classList.add("six");
  }
}

DiceRoller2();

// FUNCTION FOR WINNING LOGIC

function winner() {
  if (Num > Num2) {
    document.querySelector("h1").textContent = "Player 1 Is Winner.";
  } else if (Num < Num2) {
    document.querySelector("h1").textContent = "Player 2 Is Winner.";
  } else if (Num === Num2) {
    document.querySelector("h1").textContent = "Tie, No One Is Winner.";
  } else {
    document.querySelector("h1").textContent = "Refresh Me";
  }
}

winner();
