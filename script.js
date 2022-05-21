let slider = document.getElementById("myRange");
let output = document.getElementById("sizeNum");
let setBtn = document.getElementById("setBtn");
let rstBtn = document.getElementById("rstBtn");
let gridBox = document.querySelector("grids");
let col = document.getElementById('color');
let colOutput = document.getElementById('colOutput');


//default color selection is black
let curColor = '#000000'

// attaches value from slider to a variable to scale grid
let size = slider.value

output.innerHTML = `${slider.value} X ${slider.value}`;
//Reports back the information from slider as it adjusts
slider.oninput = function () {
    output.innerHTML = `${slider.value} X ${slider.value}`;
}

// as input changes. setCol changes code
col.onchange = (e) => setCol(e.target.value)
// makes curColor value from input. console.log to verify
let setCol = (colChoice) => {
    curColor = colChoice
}

// sets condition to allow mousdown and mouseover to work
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// if statement will not allow coloring unless mousdown is active as well
function cellColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = curColor;
} 


// event listeners to trigger functions to size grid.
setBtn.addEventListener('click', () => makeGrid(slider.value, slider.value));
rstBtn.addEventListener('click', () => resetGrid());

/*size variable is input then automatically resets grid parameters so it doesn't keep adding to size. was an issue from earlier on*/
function makeGrid(size) {
    resetGrid()
    // template literal to take size variable to adjust CSS for grid size
    grids.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    let gridSize = slider.value * slider.value;
    for (i = 0; i < gridSize; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mousedown', cellColor) // adds event listener to nearly created cell
        cell.addEventListener('mouseover', cellColor); // adds different event listener
        grids.appendChild(cell).className = 'grid-item'; // sets the div as a child to grids
        cell.setAttribute('id', [i + 1]); // set for dev tools div count.
    };
};

// while loop continues going as long as there is a child div within "grids"
function resetGrid() {
    while(grids.firstChild) {
        grids.removeChild(grids.firstChild);
    }
}
