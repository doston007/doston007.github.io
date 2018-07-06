var task = document.getElementsByTagName('li'),
	close = document.getElementsByClassName('close'),
	toDoInput = document.getElementById('toDoInput'),
	list = document.getElementById('list'),
	add = document.getElementById('add');

function activator() {
	for (var i = 0; i < task.length; i++) {
		task[i].onclick = function () {
			this.classList.toggle('active');
		}
	}
}

function closer() {
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			this.parentNode.style.display = "none";
		}
	}
}

function adder () {
	if (toDoInput.value == "" || toDoInput.value == " ") {
		alert('Заполните поле!');
	} else {
		list.innerHTML += "<li>" + toDoInput.value + "<span class=" + "close" +">&times;</span>" + "</li>";
		toDoInput.value = "";
	}
	closer();
	activator();
}

add.onclick = function () {
	adder();
}

toDoInput.onkeyup = function(e) {
	if (e.keyCode === 13 ) {
		adder()
	}
}


closer();
activator();