function openNotifyPopup(text) {
	var notifyPopup = $('.js-notify-popup');
	var notifyPopupId = notifyPopup.attr('id');
	var notifyPopupTextPlace = notifyPopup.find('.js-notify-popup-text');

	notifyPopupTextPlace.text(text);

	$.magnificPopup.open({
		items: {
			src: '#' + notifyPopupId
		},
		type: 'inline'
	});
}


document.addEventListener('DOMContentLoaded', function () {
	// sticky header
	var header = document.getElementsByTagName('header')[0];
	var headerHeight = $('header').height();

	window.onscroll = function() {
		if(window.scrollY >= 10) {
			header.classList.add('fixed-header');
		} else {
			header.classList.remove('fixed-header');
		}
	}

	// burger btn
	$('.nav-btn').click(function(e) {
		e.preventDefault();
		$('nav').slideToggle('fast');
		$('header').toggleClass('nav-opened');
		$(this).toggleClass('nav-btn-active');
	});

	// slider
	var multiSlides = document.querySelectorAll('.js-slider');

	Array.prototype.forEach.call(multiSlides, function(element){
        lory(element, {
            infinite: 1,
        });
	});

	// gallery
	$('.left-col').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			preload: [0],
			gallery: {
				enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
		    }
		});
	});

	// iframe
	$('.main-video').each(function() {
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

	// nav
	$('nav a').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - headerHeight
		}, 1000);

		if ($(window).width() < 768) {
			$('nav').slideUp('fast');
			$('header').removeClass('nav-opened');
			$('.nav-btn').removeClass('nav-btn-active');
		}
	});

	// button-buy
	$('.button-buy').click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1000);

		$("input:text:visible:first").focus();
	})

	// button-order
	$('.button-order').click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $('.spec-offer').offset().top + headerHeight
		}, 1000);
	});

	// mask
	$('.phone').mask('(000) 000-00-00');

	// TODO переделать когда будет связь с сервером
    $('.js-form').submit(function(e){
        e.preventDefault();

		var form = $(this);

		// Валидация
		var inputName = $(this).find('.js-field-name');
		var inputPhone = $(this).find('.js-field-phone');
		if (!inputName.val() || inputName.val() == ' '){
			$(this).find('.error-name').show();
			inputName.addClass('input-error');
			return false;
		} else {
			$(this).find('.error-name').hide();
			inputName.removeClass('input-error');
		}
		if (inputPhone.val().length < 15){
			$(this).find('.error-phone').show();
			inputPhone.addClass('input-error');
			return false;
		} else {
			$(this).find('.error-phone').hide();
			inputPhone.removeClass('input-error');
		}

		if (form.hasClass('js-form-get-spec-offer')) {

			if(sessionStorage.getItem('isSendedSpecOfferForm') == 1) {
				openNotifyPopup('Мы уже обрабатываем Вашу заявку');
				return;
			}

		} else {

			if(sessionStorage.getItem('isSendedCalculateForm') == 1) {
				openNotifyPopup('Мы уже обрабатываем Вашу заявку');
				return;
			}
		}

    	$.ajax({
			url: form.attr('action'),
			method: form.attr('method'),
			data: form.serialize(),
			success: function(data, textStatus, xhr){
                if (res == 1) {
                    if (form.hasClass('js-form-get-spec-offer')) {
                        sessionStorage.setItem('isSendedSpecOfferForm', 1);
                    } else {
                        sessionStorage.setItem('isSendedCalculateForm', 1);
                    }

                    form[0].reset()

                    openNotifyPopup('Мы обработаем ее в ближайшее время и свяжемся с вами');
                    return;
                }

                openNotifyPopup('Заявку не удалось обработать. Попробуйте обратиться к нам по телефону')
			},
			error: function(){
                alert('Возникла ошибка связи с сервером');
			}
		})
	});
});