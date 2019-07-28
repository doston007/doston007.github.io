window.onload = function() {
	
	// Open, close contact and map box
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

};