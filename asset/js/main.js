
    
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
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    });


    
    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    var btnKakaoT = $('.btn-kakaoT').offset().top;

    $(window).scroll(function(){
        var currentScroll = $(window).scrollTop();
        currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');
        // 메인페이지 헤더 클래스 스크롤에 의한 추가/제거

        var headerH = $('.header-area').outerHeight();
        
        currentScroll >= btnKakaoT - headerH ? $('.btn-kakaoT, .sc-kakaoT').addClass('fixed') : $('.btn-kakaoT, .sc-kakaoT').removeClass('fixed')
    }) 

   
    gsap.fromTo($('.title-area em'), .8, {
        opacity: 0,
        y: 10,
    }, {
        opacity: 1,
        y: 0,
        stagger : {
            each: .3
        }
    }) // 비쥬얼 영역 순차적으로 위에서 아래로

    var lastNum = parseInt($('.day-distance span').text());
    var gap = lastNum - (lastNum/10)
    var startNum = lastNum-gap;

    var count = {var: startNum};

    gsap.to(count, 3, {
    var: lastNum,
    onUpdate: changeNumber,
    })

    function changeNumber() {
        var currentNum = count.var;
        var push = parseInt(currentNum).toLocaleString('ko-KR');
    $('.day-distance span').text(push) 
    } // 숫자 롤링

    gsap.fromTo($('.visual-area p'), 1.2,{
        opacity: 0,
        x: -100,
        delay: 1.6
    }, {
        opacity: 1,
        x: 0
    }) // 텍스트 왼쪽에서 오른쪽으로 슬라이드

    storyText = gsap.utils.toArray('.text-wrap');
    storyText.forEach((storyText) => {
        gsap.from(storyText, 1.2, {
            y: 30,
            opacity: 0,
            scrollTrigger: {
                trigger: storyText,
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

    mainTl = gsap.timeline({})

    .addLabel('label')
    .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')
    .from ('.txt-box',{y: 20,duration: 0.8,opacity:0})
    // 서브페이지 gsap

    

    $('.btn-kakaoT button').click(function(){
    
        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');
    
        $('.sc-kakaoT').each(function(){
    
            $(this).data('content') == activeTab ? $(this).addClass('active') : $(this).removeClass('active')
    
        })
    });

})