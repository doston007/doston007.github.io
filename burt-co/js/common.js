$(function() {

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

	// Header overlay on scroll
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass('header--scrolled');
		} else if ($(this).scrollTop() < 10) {
			$('.header').removeClass('header--scrolled');
		}
	});

	// Owl sliders
	$('#js-result-slider').owlCarousel({
		items: 1
	});
	$('#js-result-slider .owl-dot').each(function(){
		$(this).children('span').text($(this).index()+1);
	});
	$('#js-result-slider .owl-nav').hide();

	// Input mask
	$('.input[name=phone]').mask("9 (999) 999-99-99");

});
