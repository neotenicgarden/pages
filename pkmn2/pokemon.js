$(document ).ready(function(){
	// Author: JLau, 2018
	var pkmnDB = [];
	// Get pokemon database from JSON file
	$.getJSON( "pokemon.json", function( data ) {
		data.pokemon.forEach(currentPokemon => {
			pkmnDB.push(currentPokemon)
		})
	
	console.log(pkmnDB);
	console.log(pkmnDB.length);
	console.log(pkmnDB[0].pokemon);
	})
	
	// testing
	// $("#x-name").text(pkmnDB[0].pokemon);


});
