const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const colorInput = document.getElementById("color");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  addHoverEffect();
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  addHoverEffect();
};

addHoverEffect = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = colorInput.value;
    });
  });
};

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();
