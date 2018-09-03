var uzs = document.getElementById('uzs'),
	usd = document.getElementById('usd'),
	curse = 8005;

uzs.oninput = function () {
	usd.value = uzs.value / 8005;
	if (isNaN(usd.value)) {
		usd.value = "Ensert a number";
	}
}

usd.oninput = function () {
	uzs.value = usd.value * 8005;
	if (isNaN(uzs.value)) {
		uzs.value = "Ensert a number";
	}
}

// function convert (valut1, valut2){
// 	valut1.value = valut2.value * curse;
// 	if (isNaN(valut1)) {
// 		valut1.value = "Ensert a number";
// 	}
// }

// uzs.oninput =  function convert (usd, uzs);
// usd.oninput = function convert (uzs, usd);