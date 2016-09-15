//COMUNICAÇÃO SCORM
var Lms = {
	isOn: false,
	LMSLocation: null,
	getValue: function(arg1){
		var action = parent.doLMSGetValue;
		switch (arg1){
			case 'location': return action('cmi.core.lesson_location'); break
			case 'score': return action('cmi.core.score.raw'); break
			case 'maxScore': return action('cmi.core.score.max'); break
			case 'minScore': return action('cmi.core.score.min'); break
			case 'status': return action('cmi.core.lesson_status'); break
		}
	},
	setValue: function(arg1, arg2){
		var action = parent.doLMSSetValue;
		switch (arg1){
			case 'location': action('cmi.core.lesson_location', Player.currentPage + '/' + Player.maxPageVisited);	break
			case 'score': action('cmi.core.score.raw', arg2); break
			case 'maxScore': action('cmi.core.score.max', 100); break
			case 'minScore': action('cmi.core.score.min', Main.minScore); break
			case 'status': action('cmi.core.lesson_status', arg2); break
		}
		parent.doLMSCommit();
	},
	callBookmark: function(){
		var msgToShow = "Deseja retornar a última tela visitada?";
		if(Main.idioma == "ES") msgToShow = "Quieren volver a la última pantalla visitado?";
		if(Main.idioma == "IN") msgToShow = "Want to return to last visited screen?";

		if(confirm(msgToShow)){
			var string = Lms.LMSLocation.split("/");
			Player.currentPage = parseInt(string[0]);
		}
	}
}