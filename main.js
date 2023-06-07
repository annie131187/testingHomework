/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validator.js
function isValidCard(value) {
  value = value.toString();
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    let digit = parseInt(value[i]);
    if (i % 2 === 0) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0 ? true : false;
}
;// CONCATENATED MODULE: ./src/js/cardsInfo.json
const cardsInfo_namespaceObject = JSON.parse('[{"name":"visa","firstNum":4,"minLength":13,"maxLength":19},{"name":"master-card","firstNum":[51,52,53,54,55],"minLength":16,"maxLength":16},{"name":"american-express","firstNum":[34,37],"minLength":15,"maxLength":15},{"name":"discover","firstNum":60,"minLength":16,"maxLength":16},{"name":"jcb","firstNum":[31,35],"minLength":15,"maxLength":16},{"name":"diners-club","firstNum":[30,36,38],"minLength":14,"maxLength":14},{"name":"mir","firstNum":2,"minLength":16,"maxLength":19}]');
;// CONCATENATED MODULE: ./src/js/whatCardIssuer.js

function whatCardIssuer(value) {
  value = String(value);
  for (let i = 0; i < cardsInfo_namespaceObject.length; i++) {
    const firstNums = cardsInfo_namespaceObject[i].firstNum;
    if (Array.isArray(firstNums) && firstNums.some(num => value.startsWith(num)) && value.length >= cardsInfo_namespaceObject[i].minLength && value.length <= cardsInfo_namespaceObject[i].maxLength) {
      return cardsInfo_namespaceObject[i].name;
    } else if (value.startsWith(firstNums) && value.length >= cardsInfo_namespaceObject[i].minLength && value.length <= cardsInfo_namespaceObject[i].maxLength) {
      return cardsInfo_namespaceObject[i].name;
    }
  }
  return null;
}
;// CONCATENATED MODULE: ./src/js/widget.js


class cardNumberWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }
  static get markup() {
    return `
      <form class="card-form-widget">
        <div class="cards-types">
          <div class="card-img visa"></div>
          <div class="card-img master-card"></div>
          <div class="card-img american-express"></div>
          <div class="card-img discover"></div>
          <div class="card-img jcb"></div>
          <div class="card-img diners-club"></div>
          <div class="card-img mir"></div>
        </div>
        <div class="input-field">
          <input type="text" class="input" placeholder="Credit card number">
          <button class="submit">Click to Validate</button>
        </div>
      </form>
   `;
  }
  static get submitSelector() {
    return ".submit";
  }
  static get inputSelector() {
    return ".input";
  }
  static get fieldSelector() {
    return ".input-field";
  }
  static get selector() {
    return ".card-form-widget";
  }
  bindToDOM() {
    this.parentEl.insertAdjacentHTML("afterbegin", cardNumberWidget.markup);
    this.element = this.parentEl.querySelector(cardNumberWidget.selector);
    this.field = this.element.querySelector(cardNumberWidget.fieldSelector);
    this.input = this.element.querySelector(cardNumberWidget.inputSelector);
    this.submit = this.element.querySelector(cardNumberWidget.submitSelector);
    this.input.addEventListener("input", this.onInput);
    this.element.addEventListener("submit", this.onSubmit);
  }
  onInput(e) {
    e.preventDefault();
    const value = this.input.value;
    const cards = [...this.parentEl.querySelectorAll(".card-img")];
    const cardName = whatCardIssuer(value);
    for (let i = 0; i < cards.length; i++) {
      if (value === "") {
        cards[i].classList.remove("find-card-type");
      }
      if (cards[i].classList.contains(cardName)) {
        cards[i].classList.add("find-card-type");
      }
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    if (isValidCard(value)) {
      this.field.classList.add("valid");
      this.field.classList.remove("invalid");
    } else {
      this.field.classList.add("invalid");
      this.field.classList.remove("valid");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const container = document.querySelector(".container");
const widget = new cardNumberWidget(container);
widget.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map