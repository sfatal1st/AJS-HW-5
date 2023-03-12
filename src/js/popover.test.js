/**
 * @jest-environment jsdom
 */
import { Popover } from "./popover";

test("popover should show", () => {
  document.body.innerHTML = '<button type="button" class="btn">Click</button>';

  const btn = document.querySelector(".btn");
  const popover = new Popover();

  btn.click();
  popover.showPopover("Popover title", "And here's some amazing content.", btn);
  const container = document.querySelector(".popoverTitle");

  expect(container.classList.contains("popoverTitle")).toEqual(true);
});
