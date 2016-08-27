var Language = {
	//Array com as divs para mudar o title / [0] div, [1] espanhol, [2] inglês
	divsTitleToChange: [ 	["courseName", 		
							"Título de la formación.", 
							"Title of training."],

							["pageName", 		
							"Ubicación en la formación y el tema que se esté tratando.", 
							"Location in training and the issue that is being addressed."],

							["menuButton", 		
							"Formación menú.", 
							"Training menu."],

							["prevPage", 		
							"Revisar el contenido.", 
							"Review the content."],

							["nextPage", 		
							"Siguiente contenido.", 
							"Next content."],

							["pauseButton", 	
							"Hacer una pausa / reanudar el audio.", 
							"Pause / resume audio."],

							["subtitleButton", 	
							"Activar / desactivar el subtítulo.", 
							"Enable / disable caption."],

							["audioButton", 	
							"Activar / desactivar el audio.", 
							"Enable / disable audio."],

							["helpButton", 		
							"Aprender a navegar por la formación.", 
							"Learn how to navigate the training."],

							["quitButton", 		
							"Cerca de formación.", 
							"Quit training."]],

	//Array com as divs para mudar o conteudo / [0] div, [1] espanhol, [2] inglês
	divsContentToChange: [ 	["subtitleButton", 
							"Leyenda", 
							"Subtitle"],

							["audioButton", 
							"Audio", 
							"Audio"],

							["helpButton", 
							"Ayudar", 
							"Help"],

							["quitButton", 
							"Cerrar formación", 
							"Exit Training"],

							["navMenuTitle", 
							"Menú de navegación", 
							"Navigation menu"]
	 ],

	setLanguage: function(){
		if(Main.idioma == "PT") return
			
		var currentLanguage = (Main.idioma == "ES") ? 1 : 2;

		//Seto os titles do player
		for(var w = 0; w < Language.divsTitleToChange.length; w++ ) Language.setDivTitle( Language.divsTitleToChange[w][0] , Language.divsTitleToChange[w][currentLanguage] );

		//Seto as divs com conteudo do player
		for(var j = 0; j < Language.divsContentToChange.length; j++ ) Language.setDivContent( Language.divsContentToChange[j][0] , Language.divsContentToChange[j][currentLanguage] );

	},

	setDivTitle: function(arg1, arg2){
		$("#"+arg1).attr('title', arg2);
	},

	setDivContent: function(arg1, arg2){
		$("#"+arg1+" > div").text(arg2);
	}
}