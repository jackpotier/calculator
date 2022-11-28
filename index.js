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
ansCount = 0;
memoryDrive = [];
memoryDisplay = [];
wholeNumbers = [];
operators = [];
answers = [];


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
        memoryDisplay = [];
        wholeNumbers = [];
        answers = [];
        operators = [];
        counter = 0;
        numCount = 0;
        opCount = 0;
        ansScreen.textContent = "";
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
            for (let i=0; i<=numCount; i++){
                if (ansCount <=0){
                    if (operators[i] == '*'){
                        answers[ansCount] = wholeNumbers[i]*wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    else if (operators[i] == '/'){
                        answers[ansCount] = wholeNumbers[i]/wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    if (operators[i] == '-'){
                        answers[ansCount] = wholeNumbers[i]-wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    if (operators[i] == '+'){
                        answers[ansCount] = wholeNumbers[i]+wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                
                }
                else if (ansCount > 0){
                    if (operators[i] == '*'){
                        answers[ansCount] = answers[ansCount-1]*wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    if (operators[i] == '/'){
                        answers[ansCount] = answers[ansCount-1]/wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    if (operators[i] == '-'){
                        answers[ansCount] = answers[ansCount-1]-wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                    if (operators[i] == '+'){
                        answers[ansCount] = answers[ansCount-1]+wholeNumbers[i+1];
                        answers[ansCount] = Number(answers[ansCount]);
                        console.log(answers);
                    }
                }
                ansCount+=1;
            }
        memoryDrive = [];
        memoryDisplay = [];
        wholeNumbers = [];
        operators = [];
        numCount = 0;
        opCount = 0;
        ansCount = 0;
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

    //Check for duplicate of a decimal point
    function checkDuplicate(memoryDisplay){
        const toFindDuplicates = memoryDisplay => memoryDisplay.filter((item, index) => memoryDisplay.indexOf(item) !== index)
        const duplicateElements = toFindDuplicates(memoryDrive);
        if (duplicateElements.includes(".") === true){
            console.log(syntError);
            ansScreen.textContent = syntError;
        }
        if (duplicateElements.includes(".") === false){
            ansScreen.textContent = answers[answers.length-1];
        }
    
    }
    checkDuplicate(memoryDisplay);
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
        console.log("NumCount:",numCount);
        console.log("Numbers:",wholeNumbers);
        console.log("Operators",operators);
        console.log("Answers",answers);
    })
});
