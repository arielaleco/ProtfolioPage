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
  
       // transform: rotate(-90deg);
                var div = $(".contacts-info");
                var c1 = $("#connect-me > .circle:nth-of-type(1) ");
                var c2 = $("#connect-me > .circle:nth-of-type(2) ");
                var c3 = $("#connect-me > .circle:nth-of-type(3) ");
                c1.hide();
                c2.hide();
                c3.hide();
                //div.animate({transform: 'rotate(45deg)',fontSize:"140px"}, "slow");
                // div.animate({transform: 'rotate(0deg)', opacity: '0.4'}, "slow");
                
               
               
               //  div.animate({width: '100%', opacity: '0.8'}, "slow");
                // div.animate({height: '100px', opacity: '0.4'}, "slow");
                // div.animate({width: '100px', opacity: '0.8'}, "slow");
            

        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 2000  ,function(){
            c1.fadeIn(500); 
            c2.fadeIn(1000); 
            c3.fadeIn(1500); 
        
        }   );

    });
    $('#about-btn').click(function () {
        $('html, body').animate({
            scrollTop: $("#welcome-section").offset().top
        }, 1000);

    });

});




