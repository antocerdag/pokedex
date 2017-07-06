$(document).ready(function() {
	var imprimirPokemon = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif, url));
		})
	}	

	var armarTemplatePoke = function(gif,url){
		var t = "<div class='pokemon'><img src'" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
		return t;
	}
	var ajaxPoke = function(poke){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokedex/1/',
			type: 'GET',
			datatype: 'json',
			data: {
				q : gif,
				api_key: 'dc6zaTOxFJmzC'
			}
		})
		.done(function(response){
			console.log(response);
			imprimirPokemon(response.data);
		})
		.fail(function(){
			console.log("error");
		})
	}
	
});