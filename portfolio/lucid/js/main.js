$('.slider').slick({
	arrows: false,
	dots: true,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 5000
});

// -------------------

$('nav a').click(function(event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000)
});