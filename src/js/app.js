import { validateCardFormWidget } from "./widget";

const container = document.querySelector(".container");
const form = new validateCardFormWidget(container);

form.bindToDOM();
