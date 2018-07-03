$(document ).ready(function(){
	// Author: JLau, 2018
	var pkmnDB = [];
	// Get pokemon database from JSON file
	$.getJSON( "pkmnjson.json", function( data ) {
		for (i = 0; i < data.pokemon.length; i++) {
			pkmnDB.push(data.pokemon[i]);
		}
	});
	console.log(pkmnDB);
	console.log(pkmnDB.length);
	
	// $("#x-name").text(pkmnDB[0].pokemon);
	
	



});