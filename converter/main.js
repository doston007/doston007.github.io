var uzs = document.getElementById('uzs');
var usd = document.getElementById('usd');

uzs.onkeypress = function () {
	usd.value = uzs.value * 0.00125;
	if (isNaN(usd.value)) {
		usd.value = "Ensert a number";
	}
}

usd.onkeypress = function () {
	uzs.value = usd.value * 8030;
	if (isNaN(uzs.value)) {
		uzs.value = "Ensert a number";
	}
}

// function convert (valut1, valut2, curse){
// 	valut1.value = valut2.value * curse;
// 	if (isNaN(valut1)) {
// 		valut1.value = "Ensert a number";
// 	}
// }

// uzs.onkeypress = convert (usd, uzs, 0.00125);
// usd.onkeypress = convert (uzs, usd, 8030);