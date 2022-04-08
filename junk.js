// potential grid via JS
let container = document.getElementById('grid');
let cell = document.createElement('div');

cell.innerHTML = "test";
container.appendChild(cell);

const grids = document.getElementById('grids');

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