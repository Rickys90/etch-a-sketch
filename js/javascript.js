$(document).ready(function() {
	$('div#grid').mouseenter(function() {
		$(this).addClass('red');
	})
});

var reset = function() {
	$('div#grid').removeClass('red');
	$('div#grid').remove();
	$('td').remove();
	$('tr').remove();
	gHeight();
	gWidth();
	$('div#grid').mouseenter(function() {
		$(this).addClass('red');
	})
}



var gHeight = function(height) {
	var height = prompt('How tall do you want the grid to be? (1-32)');
	if (height < 1) {
		height = prompt('Please pick a number between 1-32!');
	}
	for (var i = 0; i < height; i++) {
		$('table').append('<tr></tr>');
	}
}

var gWidth = function(width) {
	var width = prompt('How wide do you want the grid to be? (1-32)');
	if (width < 1) {
		width = prompt('Please pick a number between 1-32!');
	}
	for (var i = 0; i < width; i++) {
		$('tr').append('<td><div id="grid"></div></td>');
	}
}

gHeight();
gWidth();