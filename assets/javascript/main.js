$(document).ready(function() {
	var dibujarGifs = function(data){
		var poke = "";
		var url = "";
		data.forEach(function(element){
			poke = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#pokemon").append(armarTemplatePokemon(gif, url));
		})
	}	
});