$(document).ready(function () {
	document.getElementById('sbm').addEventListener('click', function (e) {
		e.preventDefault();
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var msg = document.getElementById("txt").value;
		
		if (name == "") {
			document.getElementById("1").className += " has-error";
			document.getElementById("1").className += " has-feedback";
		}
		
		if (email == "") {
			document.getElementById("2").className += " has-error";
			document.getElementById("2").className += " has-feedback";
	
		}
		
		if (msg == "") {
			document.getElementById("3").className += " has-error";
			document.getElementById("3").className += " has-feedback";			
		}
	})
});