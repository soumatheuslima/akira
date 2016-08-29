var subtitleArray = new Array();

var character = 'locutor_mc'; //Nome do personagem

/* new Array('id da legenda', 'instancia do personagem', 'conteudo da legenda');

- para aplicar um 'checkpoint' sem legenda, apenas deixe o índice do conteudo da legenda vazio ('');

- Se o personagem for inserido dentro de um movie clip, de o nome de instancia a esse mc de 'bolota_mc',
  caso não seja possível, adicione o nome de instancia do mc antes do nome de instancia do personagem, ex: 'movieclip_mc.locutor_mc';
*/

subtitleArray.push(

	//tela
	new Array('nome_do_arq_01.html',
		new Array('1', character, 
			'aaaa'), 

		new Array('2', character, 
			''),

		new Array('3', character, 
			''), 

		new Array('4', character, 
			''),

		new Array('5', character, 
			''), 

		new Array('6', character, 
			''),

		new Array('7', character, 
			''), 

		new Array('8', character, 
			'')
	),

	//tela
	new Array('nome_do_arq_02.html',
		new Array('1', character, 
			''), 

		new Array('2', character, 
			''),

		new Array('3', character, 
			''), 

		new Array('4', character, 
			''),

		new Array('5', character, 
			''), 

		new Array('6', character, 
			''),

		new Array('7', character, 
			''), 

		new Array('8', character, 
			'')
	)
)
