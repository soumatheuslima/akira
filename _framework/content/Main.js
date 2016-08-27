var Main = {
	//habilita/desabilita navegação (true - false);
	habilitarNavegacao: false, 

	 //Insira a note de corte do treinamento em porcentagem (0 ~ 100)
	minScore: 70,

	//Habilita/desabilita autoplay após a legenda (true - false | se false, o aluno controla por intermedio do seguir)
	autoPlay: true, 

	//Idioma do treinamento (PT, ES, IN) 
	idioma: "PT",

	//Estilo do menu (pages, retratil, chapters)
	menuStyle: 'pages', 

	//inserir a cor (código hexadecimal) padrão do curso que irá ser aplicada nos detalhes do player;
	corDoCurso: "#5aa0d0",

	//O curso possui legenda?
	cursoComLegenda: true,

	//O curso possui locução?
	cursoComLocucao: true,

	//O curso terá bookmark?
	bookmarkOn: true,

	//Inserir botões extras no menu
	botoesExtras: {
		/*botao_1: {
			nome: "Novo botão",
			descricao: "Insira aqui a instrução desse novo botão.",
			acao: "POPUP", //"POPUP" (apresenta o html que esta na pasta EXTRAS), "DOWNLOAD" (faz o download de um arquivo em files).
			src: "help.html" //Inserir apenas o nome do arquivo e a extensão. Alocar o arquivo conforme a cima.
		}*/
	}
}