

document.addEventListener('DOMContentLoaded', function(){


	var c = document.getElementById('current-time');

	

	setInterval(updateTime, 1000);

	function updateTime() {
		var d = new Date();
	var hours = d.getHours(),
		ampm = 'AM';
				if (hours > 12) {
					hours -=12;
					ampm = 'PM';
				}

				var sep = ':';
				if (d.getSeconds() % 2 === 1) sep = ' '

				var min = d.getMinutes();
			if (min < 10) min = '0' + min;


	c.innerHTML = hours + sep + min + " " + ampm;


	}

});



// function showMore(){ 
// 	var Nav = document.getElementById('nav');

// 	var displaySetting = Nav.style.display;

// 	var Button = document.getElementById('button');


// 	if (displaySetting === 'block') {

// 		Nav.style.display ='none';

// 		Button.innerHTML = 'Show';
// 	}
// 	else {
// 		Nav.style.display = 'block';

// 		Button.innerHTML = 'Hide';
// 	}
// };

