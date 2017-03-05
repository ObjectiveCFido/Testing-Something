$(document).ready(function () {
	document.getElementById('sbm').addEventListener('click', function (e) {
		e.preventDefault();
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var msg = document.getElementById("txt").value;
		
		if (name == "") {
			document.getElementById("1").className += " has-danger";
			document.getElementById("name").className += " form-control-danger";
		}
		
		if (email == "") {
			document.getElementById("2").className += " has-danger";
			document.getElementById("email").className += " form-control-danger";
		}
		
		if (msg == "") {
			document.getElementById("3").className += " has-danger";
			document.getElementById("txt").className += " form-control-danger";
		}
	})
});