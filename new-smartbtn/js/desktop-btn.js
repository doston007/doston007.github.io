(function() {
	let desktopBtn = document.getElementById('js-btn-desktop'),
		btnParent = desktopBtn.parentNode; 
	
	desktopBtn.addEventListener('click', function() {
		btnParent.classList.toggle('active');
	});
})();