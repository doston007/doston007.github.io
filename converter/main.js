var uzs = document.getElementById('uzs');
var usd = document.getElementById('usd');

uzs.onkeypress = function () {
    usd.value = uzs.value * 0.00125;
}

usd.onkeypress = function () {
    uzs.value = usd.value * 8030;
}