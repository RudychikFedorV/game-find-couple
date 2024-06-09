let container = document.querySelector(".container");
let prevElement = "";

container.addEventListener("click", function (event) {
  let currentElement = event.target;
  if (currentElement.classList.contains("game-square__closed")) {
    currentElement.classList.remove("game-square__closed");

    if (prevElement == "") {
      prevElement = currentElement;
    } else if (
      prevElement.classList.contains("blue") &&
      currentElement.classList.contains("blue")
    ) {
      prevElement.style.opacity = 0;
      currentElement.style.opacity = 0;
      prevElement = "";
    } else if (
      prevElement.classList.contains("pink") &&
      currentElement.classList.contains("pink")
    ) {
      prevElement.style.opacity = 0;
      currentElement.style.opacity = 0;
      prevElement = "";
    } else {
      prevElement.classList.add("game-square__closed");
      prevElement = currentElement;
    }
  }
});
