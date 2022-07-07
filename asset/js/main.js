$(function () {

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



    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    var btnKakaoT = $('.btn-kakaoT').offset().top;

    $(window).scroll(function () {
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
        stagger: {
            each: .3
        }
    }) // 비쥬얼 영역 순차적으로 위에서 아래로

    var lastNum = parseInt($('.day-distance span').text());
    var gap = lastNum - (lastNum / 10)
    var startNum = lastNum - gap;

    var count = {
        var: startNum
    };

    gsap.to(count, 3, {
        var: lastNum,
        onUpdate: changeNumber,
    })

    function changeNumber() {
        var currentNum = count.var;
        var push = parseInt(currentNum).toLocaleString('ko-KR');
        $('.day-distance span').text(push)
    } // 숫자 롤링

    gsap.fromTo($('.visual-area p'), 1.2, {
        opacity: 0,
        x: -100,
        delay: 1.6
    }, {
        opacity: 1,
        x: 0
    }) // 텍스트 왼쪽에서 오른쪽으로 슬라이드

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


    mainTl = gsap.timeline({})

        .addLabel('label')
        .from('.left-blind', {
            xPercent: -50,
            duration: 1.2
        }, 'label')
        .from('.right-blind', {
            xPercent: 50,
            duration: 1.2
        }, 'label')
        .from('.txt-box', {
            y: 20,
            duration: 0.8,
            opacity: 0
        })
    // kakaoT 비쥬얼열역 gsap

    gsapUp = gsap.utils.toArray('.gsap-up');
    gsapUp.forEach((gsapUp) => {
        gsap.from(gsapUp, 1.3, {
            y: 80,
            ease: Power1.easeInOut,
            opacity: 0,
            scrollTrigger: {
                trigger: gsapUp,
                start: 'top bottom',
            }
        }) // kakaoT 이미지 up gsap
    })

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
                // markers: true
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
    })

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
    }) // 텍스트 왼쪽ㄷ에서 왼쪽으로

    $('.btn-kakaoT button').click(function () {

        $(this).addClass('active').siblings().removeClass('active')

        

        var activeTab = $(this).data('tab');

        $('.sc-kakaoT').each(function () {
            cover = gsap.utils.toArray($(this).find('.cover'));
            cover.forEach((cover) => {
                gsap.set(cover, {
                    xPercent: 0
                })
            })
            rightLeft = gsap.utils.toArray('.rightLeft');
            rightLeft.forEach((rightLeft) => {
                gsap.set(rightLeft, {
                    x: 10,
                    opacity: 0,
                })
            }) // 텍스트 오른쪽에서 왼쪽으로
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

            if ($(this).data('content') == activeTab) {
                $(this).addClass('active')
                const mainImg = $(this).find('.mainImg-area img');
                var scTop = mainImg.offset().top
                $(window).scrollTop(scTop - 142);
                gsap.from(mainImg, 1.3, {
                    y: 80,
                    ease: Power1.easeInOut,
                    opacity: 0,
                })

                textUp = gsap.utils.toArray($(this).find('.textUp'));
                console.log(textUp);
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
                console.log(cover);
                cover.forEach((cover) => {
                    gsap.to(cover, 1.2, {
                        xPercent: 100,
                        ease: Power1.easeInOut,
                        scrollTrigger: {
                            trigger: cover,
                            start: 'top bottom'
                        }
                    })
                })

            } else {
                $(this).removeClass('active')
            }

        })

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

        })

    });
    gsap.set($('.taxi-type'),{
        xPercent: 124,
        yPercent: -100,
    })
    
    gsap.set($('.taxi-type.acitve img'),{
        xPercent: 0,
        yPercent: 0,
    })
    $('.animate-taxi button').click(function () {
        
    var test = $('.taxi-type').not('.active');
    console.log(test);

        $(this).addClass('active').siblings().removeClass('active')

        var activeTab = $(this).data('tab');

        taxiNone = $('.taxi-type img')
        taxiPrev = $('.taxi-type.active img')
        // gsap.set(taxiNone, {
        //     xPercent: 124,
        //     yPercent: -100,
        //     scale: .8,
        //     skewX: -10
        // })
        // tl = gsap.timeline({}).addLabel('label')
        // .to(taxiPrev, 1, {
        //     xPercent: -124,
        //     yPercent: 100,
        //     scale: .8,
        //     skewX: -10
        // },1)
        $('.taxi-type').each(function () {

            if ($(this).data('taxi') == activeTab) { 
                $(this).addClass('active').siblings().removeClass('active')
                
                // .to($(this), 1, {
                //     xPercent: 0,
                //     yPercent: 0,
                //     scale: 1,
                //     skewX: 1
                // },2)
            }
        })
    })
    proxy = gsap.timeline({})
    .addLabel('label1')

    var swiper = new Swiper(".proxyDetail", {
        spaceBetween: 30,
        effect: "fade",
        simulateTouch:false,
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                gsap.set($('.swiper-slide-active p'), {
                    xPercent: 6,
                    opacity: 0,
                })
                proxy.to($('.dimmed'), .2,{
                    opacity: .3,
                })
                .to($('.dimmed'), .2,{
                    opacity: 0,
                    delay:.2,
                })
            }
        }
    });
    swiper.on('transitionEnd', function() {
        proxy.to($('.swiper-slide-active p'), .6, {
            xPercent: 20.6,
            opacity: 1,
            ease: Power1.easeIn
        })
    });
})