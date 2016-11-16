(function(){
'use strict';

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


	c.innerHTML = hours + sep + min + ampm;


	}

});
   var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("name","req","Please provide your name");
 
    frmvalidator.addValidation("email","req",
                "Please provide your email address");
 
    frmvalidator.addValidation("email","email",
                "Please provide a valid email address");
 
    frmvalidator.addValidation("message","maxlen=2048",
                "The message is too long!(more than 2KB!)");


})();