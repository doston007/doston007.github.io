$(function() {

	// fullpage
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['main', 'regulations'],
		menu: '#top_nav'
	});

	$('#clock').countdown('2018/11/24', function(event) {
		$(this).html(event.strftime('%D Days <br> %H:%M:%S'));
	});

});
