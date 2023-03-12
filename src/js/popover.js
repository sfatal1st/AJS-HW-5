export class Popover {
  showPopover(title, message, element) {
    const popoverTitleElement = document.createElement("DIV");
    const popoverMessageElement = document.createElement("DIV");

    popoverTitleElement.classList.add("popoverTitle");
    popoverTitleElement.textContent = title;

    popoverMessageElement.classList.add("popoverMessage");
    popoverMessageElement.textContent = message;

    popoverTitleElement.append(popoverMessageElement);

    document.body.appendChild(popoverTitleElement);

    const { left, top } = element.getBoundingClientRect();
    popoverTitleElement.style.top = top - popoverTitleElement.offsetHeight - 5 + "px";
    popoverTitleElement.style.left =
      left +
      element.offsetWidth / 2 -
      popoverTitleElement.offsetWidth / 2 +
      "px";

    return popoverTitleElement;
  }

  removePopover(element) {
    element.remove();
  }
}
