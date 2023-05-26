import { isValidCard } from "./validator";
import { whatCardIssuer } from "./whatCardIssuer";

export default class cardNumberWidget {
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
