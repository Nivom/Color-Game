$(document).ready(function() {
    const MAX_RGB_VALUE = 255;
    const NUMBER_OF_COLORS = 6;
    const HEADER_BASE_COLOR = $("#color-header").css("background-color");

    var winColor;
    var isEasyModeOn = false;
    var colors = [];



    function winGame() {
        for (var c = 0; c < NUMBER_OF_COLORS; c++) {
            $("#color-" + c).css("background-color", winColor);
        }
        $("#color-header").css("background-color", winColor);
        alert("You won!");
    }

    
    function reset() {

        for (var c = 0; c < NUMBER_OF_COLORS; c++) {
            $("color-" + c).css("cursor", "pointer");
            $("#color-" + c).removeClass("h-color");
        }

        colors = [];
        winColor = null;
    }

    function chooseWinColor() {
        let winner = Math.round(Math.random() * colors.length);
        winColor = colors[winner];
        $("#color-text").html(winColor);
    }


    function generateColors() {

        reset();

        let activeColors;
        if (isEasyModeOn) {
            activeColors = NUMBER_OF_COLORS / 2;
        } else {
            activeColors = NUMBER_OF_COLORS;
        }

        for (var c = 0; c < activeColors; c++) {
            let randRed = Math.round(Math.random() * MAX_RGB_VALUE);
            let randGreen = Math.round(Math.random() * MAX_RGB_VALUE);
            let randBlue = Math.round(Math.random() * MAX_RGB_VALUE);
            
            let clr = "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";

            $("#color-" + c).css("background-color", clr);

            colors.push(clr);
        }
        chooseWinColor();
    }
    

    $(".color").click(function() {
        if ($(this).css("background-color") == winColor) {
            winGame();
        } else {
            $(this).addClass("h-color");
            $(this).css("cursor", "inherit");
        }
    });


    $("#chal-ez").click(function() {
        if (!isEasyModeOn) {
            isEasyModeOn = true;
            $("#color-3").toggle();
            $("#color-4").toggle();
            $("#color-5").toggle();
            generateColors();
        }
    });

    $("#chal-hard").click(function() {
        if (isEasyModeOn) {
            isEasyModeOn = false;
            $("#color-3").toggle();
            $("#color-4").toggle();
            $("#color-5").toggle();
            generateColors();
        }
    });


    $("#new-colors").click(function() {
        $("#color-header").css("background-color", HEADER_BASE_COLOR);
        generateColors();
    });


    generateColors();
    
});