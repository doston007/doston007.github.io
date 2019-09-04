$(function() {

	// Padding for fixed header
	var page = $('.page');

	$(window).on('resize', function() {
		refreshPadding();
	});

	function refreshPadding() {
		var headerHeight = $('.header').outerHeight(true);
		page.css('padding-top', headerHeight);
	}

	refreshPadding();
	// ---
	
	// Hero slider
	$('#js-hero-slider').owlCarousel({
		items: 1,
		margin: 200
	});
	// ---
	
	// Gallery slider
	$('#js-gallery-slider').owlCarousel({
		items: 2,
		responsive: {
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	// ---

	// Countdown
	clock = $('#js-countdown').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		language: 'russian'
	});

	clock.setTime(220880);
	clock.setCountdown(true);
	clock.start();
	// ---
	
	// Form modal open
	$('.js-open-modal-form').click(function(event) {
		event.preventDefault();

		$('.form-modal').fadeIn('fast');
		$('body').css("overflow", "hidden");
	});
	// ---
	
	// Gallery modal
	$('#js-gallery-slider img').click(function(event) {
		event.preventDefault();

		$('.gallery-modal').fadeIn('fast');
		$('body').css("overflow", "hidden");
		$('.modal-gallery').html('<img src="' + $(this).attr('src') + '">');
	});
	
	// ---

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
	// ---
});
