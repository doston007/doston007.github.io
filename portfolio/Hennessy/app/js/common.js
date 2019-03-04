$(function() {

	// fullpage
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		menu: '#top_nav',
		navigation: true,
		navigationPosition: 'right',
		showActiveTooltip: false,
	});

	// clock
	$('#clock').countdown('2018/12/30', function(event) {
		$(this).html(event.strftime('%D Days <br> %H:%M:%S'));
	});

	// gallery
	$('.how-it-was').magnificPopup({
		type: 'image',
		delegate: '.photo',
		preload: [0,2],
		gallery:{
			enabled:true
		}
	});

	// Вернул модалку на iframe
	$('.video').each(function() {
		$(this).magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com',

						id: 'v=',

						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					}
				}
			}
		});
	});
	
	$('.js-open-iframe').each(function() {
		$(this).magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com',

						id: 'v=',

						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					}
				}
			}
		});
	});

	// participants tab
	if($(window).width() > 768){
		$('.profile-mini').mouseover(function(event){
			event.preventDefault();
			var buttonLink = $(this).attr('href'),
				profileAva = $(this).find('.profile-mini__ava').attr('src'),
				profileName = $(this).find('.profile-mini__name').text(),
				profile = $('.profile');

			profile.find('.profile__ava').attr('src', profileAva);
			profile.find('.profile__name').text(profileName);
			// profile.find('.profile__button').attr('href', buttonLink);

			$(this).parent().parent().find('.active').removeClass('active');
			$(this).addClass('active');
		});
	}

	// adaptation
	var windowWidth = $(window).width();

	// burger
	$('.burger').click(function(e) {
		e.preventDefault();
		$('.sidebar').toggleClass('sidebar--opened');
		$(this).toggleClass('active');
	});

	// navigation
	$('.sidebar__nav a').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $('.' + $(this).attr('href')).offset().top
		}, 1000);

		$('.sidebar').removeClass('sidebar--opened');
		$('.burger').removeClass('active');
	});

	// open modal
	$('.js-open-form').click(function(e){
		e.preventDefault();
		$('.js-modal-form').fadeIn(400);
	});

	$('.js-open-rules').click(function(e){
		e.preventDefault();
		$('.js-modal-rules').fadeIn(400);
	});

	$('.js-open-view-all').click(function(e){
		e.preventDefault();
		$('.js-modal-view-all').fadeIn(400);
	});

	// close modal
	$('.modal__close').click(function(e){
		e.preventDefault();
		$(this).closest('.modal').fadeOut(400);
	});
	$('.button-close').click(function(e){
		e.preventDefault();
		$(this).closest('.modal').fadeOut(400);
	});

	// form
	$('.js-form-date').mask('00/00/0000');

	// Custom Scroll
	$('.modal__content').mCustomScrollbar();

	// open dropdown
	$('.sign-in').click(function(e) {
		e.preventDefault();
		$(this).parent().find('.dropdown').fadeIn(400);
	});

	// close dropdown
	$('.dropdown__close').click(function(e){
		e.preventDefault();
		$(this).closest('.dropdown').fadeOut(400);
	});
});
