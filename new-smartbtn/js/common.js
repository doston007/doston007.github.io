window.onload = function() {

	// Open, close contact and map box
	// (function() {
	// 	let connectBtn = document.querySelector('.connect-btn'),
	// 		contactBox = document.querySelector('.contact-box'),
	// 		connectBtnIcons = connectBtn.querySelector('.connect-btn__icons'),
	// 		backContactBtn = contactBox.querySelector('.header__back'),
	// 		openMapBtn = document.querySelector('.tool--map'),
	// 		mapBox = document.querySelector('.map-box'),
	// 		backMapBtn = mapBox.querySelector('.header__back');

	// 	connectBtn.addEventListener('click', function(e) {
	// 		e.preventDefault();

	// 		contactBox.classList.toggle('active');
			
	// 		if (contactBox.classList.contains('active')) {
	// 			connectBtnIcons.classList.remove('slide-anim');
	// 		} else {
	// 			connectBtnIcons.classList.add('slide-anim');
	// 		}

	// 		if (mapBox.classList.contains('active')) {
	// 			mapBox.classList.remove('active');
	// 			openMapBtn.classList.remove('active');
	// 		}
	// 	});

	// 	backContactBtn.addEventListener('click', function(e) {
	// 		e.preventDefault();

	// 		contactBox.classList.remove('active');
	// 		connectBtnIcons.classList.add('slide-anim');
	// 	});

	// 	openMapBtn.addEventListener('click', function(e) {
	// 		e.preventDefault();

	// 		mapBox.classList.toggle('active');
	// 		openMapBtn.classList.toggle('active');

	// 		if (contactBox.classList.contains('active')) {
	// 			contactBox.classList.remove('active');
	// 		}

	// 		if (contactBox.classList.contains('active')) {
	// 			connectBtnIcons.classList.remove('slide-anim');
	// 		} else {
	// 			connectBtnIcons.classList.add('slide-anim');
	// 		}

	// 	});

	// 	backMapBtn.addEventListener('click', function(e) {
	// 		e.preventDefault();

	// 		mapBox.classList.remove('active');
	// 		openMapBtn.classList.remove('active');
	// 	});
	// })();
	
	setInterval(function() {
		document.querySelector('.iphone-btn').classList.toggle('vibrated');
	}, 1000)

	document.querySelector('#js-phone-btn').addEventListener('click', function() {
		this.classList.add('btn-hide');
		document.querySelector('.view').classList.add('view--opened');
	});

	document.querySelector('#js-back-view').addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#js-phone-btn').classList.remove('btn-hide');
		document.querySelector('.view').classList.remove('view--opened');
	});

};