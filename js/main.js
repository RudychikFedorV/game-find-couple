document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const squares = [
    { color: "blue" },
    { color: "blue" },
    { color: "blue" },
    { color: "blue" },
    { color: "pink" },
    { color: "pink" },
    { color: "pink" },
    { color: "pink" },
    { color: "blue" },
    { color: "blue" },
    { color: "blue" },
    { color: "blue" },
    { color: "pink" },
    { color: "pink" },
    { color: "pink" },
    { color: "pink" },
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createBoard() {
    const shuffledSquares = shuffle(squares);
    shuffledSquares.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("game-square__closed", "closed", square.color);
      container.appendChild(div);
    });
  }

  createBoard();

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
});
