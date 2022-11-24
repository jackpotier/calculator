//Set defaults
let buttonGrid = document.querySelectorAll(".grid-item");
buttonArray = Array.from(buttonGrid);


//Identifies the button pressed and gets its value
buttonArray.forEach(function(getValue){
    getValue.addEventListener("click", function() {
        console.log(getValue.id);
    })
});



//Makes a click sound on button press
function calClick(){
    const click = new Audio("click.wav");
    buttonGrid.forEach(function(playSound) {
        playSound.addEventListener("click", function() {
            click.play();
        });
    });
}

