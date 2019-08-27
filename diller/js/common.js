$(function() {

	// Slider
	$('.main-slider').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	// Offer modal open
	$('.offer-box__btn').click(function(event) {
		event.preventDefault();

		$('.modal').fadeIn('fast');
		$('body').css("overflow", "hidden");
	});

	// Modal close
	$('.modal__overlay').click(function(event) {
		event.preventDefault();

		$('.modal').fadeOut('fast');
		$('body').css("overflow", "auto");
	});
	$('.modal__close').click(function(event) {
		event.preventDefault();

		$('.modal').fadeOut('fast');
		$('body').css("overflow", "auto");
	});

});
