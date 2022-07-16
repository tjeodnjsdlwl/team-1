$(function(){

    var btnKakaoT = $('.btn-kakaoT').offset().top;
    var headerH = $('.header-area').outerHeight();
    $(window).scroll(function () {
        var currentScroll = $(document).scrollTop();

        currentScroll >= btnKakaoT - headerH ? $('.btn-kakaoT, .sc-kakaoT').addClass('fixed') : $('.btn-kakaoT, .sc-kakaoT').removeClass('fixed')
    }) // 카카오T 탭 메뉴 고정

    

    imgUp = gsap.utils.toArray('.imgUp');
    imgUp.forEach((imgUp) => {
        gsap.from(imgUp, 1.3, {
            y: 80,
            ease: Power1.easeInOut,
            opacity: 0,
            scrollTrigger: {
                trigger: imgUp,
                start: 'top bottom',
            }
        })
    }) // 서비스 imgUp

    rightLeft = gsap.utils.toArray('.rightLeft');
    rightLeft.forEach((rightLeft) => {
        gsap.from(rightLeft, 1.2, {
            x: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: rightLeft,
                start: 'top bottom',
            }
        })
    }) // 텍스트 오른쪽에서 왼쪽으로

    gsap.from($('.sc-app img'), {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: $('.sc-app img'),
            start: 'top bottom',
        }
    }) // sc-app 카카오T 아이콘 gsap

    var textUpVer2 = gsap.utils.toArray('.textUp-ver2')
    textUpVer2.forEach((textUpVer2) => {
        gsap.from(textUpVer2, 1,{
            y: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: textUpVer2,
                start: 'top bottom',
            }
        })
    }) // text up gsap

    var opacity = gsap.utils.toArray('.opacity');
    opacity.forEach((opacity) => {
        gsap.from(opacity, 1,{
            opacity: 0,
            scrollTrigger: {
                trigger: opacity,
                start: 'top bottom',
            }
        })
    }) // opacity

    leftRight = gsap.utils.toArray('.leftRight');
    leftRight.forEach((leftRight) => {
        gsap.from(leftRight, 1.2, {
            x: -10,
            opacity: 0,
            scrollTrigger: {
                trigger: leftRight,
                start: 'top bottom',
            }
        })
    }) // 텍스트 왼쪽에서 오른쪽으로

    var scTop = $('.service-kakaoT').offset().top
    var kakaoTH = $('.btn-kakaoT').outerHeight();
    $('.btn-kakaoT button').click(function () { // 이 안에 있는 gsap들은 탭 버튼을 누를 때 마다 작동

        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');

        $(window).scrollTop(scTop - (kakaoTH + headerH));
        $('.sc-kakaoT').each(function () {
            cover = gsap.utils.toArray($(this).find('.cover'));
            cover.forEach((cover) => {
                gsap.set(cover, {
                    xPercent: 0
                })
            }) // cover


            if ($(this).data('content') == activeTab) {
                $(this).addClass('active')
                const mainImg = $(this).find('.mainImg-area img');
                gsap.from(mainImg, 1.3, {
                    y: 80,
                    ease: Power1.easeInOut,
                    opacity: 0,
                })

                textUp = gsap.utils.toArray($(this).find('.textUp'));
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


                var cover = gsap.utils.toArray($(this).find('.cover'));
                cover.forEach((cover) => {
                    gsap.to(cover, 1.2, {
                        xPercent: 100,
                        ease: Power1.easeInOut,
                        scrollTrigger: {
                            trigger: cover,
                            start: 'top bottom'
                        }
                    })
                }) // cover

            } else {
                $(this).removeClass('active')
            }

        })

        rightLeft = gsap.utils.toArray('.rightLeft');
            rightLeft.forEach((rightLeft) => {
                gsap.set(rightLeft, {
                    x: 10,
                    opacity: 0,
                })
            })

            rightLeft = gsap.utils.toArray('.rightLeft');
            rightLeft.forEach((rightLeft) => {
                gsap.to(rightLeft, 1.2, {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: rightLeft,
                        start: 'top bottom',
                    }
                })
            }) // 텍스트 오른쪽에서 왼쪽으로

        textUpVer2_click = $('.textUpClick');
        gsap.set(textUpVer2_click, {
            y:10,
            opacity: 0
        })
        gsap.to(textUpVer2_click, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: textUpVer2_click,
                start: 'top bottom',
            }

        }) // text up

    });
     
    var activeTaxi = $('.taxi-type.active').children('img');
    var activeText = $('.taxi-type.active').children('p');
    var other = $('.taxi-type').not('.active').children('img');
    const otherTaxi = gsap.utils.toArray(other);

    gsap.set(activeTaxi, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        skewX: 0
    })
    gsap.set(otherTaxi, {
        xPercent: 124,
        yPercent: -100,
        scale: .8,
        skewX: -10
    })
    gsap.set(activeText, {
        x: -50,
        opacity: 1
    })



    $('.animate-taxi button').click(function () {
        allText = gsap.utils.toArray('.taxi-type p')
        gsap.to(allText, {
            x: 0,
            opacity: 0,
            ease: Power1.easeOut
        })
       
        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');
        
        $('.taxi-type').each(function () {
            if ($(this).data('taxi') == activeTab) {
                var prevTaxi = $('.taxi-type.active').children('img');

                var timeLine = gsap.timeline();
                timeLine.to(prevTaxi, 1,{
                    xPercent: -124,
                    yPercent: 100,
                    scale: .8,
                    skewX: -10,
                    ease: Power1.easeIn             
                })
                .set(prevTaxi, {
                    xPercent: 124,
                    yPercent: -100,
                })

                activeTaxi = $(this).children('img');
                activeText = $(this).children('p');
                gsap.to(activeTaxi, 1,{
                    xPercent: 0,
                    yPercent: 0,
                    scale: 1,
                    skewX: 0,
                    ease: Power1.easeInOut,
                    delay: .3
                })
                gsap.to(activeText, {
                    x: -50,
                    opacity: 1,
                    delay: .8,
                    ease: Power1.easeOut
                })

                $(this).addClass('active').siblings().removeClass('active')
            }
        })
    })
    var swiper = new Swiper(".proxyDetail", {
        spaceBetween: 30,
        effect: "fade",
        simulateTouch:false, // 터치불가, 그랩 슬라이드 끄기 위해 사용
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                
                gsap.set($('.proxy-type p'), {
                    xPercent: 0,
                    opacity: 0,
                })
                
                gsap.to($('.dimmed'), .3,{
                    opacity: .3,
                    yoyo: true, // 리버스로 반복, 무슨 말인지 모르면 물어볼 것!
                    repeat: 1,
                    ease: Power1.easeOut
                }) // 화이트현상
                var current = $('.proxy-type').eq(this.realIndex)
                gsap.to(current.children('p'), .6, {
                    xPercent: 20.6,
                    opacity: 1,
                    ease: Power1.easeIn
                })
            }
        }
    });
})

//////////////////////////////////////////////////////////// 모든 설명 주석은 추후에 모두 다 제거할 예정