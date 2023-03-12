import { Popover } from "./popover";

const btn = document.querySelector(".btn");
let element = undefined;
let active = false;

const popover = new Popover();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (active) {
    active = false;
    popover.removePopover(element);
  } else {
    element = popover.showPopover(
      "Popover title",
      "And here's some amazing content.",
      btn
    );
    active = true;
  }
});
