$(function () {



    $("#projects-btn").click(function () {

        // $("#about-me").hide();
        //  $("#middle-panel").css("opacity", "0");


        $("#middle-panel").animate({
            opacity: '0'

        });
        $("#about-me").css("line-height", "0.9em");
        $("#about-me").css("margin", "0");
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000, function () {
            $("#middle-panel").show(2000);

            $("#trans-box").animate({
                left: '10%',               
                height: '650px',
                width: '10px',
                top: "120px"

            }, 1000);



            $("#middle-panel").animate({
                left: '250px',
                opacity: '0.9',
                height: '650px',
                width: '180px',
                top: "400px"

            }, 1000);

        });

    });
    $('#contact-btn').click(function () {
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 2000);

    });
    $('#about-btn').click(function () {
        $('html, body').animate({
            scrollTop: $("#welcome-section").offset().top
        }, 2000);

    });

});




