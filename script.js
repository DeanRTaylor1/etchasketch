const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const pen = document.querySelector("#pen");

let currentgridSize = 257;

let bgColor = 'black'


const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
//let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

reset.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)


function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }

  function setCurrentSize(newSize) {
    currentSize = newSize
  }

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value}`
  }

function clearGrid() {
    grid.innerHTML = ''
  }

  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.setAttribute(`id`,`${i}`);
       // gridElement.addEventListener('mouseover', changeColor)
       // gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
      
    };

    
    
    window.onload = () => {
        setupGrid(DEFAULT_SIZE)
        
      }









const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string





grid.addEventListener('mouseover', event => {

    let target = event.target; 
    
    if (bgColor === 'black') {
   
       
        target.style.backgroundColor =  'black';
    }

    else if (bgColor === 'white') { 
        target.style.backgroundColor =  'white';
    
    }
    
    else { 
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string      
        //console.log(rgb);
        target.style.backgroundColor = rgb;
    
    }


    
});

reset.addEventListener('click', () => {

    bgColor = 'black';
    console.log(currentSize);

    for(let i = 1; i < (currentSize * currentSize); i++){

        let currentBox = document.getElementById(`${i}`);

        currentBox.style.backgroundColor =  `white`;

}

    


});

rainbow.addEventListener('click', () => {  

        bgColor = rgb;

});


eraser.addEventListener('click', () => {  

    bgColor = 'white';

});


pen.addEventListener('click', () => {  

    bgColor = 'black';

});



