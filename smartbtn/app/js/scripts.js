window.onload = function() {

	// Coin-effect animation
	(function() {
		var socialsIconsName = ['vk', 'tg', 'fb', 'ok', 'wa', 'vb'],
			connectBtn = document.querySelector('.connect-btn'),
			btnIcon = connectBtn.querySelector('use'),
			i = 0;

		connectBtn.classList.add('coin-anim');

		setTimeout(function() {
			setInterval(function() {
				if (i < socialsIconsName.length) {
					btnIcon.setAttribute('xlink:href', 'img/sprites.svg#' + socialsIconsName[i] + '-icon');
					i++;
				} else {
					i = 0;
				}
			}, 1000);
		}, 1500);

	})();

	// Open, close contact and map box
	(function() {
		let connectBtn = document.querySelector('.connect-btn'),
			contactBox = document.querySelector('.contact-box'),
			backContactBtn = contactBox.querySelector('.header__back'),
			openMapBtn = document.querySelector('.tool--map'),
			mapBox = document.querySelector('.map-box'),
			backMapBtn = mapBox.querySelector('.header__back');

		connectBtn.addEventListener('click', function(e) {
			e.preventDefault();

			contactBox.classList.toggle('active');

			if (mapBox.classList.contains('active')) {
				mapBox.classList.remove('active');
				openMapBtn.classList.remove('active');
			}
		});

		backContactBtn.addEventListener('click', function(e) {
			e.preventDefault();

			contactBox.classList.remove('active');
		});

		openMapBtn.addEventListener('click', function(e) {
			e.preventDefault();

			mapBox.classList.toggle('active');
			openMapBtn.classList.toggle('active');

			if (contactBox.classList.contains('active')) {
				contactBox.classList.remove('active');
			}
		});

		backMapBtn.addEventListener('click', function(e) {
			e.preventDefault();

			mapBox.classList.remove('active');
			openMapBtn.classList.remove('active');
		});
	})();

};