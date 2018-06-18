$(function () {

   

    $("#projects-btn").click(function () {

        // $("#about-me").hide();
         $("#middle-panel").css("opacity", "0");
        // $("#about-me").css("line-height", "2em");
      

        $('html, body').animate({
            scrollTop: $("#projects").offset().top}, 2000,function(){       
            $("#middle-panel").animate({
                left: '250px',
                opacity: '0.9',
                height: '150px',
                width: '150px'
            });

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




