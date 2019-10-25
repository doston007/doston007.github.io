$(function() {

	// Navigation
	$('.footer__nav-link, .nav__link').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000)
	});

	// HERO TYPED.JS EFFECT
	let titleTexts = ['Приводим реальные лиды в отдел продаж и сервиса', 'Улучшаем видимость в поисковых системах', 'Обеспечиваем рост органического трафика', 'Увеличиваем количество заявок с поиска', 'Настраиваем сквозную аналитику', 'Работаем по KPI'];
	let pagination = document.querySelector('#js-typed-pag');

	// Creating pagination
	for (let i = 0; i < titleTexts.length; i++) {
		let paginationItem = document.createElement('div');
		paginationItem.classList.add('pagination__item');
		paginationItem.setAttribute('data-index', i);
		paginationItem.innerHTML = i + 1;
		pagination.appendChild(paginationItem);
	}

	// Typed.js init
	let typed = new Typed('#js-typed-title', {
		strings: titleTexts,
		loop: true,
		typeSpeed: 50,
		fadeOut: true,
		preStringTyped: function(pos, self) {
			$('#js-typed-pag .pagination__item[data-index=' + pos + ']').addClass('active').siblings().removeClass('active');
		}
	});

	// Results bigger sliders
	let mainImg = document.querySelector('#js-result-main-img');
	let resultsSlider = document.querySelector('#js-result-slider');

	mainImg.src = resultsSlider.firstElementChild.src;

	resultsSlider.querySelectorAll('img').forEach(function(item) {
		item.addEventListener('click', function() {
			mainImg.src = this.src;
		})
	})

	// More works
	$('#js-more-works').click(function() {
		$('.all-works-section').slideToggle('fast');
	});

	// Header overlay on scroll
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 10) {
	// 		$('.header').addClass('header--scrolled');
	// 	} else if ($(this).scrollTop() < 10) {
	// 		$('.header').removeClass('header--scrolled');
	// 	}
	// });
	
	// Burger button
	$('.nav__btn').click(function(event) {
		event.preventDefault();

		$('.header').toggleClass('header--opened');
	});

	$('.nav__link').click(function(event) {
		$('.header').removeClass('header--opened');
	});

	// Owl sliders
	// 1
	$('#js-result-slider').owlCarousel({
		items: 1,
		autoHeight:true
	});
	$('#js-result-slider .owl-dot').each(function(){
		$(this).children('span').text($(this).index()+1);
	});
	$('#js-result-slider .owl-nav').hide();
	// 2
	$('#js-power-bi-slider').owlCarousel({
		items: 1,
		loop: true
	});
	$('#js-power-bi-slider .owl-dots').hide();
	// 3
	$('#js-team-slider').owlCarousel({
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	})

	// Input mask
	$('.input[name=phone]').mask("+7 (999) 999-99-99");

});