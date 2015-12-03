var dHeight = $( window ).height();

$('#content').css('min-height', dHeight - 223 + 'px')

$('.menu').load('./menu.html');

$('.menu-left .header-menu').click(function(){
	$('#container, .menu, .menu-left .header-menu').toggleClass('show-menu');
});

$('.menu-left .header-search').click(function(){
	$('#header, .sub-nav, .menu-left .header-search').toggleClass('show-search');
});

$('.list-pix').click(function(){
	$('.list-pt').removeClass('selected');
	$(this).addClass('selected');
	$('.list-cont').removeClass('pt').addClass('pix');
});
$('.list-pt').click(function(){
	$('.list-pix').removeClass('selected');
	$(this).addClass('selected');
	$('.list-cont').removeClass('pix').addClass('pt');
});

$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y >= dHeight / 2) {
        $('body').append('<a href="#" class="gotop"></a>');
    } else {
        $('.gotop').remove()
    }
});