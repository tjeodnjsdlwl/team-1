$(function(){
    $('header .gnb-list').hover(function(){
        $('header').addClass('over');
    }, function(){
        $('header').removeClass('over');
    })

    $("header .gnb-item:first-child > a").focusin(function(){
        $('header').addClass('over');
   });
   $("header .gnb-item:nth-last-child(2) .subMenu-item:last-child a").focusout(function(){
        $('header').removeClass('over');
   });

    $(window).scroll(function(){
        var curr = $(this).scrollTop();

        if (curr >= 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

})