
    
$(function(){

    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header').removeClass('transform') : $('.header').addClass('transform');

    let tween1 = gsap.timeline();
    tween1.to('.subMenu-item', .1, {"margin-top": "83px"}).to('.subMenu-item', .1, {opacity : 1, delay : .15})
    let tween2 = gsap.to('.subMenu-item', .1, {opacity : 0, "margin-top": "calc(-100% - 30px)", delay: .15})
    
    tween1.pause();
    tween2.pause();
    
    $(window).scroll(function(){
        var currentScroll = $(document).scrollTop();
        currentScroll == 0 ? $('.header').removeClass('transform') : $('.header').addClass('transform');
        gsap.set($('.header.transform .subMenu-item'), {
            "margin-top": "calc(-100% - 30px)",
            opacity : 0
        })
        $('.header').hover(function(){
            tween1.restart();
        }, function(){
            tween2.restart();
        })
    })
        

   
})