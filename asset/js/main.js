
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

    // tl = gsap.timeline({})

    // .addLabel('label')
    // .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    // .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    // .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 1.2,})
    // .from ('.sc-informain .img-box',{y: -50,},'label')
    // .from ('.sc-informain .title-wrap .txt-box',{y: 50,duration: 0.8, opacity:0,},'label')
    // // .from ('.sc-informain .txt-box',{y: 20,duration: 0.8,opacity:0});

    //     tl = gsap.timeline({})

    // .addLabel('label')
    // .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    // .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    // .addLabel('m1')
    // .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 1.2,})
    // .from ('.sc-informain .img-box',{y: -50,duration: 1.2,},'m1')
    // .from ('.sc-informain .title-wrap .txt-box',{y: 50,duration: 1.2, opacity:0,},'m1')
    
    // tl = gsap.timeline({})

    // .addLabel('label')
    // .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    // .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    // .addLabel('m1')
    // .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 1.2,})
    // .from ('.sc-informain .img-box',{y: -50,duration: 1.2,})
    // .from ('.sc-informain .title-wrap .txt-box',{y: 50,duration: 1.2, opacity:0,})

    // tl = gsap.timeline({})

    // .addLabel('label')
    // .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    // .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')

    // .addLabel('m1')
    // .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 1.2,})
    // .from ('.sc-informain .img-box',{y: -50,duration: 1.2,},"+=1")
    // .from ('.sc-informain .title-wrap .txt-box',{y: 50,duration: 1.2, opacity:0,},"-=1")

    tl = gsap.timeline({})

    .addLabel('label')
    .from ('.left-blind',{xPercent: -50,duration: 1.2},'label')
    .from ('.right-blind',{xPercent: 50,duration: 1.2},'label')
    // .from ('.sc-informain .txt-box2',{y: 60, duration: 1.2, opacity:0,})

    .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 0.8,},"-=1")

    .addLabel('m1')
    .from ('.sc-informain .title-wrap .txt-box',{y: 60,duration: 0.8, opacity:0,},'m1')
    .to ('.sc-informain .img-box',{y: 30,duration: 0.8},'m1')




    // 텍스트 아래서 위로
    textUp = gsap.utils.toArray('.motion');
    textUp.forEach((textUp) => {
        gsap.from(textUp, 1.2, {
            y: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: textUp,
                start: 'top bottom',
            }
        })
    }) 


    //텍스트 옆으로 나오게
    textSide = gsap.utils.toArray('.sidemove');
    textSide.forEach((textSide) => {
        gsap.from(textSide, 1.2,{
            x: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: textSide,
                start: 'top bottom',
            }
        })
    })



    // 이미지,비디오 옆으로 슬라이드
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



    gsap.from('.sc-Appintro .img-box',{
        opacity:0,
        scale: 0,
        duration:1,
        scrollTrigger:{
            trigger:'.sc-Appintro .img-box',
        }
    })

    // $('.motion').each(function(index,item){
    
        // yVal = $(this).data('y');
        // console.log();
    
        // gsap.from('.motion',{
        //     scrollTrigger:{
        //         trigger:'.motion',
        //         start:"0% 100%", // ['트리거','윈도으']
        //         // end:"100% top", // ['트리거','윈도으']
        //         end:"top bottom",
        //         markers:true,
        //         // scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
        //         // pin:true,
        //     },
        //     yPercent:20,
        //     duration:1,
        //     // opacity:0,
        // })
    // });














    //sc-repoert
    $('.btn-year').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let idx = $(this).index();
        $('.right-area .txt-box').eq(idx).addClass('active').siblings().removeClass('active');

    });

    









    //서브페이지navi
    $('.intro-area .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let idx = $(this).index();
        $('.intro-area .intro-wrap').eq(idx).addClass('active').siblings().removeClass('active');

    });
});//end