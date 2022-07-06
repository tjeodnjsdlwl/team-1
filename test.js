$('.sc-recruit .tab-item a').click(function(e){
    e.preventDefault();

    // console.log($('.ig-box').attr('data-tab'));

    var activeTab = $(this).data('tab');

    $('.text-box p').each(function(){

        $(this).hasClass(activeTab) ? $(this).addClass('active') : $(this).removeClass('active')

    })


});