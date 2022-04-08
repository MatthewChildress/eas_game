let canvas = document.getElementById('canvas');
let slider = document.getElementById('myRange');
let output = document.getElementById('sizenum');
const grids = document.getElementById('grids');


output.innerHTML = slider.value;

//Reports back the information from slider as it adjusts
slider.oninput = function() {
    output.innerHTML = this.value;
}



function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0, c< (rows * cols), c++) {
        let cell = document.createElement('div');
        cell.innerText = (c +1);
        container.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16,16);