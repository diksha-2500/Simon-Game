var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var start = 1;
var level = 0;

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
      console.log("success");
}
else{
     var aud=new Audio("sounds/wrong.mp3");
     aud.play();
     $("body").addClass("game-over");
     setTimeout(function () {
      $("body").removeClass("game-over")
}, 200);
$("h1").text("Game Over, Press Any Key to Restart");
start=1;
level=0;
gamePattern=[];
userClickedPattern=[];
}
if(currentLevel===gamePattern.length -1){
      setTimeout(function () {
           nextSequence();
      }, 100);
}
}

document.addEventListener("keypress", function () {
      if (start === 1) {
            nextSequence();
            start = 0;
      }
})
// $("document").on("click",function(){
//      alert("ngvng");
// })


function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");
      setTimeout(function () {
            $("#" + currentColour).removeClass("pressed")
      }, 100);

}

function playSound(name) {
      var aud = new Audio("sounds/" + name + ".mp3");
      aud.play();
}

$(".btn").click(function () {
      var userChosenColour = this.id;
      console.log(this.id);
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {
      userClickedPattern=[];
      $("h1").text("Level " + level);
      level++;
      var randomNumber = Math.floor(Math.random() * 4);
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
      $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);

}



