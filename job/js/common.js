$(function() {
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
	})

	$('.kids').click(function(e){
		e.preventDefault();
		kidsActivate();
	})
});