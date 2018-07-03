$(document ).ready(function(){
	// Author: JLau, 2018
	var pkmnDB = [];
	// Get pokemon database from JSON file
	$.getJSON( "pokemon.json", function( data ) {
		for (i = 0; i < data.pokemon.length; i++) {
			pkmnDB.push(data.pokemon[i]);
		}
	});
	console.log(pkmnDB);
	console.log(pkmnDB.length);
	//console.log(pkmnDB[0].pokemon);
	
	// testing
	// $("#x-name").text(pkmnDB[0].pokemon);
	
	



});
