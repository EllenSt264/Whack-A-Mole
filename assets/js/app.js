document.addEventListener("DOMContentLoaded", function() {
    // Using the JQuery selector breaks the score function
    const gameContainer = document.querySelector(".game-container");
    const hole = document.querySelectorAll(".hole");
    const mole = document.querySelectorAll(".mole");
    const timer = document.querySelector("#timer");
    let score = document.querySelector('#score')
    let result = 0;

    // Move the mole to random position
    function randomHole() {
        $(hole).each(function(c) {
            $(this).removeClass("mole");
        });
        i = Math.floor(Math.random()*6);
        $(hole[i]).addClass("mole");
        hitPositionId = hole[i].id;
    }

    // Make the mole move at a specified speed
    setInterval(function() {
        randomHole();
    }, 1000);

    // Stores user hits to the scoreboard
    hole.forEach(i=>{
        i.addEventListener("mouseup",()=>{
            if(i.id===hitPositionId){
            result++;
            score.textContent = result;
            }
        });
    });

    // Timer countdown function
    function countDown(duration, display) {
        var countDownTimer = duration, minutes, seconds;
        setInterval(function() {
            minutes = parseInt(countDownTimer / 60, 10);
            seconds = parseInt(countDownTimer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--countDownTimer < 0) {
                countDownTimer = duration;
            }
        }, 1000);   // sets the speed
    }   
    
    // Timer countdown user display
    window.onload = function() {
        var oneMinute = 60 * 1,
            display = $("#timer");

        countDown(oneMinute, display);
    }
})