const container = document.querySelector(".container");
const gridItem = document.querySelector(".griditem");

// get computed style of our grid element
const gridComputed = window.getComputedStyle(container);
// get number of grid rows
const gridRows = gridComputed
  .getPropertyValue("grid-template-rows")
  .split(" ").length;
//get number of grid columns
const gridCols = gridComputed
  .getPropertyValue("grid-template-columns")
  .split(" ").length;
const gridCells = gridRows * gridCols;
let drawState = false;
const btn = document.querySelector("#btn")

window.onload = createDivs();

window.addEventListener("mousedown", (e) => {
  if (e.buttons === 1) {
    drawState = true;
    // verhindert, dass beim draggen manchmal die Fläche verschoben wird 
    e.preventDefault();
  }
});

window.addEventListener("mousemove", (e) => {
  if (e.buttons !== 1) {
    drawState = false;
  }
});

window.addEventListener("mouseup", (e) => {
  if (e.buttons === 0) {
    drawState = false;
  }
});

// creation of griditems(divs) to fill out each cell based on number of grid cells
function createDivs() {
  for (let i = 0; i < gridCells; i++) {
    const div = document.createElement("div");
    div.classList.add("griditem");
    container.appendChild(div);

    div.addEventListener("mouseenter", (e) => {
      if (drawState) {
        e.target.style.backgroundColor = "black";
      }
    });

    div.addEventListener("mousedown" , (e) => {
        e.target.style.backgroundColor = "black";
    })
  }
}


//nodeList aller Divs erstellen und über jede div iterieren und bg color ändern
function resetCanvas() {
    let allDivs = document.querySelectorAll(".griditem");
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#CBE4DE";
        
    }
}

// resetcanvas Firen wenn auf reset button geklickt wird
btn.addEventListener("click" , resetCanvas);

