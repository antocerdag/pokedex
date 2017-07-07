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
	    data.forEach(function(ele,img){
	    	var pokeName = ele.name;
	    	var img = img + 1;
	    	$("#pokemon").append("<a class='waves-effect waves-light btn boton' href='#modal1'><div class='pokelinea1'><img class='pokeimg' src='http://pokeapi.co/media/img/"+img+ ".png'><span class='namePoke text-center'>"+pokeName+"</span>"+"</div> </a>");
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
		//mostrarPokemon(respuesta.results);
		$('#modalpokemon').modal('open');
        $('#modalpokemon').modal('close');
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	
});