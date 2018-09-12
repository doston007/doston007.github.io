$(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('header').addClass('fixed-header');
		} else {
			$('header').removeClass('fixed-header')
		}
	});

	$('.top_btn').click(function(e) {
		e.preventDefault()
		$('body, html').animate({
			scrollTop: 0
		}, 1000)
	})

});
