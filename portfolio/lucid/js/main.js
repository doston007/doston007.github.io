$('.slider').slick({
	arrows: false,
	dots: true,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
	]
});

// -------------------

$('nav a').click(function(event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000)
});

$('.nav-btn').click(function() {
	$(this).toggleClass('btn-active');
	$('nav').toggleClass('nav-active');
});