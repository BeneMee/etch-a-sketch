const container = document.querySelector(".container");
const gridItem = document.querySelector(".griditem");

// get computed style of our grid element
const gridComputed = window.getComputedStyle(container);
// get number of grid rows
const gridRows = gridComputed.getPropertyValue("grid-template-rows").split(" ").length;
//get number of grid columns
const gridCols = gridComputed.getPropertyValue("grid-template-columns").split(" ").length;

const gridCells = gridRows * gridCols;


window.onload = createDivs();

// creation of griditems(divs) to fill out each cell based on number of grid cells
function createDivs() {
    for (let i = 0; i < gridCells; i++) {
        const div = document.createElement("div");
        div.classList.add("griditem");

        //event listener to change bg color on hover on every new div created
        div.addEventListener("mouseover" , () => {
            div.style.backgroundColor = "darkblue"
        })


        container.appendChild(div);
        
        
}

}
