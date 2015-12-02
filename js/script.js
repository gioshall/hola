$('.menu').load('./menu.html');

$('.menu-left .header-menu').click(function(){
	$('#container, .menu').toggleClass('show-menu');
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