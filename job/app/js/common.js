$(function() {

	// fullpage
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		menu: '#top_nav',
		navigation: true,
		navigationPosition: 'right',
		showActiveTooltip: false,
	});

	$('#clock').countdown('2018/11/24', function(event) {
		$(this).html(event.strftime('%D Days <br> %H:%M:%S'));
	});

});
