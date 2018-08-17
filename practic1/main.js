var aboutMePos = $('#about-me').scrollTop(),
	portfolioPos = $('#portfolio').scrollTop(),
	contactPos = $('#contact').scrollTop();

function refreshVar() {
	aboutMePos = $('#about-me').scrollTop(),
	portfolioPos = $('#portfolio').scrollTop(),
	contactPos = $('#contact').scrollTop();
}

refreshVar();

$(window).resize(refreshVar);

console.log(contactPos);