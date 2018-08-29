// Up button

$('body').append('<button class="btn_up"></button>');

$('.btn_up').click(function() {
	$('body').animate({
		'scrollTop': 0
	}, 100);
	$('html').animate({
		'scrollTop': 0
	}, 100);
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$('.btn_up').addClass('btn_up-active');
	} else {
		$('.btn_up').removeClass('btn_up-active');
	}
});

// 

// Fixed menu

$(document).ready(function() {
 
var navPos, winPos, navHeight;
  
function refreshVar() {
	navPos = $('nav').offset().top;
	navHeight = $('nav').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);
	
	$('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();
  
$(window).scroll(function() {
	winPos = $(window).scrollTop();

	if (winPos >= navPos) {
		$('nav').addClass('fixed-menu');  
		$('.clone-nav').show();
	} else {
		$('nav').removeClass('fixed-menu');
		$('.clone-nav').hide();
	}
});

});

// 