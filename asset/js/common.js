$(function(){
    
    gsap.to($('.loading-sub'), .8, {
        opacity: 0,
        delay: 1
    })
    
    $('header .gnb-item').hover(function () {
        $('header').addClass('over');
    }, function () {
        $('header').removeClass('over');
    })

    $("header .gnb-item:first-child > a").focusin(function () {
        $('header').addClass('over');
    });
    $("header .gnb-item:nth-last-child(2) .subMenu-item:last-child a").focusout(function () {
        $('header').removeClass('over');
    });

    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr >= 100) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    });

    textUp = gsap.utils.toArray('.textUp');
    textUp.forEach((textUp) => {
        gsap.from(textUp, 1.2, {
            y: 30,
            opacity: 0,
            scrollTrigger: {
                trigger: textUp,
                start: 'top bottom',
            }
        })
    }) // 텍스트 아래에서 위로

    cover = gsap.utils.toArray('.cover');
    cover.forEach((cover) => {
        gsap.to(cover, 1.2, {
            xPercent: 100,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: cover,
                start: 'top bottom',
            }
        })
    }) // 이미지,비디오 옆으로 슬라이드
})