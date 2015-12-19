//scroll
var nth = $('.nav li').length;

function clickScroll(e) {
    $('.nav li:eq('+e+')').click(function(){
        $('html,body').animate({scrollTop: $('.wrapper h2:eq('+e+')').offset().top},500);
    }); 
};

for(i=0;i<nth;i++){
    clickScroll(i) 
};


//scroll top
$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y >= 500) {
        $('.gotop').addClass('show').click(function(){
            $('html,body').stop().animate({scrollTop:0},300);
        });
    } else {
        $('.gotop').removeClass('show');
    }
})