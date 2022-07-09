$(function () {
        
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

    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');
        // 메인페이지 헤더 클래스 스크롤에 의한 추가/제거

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
   
})