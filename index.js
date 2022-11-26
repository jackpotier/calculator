//Set defaults
const click = new Audio("click.wav");
const syntError = "Syntax error";
let buttonGrid = document.querySelectorAll(".grid-item");
let currentMemory = document.querySelector("#currentMemory");
let ansScreen = document.querySelector("#ansScreen");
buttonArray = Array.from(buttonGrid);
counter = 0;
memoryDrive = [];

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
    }
    else if (getValue.id == 'multiply'){
        memoryDrive[counter] = 'x';
    }
    else if (getValue.id == 'addition'){
        memoryDrive[counter] = '+';
    }
    else if (getValue.id == 'divide'){
        memoryDrive[counter] = '÷';
    }
    else if (getValue.id == 'minus'){
        memoryDrive[counter] = '-';
    }
    else if (getValue.id == 'equals'){
        memoryDrive = [];
    }
    else if (getValue.id == 'backspace'){
        memoryDrive.pop();
    }
    else if (getValue.id == 'decimalPoint'){
        memoryDrive[counter] = '.';
    }
    else {
        memoryDrive[counter] = Number(getValue.id);
    }
    checkDuplicate(memoryDrive);
    const displayText = memoryDrive.join('');
    currentMemory.textContent = displayText;
    counter+=1
    console.log(displayText);
}


//Identifies the button pressed and gets its value
buttonGrid.forEach(function(getValue){
    getValue.addEventListener("click", function() {
        calClick();
        displayMemory(getValue);
    })
});
