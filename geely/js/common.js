$(function() {

	// Masked input
	$('.input[name=phone]').mask("9 (999) 999-99-99");
	// ---

	// Ajax Form
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/send_form.php", //Change
			data: th.serialize()
		}).done(function() {
			th.addClass('form--done');
		});
	return false;
	});
	// ---

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
