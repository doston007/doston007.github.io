$(function() {
	var windowWidth = $(window).width();
	if (windowWidth < 992) {
		fullpage_api.destroy();
	} else {
		fullpage_api.reBuild('all');
	};

	// $(window).resize(function() {
	// 	windowWidth = $(window).width();

	// 	if (windowWidth < 992) {
	// 		fullpage_api.destroy();
	// 	} else {
	// 		fullpage_api.reBuild('all');
	// 	}
	// });
});