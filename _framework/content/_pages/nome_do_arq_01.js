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



(lib.teste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ADNAAQAACLg8BiQg8BihVAAQhUAAg8hiQg8hiAAiLQAAiKA8hiQA8hiBUAAQBVAAA8BiQA8BiAACKg");
	this.shape.setTransform(20.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiPDtQg9hiAAiLQAAiKA9hhQA7hiBUgBQBUABA9BiQA7BhABCKQgBCLg7BiQg9BhhUAAQhUAAg7hhg");
	this.shape_1.setTransform(20.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43,69);


(lib.Olhos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C31821").s().p("AANAJQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgFgDgCQgDgEgGAAQgDgBgEAEQgEABAAAFQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAAAQABgFAFgEQAFgFAEABQAHAAAFAFQAEADAAAHIgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(63.3,8.2,5.18,5.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C31821").s().p("AAMAIIAAgBQABgFgDgCQgEgEgFgBQgDAAgEADQgEACgBAEIAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgBQABgEAFgEQAFgEAFABQAGABAFAFQAEADgBAHIgBAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1.setTransform(8.5,5.2,5.18,5.18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,13.2);


(lib.Boca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_45 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(44).call(this.frame_45).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFABIgCgDIAPgCQABAIgIABIgBAAQgDAAgCgEg");
	this.shape.setTransform(61.6,15.7,5.18,5.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAFQgEAAgCgFIgBgFIAPACQgBAJgHAAIAAgBg");
	this.shape_1.setTransform(39.8,16.1,5.18,5.18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAFQgFgBgBgEIABgEIAMAEQgCAFgFAAIAAAAg");
	this.shape_2.setTransform(19.1,11.8,5.18,5.18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C31821").s().p("AgiAjIgKgBQgpgDgqgGQhlgPg5gTQgagHgVgDIgCAAIgBAAIAAgTIADABIA0AKQA2AVBlALQDVAcChgiQAzgNAkAHIAAARQgOgBgSABQgYABgdAHQhbAVhoAAQgtAAgtgEg");
	this.shape_3.setTransform(45,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C31821").s().p("AgEAlIgBAAQghgGgUgMQgcgQABgYQABgJAFgDQAGgFALACIAKACQAKAEAUACQAnAGAfgHQALgDAHACQAPACAEAMQACAIgDAIQgDAJgHAGQgNALgUAHQgRAFgQAAIgMgBgAhRgVQgCAWAbAPQAUANAfAEIABAAQAWADAWgHQAUgGALgKQAMgLgBgMQgBgOgQgDQgGAAgKACQghAHgngGQgTgDgLgEIgKgCIgEAAQgNAAgBAMg");
	this.shape_4.setTransform(44.7,19.8,5.18,5.18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAAQACgDAEAAQAGgBACAIIgPABIABgFg");
	this.shape_5.setTransform(51.4,34.9,5.18,5.18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGACIADgDQADgEACABQAHABgDAJg");
	this.shape_6.setTransform(35.7,33.8,5.18,5.18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FB978D").s().p("AAAARQgTgBgTgHIgPgGIAKgKQAPgMAbACQAZACASAMQAIAEADAGQgSALgaAAIgJgBg");
	this.shape_7.setTransform(45.9,29.2,5.18,5.18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9D0102").s().p("AgEAhQgfgEgVgMQgbgQACgWQABgRAaAHQATAGAaADQAfADAagGQAbgGAGARQAFAOgPANQgMAKgTAGQgQAFgQAAIgMgBg");
	this.shape_8.setTransform(44.9,19.7,5.18,5.18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C31821").s().p("AhxAPQABgLAMgBIBRgDQgkgNgQghIAAgDQBLgFBRgRQAIABAEAIIABACQgwAwhAgOQAUAJANARQgSAggiABQBLATBIAEQgsAQgpAAQhLAAhDg5g");
	this.shape_9.setTransform(36.8,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{y:11.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:16.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:15.7,scaleX:5.18,scaleY:5.18,x:61.6}}]}).to({state:[{t:this.shape_8,p:{scaleX:5.18,scaleY:5.18}},{t:this.shape_2,p:{y:5.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:10.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:9.7,scaleX:5.18,scaleY:5.18,x:61.6}},{t:this.shape_7,p:{scaleX:5.18,scaleY:5.18,x:45.9,y:29.2}},{t:this.shape_6,p:{scaleX:5.18,scaleY:5.18,x:35.7,y:33.8}},{t:this.shape_5,p:{scaleX:5.18,scaleY:5.18,x:51.4,y:34.9}},{t:this.shape_4,p:{scaleX:5.18,scaleY:5.18,y:19.8}}]},5).to({state:[{t:this.shape_3},{t:this.shape_2,p:{y:11.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:16.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:15.7,scaleX:5.18,scaleY:5.18,x:61.6}}]},5).to({state:[{t:this.shape_8,p:{scaleX:4.105,scaleY:4.105}},{t:this.shape_2,p:{y:8.7,scaleX:4.105,scaleY:4.105,x:24}},{t:this.shape_1,p:{y:12.1,scaleX:4.105,scaleY:4.105,x:40.4}},{t:this.shape,p:{y:11.8,scaleX:4.105,scaleY:4.105,x:57.7}},{t:this.shape_7,p:{scaleX:4.105,scaleY:4.105,x:45.3,y:27.3}},{t:this.shape_6,p:{scaleX:4.105,scaleY:4.105,x:37.2,y:30.9}},{t:this.shape_5,p:{scaleX:4.105,scaleY:4.105,x:49.7,y:31.8}},{t:this.shape_4,p:{scaleX:4.105,scaleY:4.105,y:19.7}}]},4).to({state:[{t:this.shape_3},{t:this.shape_2,p:{y:11.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:16.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:15.7,scaleX:5.18,scaleY:5.18,x:61.6}}]},4).to({state:[{t:this.shape_8,p:{scaleX:4.105,scaleY:4.105}},{t:this.shape_2,p:{y:8.7,scaleX:4.105,scaleY:4.105,x:24}},{t:this.shape_1,p:{y:12.1,scaleX:4.105,scaleY:4.105,x:40.4}},{t:this.shape,p:{y:11.8,scaleX:4.105,scaleY:4.105,x:57.7}},{t:this.shape_7,p:{scaleX:4.105,scaleY:4.105,x:45.3,y:27.3}},{t:this.shape_6,p:{scaleX:4.105,scaleY:4.105,x:37.2,y:30.9}},{t:this.shape_5,p:{scaleX:4.105,scaleY:4.105,x:49.7,y:31.8}},{t:this.shape_4,p:{scaleX:4.105,scaleY:4.105,y:19.7}}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_8,p:{scaleX:5.18,scaleY:5.18}},{t:this.shape_2,p:{y:5.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:10.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:9.7,scaleX:5.18,scaleY:5.18,x:61.6}},{t:this.shape_7,p:{scaleX:5.18,scaleY:5.18,x:45.9,y:29.2}},{t:this.shape_6,p:{scaleX:5.18,scaleY:5.18,x:35.7,y:33.8}},{t:this.shape_5,p:{scaleX:5.18,scaleY:5.18,x:51.4,y:34.9}},{t:this.shape_4,p:{scaleX:5.18,scaleY:5.18,y:19.8}}]},4).to({state:[{t:this.shape_3},{t:this.shape_2,p:{y:11.8,scaleX:5.18,scaleY:5.18,x:19.1}},{t:this.shape_1,p:{y:16.1,scaleX:5.18,scaleY:5.18,x:39.8}},{t:this.shape,p:{y:15.7,scaleX:5.18,scaleY:5.18,x:61.6}}]},4).to({state:[{t:this.shape_8,p:{scaleX:4.105,scaleY:4.105}},{t:this.shape_2,p:{y:8.7,scaleX:4.105,scaleY:4.105,x:24}},{t:this.shape_1,p:{y:12.1,scaleX:4.105,scaleY:4.105,x:40.4}},{t:this.shape,p:{y:11.8,scaleX:4.105,scaleY:4.105,x:57.7}},{t:this.shape_7,p:{scaleX:4.105,scaleY:4.105,x:45.3,y:27.3}},{t:this.shape_6,p:{scaleX:4.105,scaleY:4.105,x:37.2,y:30.9}},{t:this.shape_5,p:{scaleX:4.105,scaleY:4.105,x:49.7,y:31.8}},{t:this.shape_4,p:{scaleX:4.105,scaleY:4.105,y:19.7}}]},4).to({state:[{t:this.shape_9}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,6.2,67.3,13.1);


(lib._compNumberBlink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(202,43,0,0.098)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape.setTransform(16.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,43,0,0.188)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_1.setTransform(16.6,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(202,43,0,0.275)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_2.setTransform(16.6,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(202,43,0,0.365)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_3.setTransform(16.6,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(202,43,0,0.455)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_4.setTransform(16.6,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(202,43,0,0.541)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_5.setTransform(16.6,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(202,43,0,0.631)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_6.setTransform(16.6,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(202,43,0,0.722)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_7.setTransform(16.6,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(202,43,0,0.808)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_8.setTransform(16.6,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(202,43,0,0.898)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_9.setTransform(16.6,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(202,43,0,0.82)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_10.setTransform(16.6,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(202,43,0,0.737)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_11.setTransform(16.6,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(202,43,0,0.659)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_12.setTransform(16.6,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(202,43,0,0.576)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_13.setTransform(16.6,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(202,43,0,0.498)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_14.setTransform(16.6,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(202,43,0,0.42)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_15.setTransform(16.6,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(202,43,0,0.337)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_16.setTransform(16.6,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(202,43,0,0.259)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_17.setTransform(16.6,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(202,43,0,0.176)").s().p("Ah0B1QgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEQAABFgxAwQgxAxhEAAQhDAAgxgxg");
	this.shape_18.setTransform(16.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.3,33.2);


(lib._compSeguirTimeline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.visible = false;
		
		if(!_this.hasEventListener("click")){
			_this.addEventListener("click",	function(){ exportRoot.play(); });
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape.setTransform(27.1,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_1.setTransform(20.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_2.setTransform(11.4,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AghBHQgMgJAAgSIATACQABAJAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgUQgMAPgSABQgXgBgNgRQgNgQAAgWQAAgRAGgOQAGgNALgHQAMgIAOAAQATAAANAQIAAgOIASAAIAABhQAAAbgFALQgGALgMAGQgLAHgQAAQgUAAgNgKgAgUg2QgJALAAAUQAAAXAJAIQAJAKALAAQAOABAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_3.setTransform(-1.1,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgFQAIgGAFgMIAUACQgFARgNAKQgMAKgVAAQgXAAgOgPgAgUghQgJAIgBAPIA+AAQgCgOgFgHQgKgLgPAAQgLgBgJAKg");
	this.shape_4.setTransform(-13,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKADQAKAFAFAGQAFAHABALIgSADQgCgJgGgGQgGgEgKAAQgNgBgFAFQgGAEAAAGQAAAEACADQADAEAFACIAPAEQAUAGAIADQAJACAEAGQAFAHAAAKQAAAJgGAJQgGAIgKAGQgLAEgNAAQgUAAgMgJg");
	this.shape_5.setTransform(-24.7,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("Am3jnINvAAQAyAAAAAyIAAFrQAAAygyAAItvAAQgyAAAAgyIAAlrQAAgyAyAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.898)").s().p("Am3DoQgyAAABgzIAAlpQgBgzAyAAINvAAQAyAAgBAzIAAFpQABAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-24.2,100,48.4);


(lib._compSeguirSemFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Script de botão para seguir sem flag
		//no Player, o botão seguir é apresentado pro usuario
		//mesmo com locução e navegação fechada
		var _this = this;
		exportRoot.stop();
		
		if(parent.Player){
			_this.visible = false;
			parent.Player.doSeguir('sem flag');
		}else{
			if(!_this.hasEventListener("click")){
				_this.addEventListener("click",	function(){ exportRoot.play(); });
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AghBHQgMgJAAgSIATACQABAJAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgUQgMAPgSABQgXgBgNgRQgNgQAAgWQAAgRAGgOQAGgNALgHQAMgIAOAAQATAAANAQIAAgOIASAAIAABhQAAAbgFALQgGALgMAGQgLAHgQAAQgUAAgNgKgAgUg2QgJALAAAUQAAAXAJAIQAJAKALAAQAOABAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape.setTransform(68,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAIgCIARgDQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgGAGgEALIgSgCQACgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQABAHAEAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgCAEAAAFQAAAIAFAFQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgNIAAgGQgKADgTADg");
	this.shape_1.setTransform(56.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_2.setTransform(47.5,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgPBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgLACgGQADgHAHgFQAFgEAMgBQAJAAAKACIgDARIgMgBQgIAAgEAEQgEADABALIAAAKIAVAAIAAAPIgVAAIAABig");
	this.shape_3.setTransform(42.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_4.setTransform(23.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgFQAHgGAFgMIATACQgEARgNAKQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_5.setTransform(8.4,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKADQAKAFAFAGQAFAHABALIgSADQgCgJgGgGQgGgEgKAAQgNgBgFAFQgGAEAAAGQAAAEACADQADAEAFACIAPAEQAUAGAIADQAJACAEAGQAFAHAAAKQAAAJgGAJQgGAIgKAGQgLAEgNAAQgUAAgMgJg");
	this.shape_6.setTransform(-3.2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_7.setTransform(-17.5,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_8.setTransform(-24.6,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_9.setTransform(-33.2,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AghBHQgMgJAAgSIATACQABAJAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgUQgMAPgSABQgXgBgNgRQgNgQAAgWQAAgRAGgOQAGgNALgHQAMgIAOAAQATAAANAQIAAgOIASAAIAABhQAAAbgFALQgGALgMAGQgLAHgQAAQgUAAgNgKgAgUg2QgJALAAAUQAAAXAJAIQAJAKALAAQAOABAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_10.setTransform(-45.8,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgFQAIgGAEgMIAVACQgFARgNAKQgMAKgVAAQgXAAgOgPgAgUghQgJAIgBAPIA+AAQgCgOgFgHQgKgLgPAAQgLgBgJAKg");
	this.shape_11.setTransform(-57.7,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKADQAKAFAFAGQAFAHABALIgSADQgCgJgGgGQgGgEgKAAQgNgBgFAFQgGAEAAAGQAAAEACADQADAEAFACIAPAEQAUAGAIADQAJACAEAGQAFAHAAAKQAAAJgGAJQgGAIgKAGQgLAEgNAAQgUAAgMgJg");
	this.shape_12.setTransform(-69.3,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AuejnIc9AAQAyAAAAAyIAAFrQAAAygyAAI89AAQgyAAAAgyIAAlrQAAgyAyAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.898)").s().p("AueDoQgyAAAAgzIAAlpQAAgzAyAAIc9AAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-24.2,197.5,48.4);


(lib._compLegenda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.stop();
		var _this = this;
		
		//Script de botão para chamar legenda
		//o ID da legenda deve ser setado na timeline
		if(parent.Player){
			_this.visible = false;
			parent.Subtitle.setSubtitle(_this.ID, _this.showIt);
		}else{
			if(!_this.hasEventListener("click")){
				_this.addEventListener("click",	function(){ exportRoot.play(); });
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AguAeIBJgeIhJgeIAAgRIBdAoIAAAPIhdAog");
	this.shape.setTransform(94.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguAeIBJgeIhJgeIAAgRIBdAoIAAAPIhdAog");
	this.shape_1.setTransform(83,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_2.setTransform(68.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAYA0IAAg9QAAgKgCgGQgCgFgFgDQgFgDgHAAQgKAAgIAHQgIAHAAAUIAAA2IgSAAIAAhlIAQAAIAAAOQAMgQATgBQAKABAIADQAHADAEAGQAEAFACAHIABASIAAA9g");
	this.shape_3.setTransform(60.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHBHIAAhmIAPAAIAABmgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_4.setTransform(52.7,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_5.setTransform(44.9,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgsBIIAAiNIAQAAIAAAOQAHgIAHgEQAGgEAJAAQANAAAKAHQAKAGAGANQAEAMAAAPQABAQgGALQgFANgLAGQgMAHgLAAQgHAAgHgEQgHgDgFgGIAAAygAgTgvQgJAKAAAUQAAATAJAJQAIAKALAAQAKAAAIgKQAJgKAAgTQAAgUgJgKQgHgKgLAAQgKAAgJALg");
	this.shape_6.setTransform(34.1,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAVBHIggg1IgNAMIAAApIgRAAIAAiNIARAAIAABQIAogpIAWAAIgmAlIAqBBg");
	this.shape_7.setTransform(23.9,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgfAoQgMgOAAgaQgBgPAGgNQAFgMAMgGQALgHAMAAQARAAAKAJQALAIADAQIgRADQgCgLgGgFQgHgFgIAAQgMAAgJAJQgHAKAAATQAAAUAHAKQAJAJALAAQAKAAAHgGQAHgHACgNIARADQgDARgMALQgLAKgRAAQgUAAgNgOg");
	this.shape_8.setTransform(13.6,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_9.setTransform(2.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAYBHIAAhCQAAgLgFgGQgGgGgLAAQgFAAgHAEQgHAEgDAHQgDAFAAAMIAAA5IgSAAIAAiNIASAAIAAAzQAMgOARAAQAMAAAIAEQAJAFADAIQAEAIAAANIAABCg");
	this.shape_10.setTransform(-8.4,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgfAoQgNgOABgaQgBgPAGgNQAFgMAMgGQALgHALAAQARAAALAJQALAIADAQIgRADQgDgLgFgFQgHgFgJAAQgLAAgIAJQgJAKABATQgBAUAJAKQAHAJALAAQAKAAAIgGQAGgHADgNIARADQgDARgMALQgMAKgRAAQgTAAgNgOg");
	this.shape_11.setTransform(-18.6,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgaBKIAniTIAOAAIgnCTg");
	this.shape_12.setTransform(-26.7,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_13.setTransform(-35.1,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgWBBQgKgHgGgMQgGgMAAgQQABgQAFgKQAEgNALgHQALgGAMAAQAHAAAIAEQAHAEAFAGIAAgzIARAAIAACNIgQAAIAAgNQgKAPgSAAQgLAAgLgHgAgSgKQgHAJgBATQAAAUAJAKQAIAKAJAAQAMAAAJgKQAHgJABgUQAAgTgJgKQgIgKgMAAQgKAAgIAKg");
	this.shape_14.setTransform(-46.5,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAYA0IAAg9QAAgKgCgGQgCgFgFgDQgFgDgHAAQgKAAgIAHQgIAHAAAUIAAA2IgSAAIAAhlIAQAAIAAAOQAMgQATgBQAKABAIADQAHADAEAGQAEAFACAHIABASIAAA9g");
	this.shape_15.setTransform(-57.3,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_16.setTransform(-68.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgeBCQgLgJAAgRIARACQABAJAFADQAHAFALAAQAKAAAHgFQAHgEACgJQABgGAAgRQgLAOgQgBQgVAAgMgPQgLgQAAgTQAAgPAFgNQAFgMALgHQAKgHANAAQARABAMAPIAAgNIAQAAIAABXQAAAYgFALQgFAKgKAFQgLAGgOABQgSgBgMgHgAgSgwQgIAJAAATQAAAUAIAHQAIAKAKAAQAMAAAIgKQAJgHAAgUQAAgSgJgKQgIgKgMAAQgKAAgIAKg");
	this.shape_17.setTransform(-79.8,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_18.setTransform(-90.6,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_19.setTransform(-98.4,-1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AwljnMAhLAAAQAyAAAAAyIAAFrQAAAygyAAMghLAAAQgyAAAAgyIAAlrQAAgyAyAAg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.2,-24.2,224.5,48.4);


(lib._compInicioDaTela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.visible = false;
		stage.enableMouseOver();
		
		//Script para inicio da tela, indica pro framework 
		//que a tela está totalmente carregada
		//evitando que o stage seja apresentado sem os componentes
		
		if(parent.Player) parent.Player.onFrameLoad();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQABAHAEAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape.setTransform(43.3,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_1.setTransform(34.7,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgFQAIgGAFgMIAUACQgFARgNAKQgMAKgVAAQgXAAgOgPgAgUghQgJAIgBAPIA+AAQgCgOgFgHQgKgLgPAAQgLgBgJAKg");
	this.shape_2.setTransform(26.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_3.setTransform(17.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_4.setTransform(5.1,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAOAAAKADQAIADAFAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgIADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape_5.setTransform(-5.7,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_6.setTransform(-14.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_7.setTransform(-21.8,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_8.setTransform(-30.1,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_9.setTransform(-38.7,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_10.setTransform(-47.3,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AsXjnIYvAAQAyAAAAAyIAAFrQAAAygyAAI4vAAQgyAAAAgyIAAlrQAAgyAyAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.898)").s().p("AsXDoQgyAAAAgzIAAlpQAAgzAyAAIYvAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-24.2,170.5,48.4);


(lib._compFimDaTela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		exportRoot.stop();
		_this.visible = false;
		
		//Script para finalizar tela liberando o botão 'avançar tela'
		if(parent.Player)parent.Player.enableNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAHgCIASgDQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAEQgGAGgEALIgTgCQADgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKADQAIADAFAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgIADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgCAEQgEAEAAAFQABAIAFAFQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgNIAAgGQgLADgTADg");
	this.shape.setTransform(44.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_1.setTransform(35.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgFQAHgGAFgMIATACQgEARgNAKQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_2.setTransform(27.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_3.setTransform(18.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAOAAAKADQAIADAFAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgIADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape_4.setTransform(2.9,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgYBIQgMgHgFgOQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgIAOABQAIAAAJADQAIAFAEAHIAAg5IAUAAIAACcIgSAAIAAgOQgLAQgUABQgNAAgLgIgAgUgLQgIALAAAUQAAAWAJALQAKAKAKAAQANABAIgKQAKgLgBgWQABgVgKgKQgIgMgOAAQgLAAgJALg");
	this.shape_5.setTransform(-9.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_6.setTransform(-30.7,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_7.setTransform(-42.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgPBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgLACgGQADgHAHgFQAFgEANgBQAIAAAKACIgDARIgMgBQgJAAgDAEQgDADgBALIAAAKIAXAAIAAAPIgXAAIAABig");
	this.shape_8.setTransform(-47.3,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AqQjnIUhAAQAyAAAAAyIAAFrQAAAygyAAI0hAAQgyAAAAgyIAAlrQAAgyAyAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.898)").s().p("AqQDoQgyAAAAgzIAAlpQAAgzAyAAIUhAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-24.2,143.5,48.4);


(lib._compClicaMudaframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		_this.stop();
		
		//Vai do frame 1 para o 2 e vice e versa ao click
		
		if(!_this.hasEventListener("click")){
			_this.addEventListener("click",	
				function(){ 
					_this.gotoAndStop(_this.currentFrame == 1 ? 2 : 1);
				}
			);
			_this.cursor = "pointer";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAWAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgEARgNAKQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape.setTransform(95.9,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_1.setTransform(80.7,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape_2.setTransform(65.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_3.setTransform(56.5,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgPBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgLACgGQADgHAHgFQAFgEAMgBQAJAAAKACIgDARIgMgBQgIAAgEAEQgEADABALIAAAKIAVAAIAAAPIgVAAIAABig");
	this.shape_4.setTransform(49.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AglAsQgPgQAAgcQAAgeASgQQAOgMAUAAQAXAAAPAQQAPAPAAAbQAAAUgHAMQgGANgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_5.setTransform(33.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAIgCIARgDQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgGAGgEALIgSgCQACgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQABAHAEAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgCAEAAAFQAAAIAFAFQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgNIAAgGQgKADgTADg");
	this.shape_6.setTransform(15.2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgYBIQgMgHgFgOQgHgOAAgRQAAgRAFgMQAHgOALgHQALgIAOABQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgOQgLAQgUABQgMAAgMgIgAgUgLQgIALAAAUQAAAWAJALQAJAKALAAQAMABAKgKQAJgLAAgWQAAgVgJgKQgKgMgNAAQgLAAgJALg");
	this.shape_7.setTransform(2.6,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_8.setTransform(-9.4,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_9.setTransform(-24.6,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgFQAHgGAFgMIATACQgEARgNAKQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_10.setTransform(-46,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgKAEQgHADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgCAEAAAFQgBAIAHAFQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgNIAAgGQgKADgTADg");
	this.shape_11.setTransform(-64.4,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_12.setTransform(-75.6,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_13.setTransform(-83.9,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_14.setTransform(-88.9,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_15.setTransform(-96.4,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,204,255,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgzBPQAAgIADgGQAEgLAIgKQAJgKARgNQAXgVAJgLQAJgNAAgLQAAgLgIgIQgIgHgNgBQgMAAgJAJQgIAIAAAPIgUgCQACgXANgLQAOgMAUAAQAXAAANANQANAMAAATQAAAJgEAJQgDAKgJAIQgJAKgVASQgQAOgFAGQgFAEgDAGIBMAAIAAATg");
	this.shape_17.setTransform(-96.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_17}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-23.2,222.5,46.4);


(lib._compClicaEAnima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		_this.stop();
		
		//Vai do frame 1 para o 2 e vice e versa ao click
		
		if(!_this.hasEventListener("click")){
			_this.addEventListener("click",	
				function(){ 
					(_this.currentFrame == 1) ? _this.play() : _this.gotoAndStop(1);
				}
			)
			_this.cursor = "pointer";
		}
	}
	this.frame_24 = function() {
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgZBnQAeg0ABgzQAAgTgFgUQgCgQgHgPQgDgJgOgXIAOAAQATAbAJAbQAJAYAAAYQAAAcgMAbQgLAbgOAVg");
	this.shape.setTransform(91.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_1.setTransform(82,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAHgCIASgDQAVgDAMgEIAAgFQgBgMgFgEQgHgHgOAAQgMAAgHAEQgHAGgDALIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKADQAJADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgJADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgCAEQgDAEgBAFQABAIAFAFQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHABgNIAAgGQgLADgTADg");
	this.shape_2.setTransform(70.2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_3.setTransform(61.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgwBPIAAibIASAAIAAAOQAGgIAHgFQAJgDAIAAQAQgBAKAIQAMAHAFAOQAGAOAAAQQAAASgGAMQgHAOgMAHQgMAIgMAAQgIAAgIgFQgIgEgFgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgLQgJgKgMgBQgLAAgKAMg");
	this.shape_4.setTransform(53.4,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAMBnQgOgVgLgbQgLgbAAgcQAAgYAHgYQAKgbATgbIANAAIgRAgQgHAPgBAQQgFAUAAATQAAAzAeA0g");
	this.shape_5.setTransform(43.6,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAHgCIASgDQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAEQgGAGgEALIgTgCQADgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKADQAIADAFAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgIADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgCAEQgEAEAAAFQABAIAFAFQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgNIAAgGQgLADgTADg");
	this.shape_6.setTransform(27.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_7.setTransform(12.1,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_8.setTransform(0.5,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_9.setTransform(-8.1,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQAEgHAGgEQAGgCAIgCIARgDQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgGAGgEALIgSgCQACgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQABAHAEAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgCAEAAAFQAAAIAFAFQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgNIAAgGQgKADgTADg");
	this.shape_10.setTransform(-20.4,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAWAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgEARgNAKQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgIgLgPAAQgMgBgJAKg");
	this.shape_11.setTransform(-38.7,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAGgIALgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQABAHAEAHIgUAAQgDgGgBgJQgLAKgKAEQgIADgLAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape_12.setTransform(-57.1,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_13.setTransform(-68.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_14.setTransform(-76.6,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_15.setTransform(-81.6,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_16.setTransform(-89.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,102,0,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(248,107,12,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(241,111,23,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(234,116,35,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(227,121,46,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(220,125,58,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(213,130,70,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(206,134,81,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(199,139,93,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(192,144,104,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(185,148,116,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(179,153,128,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(172,158,139,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(165,162,151,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(158,167,162,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(151,172,174,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(144,176,185,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(137,181,197,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(130,185,209,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(123,190,220,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(116,195,232,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(109,199,243,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(102,204,255,0.898)").s().p("AwlDoQgyAAAAgzIAAlpQAAgzAyAAMAhLAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-23.2,222.5,46.4);


(lib._compClicaEAbreURL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		_this.stop();
		
		//Abre URL ou arquivo
		var URLToOpen = "http://www.google.com"; //exemplo de arquivo: "../files/documento.pdf";
		
		if(!_this.hasEventListener("click")){
			_this.addEventListener("click",	
				function(){ this.open(URLToOpen) }
			);
			_this.cursor = "pointer";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AglAsQgPgQAAgcQAAgeASgQQAOgMAUAAQAXAAAPAQQAPAPAAAbQAAAUgHAMQgGANgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape.setTransform(115.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgIA5IgrhxIAUAAIAZBDIAGAWIAGgVIAahEIAUAAIgsBxg");
	this.shape_1.setTransform(103.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_2.setTransform(95.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_3.setTransform(87.3,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAdBPIAAg3QgEAGgIAEQgIAFgJAAQgTgBgOgQQgPgQAAgaQAAgSAGgNQAGgNALgIQAMgGANAAQATAAANARIAAgPIARAAIAACbgAgTg1QgJALAAAWQAAAVAKALQAIALALgBQANABAJgKQAIgLABgUQgBgWgIgMQgKgMgNAAQgKABgJAKg");
	this.shape_4.setTransform(74.7,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_5.setTransform(66.2,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAyBOIgTgvIhAAAIgRAvIgWAAIA8ibIAVAAIBACbgAgJgfIgSAtIA0AAIgRgqQgHgUgCgNQgDAPgFAPg");
	this.shape_6.setTransform(54.3,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgdBRIAsihIAPAAIgrChg");
	this.shape_7.setTransform(44,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgwBOIAAibIAVAAIAACJIBMAAIAAASg");
	this.shape_8.setTransform(35.2,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AArBOIgVghIgPgVQgGgIgDgDQgFgDgEgBIgMgBIgYAAIAABGIgVAAIAAibIBEAAQAVAAALAEQALAEAGALQAHALAAANQAAAQgLAMQgLAJgWAEIAMAHQAJAJAIAMIAcArgAgvgIIAtAAQAMAAAIgDQAIgDAEgGQAEgHAAgHQAAgLgIgIQgIgHgRAAIgwAAg");
	this.shape_9.setTransform(21.4,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgiBIQgOgHgGgPQgGgOAAgaIAAhZIAUAAIAABZQAAAVAEAJQAEALAJAEQAKAGANAAQAVAAAKgKQAKgLAAgeIAAhZIAUAAIAABZQAAAYgFAOQgFAOgOAJQgOAJgXAAQgUAAgOgIg");
	this.shape_10.setTransform(4.8,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgFQAHgGAFgMIATACQgEARgNAKQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_11.setTransform(-15.4,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_12.setTransform(-24.3,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgOASAAQAKAAAKADQAJAFAGAHQAGAIAEALQADAJAAAMQAAAegPAPQgOAQgUABQgSgBgMgQgAgVgKQgJAKAAATQAAAVAFAIQAKAPAPAAQALABAJgLQAJgMAAgVQAAgUgIgLQgKgLgLAAQgMAAgJAMg");
	this.shape_13.setTransform(-34.7,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAPAAAIADQAKADAEAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgKAEQgHADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgCAEAAAFQgBAIAHAFQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgNIAAgGQgKADgTADg");
	this.shape_14.setTransform(-47.3,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgEARgNAKQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAPIA+AAQgBgOgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape_15.setTransform(-65.6,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgpAyQgKgJAAgOQAAgJAEgHQADgHAHgEQAGgCAIgCIARgDQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAOAAAKADQAIADAFAGQAEAFACAIIABASIAAAYQAAAaABAIQACAHADAHIgUAAQgDgGgBgJQgLAKgJAEQgIADgMAAQgTAAgKgJgAgDAGQgMADgFACQgFACgDAEQgDAEAAAFQAAAIAHAFQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgNIAAgGQgLADgTADg");
	this.shape_16.setTransform(-84,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_17.setTransform(-95.2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_18.setTransform(-103.5,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_19.setTransform(-108.5,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgiAsQgOgQAAgcQAAgQAGgPQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgLgHgHQgHgFgJAAQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_20.setTransform(-116,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,204,0,0.898)").s().p("A1HDoQgyAAAAgzIAAlpQAAgzAyAAMAqPAAAQAyAAAAAzIAAFpQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-23.2,280.5,46.4);


(lib.Corpo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.eyes_mc = new lib.Olhos();
	this.eyes_mc.parent = this;
	this.eyes_mc.setTransform(86.4,241.2,1,1,0,0,0,35.9,6.6);

	this.timeline.addTween(cjs.Tween.get(this.eyes_mc).wait(1));

	// Camada 1
	this.mouth_mc = new lib.Boca();
	this.mouth_mc.parent = this;
	this.mouth_mc.setTransform(86.6,270.9,1,1,0,0,0,44.7,19.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C31821").s().p("AgICHIgEgCIgBAAIAAkMIAbAAIAAEMIgCAAQAAADgMAAIgIgBgAgICBQAFACADAAIAJgBIAAkEIgRAAg");
	this.shape.setTransform(91,70.6,5.18,5.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB4E30").s().p("AgHCEIgDgBIAAkHIAVAAIAAEHQgDACgIAAIgHgBg");
	this.shape_1.setTransform(91,70.6,5.18,5.18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998675").s().p("AgEAoQgsAAghgQIgagRIgCgDIgFgiQAAgDADgCIACgBIADABIAdAQQAkAOAkAAIABAAQAoAAAogQQAUgJALgHIADgBIACAAQAEABgBAEIgDAgIgBABQgIALgRAJQgjASgzACgAhoADIAZAQQAgAPArAAIAEAAQAyAAAhgTQARgJAHgHIADghQgMAJgUAIQgoARgqAAIgBAAQgmAAglgPIgdgPg");
	this.shape_2.setTransform(92.9,422.4,5.18,5.18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhPATIgZgQIgFgiIAeAQQAlAPAmAAQAqgBAogQQAUgIAMgJIgDAhQgHAHgRAJQghASgyABIgDABQgrAAghgQg");
	this.shape_3.setTransform(92.8,422.4,5.18,5.18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#998675").s().p("AAAAOQgRgBgQgDQgKgDgCgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgJQgBgFAEAAIACAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAIADAcABIAFAAQAdABALgHIADAAIACAAQADABAAADIAAAJQAAAEgDABQgSAIgaAAgAgrABIAMAEQAPADAQAAIADAAQAaABAQgIIAAgJQgLAIggAAIgFAAQgYgBgKgEIgGgDg");
	this.shape_4.setTransform(90.6,146.9,5.18,5.18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAAAIQgQAAgQgDIgLgEIgBgJIAHADQAKADAYABQAjABAMgIIAAAJQgPAIgYAAIgFgBg");
	this.shape_5.setTransform(90.6,146.9,5.18,5.18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#998675").s().p("AgwAAQAAgFASgDQANgDARAAQASAAANADQASADAAAFQAAAMgxAAQgwAAAAgMgAgfgDQgLACgBABQABACALACQANADASAAQASAAANgDQAMgCABgCQgBgBgMgCQgNgDgSAAQgSAAgNADg");
	this.shape_6.setTransform(90.4,141,5.18,5.18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAHQgPgDAAgEQAAgDAPgDQANgDASAAQATAAAOADQAOADAAADQAAAEgOADQgOADgTAAQgSAAgNgDg");
	this.shape_7.setTransform(90.4,141,5.18,5.18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#998675").s().p("AAAAnQhigDg+gWQgLgEAAgKIgCggQAAgFAEgBIABAAQADABACACQADAFAWAGQAoAKBQACIAaABQBJAAAygMQAZgHAKgHIADgBIACABQADACAAADIgCAhQgBAMgLADQg9AXhWAAgAimAAQAAAHAHADQBEAVBbACIANAAQBRABBBgWQAIgEAAgHIACghQgKAGgaAHQgyANhLAAIgaAAQhYgEgogLIgWgLg");
	this.shape_8.setTransform(90.2,165.3,5.18,5.18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AAAAhQhbgChEgWQgHgCAAgHIgCghIAWAMQAoALBYADQBWADA7gOQAegHAMgIIgCAhQAAAIgIADQhAAXhSAAIgNgBg");
	this.shape_9.setTransform(90.2,165.3,5.18,5.18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#998675").s().p("Ah1AYQg3gKAAgOQAAgOA3gJQAygIBDAAQBEAAAyAIQA3AJAAAOQAAAOg3AKQgyAIhEAAQhDAAgygIgAh4gRQguAIAAAJQAAAKAuAIQAyAJBGAAQBGAAAygJQAvgIAAgKQAAgJgvgIQgygJhGAAQhGAAgyAJg");
	this.shape_10.setTransform(90.4,146.5,5.18,5.18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah3AUQgygIAAgMQAAgLAygJQAygIBFAAQBHAAAxAIQAyAJAAALQAAAMgyAIQgxAJhHAAQhFAAgygJg");
	this.shape_11.setTransform(90.4,146.5,5.18,5.18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C31821").s().p("AgBENQgsAAghgQIgagSIgBgBIgBgCIg3nsIFDgIIgxHuIAAABIgBACQgJAKgSAKQgiATgvABgAicj/IA3HmIAYARQAhAQArAAIAFAAQAugBAhgTQARgJAIgKIAxnog");
	this.shape_12.setTransform(91.3,300.8,5.18,5.18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FB4E30").s().p("AhLD5IgagSIg3nmIE5gIIgxHoQgIAKgRAJQghATguABIgGAAQgpAAgggPg");
	this.shape_13.setTransform(91.3,300.9,5.18,5.18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mouth_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,443.2);


(lib.Char = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_143 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(142).call(this.frame_143).wait(1));

	// Camada 1
	this.head_mc = new lib.Corpo();
	this.head_mc.parent = this;
	this.head_mc.setTransform(90.9,221.6,1,1,0,0,0,90.3,221.6);

	this.timeline.addTween(cjs.Tween.get(this.head_mc).wait(144));

	// Camada 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C31821").s().p("AAxBgIgDABQgKAAgCgTQgQg5hShOIgBgCIAAgCIAEgjIAHAHQBjBfARBAQAIASgIAEIgDABIAAAAQgBACgEABIgBABgAAyBaQAAAAAAABQABAAAAAAQABABAAAAQAAAAABAAIAAgBQAEAAgCgFIADACIACAAQAEgDgHgNQgQg+hihfIgDAYQBTBRAQA5IABAHQADAIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIgBgDIACADg");
	this.shape.setTransform(168.2,328.7,5.18,5.18,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB4E30").s().p("AAoBRIgBgHQgQg5hThRIADgYQBiBgAQA9QAHANgEADQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQACAEgEAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgCQACAEgEAAQgDAAgDgIg");
	this.shape_1.setTransform(167.5,330,5.18,5.18,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:5.18,scaleY:5.18,rotation:29,skewX:0,skewY:0,x:167.5,y:330}},{t:this.shape,p:{scaleX:5.18,scaleY:5.18,rotation:29,skewX:0,skewY:0,x:168.2,y:328.7}}]}).to({state:[{t:this.shape_1,p:{scaleX:5.176,scaleY:5.175,rotation:0,skewX:-126.6,skewY:53.4,x:199.1,y:287.2}},{t:this.shape,p:{scaleX:5.176,scaleY:5.175,rotation:0,skewX:-126.6,skewY:53.4,x:197.9,y:288}}]},9).to({state:[{t:this.shape_1,p:{scaleX:5.18,scaleY:5.18,rotation:29,skewX:0,skewY:0,x:167.5,y:330}},{t:this.shape,p:{scaleX:5.18,scaleY:5.18,rotation:29,skewX:0,skewY:0,x:168.2,y:328.7}}]},39).wait(96));

	// Camada 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C31821").s().p("AhDBzIgEAAIgBAAQgDAAgCgDIAAAAIgDgBQgIgEAHgSQAMgzBBhMQAfgoAiggQAEgEAGAAQAGAAAFAFQAEAEAAAGQAAAGgFAFQgeAdggAlQg9BIgKAuQgCATgKAAgAhABuQAGAAABgPQAKgvA+hJQAggmAfgdQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADQgXATgpA0QhBBLgLAyIgDAIQgCAIADABIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAAFADAAIAAAAQAEAAABgEQAAABAAABQAAABAAAAQABABAAAAQAAAAABAAg");
	this.shape_2.setTransform(22.4,316.2,5.18,5.18,-23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FB4E30").s().p("AhHBuQgDAAAAgFQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDgBACgIIADgIQALgyBBhLQApg0AXgTQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgfAdggAmQg+BJgKAvQgBAPgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgCQgBAEgEAAIAAAAg");
	this.shape_3.setTransform(22.4,316.3,5.18,5.18,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleX:5.18,scaleY:5.18,rotation:-23,skewX:0,skewY:0,x:22.4,y:316.3}},{t:this.shape_2,p:{scaleX:5.18,scaleY:5.18,rotation:-23,skewX:0,skewY:0,x:22.4,y:316.2}}]}).to({state:[{t:this.shape_3,p:{scaleX:5.176,scaleY:5.176,rotation:0,skewX:135.3,skewY:-44.7,x:-16.5,y:279.5}},{t:this.shape_2,p:{scaleX:5.176,scaleY:5.176,rotation:0,skewX:135.3,skewY:-44.7,x:-16.4,y:279.4}}]},78).to({state:[{t:this.shape_3,p:{scaleX:5.18,scaleY:5.18,rotation:-23,skewX:0,skewY:0,x:22.4,y:316.3}},{t:this.shape_2,p:{scaleX:5.18,scaleY:5.18,rotation:-23,skewX:0,skewY:0,x:22.4,y:316.2}}]},35).wait(31));

	// pés
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#998675").s().p("AAEBpQgHAAgCgGQgFgIAOgSQAHgIAHgEQgrgqgRg5IgJg2QABgFADgEQAEgDAFAAIAAAAQAFAAAEADQADAEAAAFIABgCIABAZQALA/AqArIABABQAKAIAGAHIAEAEIABAFQABAEgDAEIgBABQgGAKgLALQgNAMgKABgAguhcIAJA3QASA5AtAqQgJAFgJAKQgTAXAPAAIAEAAQAIgBAMgLQALgLAFgJIABgBQABgBAAgEIAAgCIgCgDIgBgBQgEgEgNgLQgsgsgLhCIAAgIIgBAAIgBgPQAAgHgHAAQgIAAAAAHg");
	this.shape_4.setTransform(122.7,452.7,5.179,5.179,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgBBfQAAgGAJgMQAJgKAJgFQgtgqgSg5IgJg3QABgHAHAAQAIAAAAAHIABAPIAAAAIABAIQAKBCAsAsQANALAEAEIABABIACADIABACQAAAEgCABIgBABQgEAJgMALQgMALgIABIgDAAQgGAAAAgFg");
	this.shape_5.setTransform(122.7,452.7,5.179,5.179,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#998675").s().p("AgfBSIgBAAQgMgBgOgEQgRgHgFgIQgGgIADgGQADgHAKABQAHAAAJACQAJACAJAFQAQg5ArgqQAXgWAWgLQACgBADAAQAIAAADAHQACAFgBAEQgCAFgEADIABAAIgUAMQg0AmgSA6IAAABQgDAOgDAHIAAABQgBAEgCABIgDADIgGACgAhMA8QAEAGAQAGQAOAFALABIABAAIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIABgBIAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAAgBIAGgWQASg7A2gpIAHgEIgBAAIANgIQAHgDgDgHQgDgEgEAAIgDABQgWALgXAVQgrAsgPA7QgKgHgMgDIgPgDQgPAAAJAOg");
	this.shape_6.setTransform(74.4,448.1,5.18,5.18,-27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgeBOIgBAAQgLgBgOgFQgQgFgEgHQgHgJAGgDQAGgDAQAEQAMAEAJAGQAQg7ArgrQAWgWAWgLQAHgDADAGQADAIgGACIgNAIIAAAAIgHAFQg1AogSA7IgGAWIgBABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIAAABIgCABIgEABIgBAAg");
	this.shape_7.setTransform(74.4,447.9,5.18,5.18,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.2,501.7);


(lib._compNumberButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// number
	this.num_txt = new cjs.Text("0", "bold 18px 'Helvetica75'", "#007E58");
	this.num_txt.name = "num_txt";
	this.num_txt.textAlign = "center";
	this.num_txt.lineHeight = 21;
	this.num_txt.parent = this;
	this.num_txt.setTransform(0,-10.9);

	this.timeline.addTween(cjs.Tween.get(this.num_txt).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("ACmAAQAABFgxAwQgxAxhEAAQhDAAgxgxQgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,126,88,0.098)").s().p("Ah0B1QgxgxAAhEQAAhDAxgxQAxgwBDAAQBEAAAxAwQAxAxAABDQAABEgxAxQgxAwhEAAQhDAAgxgwg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#007E58").ss(2,1,1).p("ACmAAQAABFgxAwQgxAxhEAAQhDAAgxgxQgxgwAAhFQAAhEAxgwQAxgxBDAAQBEAAAxAxQAxAwAABEg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,126,88,0.298)").s().p("Ah0B1QgxgxAAhEQAAhDAxgxQAxgwBDAAQBEAAAxAwQAxAxAABDQAABEgxAxQgxAwhEAAQhDAAgxgwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// blink
	this.blink_mc = new lib._compNumberBlink();
	this.blink_mc.parent = this;
	this.blink_mc.setTransform(0,0,1,1,0,0,0,16.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.blink_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-17.6,35.3,35.2);


(lib._compNumbersContet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		_this.stop();
		
		//Insira o número total de botões que serão usados
		//crie o botão e o nomeie corretamente conforme os existentes
		/**/ var _totalDeBotoes = 5; 
		
		//O texto dentro dos botões serão em ordem númerica?
		//se sim, coloque 'true', se não, 'false' e aplique o texto que quiser
		/**/ var _nomeDinamico = true;
		
		//Quando todos os conteudos forem visualizados, o que fazer?
		function checkItAll(){
			//habilitar seguir do player
			(parent.Player) ? parent.Player.doSeguir('sem flag') : _this.seguirTimeline_mc.visible = true;
			
			//finalizar tela
			//if(exportRoot.parent.Player) exportRoot.parent.Player.enableNextPage(); 
			
			//Outro...
		}
		
		//---------------------------------------------------------------------
		function init(){
			for(var w = 1; w <= _totalDeBotoes; w++){
				var bt = _this["bt"+w];
				if(_nomeDinamico) bt.num_txt.text = w;
				bt.idx = w;
				bt.cursor = "pointer";
				if(!bt.hasEventListener("click")) bt.addEventListener("click", onClick);
			}
			_this.bt1.checked = true;
			_this.bt1.blink_mc.visible = false;
			_this.bt1.gotoAndStop(1);
		}
		
		function onClick(event){
			var bt = event.currentTarget;
			resetAll();	
			_this.gotoAndStop(bt.idx);
			bt.checked = true;
			bt.blink_mc.visible = false;
			bt.gotoAndStop(1);
			checkIfCanGo();
		}
		
		function checkIfCanGo(){
			var total = 0;
			for(var w = 1; w <= _totalDeBotoes; w++) if(_this["bt"+w].checked == true) total++;
			if(total == _totalDeBotoes) checkItAll();
		}
		
		function resetAll(){ for(var w = 1; w <= _totalDeBotoes; w++) _this["bt"+w].gotoAndStop(0); }
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(5));

	// seguirStandAlone
	this.seguirTimeline_mc = new lib._compSeguirTimeline();
	this.seguirTimeline_mc.parent = this;
	this.seguirTimeline_mc.setTransform(761.6,399.6);

	this.timeline.addTween(cjs.Tween.get(this.seguirTimeline_mc).wait(6));

	// btns
	this.bt5 = new lib._compNumberButton();
	this.bt5.parent = this;
	this.bt5.setTransform(793.6,469,1,1,0,0,0,16.6,16.6);

	this.bt4 = new lib._compNumberButton();
	this.bt4.parent = this;
	this.bt4.setTransform(743.7,469,1,1,0,0,0,16.6,16.6);

	this.bt3 = new lib._compNumberButton();
	this.bt3.parent = this;
	this.bt3.setTransform(693.8,469,1,1,0,0,0,16.6,16.6);

	this.bt2 = new lib._compNumberButton();
	this.bt2.parent = this;
	this.bt2.setTransform(643.9,469,1,1,0,0,0,16.6,16.6);

	this.bt1 = new lib._compNumberButton();
	this.bt1.parent = this;
	this.bt1.setTransform(594,469,1,1,0,0,0,16.6,16.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.2)").s().p("ASkEiMgnxAAAIAAl8QAAjIDIAAMAnUAAAIAAGWQgHCvihAAIgDgBg");
	this.shape.setTransform(674.7,451.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bt1},{t:this.bt2},{t:this.bt3},{t:this.bt4},{t:this.bt5}]}).wait(6));

	// content
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag6DSIA+kxQgYAFgbADQgbACgbAAIAMg2QAcAAAbgHQAagHATgQQAXgPANgYIA2AAIhYGig");
	this.shape_1.setTransform(406.1,241.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AioDWQAJg0AdgoQAegnAsgbIAxgeIAxgdQAagPAQgWQAQgWABgjQAAgTgKgNQgKgNgPgHQgPgGgTAAQgbAAgQAMQgTANgKAWQgLAVgCAcIhBAAQAEguATgjQATgiAigTQAigTAugBQAlAAAdANQAeANARAaQARAaABAoQAAAigNAaQgNAagWASQgWAUgcARIg4AgQgZARgZARQgYASgRAXIDTAAIgNA9g");
	this.shape_2.setTransform(404.4,241.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ah9C6QgjgegBg5IAAgPIABgNIBBAAIgBAKIAAAIQAAAiAVASQAUATAkABQAnAAAYgYQAYgYAAgoQAAgYgLgNQgMgNgSgEQgSgFgSABIgRAAIAKgyIAPAAQAXABAWgFQAWgFANgOQAOgQAAgcQAAgUgIgNQgJgNgPgGQgOgFgRgBQgjABgVAWQgWAWgGAjIhBAAQAHgoAUggQAUgeAhgRQAggRAsgBQAgAAAdALQAcALASAYQARAXABAkQgBAogVAaQgVAagjAJIAAABQAdAKAMAWQAMAXgBAeQAAAvgXAfQgXAggmARQgmAQgtAAQg8gBgigfg");
	this.shape_3.setTransform(405.2,241.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAADSIAVhkIiyAAIANhCIDoj8IBFAAIg4EIIA5AAIgLA2Ig6AAIgVBkgAhbA4IB7AAIAniuIgBAAg");
	this.shape_4.setTransform(405,241.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhhDHQgfgOgRgcQgRgdABgqIBEAAQACAiARASQASASAjABQAagBAVgNQAWgNANgXQAMgWAAgcQAAgngUgTQgTgVghAAQgYAAgTAKQgUAKgNAQIg8AAIBFjjIDlAAIgMA9IiuAAIgfBjIABABQASgNATgFQASgGAWAAQAkABAaAQQAbAQAOAcQAOAZABAkQgBAzgWAmQgVAlgmAVQgnAUgvABQgoAAgfgPg");
	this.shape_5.setTransform(405.4,242.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#006666").ss(2,1,1).p("Eg8RglpMB4jAAAQDIAAAADIMAAABFDQAADIjIAAMg93AAAIhoAAIjbAAImqAAIhoAAIjbAAI0OAAI1uAAQjIAAAAjIMAAAhFDQAAjIDIAAg");
	this.shape_6.setTransform(405.8,241);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.898)").s().p("EgBlAlqIhoAAIjbAAImqAAIhoAAIjbAAI0OAAI1uAAQjIAAAAjJMAAAhFCQAAjIDIAAMB4jAAAQDHAAABDIMAAABFCQgBDJjHAAg");
	this.shape_7.setTransform(405.8,241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,813.6,484);


// stage content:
(lib.nome_do_arq_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"iniciar tela":1});

	// timeline functions:
	this.frame_9 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "1";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = false;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_14 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "2";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_19 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "3";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_24 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "4";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_29 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "5";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_34 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "6";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_39 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "7";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}
	this.frame_44 = function() {
		/*ID da Legenda*/
		this.legenda_mc.ID = "8";
		
		/*irá mostrar a legenda (true) ou apenas locução (false)?*/
		this.legenda_mc.showIt = true;
		
		//Se no 'course_structure.js' a legenda não tiver conteúdo (''),
		//o checkpoint será marcado e o seguir do framework irá aparecer
		//mesmo com locução e com a navegação fechada;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(8));

	// inicio da tela
	this.começarTela_mc = new lib._compInicioDaTela();
	this.começarTela_mc.parent = this;
	this.começarTela_mc.setTransform(939.8,596.8);

	this.timeline.addTween(cjs.Tween.get(this.começarTela_mc).to({_off:true},1).wait(51));

	// legendas/checkpoints
	this.legenda_mc = new lib._compLegenda();
	this.legenda_mc.parent = this;
	this.legenda_mc.setTransform(912.8,596.8);
	this.legenda_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legenda_mc).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(7));

	// IPause, UPlay (seguir sem flag)
	this.seguirSemFlag_mc = new lib._compSeguirSemFlag();
	this.seguirSemFlag_mc.parent = this;
	this.seguirSemFlag_mc.setTransform(926.3,596.8);
	this.seguirSemFlag_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seguirSemFlag_mc).wait(32).to({_off:false},0).to({_off:true},1).wait(19));

	// clicaEMudaFrame
	this.legenda_mc_1 = new lib._compClicaMudaframe();
	this.legenda_mc_1.parent = this;
	this.legenda_mc_1.setTransform(512.2,310.1);
	this.legenda_mc_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legenda_mc_1).wait(9).to({_off:false},0).to({_off:true},1).wait(42));

	// clicaEVe
	this.instance = new lib._compNumbersContet();
	this.instance.parent = this;
	this.instance.setTransform(542.8,310.1,1,1,0,0,0,437,241);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},1).wait(37));

	// clicaEAbreURL
	this.legenda_mc_2 = new lib._compClicaEAbreURL();
	this.legenda_mc_2.parent = this;
	this.legenda_mc_2.setTransform(512.2,310.1);
	this.legenda_mc_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legenda_mc_2).wait(19).to({_off:false},0).to({_off:true},1).wait(32));

	// modeloPersonagem
	this.locutor_mc = new lib.Char();
	this.locutor_mc.parent = this;
	this.locutor_mc.setTransform(223.7,422.7,1.473,1.473,0,0,0,90.6,250.8);
	this.locutor_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.locutor_mc).wait(24).to({_off:false},0).to({_off:true},1).wait(27));

	// clicaEAnima
	this.legenda_mc_3 = new lib._compClicaEAnima();
	this.legenda_mc_3.parent = this;
	this.legenda_mc_3.setTransform(512.2,310.1);
	this.legenda_mc_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legenda_mc_3).wait(29).to({_off:false},0).to({_off:true},1).wait(22));

	// fim da tela
	this.fimTela_mc = new lib._compFimDaTela();
	this.fimTela_mc.parent = this;
	this.fimTela_mc.setTransform(953.3,596.8);
	this.fimTela_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fimTela_mc).wait(51).to({_off:false},0).wait(1));

	// teste
	this.instance_1 = new lib.teste();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.4,293.3,1,1,0,0,0,20.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:906.4},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600.4,589.3,936.6,361.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;