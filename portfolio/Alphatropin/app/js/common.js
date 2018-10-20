$(function() {
	// header-bg
	$(window).scroll(function() {
		if($(window).scrollTop() >= 50){
			$('header').addClass('header-bg');
		} else {
			$('header').removeClass('header-bg')
		}
	});

	// mob menu
	$('nav').css('top', $('header').outerHeight(true));
	
	$('.burger-btn').click(function(event) {
		event.preventDefault();
		$('header nav').slideToggle('fast');
		$(this).toggleClass('menu-opened')
	});
	
	// Lang toggle
	$('.langs .active').click(function(event){
		event.preventDefault();
		$(this).next('ul').slideToggle('fast');
		$('.langs').toggleClass('opened');
	})

	// Hero slider
	setInterval(function(){
		$('.hero-slider>div:first-child')
		.fadeOut('fast', function(){
			$('.hero-slider>div:first-child')
			.next('div')
			.fadeIn('slow')
			.end()
			.appendTo('.hero-slider');
		});
	}, 5000);

	// What is it? slider and tab menu
	function kidsActivate(){
		$('.what-is-it').removeClass('bodybuilder-active');
		$('.what-is-it').addClass('kids-active');
		$('.bodybuilder').removeClass('active');
		$('.kids').addClass('active');
		$('.bodybuilder-text').fadeOut('fast',function() {
			$('.kids-text').fadeIn('fast');
		});
	}

	function bodybuilderActivate(){
		$('.what-is-it').removeClass('kids-active');
		$('.what-is-it').addClass('bodybuilder-active');
		$('.kids').removeClass('active');
		$('.bodybuilder').addClass('active');
		$('.kids-text').fadeOut('fast',function() {
			$('.bodybuilder-text').fadeIn('fast');
		});
	}

	$('.what-is-it .arrow').click(function(){
		if($('.what-is-it').hasClass('bodybuilder-active')){
			kidsActivate();
		} else if($('.what-is-it').hasClass('kids-active')){
			bodybuilderActivate();
		}
	});

	$('.bodybuilder').click(function(e){
		e.preventDefault();
		bodybuilderActivate();
	});

	$('.kids').click(function(e){
		e.preventDefault();
		kidsActivate();
	});

	// Box
	$(".boxs-container").stick_in_parent();


	var notHave = $('.boxs-container').offset().top;
	$(window).scroll(function() {
		var boxPos = $('.boxs-container').offset().top - notHave;
		$('.box-4').css('opacity', boxPos / 20 / 100);
		$('.box-3').css('opacity', boxPos / 18 / 100);
		$('.box-2').css('opacity', boxPos / 5 / 100);
	});

	// Product-2 slider
	function slimActivate(){
		$('.product-2').removeClass('package-active');
		$('.product-2').addClass('slim-active');
		$('.package').removeClass('active');
		$('.slim').addClass('active');
		$('.package-text').fadeOut('fast',function() {
			$('.slim-text').fadeIn('fast');
		});
	}

	function packageActivate(){
		$('.product-2').removeClass('slim-active');
		$('.product-2').addClass('package-active');
		$('.slim').removeClass('active');
		$('.package').addClass('active');
		$('.slim-text').fadeOut('fast',function() {
			$('.package-text').fadeIn('fast');
		});
	}

	$('.product-2 .arrow').click(function(){
		if($('.product-2').hasClass('package-active')){
			slimActivate();
		} else if($('.product-2').hasClass('slim-active')){
			packageActivate();
		}
	});

	$('.package').click(function(e){
		e.preventDefault();
		packageActivate();
	});

	$('.slim').click(function(e){
		e.preventDefault();
		slimActivate();
	});

	//navigation
	$('nav a').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000)
	});

	var sectionsPos = [],
		sectionsLink = [],
		contactPos,
		winPos;
	  
	function refreshVar() {
		$('section').each(function(indx) {
			sectionsPos.push($(this).offset().top);
			sectionsLink.push($(this).attr('id'));
		});
		contactPos = $('#contact').offset().top;
	}

	refreshVar();
	$(window).resize(refreshVar);

	$(window).on('scroll', function() {
		winPos = $(window).scrollTop();
		for (var i = 0; i < sectionsLink.length; i++) {
			if (winPos >= sectionsPos[i] - 200) {
				$('nav>a.active').removeClass('active');
				$('nav a[href="#' + sectionsLink[i] + '"]').addClass('active');
			}
		}
		if (winPos >= contactPos - 500) {
			$('nav>a.active').removeClass('active');
			$('nav a[href="#contact"]').addClass('active');
		}
	});

	// footer effect
	$(window).scroll(function() {
		winPos = $(window).scrollTop();
		if (winPos >= sectionsPos[sectionsPos.length - 1] + 20) {
			$('.all-sections').addClass('footer-effect');
		} else {
			$('.all-sections').removeClass('footer-effect');
		}
	});


});