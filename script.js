document.addEventListener("DOMContentLoaded", function () {
  const etchDiv = document.querySelector(".etch");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      etchDiv.appendChild(div);
    }
  }
});
