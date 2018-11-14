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
	$('#clock').countdown('2018/11/24', function(event) {
		$(this).html(event.strftime('%D Days <br> %H:%M:%S'));
	});

	// gallery
	$('.how-it-was').magnificPopup({
		type: 'image',
		delegate: 'a',
		preload: [0,2],
		gallery:{
			enabled:true
		}
	});

	// iframe
	// $('.video').each(function() {
	// 	$(this).magnificPopup({
	// 		type: 'iframe',
	// 		iframe: {
	// 			patterns: {
	// 				youtube: {
	// 					index: 'youtube.com',

	// 					id: 'v=',

	// 					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
	// 				}
	// 			}
	// 		}
	// 	});
	// });
	
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
	$('.profile-mini').click(function(event){
		event.preventDefault();
		var buttonLink = $(this).attr('href'),
			profileAva = $(this).find('.profile-mini__ava').attr('src'),
			profileName = $(this).find('.profile-mini__name').text(),
			profile = $('.profile');

		profile.find('.profile__ava').attr('src', profileAva);
		profile.find('.profile__name').text(profileName);
		profile.find('.profile__button').attr('href', buttonLink);

		$(this).parent().parent().find('.active').removeClass('active');
		$(this).addClass('active');
	});

	// adaptation
	var windowWidth = $(window).width();

	if (windowWidth < 992) {
		fullpage_api.destroy();
	} else {
		fullpage_api.reBuild('all');
	};

	$(window).resize(function() {
		windowWidth = $(window).width();

		if (windowWidth < 992) {
			fullpage_api.destroy();
		} else {
			fullpage_api.reBuild('all');
		}
	});

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
});
