const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
const tenGrid = document.querySelector("#tenGrid");
const sixteenGrid = document.querySelector("#sixteenGrid");
const sixfourGrid = document.querySelector("#sixfourGrid");
let currentgridSize = 257;
let bgColor = 'black'



const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string


window.addEventListener('load', () => {


    grid.style.gridTemplateColumns = "repeat(16, 1fr)";
    grid.style.gridTemplateRows= "repeat(16, 1fr)";

    for(let i = 1; i < 257; i++){

        

        grid.innerHTML += `<div class= grid-element id=${i} ;></div>`;}

    

});

grid.addEventListener('mouseover', event => {

    let target = event.target; 
    
    if (bgColor === 'black') {
   
       
        target.style.backgroundColor =  'black';
    }
    
    else { 
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string      
        console.log(rgb);
        target.style.backgroundColor = rgb;
    
    }


    
});

reset.addEventListener('click', () => {

    bgColor = 'black';

    for(let i = 1; i < (currentgridSize + 1); i++){

        let currentBox = document.getElementById(`${i}`);

        currentBox.style.backgroundColor =  `white`;

}

    


});

rainbow.addEventListener('click', () => {  

        bgColor = rgb;

});



tenGrid.addEventListener('click', () => {  

    grid.innerHTML = "";
    grid.style.gridTemplateColumns = "repeat(10, 1fr)";
    grid.style.gridTemplateRows= "repeat(10, 1fr)";

    for(let i = 1; i < 101; i++){

        

        grid.innerHTML += `<div class= grid-element id=${i} ;></div>`;}

        currentgridSize = 101;

    
    

});

sixteenGrid.addEventListener('click', () => {  

    grid.innerHTML = "";
    grid.style.gridTemplateColumns = "repeat(16, 1fr)";
    grid.style.gridTemplateRows= "repeat(16, 1fr)";

    for(let i = 1; i < 257; i++){

        

        grid.innerHTML += `<div class= grid-element id=${i} ;></div>`;}

        currentgridSize = 257;

    
    

});

sixfourGrid.addEventListener('click', () => {  

    grid.innerHTML = "";
    grid.style.gridTemplateColumns = "repeat(64, 1fr)";
    grid.style.gridTemplateRows= "repeat(64, 1fr)";

    for(let i = 1; i < 4097; i++){

        

        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        //gridElement.setAttribute(id,(${i}));
        grid.appendChild(gridElement)

}

        currentgridSize = 4097;

    
    

});










/*const container = document.querySelector("#container");
const box = document.querySelectorAll("#container");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
let bgColor = 'black'



const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string










container.addEventListener('mouseover', event => {
    let target = event.target; 

    if (bgColor === 'black') {
   
       
    target.style.backgroundColor =  bgColor;
}

else { 
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string      
    console.log(rgb);
    target.style.backgroundColor = rgb;

}

});

reset.addEventListener('click', () => {

    for(let i = 1; i < 257; i++){

        let currentBox = document.getElementById(`${i}`);

        currentBox.style.backgroundColor =  `white`;

}

bgColor = 'black';


});

rainbow.addEventListener('click', () => {  

        bgColor = rgb;

});
*/













    



