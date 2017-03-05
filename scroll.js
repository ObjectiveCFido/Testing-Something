$(document).ready(function() {
	$('.ic a').on('click', function () {
		$('html body').animate({
			scrollTop: $("#bottom").offset().top
		}, 2000);
		return false;
	});
});