//Set defaults
const click = new Audio("click.wav");
let buttonGrid = document.querySelectorAll(".grid-item");
buttonArray = Array.from(buttonGrid);

//Turn number classes into operable numbers
let numClassArray = document.querySelectorAll(".number");
let numbers = [];
for (let i=1; i<=10; i++){
    numbers[i] = numClassArray[i].class;
}

//Makes a click sound on button press
function calClick(){
    buttonGrid.forEach(function(playSound) {
        playSound.addEventListener("click", function() {
            click.play();
        });
    });
}


//Identifies the button pressed and gets its value
buttonGrid.forEach(function(getValue){
    getValue.addEventListener("click", function() {
        calClick();
        console.log(numbers);
    })
});


//Display 