(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 660,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.CópiadeSímbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Botão seguir para 'stand alone'
		this.addEventListener("click",
			function(){ exportRoot.play(); }
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-3.1,5.8).lineTo(-3.1,-5.6).lineTo(-1.4,-5.6).lineTo(-1.4,-3.9).curveTo(-0.7,-5.1,-0.2,-5.5).curveTo(0.4,-5.8,1.1,-5.8).curveTo(2.1,-5.8,3.1,-5.2).lineTo(2.4,-3.4).curveTo(1.7,-3.8,1,-3.8).curveTo(0.4,-3.8,-0.2,-3.5).curveTo(-0.6,-3.1,-0.8,-2.4).curveTo(-1.2,-1.4,-1.2,-0.1).lineTo(-1.2,5.8).closePath();
	this.shape.setTransform(27.1,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-1,7.9).lineTo(-1,-3.5).lineTo(1,-3.5).lineTo(1,7.9).closePath().moveTo(-1,-5.6).lineTo(-1,-7.9).lineTo(1,-7.9).lineTo(1,-5.6).closePath();
	this.shape_1.setTransform(20.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#333333").beginStroke().moveTo(-2.6,5.4).curveTo(-3.5,5.1,-3.9,4.5).curveTo(-4.3,3.9,-4.5,3).curveTo(-4.6,2.5,-4.6,1.2).lineTo(-4.6,-5.8).lineTo(-2.7,-5.8).lineTo(-2.7,0.5).curveTo(-2.7,2,-2.6,2.5).curveTo(-2.4,3.3,-1.8,3.7).curveTo(-1.2,4.2,-0.3,4.2).curveTo(0.5,4.2,1.3,3.7).curveTo(2.1,3.3,2.4,2.5).curveTo(2.7,1.7,2.7,0.3).lineTo(2.7,-5.8).lineTo(4.6,-5.8).lineTo(4.6,5.6).lineTo(2.9,5.6).lineTo(2.9,3.9).curveTo(1.6,5.8,-0.7,5.8).curveTo(-1.7,5.8,-2.6,5.4).closePath();
	this.shape_2.setTransform(11.4,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#333333").beginStroke().moveTo(-3.4,7.2).curveTo(-4.7,6.3,-4.6,4.5).lineTo(-2.7,4.7).curveTo(-2.6,5.6,-2.1,6).curveTo(-1.4,6.5,-0.1,6.6).curveTo(1.2,6.5,1.9,6).curveTo(2.7,5.4,2.9,4.5).curveTo(3.1,3.9,3.1,2).curveTo(1.8,3.5,-0.1,3.5).curveTo(-2.4,3.5,-3.7,1.8).curveTo(-5,0.1,-5,-2.3).curveTo(-5,-3.9,-4.4,-5.3).curveTo(-3.8,-6.7,-2.7,-7.4).curveTo(-1.6,-8.2,-0.1,-8.1).curveTo(1.9,-8.1,3.3,-6.6).lineTo(3.3,-7.9).lineTo(5,-7.9).lineTo(5,2).curveTo(5,4.6,4.5,5.7).curveTo(4,6.9,2.8,7.5).curveTo(1.6,8.2,-0.1,8.2).curveTo(-2.2,8.2,-3.4,7.2).closePath().moveTo(-2.1,-5.5).curveTo(-3,-4.4,-3,-2.4).curveTo(-3,-0.1,-2.1,0.9).curveTo(-1.2,1.9,0.1,1.9).curveTo(1.4,1.9,2.3,0.9).curveTo(3.2,-0.1,3.2,-2.4).curveTo(3.2,-4.5,2.3,-5.5).curveTo(1.4,-6.6,0.1,-6.6).curveTo(-1.2,-6.6,-2.1,-5.5).closePath();
	this.shape_3.setTransform(-1.1,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#333333").beginStroke().moveTo(-3.8,4.4).curveTo(-5.2,2.8,-5.2,0.1).curveTo(-5.2,-2.8,-3.8,-4.4).curveTo(-2.3,-5.9,0.1,-5.9).curveTo(2.4,-5.9,3.8,-4.4).curveTo(5.2,-2.9,5.2,-0.1).lineTo(5.2,0.5).lineTo(-3.2,0.5).curveTo(-3.2,2.4,-2.2,3.4).curveTo(-1.3,4.4,0.2,4.3).curveTo(1.3,4.3,2,3.8).curveTo(2.7,3.2,3.2,2).lineTo(5.2,2.3).curveTo(4.7,4,3.4,5).curveTo(2.2,6,0.2,6).curveTo(-2.3,6,-3.8,4.4).closePath().moveTo(-2.2,-3.5).curveTo(-3.1,-2.6,-3.2,-1.1).lineTo(3.2,-1.1).curveTo(3.1,-2.6,2.5,-3.2).curveTo(1.6,-4.4,0.1,-4.4).curveTo(-1.2,-4.4,-2.2,-3.5).closePath();
	this.shape_4.setTransform(-13,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#333333").beginStroke().moveTo(-3.3,5.1).curveTo(-4.4,4.1,-4.7,2.3).lineTo(-2.8,2).curveTo(-2.7,3.2,-1.9,3.7).curveTo(-1.2,4.4,0.1,4.3).curveTo(1.5,4.4,2.1,3.8).curveTo(2.7,3.3,2.7,2.5).curveTo(2.7,1.9,2.2,1.5).curveTo(1.8,1.2,0.2,0.8).curveTo(-1.9,0.3,-2.8,-0.1).curveTo(-3.6,-0.5,-4,-1.1).curveTo(-4.4,-1.9,-4.4,-2.7).curveTo(-4.4,-3.4,-4.1,-4.1).curveTo(-3.7,-4.7,-3.1,-5.2).curveTo(-2.7,-5.5,-1.9,-5.7).curveTo(-1.1,-5.9,-0.2,-5.9).curveTo(1.1,-5.9,2.1,-5.6).curveTo(3.1,-5.2,3.6,-4.6).curveTo(4.1,-3.8,4.3,-2.8).lineTo(2.4,-2.5).curveTo(2.3,-3.4,1.7,-3.9).curveTo(1,-4.4,-0.1,-4.4).curveTo(-1.4,-4.4,-2,-3.9).curveTo(-2.6,-3.5,-2.6,-2.9).curveTo(-2.6,-2.6,-2.3,-2.2).curveTo(-2.1,-1.9,-1.6,-1.7).lineTo(0.1,-1.2).curveTo(2.2,-0.6,3,-0.3).curveTo(3.8,0.1,4.3,0.7).curveTo(4.7,1.4,4.7,2.4).curveTo(4.7,3.3,4.2,4.2).curveTo(3.6,5,2.5,5.5).curveTo(1.5,5.9,0.1,6).curveTo(-2.1,5.9,-3.3,5.1).closePath();
	this.shape_5.setTransform(-24.7,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(-36.3,-18.2).lineTo(36.3,-18.2).curveTo(41.3,-18.2,41.3,-13.2).lineTo(41.3,13.2).curveTo(41.3,18.2,36.3,18.2).lineTo(-36.3,18.2).curveTo(-41.3,18.2,-41.3,13.2).lineTo(-41.3,-13.2).curveTo(-41.3,-18.2,-36.3,-18.2).closePath();

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,255,255,0.898)").beginStroke().moveTo(-36.3,18.2).curveTo(-41.2,18.2,-41.2,13.2).lineTo(-41.2,-13.2).curveTo(-41.2,-18.2,-36.3,-18.2).lineTo(36.3,-18.2).curveTo(41.2,-18.2,41.2,-13.2).lineTo(41.2,13.2).curveTo(41.2,18.2,36.3,18.2).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-19.2,84.5,38.4);


// stage content:
(lib.dai_inte_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"script de inicializ.":0});

	// timeline functions:
	this.frame_0 = function() {
		//Script de inicialização (Fundamental para funcionamento no Player);
		if(parent.Player){parent.Player.onFrameLoad();}
	}
	this.frame_31 = function() {
		//Legenda
		this.Legenda = "1"
		
		if(parent.Player){
			this.seguir_mc.visible = false;
			parent.Subtitle.setSubtitle(this.Legenda);
		}this.stop();
	}
	this.frame_48 = function() {
		//Legenda
		this.Legenda = "2"
		
		if(parent.Player){
			this.seguir_mc.visible = false;
			parent.Subtitle.setSubtitle(this.Legenda);
		}this.stop();
	}
	this.frame_67 = function() {
		//Fim da tela
		this.stop();
		if(parent.Player){
			parent.Player.enableNextPage();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(17).call(this.frame_48).wait(19).call(this.frame_67).wait(1));

	// seguir
	this.seguir_mc = new lib.CópiadeSímbolo8();
	this.seguir_mc.setTransform(870,563);
	this.seguir_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seguir_mc).wait(31).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(19));

	// Símbolo 16
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#663333").beginStroke().moveTo(2.8,8.4).lineTo(1.4,8.2).curveTo(0.7,8.1,-0,7.6).curveTo(-0.8,7.1,-1.3,6.1).curveTo(-1.8,5.1,-1.7,3.5).lineTo(-1.7,-3.1).lineTo(-3.5,-3.1).lineTo(-3.5,-4.6).lineTo(-1.7,-4.6).lineTo(-1.7,-8.4).lineTo(-0,-8.4).lineTo(-0,-4.6).lineTo(3.2,-4.6).lineTo(3.2,-3.1).lineTo(-0,-3.1).lineTo(-0,3.4).curveTo(0,4.8,0.5,5.6).curveTo(1.1,6.4,1.8,6.6).curveTo(2.4,6.8,3,6.8).lineTo(3.3,6.8).lineTo(3.5,6.8).lineTo(3.5,8.4).lineTo(3.3,8.4).lineTo(2.8,8.4).closePath();
	this.shape.setTransform(125.2,317.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#663333").beginStroke().moveTo(-2.6,6).curveTo(-4.2,5.1,-5.1,3.6).curveTo(-5.9,2.1,-6,-0).curveTo(-5.9,-2.1,-5.1,-3.6).curveTo(-4.2,-5.2,-2.8,-6).curveTo(-1.3,-6.9,0.5,-6.9).curveTo(2.3,-6.8,3.5,-6).curveTo(4.7,-5.2,5.3,-3.8).curveTo(6,-2.5,6,-0.8).lineTo(5.9,-0.3).lineTo(5.9,0.1).lineTo(-4.1,0.1).curveTo(-4.1,1.8,-3.4,2.9).curveTo(-2.7,4.1,-1.6,4.7).curveTo(-0.4,5.3,0.9,5.3).curveTo(2.1,5.2,3,4.8).curveTo(3.9,4.5,4.4,4.1).lineTo(4.9,3.7).lineTo(5.7,5).lineTo(5.4,5.4).lineTo(4.4,5.9).lineTo(2.9,6.6).curveTo(2,6.8,0.9,6.8).curveTo(-1.1,6.9,-2.6,6).closePath().moveTo(4.2,-1.4).curveTo(4.1,-2.7,3.6,-3.6).curveTo(3.1,-4.5,2.2,-5).curveTo(1.4,-5.3,0.4,-5.3).curveTo(-0.7,-5.4,-1.6,-4.9).curveTo(-2.6,-4.5,-3.2,-3.5).curveTo(-3.8,-2.7,-4.1,-1.4).lineTo(4.2,-1.4).lineTo(4.2,-1.4).closePath();
	this.shape_1.setTransform(113.6,319.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_2.setTransform(103.8,316.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_3.setTransform(97.4,316.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#663333").beginStroke().moveTo(-4.6,5.4).curveTo(-5.6,4.2,-5.6,1.6).lineTo(-5.6,-6.7).lineTo(-3.9,-6.7).lineTo(-3.9,1.2).curveTo(-3.9,2.2,-3.7,3.1).curveTo(-3.5,4,-2.9,4.5).curveTo(-2.2,5,-1,5).curveTo(0.5,5.1,1.6,4.2).curveTo(2.6,3.5,3.2,2.3).curveTo(3.8,1.1,3.9,-0.4).lineTo(3.9,-6.7).lineTo(5.6,-6.7).lineTo(5.6,6.4).lineTo(3.9,6.4).lineTo(3.9,4.4).lineTo(3.9,3.7).lineTo(4,3.4).lineTo(3.9,3.4).curveTo(3.6,4.1,3,4.9).curveTo(2.3,5.6,1.3,6.1).curveTo(0.2,6.7,-1.3,6.7).curveTo(-3.5,6.7,-4.6,5.4).closePath();
	this.shape_4.setTransform(85.9,319.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#663333").beginStroke().moveTo(-6,9.1).lineTo(-6,-9.1).lineTo(0.3,-9.1).curveTo(1.7,-9.1,2.8,-8.6).curveTo(3.9,-8,4.6,-7).curveTo(5.2,-6,5.2,-4.5).curveTo(5.2,-3.1,4.6,-2.1).curveTo(4,-1.1,2.9,-0.6).lineTo(2.9,-0.5).curveTo(4.3,-0.1,5.1,1.1).curveTo(5.9,2.4,6,4).curveTo(5.9,5.7,5.2,6.8).curveTo(4.5,8,3.3,8.5).curveTo(2,9.2,0.5,9.1).closePath().moveTo(-4.2,7.5).lineTo(0.5,7.5).curveTo(2.2,7.6,3.1,6.5).curveTo(4.1,5.6,4.1,4).curveTo(4.1,2.3,3.1,1.3).curveTo(2.1,0.4,0.5,0.3).lineTo(-4.2,0.3).closePath().moveTo(-4.2,-1.2).lineTo(0.3,-1.2).curveTo(1.7,-1.2,2.5,-2.1).curveTo(3.3,-2.9,3.4,-4.4).curveTo(3.3,-5.8,2.5,-6.7).curveTo(1.7,-7.5,0.2,-7.5).lineTo(-4.2,-7.5).closePath();
	this.shape_5.setTransform(70.6,316.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},31).wait(37));

	// Símbolo 16
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#663333").beginStroke().moveTo(2.8,8.4).lineTo(1.4,8.2).curveTo(0.7,8.1,-0,7.6).curveTo(-0.8,7.1,-1.3,6.2).curveTo(-1.8,5.1,-1.7,3.5).lineTo(-1.7,-3.1).lineTo(-3.5,-3.1).lineTo(-3.5,-4.6).lineTo(-1.7,-4.6).lineTo(-1.7,-8.4).lineTo(-0,-8.4).lineTo(-0,-4.6).lineTo(3.2,-4.6).lineTo(3.2,-3.1).lineTo(-0,-3.1).lineTo(-0,3.4).curveTo(0,4.8,0.5,5.6).curveTo(1.1,6.3,1.8,6.6).curveTo(2.4,6.8,3,6.8).lineTo(3.3,6.8).lineTo(3.5,6.8).lineTo(3.5,8.3).lineTo(3.3,8.4).lineTo(2.8,8.4).closePath();
	this.shape_6.setTransform(125.2,257.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#663333").beginStroke().moveTo(-2.6,6).curveTo(-4.2,5.1,-5.1,3.6).curveTo(-5.9,2.1,-6,-0).curveTo(-5.9,-2.1,-5.1,-3.7).curveTo(-4.2,-5.2,-2.8,-6).curveTo(-1.3,-6.8,0.5,-6.8).curveTo(2.3,-6.8,3.5,-6).curveTo(4.7,-5.2,5.3,-3.8).curveTo(6,-2.4,6,-0.8).lineTo(5.9,-0.3).lineTo(5.9,0.1).lineTo(-4.1,0.1).curveTo(-4.1,1.8,-3.4,3).curveTo(-2.7,4.1,-1.6,4.7).curveTo(-0.4,5.3,0.9,5.3).curveTo(2.1,5.2,3,4.9).curveTo(3.9,4.5,4.4,4.1).lineTo(4.9,3.7).lineTo(5.7,5).lineTo(5.4,5.3).lineTo(4.4,5.9).lineTo(2.9,6.6).curveTo(2,6.8,0.9,6.8).curveTo(-1.1,6.8,-2.6,6).closePath().moveTo(4.2,-1.4).curveTo(4.1,-2.7,3.6,-3.6).curveTo(3.1,-4.5,2.2,-5).curveTo(1.4,-5.3,0.4,-5.3).curveTo(-0.7,-5.4,-1.6,-4.9).curveTo(-2.6,-4.5,-3.2,-3.5).curveTo(-3.8,-2.7,-4.1,-1.4).lineTo(4.2,-1.4).lineTo(4.2,-1.4).closePath();
	this.shape_7.setTransform(113.6,259.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_8.setTransform(103.8,257.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_9.setTransform(97.4,257.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#663333").beginStroke().moveTo(-4.6,5.4).curveTo(-5.6,4.2,-5.6,1.6).lineTo(-5.6,-6.7).lineTo(-3.9,-6.7).lineTo(-3.9,1.2).curveTo(-3.9,2.2,-3.7,3.1).curveTo(-3.5,4,-2.9,4.5).curveTo(-2.2,5,-1,5.1).curveTo(0.5,5,1.6,4.3).curveTo(2.6,3.5,3.2,2.3).curveTo(3.8,1,3.9,-0.4).lineTo(3.9,-6.7).lineTo(5.6,-6.7).lineTo(5.6,6.4).lineTo(3.9,6.4).lineTo(3.9,4.4).lineTo(3.9,3.7).lineTo(4,3.4).lineTo(3.9,3.4).curveTo(3.6,4.1,3,4.9).curveTo(2.3,5.6,1.3,6.1).curveTo(0.2,6.7,-1.3,6.7).curveTo(-3.5,6.7,-4.6,5.4).closePath();
	this.shape_10.setTransform(85.9,259.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#663333").beginStroke().moveTo(-6,9.2).lineTo(-6,-9.2).lineTo(0.3,-9.2).curveTo(1.7,-9.1,2.8,-8.6).curveTo(3.9,-8,4.6,-7).curveTo(5.2,-6,5.2,-4.5).curveTo(5.2,-3.1,4.6,-2.1).curveTo(4,-1.1,2.9,-0.6).lineTo(2.9,-0.5).curveTo(4.3,-0.1,5.1,1.2).curveTo(5.9,2.4,6,4).curveTo(5.9,5.6,5.2,6.8).curveTo(4.5,8,3.3,8.5).curveTo(2,9.2,0.5,9.2).closePath().moveTo(-4.2,7.6).lineTo(0.5,7.6).curveTo(2.2,7.6,3.1,6.6).curveTo(4.1,5.6,4.1,4).curveTo(4.1,2.3,3.1,1.3).curveTo(2.1,0.4,0.5,0.3).lineTo(-4.2,0.3).closePath().moveTo(-4.2,-1.2).lineTo(0.3,-1.2).curveTo(1.7,-1.2,2.5,-2.1).curveTo(3.3,-3,3.4,-4.4).curveTo(3.3,-5.8,2.5,-6.7).curveTo(1.7,-7.5,0.2,-7.5).lineTo(-4.2,-7.5).closePath();
	this.shape_11.setTransform(70.6,257.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},31).wait(37));

	// Símbolo 16
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#663333").beginStroke().moveTo(2.8,8.4).lineTo(1.4,8.3).curveTo(0.7,8.1,-0,7.6).curveTo(-0.8,7.1,-1.3,6.2).curveTo(-1.8,5.1,-1.7,3.6).lineTo(-1.7,-3.2).lineTo(-3.5,-3.2).lineTo(-3.5,-4.6).lineTo(-1.7,-4.6).lineTo(-1.7,-8.4).lineTo(-0,-8.4).lineTo(-0,-4.6).lineTo(3.2,-4.6).lineTo(3.2,-3.2).lineTo(-0,-3.2).lineTo(-0,3.4).curveTo(0,4.9,0.5,5.6).curveTo(1.1,6.3,1.8,6.6).curveTo(2.4,6.9,3,6.8).lineTo(3.3,6.8).lineTo(3.5,6.7).lineTo(3.5,8.3).lineTo(3.3,8.4).lineTo(2.8,8.4).closePath();
	this.shape_12.setTransform(125.2,198.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#663333").beginStroke().moveTo(-2.6,6).curveTo(-4.2,5.2,-5.1,3.6).curveTo(-5.9,2,-6,0).curveTo(-5.9,-2.2,-5.1,-3.7).curveTo(-4.2,-5.2,-2.8,-6).curveTo(-1.3,-6.9,0.5,-6.8).curveTo(2.3,-6.8,3.5,-6).curveTo(4.7,-5.2,5.3,-3.8).curveTo(6,-2.4,6,-0.8).lineTo(5.9,-0.2).lineTo(5.9,0.1).lineTo(-4.1,0.1).curveTo(-4.1,1.8,-3.4,3).curveTo(-2.7,4.1,-1.6,4.7).curveTo(-0.4,5.3,0.9,5.3).curveTo(2.1,5.3,3,4.9).curveTo(3.9,4.5,4.4,4.1).lineTo(4.9,3.7).lineTo(5.7,5.1).lineTo(5.4,5.3).lineTo(4.4,6).lineTo(2.9,6.6).curveTo(2,6.8,0.9,6.9).curveTo(-1.1,6.9,-2.6,6).closePath().moveTo(4.2,-1.3).curveTo(4.1,-2.7,3.6,-3.6).curveTo(3.1,-4.5,2.2,-4.9).curveTo(1.4,-5.4,0.4,-5.4).curveTo(-0.7,-5.4,-1.6,-4.9).curveTo(-2.6,-4.4,-3.2,-3.6).curveTo(-3.8,-2.6,-4.1,-1.3).lineTo(4.2,-1.3).lineTo(4.2,-1.3).closePath();
	this.shape_13.setTransform(113.6,200.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_14.setTransform(103.8,197.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_15.setTransform(97.4,197.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#663333").beginStroke().moveTo(-4.6,5.4).curveTo(-5.6,4.2,-5.6,1.7).lineTo(-5.6,-6.7).lineTo(-3.9,-6.7).lineTo(-3.9,1.2).curveTo(-3.9,2.2,-3.7,3.1).curveTo(-3.5,4,-2.9,4.5).curveTo(-2.2,5.1,-1,5.1).curveTo(0.5,5,1.6,4.3).curveTo(2.6,3.5,3.2,2.2).curveTo(3.8,1.1,3.9,-0.4).lineTo(3.9,-6.7).lineTo(5.6,-6.7).lineTo(5.6,6.4).lineTo(3.9,6.4).lineTo(3.9,4.5).lineTo(3.9,3.7).lineTo(4,3.4).lineTo(3.9,3.4).curveTo(3.6,4.1,3,4.8).curveTo(2.3,5.6,1.3,6.2).curveTo(0.2,6.7,-1.3,6.7).curveTo(-3.5,6.7,-4.6,5.4).closePath();
	this.shape_16.setTransform(85.9,200.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#663333").beginStroke().moveTo(-6,9.2).lineTo(-6,-9.2).lineTo(0.3,-9.2).curveTo(1.7,-9.1,2.8,-8.5).curveTo(3.9,-8.1,4.6,-7).curveTo(5.2,-5.9,5.2,-4.5).curveTo(5.2,-3.1,4.6,-2.1).curveTo(4,-1.1,2.9,-0.5).lineTo(2.9,-0.5).curveTo(4.3,-0.1,5.1,1.2).curveTo(5.9,2.4,6,4.1).curveTo(5.9,5.7,5.2,6.8).curveTo(4.5,7.9,3.3,8.6).curveTo(2,9.1,0.5,9.2).closePath().moveTo(-4.2,7.6).lineTo(0.5,7.6).curveTo(2.2,7.5,3.1,6.6).curveTo(4.1,5.7,4.1,4).curveTo(4.1,2.3,3.1,1.4).curveTo(2.1,0.4,0.5,0.4).lineTo(-4.2,0.4).closePath().moveTo(-4.2,-1.2).lineTo(0.3,-1.2).curveTo(1.7,-1.2,2.5,-2.1).curveTo(3.3,-3,3.4,-4.4).curveTo(3.3,-5.8,2.5,-6.6).curveTo(1.7,-7.5,0.2,-7.5).lineTo(-4.2,-7.5).closePath();
	this.shape_17.setTransform(70.6,197.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},8).wait(60));

	// Símbolo 16
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#663333").beginStroke().moveTo(2.8,8.4).lineTo(1.4,8.3).curveTo(0.7,8.1,-0,7.6).curveTo(-0.8,7.1,-1.3,6.1).curveTo(-1.8,5.2,-1.7,3.6).lineTo(-1.7,-3.2).lineTo(-3.5,-3.2).lineTo(-3.5,-4.6).lineTo(-1.7,-4.6).lineTo(-1.7,-8.4).lineTo(-0,-8.4).lineTo(-0,-4.6).lineTo(3.2,-4.6).lineTo(3.2,-3.2).lineTo(-0,-3.2).lineTo(-0,3.3).curveTo(0,4.8,0.5,5.6).curveTo(1.1,6.4,1.8,6.6).curveTo(2.4,6.9,3,6.8).lineTo(3.3,6.8).lineTo(3.5,6.7).lineTo(3.5,8.4).lineTo(3.3,8.4).lineTo(2.8,8.4).closePath();
	this.shape_18.setTransform(125.2,138.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#663333").beginStroke().moveTo(-2.6,6).curveTo(-4.2,5.2,-5.1,3.6).curveTo(-5.9,2,-6,0).curveTo(-5.9,-2.2,-5.1,-3.6).curveTo(-4.2,-5.2,-2.8,-6).curveTo(-1.3,-6.9,0.5,-6.9).curveTo(2.3,-6.8,3.5,-6).curveTo(4.7,-5.2,5.3,-3.8).curveTo(6,-2.5,6,-0.8).lineTo(5.9,-0.2).lineTo(5.9,0.1).lineTo(-4.1,0.1).curveTo(-4.1,1.8,-3.4,2.9).curveTo(-2.7,4.1,-1.6,4.7).curveTo(-0.4,5.3,0.9,5.3).curveTo(2.1,5.3,3,4.8).curveTo(3.9,4.5,4.4,4.1).lineTo(4.9,3.7).lineTo(5.7,5.1).lineTo(5.4,5.4).lineTo(4.4,6).lineTo(2.9,6.6).curveTo(2,6.9,0.9,6.9).curveTo(-1.1,6.9,-2.6,6).closePath().moveTo(4.2,-1.3).curveTo(4.1,-2.7,3.6,-3.6).curveTo(3.1,-4.5,2.2,-4.9).curveTo(1.4,-5.4,0.4,-5.4).curveTo(-0.7,-5.3,-1.6,-4.9).curveTo(-2.6,-4.5,-3.2,-3.6).curveTo(-3.8,-2.6,-4.1,-1.3).lineTo(4.2,-1.3).lineTo(4.2,-1.3).closePath();
	this.shape_19.setTransform(113.6,140.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_20.setTransform(103.8,137.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#663333").beginStroke().moveTo(-0.1,9).curveTo(-0.8,8.8,-1.3,8.1).curveTo(-1.8,7.4,-1.8,6).lineTo(-1.8,-9.2).lineTo(-0.1,-9.2).lineTo(-0.1,5.6).curveTo(-0,6.4,0.2,6.9).curveTo(0.4,7.3,0.7,7.4).lineTo(1.4,7.6).lineTo(1.7,7.6).lineTo(1.8,7.5).lineTo(1.8,9.1).lineTo(1.6,9.2).lineTo(1.2,9.2).lineTo(1,9.2).curveTo(0.5,9.2,-0.1,9).closePath();
	this.shape_21.setTransform(97.4,137.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#663333").beginStroke().moveTo(-4.6,5.5).curveTo(-5.6,4.2,-5.6,1.7).lineTo(-5.6,-6.7).lineTo(-3.9,-6.7).lineTo(-3.9,1.2).curveTo(-3.9,2.2,-3.7,3.1).curveTo(-3.5,4,-2.9,4.5).curveTo(-2.2,5.1,-1,5).curveTo(0.5,5,1.6,4.2).curveTo(2.6,3.5,3.2,2.2).curveTo(3.8,1,3.9,-0.4).lineTo(3.9,-6.7).lineTo(5.6,-6.7).lineTo(5.6,6.4).lineTo(3.9,6.4).lineTo(3.9,4.5).lineTo(3.9,3.7).lineTo(4,3.4).lineTo(3.9,3.4).curveTo(3.6,4.1,3,4.8).curveTo(2.3,5.6,1.3,6.2).curveTo(0.2,6.7,-1.3,6.7).curveTo(-3.5,6.7,-4.6,5.5).closePath();
	this.shape_22.setTransform(85.9,140.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#663333").beginStroke().moveTo(-6,9.1).lineTo(-6,-9.2).lineTo(0.3,-9.2).curveTo(1.7,-9.1,2.8,-8.5).curveTo(3.9,-8.1,4.6,-7).curveTo(5.2,-5.9,5.2,-4.5).curveTo(5.2,-3.1,4.6,-2.1).curveTo(4,-1.1,2.9,-0.5).lineTo(2.9,-0.5).curveTo(4.3,-0.1,5.1,1.1).curveTo(5.9,2.3,6,4.1).curveTo(5.9,5.6,5.2,6.8).curveTo(4.5,7.9,3.3,8.6).curveTo(2,9.1,0.5,9.1).closePath().moveTo(-4.2,7.6).lineTo(0.5,7.6).curveTo(2.2,7.6,3.1,6.5).curveTo(4.1,5.7,4.1,4).curveTo(4.1,2.3,3.1,1.4).curveTo(2.1,0.4,0.5,0.4).lineTo(-4.2,0.4).closePath().moveTo(-4.2,-1.2).lineTo(0.3,-1.2).curveTo(1.7,-1.2,2.5,-2.1).curveTo(3.3,-2.9,3.4,-4.4).curveTo(3.3,-5.8,2.5,-6.6).curveTo(1.7,-7.5,0.2,-7.5).lineTo(-4.2,-7.5).closePath();
	this.shape_23.setTransform(70.6,137.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},4).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;