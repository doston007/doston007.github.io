$(function() {

	// Birthyear
	let yearFrom = 1950,
		currentYear = new Date().getFullYear(),
		yearPlus = currentYear + 1,
		select = document.querySelector('#js-birthyear');

	for (let i = yearFrom; i < yearPlus; i++) {
		select.innerHTML += '<option vale="' + i + '">' + i + '</option>';
	}

	$('.nav__link').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		}, 1000)
	});

});
