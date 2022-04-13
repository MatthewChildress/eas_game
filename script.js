// need to make event listeners for buttons
// need connect js and css
let slider = document.getElementById("myRange");
let output = document.getElementById("sizeNum");
let setBtn = document.getElementById("setBtn");
let rstBtn = document.getElementById("rstBtn");
let gridBox = document.querySelector("grids");
let col = document.getElementById('color');
let colOutput = document.getElementById('colOutput');
let curColor = '#000000'

output.innerHTML = slider.value;
//Reports back the information from slider as it adjusts
slider.oninput = function () {
    output.innerHTML = this.value;
}
// shows on screen hexa code for color
col.addEventListener('input', () => {
    colOutput.innerHTML = col.value;
})
// as input changes. setCol changes code
col.onchange = (e) => setCol(e.target.value)
// makes curColor value from input. console.log to verify
let setCol = (colChoice) => {
    curColor = colChoice
    console.log(curColor);
}


function cellColor(e) {
    e.target.style.backgroundColor = curColor;

} 




// event listeners to trigger functions to size grid.
setBtn.addEventListener('click', () => makeGrid(slider.value, slider.value));
rstBtn.addEventListener('click', () => resetGrid());

/*function sets value for --grid-rows,--grid-cols to be that of slider.value
function runs a for loop for iterations equal to sides of grid based on slider.
function creates children divs for div class="grids" to the amount set by slider.value
class names are set for the new divs as 'grid-item' which sets css values for each div.
Newly created divs have eventlisteners attached to them*/
function makeGrid(rows,cols) {
    resetGrid()
    grids.style.setProperty('--grid-rows', rows)
    grids.style.setProperty('--grid-cols', cols)
    let gridSize = slider.value * slider.value;
    for (i = 0; i < gridSize; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mousedown', cellColor)
        cell.addEventListener('mouseover', cellColor);
        grids.appendChild(cell).className = 'grid-item';
        cell.setAttribute('id', [i + 1]); // set for dev tools div count.
    };
};

// while loop continues going as long as there is a child div within "grids"
function resetGrid() {
    while(grids.firstChild) {
        grids.removeChild(grids.firstChild);
    }
}



// beginning of background color change function
