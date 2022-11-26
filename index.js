//NEED TO CHANGE THE DECIMAL POINT DUPLICATE FUNCTION TO ALLOW FOR MULTIPLE DECIMAL POINTS WHEN THEY ARE IN DIFFERENT NUMBERS!

//Set defaults
const click = new Audio("click.wav");
const syntError = "Syntax error";
let buttonGrid = document.querySelectorAll(".grid-item");
let currentMemory = document.querySelector("#currentMemory");
let ansScreen = document.querySelector("#ansScreen");
let operatorSpace = document.querySelectorAll(".operator");
buttonArray = Array.from(buttonGrid);
counter = 0;
numCount = 0;
opCount = 0;
memoryDrive = [];
memoryDisplay = [];
wholeNumbers = [];
operators = [];


//Makes a click sound on button press
function calClick(){
    buttonGrid.forEach(function(playSound) {
        playSound.addEventListener("click", function() {
            click.play();
        });
    });
}


//Check for duplicate of a decimal point
function checkDuplicate(memoryDrive){
    const toFindDuplicates = memoryDrive => memoryDrive.filter((item, index) => memoryDrive.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(memoryDrive);
    if (duplicateElements.includes(".") === true){
        console.log(syntError);
        ansScreen.textContent = syntError;
    }
    if (duplicateElements.includes(".") === false){
        ansScreen.textContent = "";
    }
    
}


//Displays button press input on the top of display screen
function displayMemory(getValue){
    if (getValue.id == 'clearAll'){
        memoryDrive = [];
        memoryDisplay = [];
        wholeNumbers = [];
        counter = 0;
        numCount = 0;
        opCount = 0;
    }
    else if (getValue.id == 'multiply'){
        wholeNumbers[numCount] = memoryDrive.join("");
        wholeNumbers[numCount] = Number(wholeNumbers[numCount]);
        memoryDrive = [];
        numCount +=1;
        memoryDrive[counter] = '*';
        memoryDisplay[counter] = 'x';
        operators[opCount] = memoryDrive[counter];
        memoryDrive = [];
        opCount+=1;
    }
    else if (getValue.id == 'addition'){
        wholeNumbers[numCount] = memoryDrive.join("");
        wholeNumbers[numCount] = Number(wholeNumbers[numCount]);
        memoryDrive = [];
        numCount +=1;
        memoryDrive[counter] = '+';
        memoryDisplay[counter] = '+'
        operators[opCount] = memoryDrive[counter];
        memoryDrive = [];
        opCount+=1;
    }
    else if (getValue.id == 'divide'){
        wholeNumbers[numCount] = memoryDrive.join("");
        wholeNumbers[numCount] = Number(wholeNumbers[numCount]);
        memoryDrive = [];
        numCount +=1;
        memoryDrive[counter] = '/';
        memoryDisplay[counter] = '÷'
        operators[opCount] = memoryDrive[counter];
        memoryDrive = [];
        opCount+=1;
    }
    else if (getValue.id == 'minus'){
        wholeNumbers[numCount] = memoryDrive.join("");
        wholeNumbers[numCount] = Number(wholeNumbers[numCount]);
        memoryDrive = [];
        numCount +=1;
        memoryDrive[counter] = '-';
        memoryDisplay[counter] = '-';
        operators[opCount] = memoryDrive[counter];
        memoryDrive = [];
        opCount+=1;
    }
    else if (getValue.id == 'equals'){
        wholeNumbers[numCount] = memoryDrive.join("");
        wholeNumbers[numCount] = Number(wholeNumbers[numCount]);
        console.log(wholeNumbers,operators);
        memoryDrive = [];
        memoryDisplay = [];
        wholeNumbers = [];
        operators = [];
        numCount = 0;
        opCount = 0;
    }
    else if (getValue.id == 'backspace'){
        memoryDrive.pop();
        memoryDisplay.pop();
    }
    else if (getValue.id == 'decimalPoint'){
        memoryDrive[counter] = '.';
        memoryDisplay[counter] = '.';
    }
    else {
        memoryDrive[counter] = Number(getValue.id);
        memoryDisplay[counter] = Number(getValue.id);
    }

    checkDuplicate(memoryDrive);
    const displayText = memoryDisplay.join('');
    currentMemory.textContent = displayText;
    counter+=1
}


//Identifies the button pressed and gets its value
buttonGrid.forEach(function(getValue){
    getValue.addEventListener("click", function() {
        calClick();
        displayMemory(getValue);
        console.log("Round",counter);
        console.log("Memory:",memoryDrive);
        console.log("Display:",memoryDisplay);
        console.log("Numbers:",wholeNumbers);
        console.log("Operators",operators);
    })
});
