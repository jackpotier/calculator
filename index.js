//Set defaults
const click = new Audio("click.wav");
let buttonGrid = document.querySelectorAll(".grid-item");
buttonArray = Array.from(buttonGrid);

//Turn number 'strings' into operable numbers
let numberStringGrid = document.getElementsByClassName("number")
let numberStringArray = Array.from(numberStringGrid);
for (let i=0; i<10; i++){
    numberStringArray[i].substring('button#'.length)
}
numberStringArray.sort(function(a, b){return a - b});
console.log(numberStringArray);

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