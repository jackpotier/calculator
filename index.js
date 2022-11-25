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
    memoryDrive[counter] = getValue.id;
    if (getValue.id == 'clearAll'){
        memoryDrive = [];
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
