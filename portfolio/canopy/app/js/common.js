$(function() {

	// Scrolled header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass('header--scrolled');
		} else if ($(this).scrollTop() < 10) {
			$('.header').removeClass('header--scrolled');
		}
	});

	// Navigation in the main page
	if ($('body').hasClass('main-page')) {
		$('.nav__link').click(function(event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 80
			}, 1000)
		});
	}

	// Menu toggle
	$('.js-nav-btn').click(function(event) {
		event.preventDefault();
		$('.nav').slideToggle('fast');
		$(this).toggleClass('active');
	});

	// Fixing bug with menu
	$(window).resize(function() {
		if ($(window).width() >= 768) {
			$('.nav').show();
		}
	});

	// header-clone
	$('<div class="clone-header"></div>').insertBefore('.header').css('height', 83);

	// Slider
	$('.js-work-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1.665,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					centerMode: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});
});
