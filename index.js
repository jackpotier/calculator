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
memoryDrive = [];
memoryDisplay = [];
wholeNumbers = [];

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
    }
    else if (getValue.id == 'multiply'){
        memoryDrive[counter] = '*';
        memoryDisplay[counter] = 'x';
    }
    else if (getValue.id == 'addition'){
        memoryDrive[counter] = '+';
        memoryDisplay[counter] = '+'
    }
    else if (getValue.id == 'divide'){
        memoryDrive[counter] = '/';
        memoryDisplay[counter] = '÷'
    }
    else if (getValue.id == 'minus'){
        memoryDrive[counter] = '-';
        memoryDisplay[counter] = '-';
    }
    else if (getValue.id == 'equals'){
        memoryDisplay = [];
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

    if (getValue.id == 'multiply' || getValue.id == 'divide' || getValue.id == 'minus' || getValue.id == 'addition' || getValue.id == 'equals'){
        numCount +=1
        wholeNumbers[numCount] = memoryDrive[counter];
        numCount-=1
        memoryDrive.pop();
        wholeNumbers[numCount] = memoryDrive.join("");
        memoryDrive = [];
        numCount +=2
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
    })
});
