// need to make event listeners for buttons
// need connect js and css
let slider = document.getElementById("myRange");
let output = document.getElementById("sizeNum");
let setBtn = document.getElementById("setBtn");
let rstBtn = document.getElementById("rstBtn");
let gridBox = document.querySelector("grids");
let col = document.getElementById("color");


output.innerHTML = slider.value;


//Reports back the information from slider as it adjusts
slider.oninput = function () {
    output.innerHTML = this.value;
}

// event listeners to trigger functions to size grid.
setBtn.addEventListener('click', () => makeGrid(slider.value, slider.value));
rstBtn.addEventListener('click', () => resetGrid());

/*function sets value for --grid-rows,--grid-cols to be that of slider.value
function runs a for loop for iterations equal to sides of grid based on slider.
function creates children divs for div class="grids" to the amount set by slider.value
class names are set for the new divs as 'grid-item' which sets css values for each div*/
function makeGrid(rows,cols) {
    resetGrid()
    grids.style.setProperty('--grid-rows', rows)
    grids.style.setProperty('--grid-cols', cols)
    let gridSize = slider.value * slider.value;
    for (i = 0; i < gridSize; i++) {
        let cell = document.createElement('div');
        grids.appendChild(cell).className = 'grid-item';
        cell.setAttribute('id', [i]); // set for dev tools div count
    };
};

// while loop continues going as long as there is a child div within "grids"
function resetGrid() {
    while(grids.firstChild) {
        grids.removeChild(grids.firstChild);
    }
}

// beginning of background color change function
function cellColor() {
    this.style.backgroundColor = col.value;
    return;
}
