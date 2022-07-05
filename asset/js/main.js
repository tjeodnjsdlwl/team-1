$(function(){
    $('header .gnb-item').hover(function(){
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

    $('.sc-kakaoload .btn-more').click(function(){
        $('.sc-kakaoload').toggleClass('active');
    });

    mainTl = gsap.timeline({})

    .addLabel('label')
    .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')
    .from ('.txt-box',{y: 20,duration: 0.8,opacity:0})

    textTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-suppinfor',
            start: 'bottom bottom',
            // markers: true
        }
    })

    .addLabel('title')
    .from ('.sc-suppinfor .s-title',{y: 20,duration: 1,opacity:0},'title')
    .from ('.sc-suppinfor .desc',{y: 20,duration: 1,opacity:0},'title')

    textTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-custalk',
            start: 'top bottom',
            // markers: true
        }
    })
    .addLabel('title')
    .from ('.sc-custalk .s-title',{y: 20,duration: 1,opacity:0},'title+=.3')
    .from ('.sc-custalk .desc',{x: 20,duration: 1,opacity:0},'title+=.3')

    

    boat = gsap.utils.toArray('.boat');
    boat.forEach((boat) => {
        gsap.from(boat, 1.2, {
            y: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: boat,
                start: 'top bottom',
            }
        })
    }) 
    // 텍스트 아래에서 위로

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