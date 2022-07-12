$(function () {

    loadingTl = gsap.timeline()
    .addLabel("loadingStart")

    loadingTl.to($('.loading-main .line'), .7,{
        xPercent: 100,
    }, 'loadingStart')
    .to($('.loading-main .image'), .7, {
        opacity: 1,
    }, 'loadingStart+=.3')

    .addLabel("loadingEnd", '+=.2')
    .to($('.loading-main .line'), .8, {
        xPercent: 200,
    }, 'loadingEnd')
    .to($('.loading-main .image'), .8, {
        scale: 1.1,
        opacity: 0
    },'loadingEnd')
    .to($('.loading-main'), .8, {
        opacity: 0,
    },'loadingEnd') 
    // 메인로딩이미지



    /////////////// ↓ 초기 메인로딩이미지 ////////////////// 

    // 변경점 : 타임라인 1개로 통합, 라벨 2개 활용
    
    // lineTl = gsap.timeline();
    // lineTl.to($('.loading-main .line'),{
    //     xPercent: 100,
    // }, '+=1')
    // .to($('.loading-main .line'), .8, {
    //     xPercent: 200,
    // },'+=.5')
    // imgTl = gsap.timeline();
    // imgTl.to($('.loading-main .image'), .6, {
    //     opacity: 1,
    // }, '+=1')
    // .to($('.loading-main .image'), .8, {
    //     scale: 1.1,
    //     opacity: 0
    // }, '+=.4')

    // gsap.to($('.loading-main'), .8, {
    //     opacity: 0,
    // delay: 1.9
    // })
    


    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    $(window).scroll(function () {
        currentScroll = $(document).scrollTop();
        currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');
    }) // 메인헤더 클래스 스크롤에 의해 추가/제거


    gsap.fromTo($('.title-area em'), .9, {
        opacity: 0,
        y: 10,
    }, {
        opacity: 1,
        y: 0,
        stagger: {
            each: .3
        }
    }) // 메인페이지 we move life 텍스트 순차적으로 text up

    var lastNum = parseInt($('.day-distance span').text()); 
    // 설정한 값(텍스트타입)을 parseInt를 이용하여 정수로 변환, lastNum 변수에 넣음.
    // 이 값이 최종 화면에 보여질 최종 값이 됨.

    var startNum = lastNum - (lastNum / 10)
    // 시작값 설정. 임의로 lastNum에서 10을 나눈 값을 빼줘서 스타트 값으로 설정
    // 이 값으로 출발하여 최종 lastNum이 됨.

    var count = {
        roll: startNum
    };
    // startNum을 roll이라는 변수에 넣고(roll은 본인이 정한 변수) 이걸 count라는 큰 변수에 넣음

    gsap.to(count, 5, {
        roll: lastNum,
        onUpdate: changeNumber,
    })
    // count에 roll이 starNum에서 lastNum으로 5초간 변화하는 이벤트,
    // onUpdate는 값이 업데이트 될 때마다 changeNumber라는 함수가 호출되는 이벤트, 5초간 계속 변화하기 때문에 5초간 무한대로 이벤트 실행.

    function changeNumber() {
        var currentNum = count.roll; // currentNum 변수에 count 안에 있는 roll 변수를 넣음
        var push = parseInt(currentNum).toLocaleString('ko-KR'); 
        // startNum에서 lastNum으로 gsap을 돌리면 소수점도 같이 화면에 표시하기 때문에 parsInt로 정수로 변환
        // 그 후 toLocaleString 함수(인자로 전달한 Locale의 표현 방식으로 숫자를 출력)을 이용하여 인자를 ko-kr로 넣어서 한국에서 통용되는 숫자 3자리마다 콤마를 찍어주는 메서드, push 변수에 넣어줌

        $('.day-distance span').text(push)
        // push를 원하는 html에 text 교체
    }


    gsap.fromTo($('.visual-area p'), 1.2, {
        x: -100,
        delay: 1.6,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }) 
    // 텍스트 왼쪽에서 오른쪽으로 슬라이드 (스크롤트리거 x)
})

//////////////////////////////////////////////////////////// 모든 설명 주석은 추후에 모두 다 제거할 예정