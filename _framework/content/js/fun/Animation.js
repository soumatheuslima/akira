//Por algum motivo, para funcionar no Microsoft EDGE foi necessário a inserção da função 'console.log()', em todas oe metodos responsáveis pela animação.

var Animation = {
	timeOutSpeed: 55,
	mcDefaultMoveToBegin: 50,
	blinkT: null,
	alpha: function(arg1, arg2, arg3){ //tipo 'in / out', mc, velocidade
		alphaSpeed = (arg3) ? arg3 : 0.25;

		switch(arg1){
			case 'in': arg2.alpha = 0;
				function inFn() { arg2.alpha += alphaSpeed; if(arg2.alpha < 1) alphaTimer(); /*console.log(alphaTimer)*/ }; break;

			case 'out': 
				function outFn() { arg2.alpha -= alphaSpeed; if(arg2.alpha > 0) alphaTimer(); /*console.log(alphaTimer)*/ }; break;
		}

		function alphaTimer() {
			window.setTimeout(eval(arg1+"Fn"), Animation.timeOutSpeed);
		}alphaTimer	();
	},
	slide: function(arg1, arg2, arg3, arg4){ //para 'left / right / up / down', mc, alpha 'in / out', velocidade
		xOffset = arg2.x;
		yOffset = arg2.y;
		slideSpeed = (arg4) ? arg4 : 8;

		switch(arg1){
			case 'left': arg2.x += Animation.mcDefaultMoveToBegin;
				function left() { arg2.x -= slideSpeed; (arg2.x > xOffset) ? slideTimer() : arg2.x = xOffset; /*console.log(slideTimer);*/ };	break;

			case 'right': arg2.x -= Animation.mcDefaultMoveToBegin;
				function right() { arg2.x += slideSpeed; (arg2.x < xOffset) ? slideTimer() : arg2.x = xOffset; /*console.log(slideTimer);*/ }; break;

			case 'up': arg2.y += Animation.mcDefaultMoveToBegin;
				function up() { arg2.y -= slideSpeed; (arg2.y > yOffset) ? slideTimer() : arg2.y = yOffset; /*console.log(slideTimer);*/ }; break;

			case 'down': arg2.y -= Animation.mcDefaultMoveToBegin;
				function down() { arg2.y += slideSpeed; (arg2.y < yOffset) ? slideTimer() : arg2.y = yOffset; /*console.log(slideTimer);*/ }; break;
		}

		Animation.alpha((arg3) ? arg3 : 'in', arg2);
		function slideTimer() {
			window.setTimeout(eval(arg1), Animation.timeOutSpeed);
		}slideTimer();
	},
	scale: function(arg1, arg2, arg3, arg4){ //para 'front / back', mc, alpha 'in / out', velocidade
		scaleXOffset = arg2.scaleX;	scaleYOffset = arg2.scaleY;
		mcDefaultMoveToBegin = 0.8;
		slideSpeed = (arg4) ? arg4 : 0.180;

		switch(arg1){
			case 'front': 
				arg2.scaleX -= mcDefaultMoveToBegin; arg2.scaleY -= mcDefaultMoveToBegin;
				function front() { 
					arg2.scaleX += slideSpeed; arg2.scaleY += slideSpeed; 
					if(arg2.scaleX < scaleXOffset){
						scaleTimer();
					}else{
						arg2.scaleX = scaleXOffset;	arg2.scaleY = scaleYOffset;
					}
					console.log(scaleTimer);
				}
					
			break;
			case 'back': 
				arg2.scaleX += mcDefaultMoveToBegin; arg2.scaleY += mcDefaultMoveToBegin;
				function back() { 
					arg2.scaleX -= slideSpeed; arg2.scaleY -= slideSpeed; 
					if(arg2.scaleX > scaleXOffset){
						scaleTimer();
					}else{
						arg2.scaleX = scaleXOffset;	arg2.scaleY = scaleYOffset;
					}
					console.log(scaleTimer);
				}	
			break;
		}

		Animation.alpha((arg3) ? arg3 : 'in', arg2);
		function scaleTimer() {
			window.setTimeout(eval(arg1), Animation.timeOutSpeed);
		}scaleTimer();
	},
	blink: function(arg1){ //mc
		blinkSpeed = 0.10;
		arg1.alpha = 0;

		function blinkAnimation() { 
			arg1.alpha += blinkSpeed; 
			if(arg1.alpha >= 1 || arg1.alpha <= 0) blinkSpeed = blinkSpeed * -1;
			blinkTimer();
		}

		function blinkTimer() {
			window.clearTimeout(Animation.blinkT);	Animation.blinkT = null;
			Animation.blinkT = window.setTimeout(blinkAnimation, Animation.timeOutSpeed);
		}blinkTimer();
	}
}