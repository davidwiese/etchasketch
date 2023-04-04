// Execute the JS after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const etchDiv = document.querySelector(".etch");
  const newGridBtn = document.querySelector("#new-grid-btn");

  newGridBtn.addEventListener("click", function () {
    let squaresPerSide = prompt("Enter number of squares per side (max 100):");
    squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100);
    createGrid(squaresPerSide);
  });

  function createGrid(squaresPerSide) {
    // Set CSS variable for square size
    etchDiv.style.setProperty("--squares-per-side", squaresPerSide);

    // Remove existing squares
    while (etchDiv.firstChild) {
      etchDiv.removeChild(etchDiv.firstChild);
    }

    // Add new squares with dynamic size
    for (let i = 0; i < squaresPerSide; i++) {
      for (let j = 0; j < squaresPerSide; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        etchDiv.appendChild(div);
        // Add hover event listener to each square
        div.addEventListener("mouseover", function () {
          this.style.backgroundColor = "black";
        });
      }
    }
  }
});
