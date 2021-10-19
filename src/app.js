/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
let number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
let suits = ["♠", "♣", "♥", "♦"];
const NUMBER_POSITION = randomItem(number);
const SUIT_POSITION = randomItem(suits);

window.onload = function() {
  Card();
};

function randomItem(array) {
  return Math.floor(Math.random() * array.length);
}

function Card() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let suitup = document.createElement("div");
  suitup.classList.add("suitup");
  card.appendChild(suitup);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let suitdown = document.createElement("div");
  suitdown.classList.add("suitdown");
  card.appendChild(suitdown);

  num.innerHTML = number[NUMBER_POSITION];
  suitup.innerHTML = suitdown.innerHTML = suits[SUIT_POSITION];

  if (suits[SUIT_POSITION] == "♠" || suits[SUIT_POSITION] == "♣") {
    suitup.classList.add("color1");
    suitdown.classList.add("color1");
  } else {
    suitup.classList.add("color2");
    suitdown.classList.add("color2");
  }
}
