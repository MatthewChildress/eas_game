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

let makeGrid = () => {
    let grids = document.getElementById("grids");
    for(i = 0; i <100; i++) {
        let cells = document.createElement("div");

        grids.appendChild("cells");

    }
}