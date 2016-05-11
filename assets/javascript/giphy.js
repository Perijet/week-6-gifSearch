$(document).ready(function (){



var heroes = ['batman', 'superman', 'birdman'];

function renderButtons(){
	$('#buttonsView').empty();

	for(var i = 0; i < heroes.length; i++){
		var b = $('<button>');
		b.addClass('hero');
		b.attr('data-name', heroes[i]);
		b.text(heroes[i]);
		b.attr('data-state', $(this).attr('data-state', 'animate'));
		$('#buttonsView').append(b);
	}
}


$('#addHero').on('click', function(){
	var hero = $('#hero-input').val();
	heroes.push(hero);
	renderButtons();
	return false;

});
renderButtons();

});