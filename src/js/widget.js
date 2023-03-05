import validateCard from "./validatorCard";
import validateNumCard from "./validatorNumCard";

export class validateCardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
        <form class="validateCard-form-widget">
            <ul class="cards">
              <li class="card visa">
              </li>
              <li class="card masterCard">
              </li>
              <li class="card mir">
              </li>
              <li class="card discover">
              </li>
              <li class="card americanExpress">
              </li>
            </ul>
            <div class="control">
                <label for="validateCard-input">Введите номер карты</label>
                <input type="text" id="validateCard-input" class="input">
                <button class="submit">Проверить</button>
            </div>
            <div class="text"></div>
        </form>
        `;
  }

  static get selectorCards() {
    return ".card";
  }

  static get submitSelector() {
    return ".submit";
  }

  static get inputSelector() {
    return ".input";
  }

  static get selector() {
    return ".validateCard-form-widget";
  }

  static get textSelector() {
    return ".text";
  }

  bindToDOM() {
    this.parentEl.innerHTML = validateCardFormWidget.markup;

    this.element = this.parentEl.querySelector(validateCardFormWidget.selector);
    this.cards = this.parentEl.querySelectorAll(validateCardFormWidget.selectorCards);
    this.submit = this.element.querySelector(validateCardFormWidget.submitSelector);
    this.input = this.element.querySelector(validateCardFormWidget.inputSelector);
    this.text = this.element.querySelector(validateCardFormWidget.textSelector);

    this.element.addEventListener("submit", this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;
    const typeCard = validateCard(value);

    if (validateNumCard(value)) {
      if (typeCard) {
        this.text.textContent = "Введен верный номер карты";
        this.card = this.parentEl.querySelector(typeCard);
        for (let card of this.cards) {
          card.style.WebkitFilter = "grayscale(100%)";
        }
        this.card.style.WebkitFilter = "grayscale(0%)";
      } else {
        this.text.textContent = "Неизвестная платежная система";
        for (let card of this.cards) {
          card.style.WebkitFilter = "grayscale(100%)";
        }
      }
    } else {
      this.text.textContent = "Введен неверный номер карты";
      for (let card of this.cards) {
        card.style.WebkitFilter = "grayscale(100%)";
      }
    }
  }
}
