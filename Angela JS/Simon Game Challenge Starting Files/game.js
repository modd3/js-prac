var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length -1);
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    level += 1;
    $('#level-title').text("level " + level);

    var randomNum = Math.round(Math.random() * 3);
    var randomChosenColor = buttonColours[randomNum];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    console.log(gamePattern);
    console.log(userClickedPattern);

}

function animatePress(currentColor) {
    $('.' + currentColor).addClass('pressed');
    setTimeout(function() {
        $('.' + currentColor).removeClass('pressed');
    }, 100);
}

$(document).keypress(function() {
    if (!gameStarted) {
        $('#level-title').text("level " + level);
        nextSequence();
        gameStarted = true;
    }
})

function checkAnswer(gameLevel) {
    console.log(gameLevel);
    console.log(gamePattern);

    if (gamePattern[gameLevel] === userClickedPattern[gameLevel]) {
        console.log('Success');
        if (gamePattern.length === userClickedPattern.length) {
            console.log('same length');
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000); 
        }
    } else {
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 2000);
        $('h1').text('Game Over, Press Any Key to Restart');
        startOver();
        console.log("Failure!");
    }
}


function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false;
}