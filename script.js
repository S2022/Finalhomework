//storing defaults 
//values:
const MIN_DEFAULT = 1
const MAX_DEFAULT = 100
const FIZZ_DEFAULT = 3
const BUZZ_DEFAULT = 5
//names:
const fizzbuzz = "FizzBuzz"
const fizz = "Fizz"
const buzz = "Buzz"

//getting elements into constancts 
const clearbtn = document.getElementById('clear');
const generateBtn = document.getElementById('generateCells');
const cells = document.getElementById('cells');
const resetBtn = document.getElementById('reset');

var minValue = document.getElementById("minNum").value;
var maxValue = document.getElementById("maxNum").value;
var fizValue = document.getElementById("fizzVal").value;
var buzValue = document.getElementById("buzzVal").value;

function init() {

    console.log("initializing...");
    addEvents();
    reset();
    generate();
}

function addEvents() {
    console.log("initializing listeners");
    clearbtn.addEventListener("click", clear);
    generateBtn.addEventListener("click", generate);
    resetBtn.addEventListener("click", reset);
}

function reset() {
    
    document.getElementById("minNum").value = MIN_DEFAULT;
    document.getElementById("maxNum").value = MAX_DEFAULT;
    document.getElementById("fizzVal").value = FIZZ_DEFAULT;
    document.getElementById("buzzVal").value = BUZZ_DEFAULT;
}

function clear() {
    //emptying cells div 
    while (cells.firstChild) {
        cells.removeChild(cells.firstChild);
    }
}

function generate() {
    clear();
    let minValue = parseInt(document.getElementById("minNum").value);
    let maxValue = parseInt(document.getElementById("maxNum").value);
    let fizValue = parseInt(document.getElementById("fizzVal").value);
    let buzValue = parseInt(document.getElementById("buzzVal").value);

    console.log("Min: " + minValue + "\tmax: " + maxValue)
    console.log("Fiz: " + fizValue + "\tbuz: " + buzValue)

   
    for (let i = minValue; i<maxValue+1; i++) {
        const cell = document.createElement("div");
        cell.id = "cellId" + i;  //assigning id 
        cells.appendChild(cell);
        let className = executeLogic(i, fizValue, buzValue)
        cell.setAttribute("class", className === "" ? "default" : className.toLowerCase()); 
        cell.innerText=className + " " + i;
    }
}


function executeLogic(current, fizValue, buzValue) {
    let className = "";
    if (current % fizValue === 0 && current % buzValue === 0) {
        className = fizzbuzz;
    } else if (current % fizValue === 0) {
        className = fizz;
    } else if (current % buzValue === 0 ) {
        className = buzz;
    } 
    console.log("classname is " + className);
    return className;
}


init()
