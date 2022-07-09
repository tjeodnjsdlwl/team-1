$(function(){
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

    tl = gsap.timeline({})

    .addLabel('label')
    .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    .from ('.sc-informain .ic-float',{scale: 0, opacity:0, duration: 0.8,})

    .addLabel('m1')
    .from ('.sc-informain .title-wrap .txt-box',{y: 60,duration: 0.8, opacity:0,},'m1')
    .to ('.sc-informain .ic-float',{y: 30,duration: 0.8},'m1')
    // kakaoT 비쥬얼열역 gsap
})