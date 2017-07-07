$(document).ready(function() {
	var mostrarPokemon = function(data){
		//var pokeID = data.national_id;
	    var pokeName = data.name;
	    var pokeType1 = data.types[0].name;
	    if (data.types.length == 2) {
	    	var pokeType2 = data.types[1].name;
	    }
	    else var pokeType2 = null;
	    var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
	    var pokeDescription = "";
	    data.forEach(function(ele){
	    	$("#pokemon").append(templatePokemon())
	    })
	}
	var templatePokemon = function(){
		var pokemones = "<div class='elemento'>" + pokeName + pokeType1 + pokeType2 + "</div>";
		return pokemones;
	}

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'JSON',
		data: {"limit": '811'},
	})

	
	.done(function(respuesta) {
		console.log(respuesta);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});