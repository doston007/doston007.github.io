$(function() {

	// Responsive menu
	(function(){
		var menu = $('#js-top-nav'),
			menuBtn = $('#js-top-nav-btn');

		$(window).on('resize', toggleMenu);

		menuBtn.on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('active');
			menu.toggleClass('hide');
		});

		function toggleMenu() {
			if ($(window).width() < 992) {
				menuBtn.addClass('show');
				menu.addClass('hide');
			} else {
				menuBtn.removeClass('show');
				menu.removeClass('hide');
			}
			if (menu.hasClass('hide')) {
				menuBtn.removeClass('active')
			} else {
				menuBtn.addClass('active')
			}
		};

		toggleMenu();
	})();

	// Swiper-button
	(function(){
		var initialMouse = 0;
		var slideMovementTotal = 0;
		var mouseIsDown = false;
		var slider = $('#js-swiper-button__slider');

		slider.on('mousedown touchstart', function(event){
			mouseIsDown = true;
			slideMovementTotal = $('#js-swiper-button').width() - $(this).width();
			initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
		});

		$(document.body, '#js-swiper-button__slider').on('mouseup touchend', function (event) {
			if (!mouseIsDown)
				return;
			mouseIsDown = false;
			var currentMouse = event.clientX || event.changedTouches[0].pageX;
			var relativeMouse = currentMouse - initialMouse;

			if (relativeMouse < slideMovementTotal) {
				$('#js-swiper-button__text').fadeTo(300, 1);
				slider.animate({
					left: "0"
				}, 300);
				return;
			}
			slider.addClass('unlocked');
			setTimeout(function(){
				slider.on('click tap', function(event){
					if (!slider.hasClass('unlocked'))
						return;
					slider.removeClass('unlocked');
					slider.off('click tap');
				});
			}, 0);
		});

		$(document.body).on('mousemove touchmove', function(event){
			if (!mouseIsDown)
				return;

			var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
			var relativeMouse = currentMouse - initialMouse;
			var slidePercent = 1 - (relativeMouse / slideMovementTotal);
			
			$('#js-swiper-button__text').fadeTo(0, slidePercent);

			if (relativeMouse <= 0) {
				slider.css({'left': '0'});
				return;
			}
			if (relativeMouse >= slideMovementTotal) {
				slider.css({'left': slideMovementTotal + 'px'});
				return;
			}
			slider.css({'left': relativeMouse});
		});
	})();

	// Limit category-list
	(function(){
		var categoryList = $('#js-category-list-limited'),
			categoryItem = categoryList.find('li'),
			limitedNumber = 5,
			moreCategory = $('<li class="category-more"><a href="">Показать больше</a></li>');

		if (categoryItem.length > limitedNumber) {
			for (var i = limitedNumber; i < categoryItem.length; i++) {
				categoryItem[i].style.display = "none"
			}
		}

		categoryList.append(moreCategory);
	})();

	// More category
	(function(){
		var moreButton = $('.category-more').find('a');

		moreButton.on('click', function(event) {
			event.preventDefault();

			$(this).parent().siblings().css('display', 'block');
			$(this).hide();
		});
	})();

	// Responsive footer nav
	(function(){
		var footerTitle = $('.footer__nav-title');

		$(window).on('resize', toggleFooterNav);

		footerTitle.on('click', function(event) {
			event.preventDefault();
			$(this).next('ul').toggleClass('hide');
			$(this).toggleClass('active');
		});

		function toggleFooterNav() {
			if ($(window).width() <= 768) {
				footerTitle.next('ul').addClass('hide');
			} else {
				footerTitle.next('ul').removeClass('hide');
			}
		}

		toggleFooterNav();
	})();

	// Faq accardion
	(function() {
		var questionBtn = $('.qa-block__question');

		questionBtn.on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('active');
			$(this).next('.qa-block__answer').slideToggle('fast');
		});

	})();

});
