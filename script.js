// need to connect slider as event listener to grid sizing
// need to make function for appends for more or less divs
// need to make event listeners for buttons
// need connect js and css
let slider = document.getElementById("myRange");
let output = document.getElementById("sizeNum");
let setBtn = document.getElementById("setBtn");
let rstBtn = document.getElementById("rstBtn");
output.innerHTML = slider.value;

//Reports back the information from slider as it adjusts
slider.oninput = function () {
    output.innerHTML = this.value;
    
}

setBtn.addEventListener('click', () => makeGrid());
rstBtn.addEventListener('click', () => resetGrid());

// creating div per click
function makeGrid(rows,cols) {
    grids.style.setProperty('--grid-rows', rows);
    grids.style.setProperty('--grid-cols', cols);
    for (c = 0; c< (rows * cols); c++) {
        let cell = document.createElement('div');
        grids.appendChild(cell).className = 'grid-item';
    };
};

makeGrid(16,16);

let mono = document.getElementsByID("")

mono.addEventListener('mouseover', () => monoColor());

function monoColor() {
    EventTarget.style.color = "black";
}