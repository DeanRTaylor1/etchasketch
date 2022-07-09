const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
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













    



