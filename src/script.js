var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisp");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
}

function setUpSquares(){ // Function to setup the Color in the Squares
    for(var i = 0 ; i<squares.length ;i++){
    
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click",function(){
            var clickedColor = (this.style.backgroundColor);

            if(clickedColor === pickedColor){
                messageDisp.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisp.textContent = "Try again";
            }
        })
    }
}

function setUpModeButtons(){ // Function to set the difficulty of the game
    for(var i = 0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "Easy"? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }

}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisp.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisp.textContent = "";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else 
            squares[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
})

colorDisp.textContent = pickedColor;

function changeColor(color) {
    // loop through all squares 
    // change each color
    for(var i = 0; i<squares.length;i++){
        // we will change each color over here
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = []
    // add num random colors to array
    for(var i = 0;i<num;i++){
        // get random color and push it into arr and repeat num times
        arr.push(randomColor());
    }
    //return arr
    return arr;
}

function randomColor(){
    // pick red from 0-255 similar for green blue
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var str = "rgb("+red+", "+green+", "+blue+")";
    return str;
}