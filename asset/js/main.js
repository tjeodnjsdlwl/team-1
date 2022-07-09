$(function () {
    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
        });
    }
    
    async function myAsyncFunction(){
        
        if ($('main').hasClass('container-main')) {
            lineTl = gsap.timeline();
            lineTl.to($('.loading-main .line'),{
                xPercent: 100,
            }, '+=1')
            .to($('.loading-main .line'), .8, {
                xPercent: 200,
            },'+=.5')
            imgTl = gsap.timeline();
            imgTl.to($('.loading-main .image'), .6, {
                opacity: 1,
            }, '+=1')
            .to($('.loading-main .image'), .8, {
                scale: 1.1,
                opacity: 0
            }, '+=.4')
    
            gsap.to($('.loading-main'), .8, {
                opacity: 0,
            delay: 1.9
            })
            
            await delay(1.7);
        } else {
            gsap.to($('.loading-sub'), .8, {
                opacity: 0,
                delay: 1
            })
            
            await delay(.7);
        }
    
    

    

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

    
    if ($('main').hasClass('container-kakaoT')) {

        var btnKakaoT = $('.btn-kakaoT').offset().top;
    }

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


    tl = gsap.timeline({})

    .addLabel('label')
    .from ('.left-blind',{xPercent: -50,duration: 1.2},'kakaotaxilabel')
    .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 0.8,})

    .addLabel('m1')
    .from ('.sc-informain .title-wrap .txt-box',{y: 60,duration: 0.8, opacity:0,},'m1')
    .to ('.sc-informain .img-box',{y: 30,duration: 0.8},'m1')
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
     
    var activeTaxi = $('.taxi-type.active').children('img');
    var activeText = $('.taxi-type.active').children('p');
    console.log(activeText);
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
        simulateTouch:false,
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
                    yoyo: true,
                    repeat: 1,
                    ease: Power1.easeOut
                })
                var current = $('.proxy-type').eq(this.realIndex)
                gsap.to(current.children('p'), .6, {
                    xPercent: 20.6,
                    opacity: 1,
                    ease: Power1.easeIn
                })
            }
        }
    });
    }

    myAsyncFunction();
})