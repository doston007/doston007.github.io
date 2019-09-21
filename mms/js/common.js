window.addEventListener('load', function() {

	// Burger button
	$('.burger-btn').click(function(event) {
		event.preventDefault();

		$('.header').toggleClass('header--opened');
	});

	$('.nav__link').click(function(event) {
		$('.header').removeClass('header--opened');
	});

	// FullPage
	let sections = document.querySelectorAll('.section');
	let sectionAnchors = [];

	sections.forEach(function(section) {
		let anchor = section.getAttribute('data-section');
		sectionAnchors.push(anchor + "");
	});

	$('#fullpage').fullpage({
		menu: '#main-nav',
		navigation: false,
		anchors: sectionAnchors,
		responsiveWidth: 768,
		onLeave: function(index, nextIndex, direction) {
			if( index == 1 && nextIndex == 2 ) {
				$('#js-2-anim').addClass('animated slideInLeft');
				$('#js-3-anim').addClass('animated slideInRight');

			} else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
				$('#js-4-anim').addClass('animated fadeIn duration-2s');
			} else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
				$('#js-5-anim').addClass('animated fadeIn');
				$('#js-6-anim').addClass('animated slideInUp');
			}
		}
	});


	// $('#js-to-down').on('click', function () {
	// 	try {
	// 		// fullpage scroll
	// 		$.fn.fullpage.moveSectionDown();
	// 	} catch (error) {
	// 		// normal scroll
	// 		$root.animate({
	// 			scrollTop: window.innerHeight
	// 		}, 400, function () {
	// 		});
	// 	}
		
	// });


	// Slick sliders
	$('#js-hero-slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	$('#js-slider-img').slick({
		dots: false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			},
		]
	});

	$('#js-product-slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true
				}
			},
		]
	});

	// More button
	$('.hero-section__button').on('click', function(event) {
		event.preventDefault();
		$('.modal--more').fadeIn('fast');
	});

	// Modal close
	$('.modal__close').on('click', function(event) {
		event.preventDefault();
		$(this).parent().parent().parent().parent().fadeOut('fast');
	});

	// About Product Building
	let details = [
		{
			detailNumber: 2331,
			detailImgPath: 'img/motor-main.png',
			detailDescription: 'ПРИМЕР ПЕРВОЙ ПРОДУКЦИИ unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' 
		},
		{
			detailNumber: 2332,
			detailImgPath: 'img/motor-main.png',
			detailDescription: 'ПРИМЕР ВТОРОЙ ПРОДУКЦИИSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' 
		},
		{
			detailNumber: 2333,
			detailImgPath: 'img/motor-main.png',
			detailDescription: 'ПРИМЕР ТРЕТЬЕЙ ПРОДУКЦИИ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' 
		},
		{
			detailNumber: 2334,
			detailImgPath: 'img/motor-main.png',
			detailDescription: 'ПРИМЕР ЧЕТВЕРТОЙ ПРОДУКЦИИ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' 
		}
	];

	$('#js-detail-img').attr('src', details[0].detailImgPath);
	$('#js-detail-number').html(details[0].detailNumber);
	$('#js-detail-description').html(details[0].detailDescription);

	let productCard = $('.product-card');
	let detailNum;

	productCard.on('click', function(event) {
		event.preventDefault();
		detailNum = $(this).attr('data-detail-number');

		for (let i = 0; i < details.length; i++) {
			if (details[i].detailNumber == detailNum) {
				$('#js-detail-img').attr('src', details[i].detailImgPath);
				$('#js-detail-number').html(details[i].detailNumber);
				$('#js-detail-description').html(details[i].detailDescription);
			}
		}

		try {
			// fullpage scroll
			$.fn.fullpage.moveSectionDown();
		} catch (error) {
			// normal scroll
			$root.animate({
				scrollTop: window.innerHeight
			}, 400, function () {
			});
		}
	});

});