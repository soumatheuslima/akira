var Player = {
	courseStructurOnUse: course_structure,
	totalPages: 0, 
	totalExtraButtons: 0,
	mostrarSeguir: true, 
	blinkInterval: null,
	backContent: true, 
	maxPageVisited: 0, 
	doContent: true,
	seguirArg: null,
	frameToGo: null, 
	currentPage: 1, 
	pagesArray: [], 
	backOrOn: null,
	isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

	//Quando o <body> do player é completamente carregado, faço essa função
	courseLoaded: function (){ 
		$('#aberturaDiv').click(Player.startCourse);

		Player.startPreloader();
		Language.setLanguage();

		if(Player.isMobile) $('body').css('background-image', 'none'); //Retiro a imagem do fundo

		
		if(Main.cursoComLocucao){
			$("#audioButton").off();
			$("#audioButton").click(Menu.onOffAudio);
		}else{
			Menu.onOffAudio();
			$("#audioButton").css("cursor", "default");
		}

		if(Main.cursoComLegenda){
			$("#subtitleButton").off();
			$("#subtitleButton").click(Menu.showHideSubtitle);
		}else{
			Menu.showHideSubtitle();
			$("#subtitleButton").css("cursor", "default");
		}

	},
	
	startCourse: function (){
		Player.totalPages = Player.courseStructurOnUse.length;

		//Para que a locução toque automatico, o usuario prcisar fazer uma ação para carregar o primeiro audio (só ipad)
		$('#locution').attr('src', 'loc/_blank.mp3');
		$("#locution").trigger("load");

		//escondo a introdução
		$('#introFrame').attr('src', '');
		$('#aberturaDiv').hide();

		//Nome do curso
		$('#courseName').html(courseName);
		$('#courseName').css('left', '+=10'); $('#courseName').css('opacity', '0');
		$('#courseName').animate( {opacity: '1', left: '-=10'}, 500);
		
		//Cliques dos botões
		$("#menuButton").off();
		$("#quitButton").off();
		$("#helpButton").off();
		$("#prevPage").off();
		$("#nextPage").off();
		$("#pauseButton").off();

		$("#menuButton").click(Menu.workMenu);
		$("#quitButton").click(Menu.quitCourse);
		$("#helpButton").click(function(){Player.openPopUp("help.html")});
		$("#prevPage").click(Player.prevPageAction);
		$("#nextPage").click(Player.nextPageAction);
		$("#pauseButton").click(Subtitle.playPause);

		//Se tiver audio e/ou locução habilito o click, se não eu desativo

		Menu.creatMenu(); //Crio o menu
		Player.createExtraButton(); //Crio botões extras

		//Crio array para os checkpoints;
		for(var w = 0; w < Player.totalPages; w++){ 
			Player.pagesArray.push(new Array()); 
			Subtitle.sawSubtitles.push(new Array());
		}; 

		//Se mobile, 
		if(Player.isMobile) {
			//habilito o touch para avançar tela
			myElement = document.getElementById('touchDiv');
			mc = new Hammer(myElement);
			mc.on("swipeleft", function(ev) { if($('#nextPage').css('display') == 'block') $('#nextPage').click(); } );
			mc.on("swiperight", function(ev) { if($('#prevPage').css('display') == 'block') $('#prevPage').click(); } );
			$('#touchDiv').css('display', 'block');
		}

		Player.updatePage(Player.currentPage, 'next'); //Chamo tela
	},

	nextPageAction: function (arg){

		if( (doContent && (Player.mostrarSeguir || Main.habilitarNavegacao) ) || arg == 'locEnd' || Player.seguirArg == 'sem flag'){ //Se for para navegar pelo contêudo
			Player.changeNavDisplay('none'); //Escondo os botões de navegação
			Player.backContent = true; //Mudo a variavel para que o botão voltar navegue pelo conteudo, não pelas telas do curso;

			//Se ainda não insirido, insiro o frame atual na array de checkpoint
			if(Player.seguirArg != 'sem flag') {
				var allowPush = true;
				for(var w = 0; w < Player.pagesArray[Player.currentPage-1].length; w++){
					if(Player.pagesArray[Player.currentPage-1][w] == $('#pageFrame')[0].contentWindow.exportRoot.currentFrame) allowPush = false;
				};
				if(allowPush) {
					Player.pagesArray[Player.currentPage-1].push($('#pageFrame')[0].contentWindow.exportRoot.currentFrame);
					Subtitle.sawSubtitles[Player.currentPage-1].push($('#pageFrame')[0].contentWindow.exportRoot.currentFrame);
				};
			};	

			Subtitle.clearSubtitle(); //Se houver legenda, há retiro
			$('#pageFrame')[0].contentWindow.exportRoot.play(); //Dou play na timeline da tela

		}else{ //Se for para navegar pelas telas
			if(Player.currentPage == Player.totalPages) return;
			Player.currentPage += 1;
			Player.updatePage(Player.currentPage, 'next');
		};

		if($('#videoFrame').css('display') == 'block') Player.closeVideoPlayer(); //Se o video estiver na tela, sumo com ele
	},

	prevPageAction: function (){
		if(Player.backContent){ //Se for para navegar pelo contêudo
			Player.changeNavDisplay('none'); //Escondo os botões de navegação
			doContent = true; //Mudo a variavel para que o botão avançar navegue pelo conteudo, não pelas telas do curso;

			Subtitle.clearSubtitle(); //Se houver legenda, há retiro
			Player.getCheckpoint(); //Checo qual frame ir

			if(Player.pagesArray[Player.currentPage-1].length == 0) Player.backContent = false; //Se não houver mais checkpoint antes do atual, muda o voltar para navegar pelas telas

		}else{//Se for para navegar pelas telas
			if(Player.currentPage == 1) return;
			Player.currentPage -= 1;
			Player.updatePage(Player.currentPage, 'prev');
		};

		if($('#videoFrame').css('display') == 'block') Player.closeVideoPlayer(); //Se o video estiver na tela, sumo com ele
	},

	//Liberar o botão avançar, usado no fim da tela
	enableNextPage: function (){
		doContent = false; //Mudo a variavel para que o botão avançar navegue pelas telas do curso, não pelo conteudo;
		Player.doSeguir('end'); //Mostro os botões de navegação

		Subtitle.activeBall(null); //Desativo as bolinhas;

		if(Player.currentPage == Player.totalPages){ 

			var msgToShow = "Parabéns! Você finalizou o treinamento. Essa janela pode ser fechada com segurança.";
			if(Main.idioma == "ES") msgToShow = "¡Enhorabuena! Ha terminado el entrenamiento. Esta ventana se puede cerrar de forma segura.";
			if(Main.idioma == "IN") msgToShow = "Congratulations! You finished the training. This window can be closed securely."; 

			$('#nextPage').css('display', 'none'); alert(msgToShow); 

			if(Lms.isOn) Lms.setValue('status', 'completed'); //Se for ultima pagina seto completed

			return;
		};

		//Faço o blink no avançar se não for a ultima tela;
		window.clearInterval(Player.blinkInterval);
		Player.blinkInterval = window.setInterval(
			function(){
				$("#nextPage").attr("class") == 'navigationClass' ? $("#nextPage").attr("class", "blinkNavClass") : $("#nextPage").attr("class", "navigationClass") 
			}, 500);
	},

	//Faço o botão avançar parar de piscar
	disableNextPage: function (){	
		window.clearInterval(Player.blinkInterval); 
		$("#nextPage").attr("class", "navigationClass"); 
	},

	//Mostrar os botões de navegação
	doSeguir: function (arg){ 
		if(Animation.blinkT != null) window.clearTimeout(Animation.blinkT); //Finalizo o timeout do blink do Animation.js

		Player.seguirArg = arg; //Atribuo o arg a uma var global
		Player.disableNextPage(); //Faço o botão avançar parar de piscar

		//Se tiver checkpoint ou não for a primeira tela, mostro o botão voltar
		if(Player.pagesArray[Player.currentPage-1][ Player.pagesArray[Player.currentPage-1].length-1 ] || Player.currentPage != 1) $('#prevPage').css('display', (arg == 'sem flag') ? 'none' : 'block');

		$('#nextPage').css('display', 'block'); //Mostro o botão avançar;

		if(arg == 'sem flag' || !Main.autoPlay)	return; //Caso o seguir seja sem flag, paro aqui

		//Se a função não for chamada da 'Player.enableNextPage', a navegação estiver desabilitada e Player.mostrarSeguir false, escondo botão;
		if(arg != 'end' && !Main.habilitarNavegacao && !Player.mostrarSeguir) $('#nextPage').css('display', 'none');  

		//Se a navegação estiver habilitada, ou a página atual ainda não visitada ou a função foi chamada pela 'Player.enableNextPage';
		if(Main.habilitarNavegacao || Player.currentPage < Player.maxPageVisited || arg == 'end') return; 

		//Aqui verfico se a legenda ja foi vista, se sim, mostro o seguir;
		for(var w = 0; w < Subtitle.sawSubtitles[Player.currentPage-1].length; w++){
			if($('#pageFrame')[0].contentWindow.exportRoot.currentFrame == Subtitle.sawSubtitles[Player.currentPage-1][w]){
				Player.mostrarSeguir = true;
				$('#nextPage').css('display', 'block'); 
				return
			}
		}

		//caso não foi vista
		Player.mostrarSeguir = false;	$('#nextPage').css('display', 'none');
	},

	//Mostrar os botões de navegação sem a legenda (usado para checkpoint)
	doSeguirSemLegenda: function (arg){ 
		if(Animation.blinkT != null) window.clearTimeout(Animation.blinkT); //Finalizo o timeout do blink do Animation.js

		Player.disableNextPage(); //Faço o botão avançar parar de piscar

		//Se tiver checkpoint ou não for a primeira tela, mostro o botão voltar
		if(Player.pagesArray[Player.currentPage-1][ Player.pagesArray[Player.currentPage-1].length-1 ] || Player.currentPage != 1) $('#prevPage').css('display', (arg == 'sem flag') ? 'none' : 'block');

		$('#nextPage').css('display', 'block'); //Mostro o botão avançar;

		//caso não foi vista
		Player.mostrarSeguir = true;
	},

	//Mudar o 'display' dos botões de navegação
	changeNavDisplay: function (arg1){ 
		$('#prevPage').css('display', arg1); 
		$('#nextPage').css('display', arg1); 
	},

	//Descubro qual frame ir usando o botão voltar
	getCheckpoint: function (){
		Player.frameToGo = Player.pagesArray[Player.currentPage-1][ Player.pagesArray[Player.currentPage-1].length-1 ];
		Player.pagesArray[Player.currentPage-1].pop();

		$('#pageFrame')[0].contentWindow.exportRoot.gotoAndStop(Player.frameToGo);
	},

	//atualizo a tela e elementos necessarios 
	updatePage: function (arg1, arg2){
		Tracks.stopFX(); //Paro FX
		if($('#videoFrame').css('display') == 'block') Player.closeVideoPlayer(); //Se o video estiver na tela, sumo com ele
		
		var pageSource = Player.courseStructurOnUse[arg1-1][0]; //Page SRC
		Player.backOrOn = arg2; //Passo arg2 para uma var global

		$('#pageNavigation').css('display', 'none'); //Escondo as bolas de navegação

		if($('#courseMenu').css("display") == 'block') { Menu.workMenu(); }; //Se aberto, fecho o menu
		
		if( $('#pageFrame').attr('src') != 'pages/' + pageSource ){ //Se for chamado uma tela diferente da que esta
			if(arg2 == 'menu') for(var w = 0; w < Player.totalPages; w++){ Player.pagesArray[w] = [] }; //Se for acessada via menu, reseto os checkpoints

			$('#locution').attr('src', ''); //Reseto src da loc;
			$('#nextPage').css('display', 'none'); //Escondo o botão avançar;

			doContent = true; //Mudo a variavel para que o botão avançar navegue pelo conteudo, não pelas telas do curso;
			
			if(arg1 == 1){ //Se for a tela 1
				$('#prevPage').css('display', 'none');
			}else{
				$('#prevPage').css('display', 'block');
				Player.backContent = false; //Mudo a variavel para que o botão voltar navegue pelas telas do curso, não pelo conteudo
			};

			Subtitle.theAvatar = null; //Reseto personagem
			if( $('#subtitle').css('display') == 'block' || !Subtitle.showSubtitle) Subtitle.clearSubtitle(); //Se houver legenda, há retiro

			$('#pageFrame').attr('src', '_pages/' + pageSource); //Atualizo o iframe
			Player.showLoader(); //Mostro o loader
			Player.disableNextPage(); //Faço o botão avançar parar de piscar

			//trabalho com o location, Player.maxPagevisited e Player.currentPage
			Player.currentPage = arg1;
			if(Player.currentPage > Player.maxPageVisited) {
				Player.maxPageVisited = Player.currentPage;
			}else{
				if(!Main.habilitarNavegacao) Player.mostrarSeguir = true;
			}
			
			if(Lms.isOn) Lms.setValue('location');

			//Animação para o nome da tela
			$('#pageName').finish(); //Finalizo a animação antes de recomeçar
			$('#pageName').animate( {opacity: '0', left: arg2 == 'next' ? '-=10' : '+=10'}, 100, 
				function(){
					var wordToWritre = 'Tela';
					if(Main.idioma == 'ES') wordToWritre = 'Página';
					if(Main.idioma == 'IN') wordToWritre = 'Page';

					$('#pageName').css('left', arg2 == 'next' ? '+=20' : '-=20'); 
					$('#pageName').html(wordToWritre + ' ' + Player.currentPage + ' ' + ((Main.idioma == 'IN') ? 'of' : 'de' ) + ' ' + Player.totalPages + ' - ' + Player.courseStructurOnUse[Player.currentPage-1][1]);
					$('#pageName').animate( {opacity: '1', left: arg2 == 'next' ? '-=10' : '+=10'}, 200);
				}
			);

			Menu.updateMenuStatus(); //update menu
			Subtitle.getPageSubtitles(pageSource); //Recupero as legendas da tela
			Player.onChangePage(); //comunicação GPS
		};
	},

	showLoader: function (){ 
		$("#pageLoader").css('display', 'block'); 
	},
	hideLoader: function (){ 
		$("#pageLoader").css('display', 'none');
	},

	onFrameLoad: function (){
		//Escondo preloader do player se ele estiver na tela
		if($('#preloader') != null) Player.preloaderComplete();

		//Se for a primeira tela ou navegação para frente, não busco o checkPoint;
		if(Player.pagesArray[Player.currentPage-1]){
			if(Player.backOrOn != 'next'){
				if(Player.pagesArray[Player.currentPage-1][ Player.pagesArray[Player.currentPage-1].length-1 ]){
					Player.getCheckpoint(); //Checo qual frame ir
					//Caso só tenha uma legenda, deixo a var pra voltar a tela
					Player.backContent = (Player.pagesArray[Player.currentPage-1].length == 0) ? false : true; //Mudo a variavel para que o botão voltar navegue pelas telas do curso, não pelo conteudo
				}
			}
		}

		//Escondo preloader da tela
		Player.hideLoader();
	},

	preloaderComplete: function(){
		$('#preloaderText').remove();
		$('#loading-center-absolute').animate( {opacity: '0'}, 300);
		$('#loading').animate( {opacity: '0'}, 500,
			function(){ $('#preloader').remove(); }
		)
	},

	startPreloader: function(){
		var msgToShow = "Carregando...";
		if(Main.idioma == "ES") msgToShow = 'Cargando...';
		if(Main.idioma == "IN") msgToShow = 'Loading...';

		$('#preloaderText').html(msgToShow);

		$('#introFrame').attr("src", "_pages/_abertura.html"); 
		$('#objectPreloader').css('background-color', Main.corDoCurso);
		$('#loading-center-absolute').animate( {opacity: '1'}, 400);
	},

	openVideoPlayer: function(arg){
		//arg - video que irá abrir (SEMPRE .MP4, SEMPRE DENTRO DA PASTA FILES)
		$('#videoFrame').attr('src', 'extras/video_player.html');
		$('#videoFrame').css('display', 'block');

		$('#videoFrame').load(
			function() { 
				$('#videoFrame')[0].contentWindow.setVideoSrc(arg);
				$('#videoPlayer').css('display', 'block');
			}
		)
	},

	closeVideoPlayer: function(){
		$('#videoFrame').css('display', 'none');
		$('#videoFrame').attr('src', '');
		$('#videoFrame').off();
	},

	openPopUp: function(arg){
		//arg - pagina que irá abrir
		$('#popFrames').attr('src', 'extras/' + arg);
		$('#popFrames').css('display', 'block');
	},

	closePopUp: function(){
		$('#popFrames').css('display', 'none');
		$('#popFrames').attr('src', '');
	},

	countExtraButtons: function(){
		var property;
		var object = eval("Main.botoesExtras");
		Player.totalExtraButtons = 0;

		for (property in object) if (object.hasOwnProperty(property)) { Player.totalExtraButtons++; };
	},

	createExtraButton: function(){
		var toWrite = '';
		Player.countExtraButtons();

		for(var w = 1; w <= Player.totalExtraButtons; w++){
			var buttonObject = eval("Main.botoesExtras.botao_" + w);

			toWrite += '<div class="extraButton" onclick="' + (buttonObject.acao == "POPUP" ? 'Player.openPopUp(\'' : 'window.open(\'files/') + buttonObject.src + '\')" title="' + buttonObject.descricao + '">' + buttonObject.nome + '</div>';
		}

		$("#extraButtons").html(toWrite);
	},

	onChangePage: function() { 
		if(typeof(top.onChangePage) == 'function') top.onChangePage(); 
	},

	getIndexAndGoPage: function(arg){
		for(var w = 0; w < Player.courseStructurOnUse.length; w++) if(Player.courseStructurOnUse[w][0] == arg) Player.updatePage((w+1), 'next');
	},

	changeCourseStructure: function(arg1, arg2){
		Player.courseStructurOnUse = (arg1 == 0) ? course_structure : eval("course_structure_" + arg1);
		Player.currentPage = (arg2) ? arg2 : 1;	
		Player.maxPageVisited = 0;

		Player.startCourse();
	}
};