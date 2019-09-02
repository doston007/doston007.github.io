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
		items: 4
	});

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
	
});
