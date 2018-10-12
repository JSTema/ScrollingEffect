$(document).ready(function() {
	
	var winHeight = $(window).height();

	$(".slide").height(winHeight)
	.scrollie({
		scrollOffset: -50,
		scrollingInView: function(element) {
			var bgColor = element.data('background');

			$('body').css('background-color', bgColor);
		}
	});

});