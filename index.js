//Set defaults
const click = new Audio("click.wav");
let buttonGrid = document.querySelectorAll(".grid-item");
buttonArray = Array.from(buttonGrid);
let currentMemory = document.querySelector("#currentMemory");
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
        memoryDrive[counter] = '=';
    }
    else if (getValue.id == 'backspace'){
        memoryDrive.pop();
    }
    else if (getValue.id == 'decimalPoint'){
        memoryDrive[counter] = '.';
    }
    else {
        memoryDrive[counter] = getValue.id;
    }
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
