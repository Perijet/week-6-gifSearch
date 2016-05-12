$(document).ready(function (){


var heroes = ['batman', 'superman', 'birdman', 'Wonder Woman', 'Ant Man', 'Batgirl', 'Daredevil', 'Aquaman', 'Thor', 'Hulk'];

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

$(document).on('click', '.hero', function(){
	var hero = $(this).data('name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=dc6zaTOxFJmzC&limit=12";
	$.ajax({
		url: queryURL,
		method: 'GET'
	})
	.done(function(response){
		console.log(queryURL);
		console.log(response);
		var results = response.data;
		$('#gifsAppearHere').empty();
		for(var i = 0; i < results.length; i++){
			var heroDiv = $('<div id="heroDiv">');
			var p = $('<p>').text("Rating: " + results[i].rating);
			var heroImage = $('<img>');
			heroImage.attr('src', results[i].images.fixed_height_still.url);
			heroImage.attr('data-still', results[i].images.fixed_height_still.url);
			heroImage.attr('data-animate', results[i].images.fixed_height.url);
			heroImage.attr('class', 'heroImage');
			heroImage.attr('data-state', 'still');
			heroDiv.append(p);
			heroDiv.append(heroImage);
			$('#gifsAppearHere').append(heroDiv);
		}

	});

	$(document).on('click', '.heroImage', function(){
			var state = $(this).attr('data-state');
			if(state == 'still'){
				$(this).attr('src', $(this).data('animate'));
				$(this).attr('data-state', 'animate');
				console.log(this);
			}else{
				$(this).attr('src', $(this).data('still'));
				$(this).attr('data-state', 'still');
				console.log(this);
			}

	});

});

});