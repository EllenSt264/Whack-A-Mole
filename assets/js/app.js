document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = $(".game-container");
    const hole = $(".hole");
    const mole = $(".mole");
    const timer = $("#timer");
    let score = $("#score");    // using let instead of const because this variable will change

    // Random hole function
    let result = 0;

    function randomHole() {
        $(".game-container > div").each(function() {
            if ($(this).is(".mole")) {
                $("div").removeClass("mole");
            }
            let randomPosition = hole[Math.floor(Math.random() * 6)]
            $(randomPosition).addClass("mole");

            // assign the id of randomPosition to hitPosition for later
            hitPosition = randomPosition.id;
        })
    }

    for (id in hole) {
        $(id).mouseup(function() {
            if (id.id === hitPosition) {
                result = result + 1;
                score.textContent   // to see the score on the webpage
            }
        });
    }

    // Move mole function
    function moveMole() {
        let moleTimerId = null;
        timerId = setInterval(randomHole, 1000);
    }

    moveMole();
    
})