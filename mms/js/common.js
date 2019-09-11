window.addEventListener('load', function() {

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

	$('#js-to-down').on('click', function () {
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


	// Slick slider
	$('#js-slider-img').slick({
		dots: false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});

	$('#js-product-slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1
	})

});