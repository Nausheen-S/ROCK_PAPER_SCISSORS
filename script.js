/*var stoneClick = function(){
    console.log("stone click working");

}
var paperClick = function(){
    console.log("paper click working");
}
var scissorsClick = function(){
    console.log("scissors click working");
}






var playClick = function(){
    alert("Select your choice");
    console.log("play working");
    stoneChoice.addEventListener('click', stoneClick);
    paperChoice.addEventListener('click', paperClick);
    scissorsChoice.addEventListener('click', scissorsClick);


}
var replayClick = function(){
    alert("Select your choice");
    console.log("replay working");
}
var infoClick = function(){
    console.log("instructions working");
}



var computerChoice = function(){
var compChoice = Math.floor(Math.random()*3);
console.log(compChoice);
}

var playButton = document.getElementById('start');
var replayButton = document.getElementById('restart');
var infoButton = document.getElementById('information');
var stoneChoice = document.getElementById('stone');
var paperChoice = document.getElementById('paper');
var scissorsChoice = document.getElementById('scissors');

playButton.addEventListener('click', playClick);
replayButton.addEventListener('click', replayClick);
infoButton.addEventListener('click', infoClick);*/




//3) INITIALIZE REQUIRED VARIABLES
var userChoice;
var compChoice;
var userScore = 0;
var compScore = 0;


//4) CALCULATE COMPUTER CHOICE
var computerOutput = function(){
    var compChoice = Math.floor(Math.random()*3);
    console.log("comp choice is " + compChoice);
    if(compChoice === 0){
        compChoice = "stone";
    }else if(compChoice === 1){
        compChoice = "paper";
    }else{
        compChoice = "scissors";
    }
    return compChoice;
}
//7)BASED ON RESULT FUNCTION IS EXECUTED
var tie = function(){
    document.getElementById('uWinMsg').innerHTML = "";
    document.getElementById('cWinMsg').innerHTML = "";
    var tOutput = document.getElementById('tie');
    tOutput.innerHTML = "It's a tie!!";
    var playAudioT = document.getElementById('audioTie');
    playAudioT.play();
}
var userWon = function(){
    var tOutput = document.getElementById('tie');
    tOutput.innerHTML = "";
    document.getElementById('cWinMsg').innerHTML = "";
    document.getElementById('uWinMsg').innerHTML = "Hurray!! You won...";
    //var x = document.getElementById('uWinMsg');
    //setTimeout(function(){x.value.style.visibility = "hidden";},3000);
    var playAudioU = document.getElementById('audioWin');
    playAudioU.play();
    var uOutput = document.getElementById('user');
    userScore+=1;
    uOutput.innerHTML = userScore;
}

var compWon = function(){
    var tOutput = document.getElementById('tie');
    tOutput.innerHTML = "";
    document.getElementById('uWinMsg').innerHTML = "";
    document.getElementById('cWinMsg').innerHTML = "Oops!! The computer won...";
    var playAudioC = document.getElementById('audioLose');
    playAudioC.play();
    var cOutput = document.getElementById('computer');
    compScore+=1;
    cOutput.innerHTML = compScore;
}
//6) CHOICE SELECTED IS COMPARED ACCORDING TO GAME RULES
var compare = function(userChoice,compChoice){
    compChoice = computerOutput();
    if(userChoice === compChoice){
        tie();
        console.log("tie");
    }else if(userChoice === "stone" && compChoice === "paper"){
        compWon();
        console.log("CS:" + compScore);
    }else if(userChoice === "stone" && compChoice === "scissors"){
        userWon();
        console.log("US:" + userScore);
    }else if(userChoice === "paper" && compChoice === "stone"){
        userWon();
        console.log("US:" + userScore);
    }else if(userChoice === "paper" && compChoice === "scissors"){
        compWon();
        console.log("CS:" + compScore);
    }else if(userChoice === "scissors" && compChoice === "paper"){
        userWon();
        console.log("US:" + userScore);
    }else if(userChoice === "scissors" && compChoice === "stone"){
        compWon();
        console.log("CS:" + compScore);

    }else{
        alert("something fishy");
    }

}
var stoneClick = function(){
    console.log("stone click working");
    userChoice = "stone";
    console.log("user choice: " + userChoice);
    compare(userChoice);
}
var paperClick = function(){
    console.log("paper click working");
    userChoice = "paper";
    console.log("user choice: " + userChoice);
    compare(userChoice);
}
var scissorsClick = function(){
    console.log("scissors click working");
    userChoice = "scissors";
    console.log("user choice: " + userChoice);
    compare(userChoice);
}
//5) EXECUTE THE FUNCTIONS FOR EACH BUTTON
var playClick = function(){
    playButton.style.visibility = "hidden";
    replayButton.style.visibility = "visible";
    //replayButton.disabled = false;
    //alert("Select your choice");
    var slidetext = document.getElementById('slide');
    slidetext.innerHTML = "Select your choice";
    slidetext.classList.add('slide-next');
    console.log("play working");
    stoneChoice.addEventListener('click', stoneClick);
    paperChoice.addEventListener('click', paperClick);
    scissorsChoice.addEventListener('click', scissorsClick);


}
var replayClick = function(){
    console.log("replay working");
    var tOutput = document.getElementById('tie');
    tOutput.innerHTML = "";
    document.getElementById('uWinMsg').innerHTML = "";
    document.getElementById('cWinMsg').innerHTML = "";
    var uOutput = document.getElementById('user');
    uOutput.innerHTML = 0;
    var cOutput = document.getElementById('computer');
    cOutput.innerHTML = 0;
    userScore = 0;
    compScore = 0;
    playClick();
}
var infoClick = function(){
    console.log("instructions working");
    document.getElementById('instruction').innerHTML = "The logic of the game is very simple. Stone defeats scissors, scissors cuts paper and paper wraps stone. Hope you are now aready to play the game. Enjoy!!";
}
//1)GET ALL ELEMENTS NEEDED
var playButton = document.getElementById('start');
var replayButton = document.getElementById('restart');
var infoButton = document.getElementById('information');
var stoneChoice = document.getElementById('stone');
var paperChoice = document.getElementById('paper');
var scissorsChoice = document.getElementById('scissors');
//2)CREATE EVENT LISTENERS FOR THEM
playButton.addEventListener('click', playClick);
replayButton.addEventListener('click', replayClick);
infoButton.addEventListener('click', infoClick);
//replayButton.disabled = true;
replayButton.style.visibility = "hidden";