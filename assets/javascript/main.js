$(document).ready(function() {
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'JSON',
		data: {"limit": '20'},
	})
	.done(function(respuesta) {
		console.log(respuesta);
		mostrarPokemon(respuesta.results);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	var mostrarPokemon = function(data){
		//var pokeID = data.national_id;
		
	    var pokeDescription = "";
	    data.forEach(function(ele){
	    	var pokeName = ele.name;
	    	
	    	$("#pokemon").append("<div class='pokelinea1'><img class='pokeimg' src='http://img.pokemondb.net/artwork/"+pokeName+ ".jpg'><span class='namePoke text-center'>"+pokeName+"</span>"+"</div> ");
	    })
	}

	//variable para formato de impreción en HTML
	/*var templatePokemon = function(pokeURL2){
		var pokemones = "<div class='elemento'>" + pokeURL2 + pokeName+ "</div>";
		return pokemones;
	}*/

	

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon-species/',
		type: 'GET',
		dataType: 'JSON',
		data: {"limit": '20'},
	})
	.done(function(respuesta) {
		console.log(respuesta);
		//mostrarInfo(respuesta.results);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	
});