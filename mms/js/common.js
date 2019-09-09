window.addEventListener('load', function() {

	// WOW init
	new WOW().init();

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
		anchors: sectionAnchors
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