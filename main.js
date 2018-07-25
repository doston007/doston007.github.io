$('body').append('<button class="btn_up"></button>');

$('.btn_up').click(function() {
	$('body').animate({
		'scrollTop': 0
	}, 100);
	$('html').animate({
		'scrollTop': 0
	}, 100);
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$('.btn_up').addClass('btn_up-active');
	} else {
		$('.btn_up').removeClass('btn_up-active');
	}
});