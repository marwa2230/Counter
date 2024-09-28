//loading screen
$(function(){
    $('.loader').fadeOut(1000 ,function(){
        $('.loading').slideUp(1000 ,function(){
            $('body').css('overflow','auto');
            $('.loading').remove()
        })
    })
})




//slidedown
    $('.toggle').click(function(){
        var nextInner = $(this).next('.inner');
        $('.inner').not(nextInner).slideUp(); 
        nextInner.slideToggle(); 
    });


    $('a').on('click',function(e){
        let aHref=e.target.getAttribute('href');
        let sectionOffest=$(aHref).offse().top;t
        $('html,body').animate({scrollTop:sectionOffest},1000);
    })


//leftmenu
    $('.openNav').on('click',function(){
        $('#leftMenu').animate({width:'250px'},1000)
        $("#home-content").animate({marginLeft :'250px'},1000)

    })
    $(".closebtn").on('click',(function(){
        $("#leftMenu").animate({ width:'0px'},1000)
       $("#home-content").animate({marginLeft :'0px'},1000)
    }))

//textear counter
    var maxLength = 100;
    $('textarea').keyup(function() {
        var length = $(this).val().length;
         var AmountLeft = maxLength - length;
         if (AmountLeft <= 0) {
            $("#chars").text("your available character finished");
        } else {
            $("#chars").text(AmountLeft);
        }
    });


    //event count down time
    window.onload = function() {
        countDownToTime("25 November 2026 10:30:56");
    }

    function countDownToTime(countTo) {
        let futureDate = new Date(countTo).getTime();
        let countdownInterval = setInterval(function() {
            let now = new Date().getTime();
            let timeDifference = (futureDate - now) / 1000;

            let days = Math.floor(timeDifference / (24 * 60 * 60));
            let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
            let mins = Math.floor((timeDifference % 3600) / 60);
            let secs = Math.floor(timeDifference % 60);

            $(".days").text(days + " D");
            $(".hours").text(hours + " h");
            $(".minutes").text(mins + " m");
            $(".seconds").text(secs + " s");

            if (timeDifference < 0) {
                clearInterval(countdownInterval);
                $("#countdown").text("time is fnished");
            }
        }, 1000);
    }