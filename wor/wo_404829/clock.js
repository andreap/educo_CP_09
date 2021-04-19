(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AAAgiIAABF");
	this.shape.setTransform(0,-3.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ore, new cjs.Rectangle(-2,-9,4,11), null);


(lib.minuti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AAAA9IAAh5");
	this.shape.setTransform(0,-0.15,1,0.7613,0,0,0,0,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.minuti, new cjs.Rectangle(-2,-11.8,4,13.200000000000001), null);


(lib.Interpolazione2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AvHV2Ql2hqlUjMQmSjxk7leIAUJhQABAhgRAeQgQAdgcARQgdASghAAQgiAAgdgQQgdgPgSgdQgRgdgBghIgfu6QgQgkAHgmQAHgmAbgbQAcgbAmgHQAmgHAjAQIO7AfQAzACAjAlQAkAmgCA0QgCAzglAjQgmAkg0gCIregYQE5F3GhD6QE3C6FVBiQFWBgFcAAQIqABHxjfQHwjeF3mgQFNlzC9nVQC8nWAAnOQAAg0AlgkQAkglA0AAIAAAAQA0AAAkAlQAlAkAAA0QAAD4gzECQg0EDhiD4QjMIBlyGcQmaHJohD0QogDzpgAAQl+AAl2hqg");
	this.shape.setTransform(3.9859,23.7878,0.1723,0.1723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("EgpKAW7QgkglAAgzQAAj4AzkCQAzkDBjj5QDLoAFymdQGbnIIgjzQIhj0JgAAQF9AAF3BqQF2BqFUDMQGTDyE6FdIgUphQgBgzAjgmQAkglA0gBQAzgCAmAlQAlAjABA0IAgO6QAQAjgHAnQgHAlgcAcQgbAagmAIQgnAHgjgQIu6gfQgzgBgjglQgjgmAAgzQABgzAkgjQAlgkAzAAILjAYQk5l2mij7Qk3i7lVhhQlWhglbAAQorAAnwDdQnxDfl2GgQlOFzi8HVQi9HWAAHOQAAA0gkAkQglAlg0AAQgzAAglglg");
	this.shape_1.setTransform(-3.9575,-23.7544,0.1723,0.1723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-49.7,100,99.4);


(lib.Simbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.Interpolazione2("synched",0);
	this.instance.setTransform(70.95,71.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,22,100,99.4);


// stage content:
(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// frecce
	this.instance = new lib.Simbolo9("synched",0);
	this.instance.setTransform(71,71.65,1,1,0,0,0,350.2,348.4);

	this.instance_1 = new lib.Interpolazione2("synched",0);
	this.instance_1.setTransform(70.95,71.65,1,1,44.9994);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,rotation:44.9994,x:70.95},5).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5).to({rotation:135,x:70.9},4).to({rotation:225.0006,x:71,y:71.75},5).to({rotation:315},5).to({rotation:360,x:70.95},5).wait(1));

	// crono
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoajQkrgJkPh5QkFh1jJjOQjJjOhukJQhxkSAAkrQAAkeBqkJQBmkBC8jMQC8jMD3h7QD/h/EegZIAAifIidAAQgzAAglglQgkgkAAg0QAAg0AkglQAlgkAzAAIIzAAQA0AAAlAkQAkAlAAA0QAAA0gkAkQglAlg0AAIidAAIAACfQEqAZEHCIQD/CDC9DaQC9DZBfEOQBiEYgREpQgQEriBELQh8ECjUDDQjUDDkMBmQkABikTAAIgrAAgABZQcQAkAlAAA0IAAEvQC3gTCqhGQCqhHCNh0IjVjWQglglAAg0QAAg0AkgkQAlglAzAAQA0AAAlAkIDWDVQB0iPBHiqQBGiqATi4IkvAAQg0AAglgkQgkglAAgzQAAg0AkglQAlgkA0AAIEvAAQgTi2hGipQhHiph0iNIjWDYQglAlgzAAQg0AAgkglQgkglAAgzQAAgzAkglIDVjWQiNh1iqhGQiqhHi3gSIAAEvQAAA0gkAkQglAlg0AAQgyAAglglQglgkAAg0IAAkvQi2ASiqBHQiqBGiOB1IDWDWQAkAkAAA0QgBAzgkAkQglAkgzAAQgzAAglgkIjVjXQh1CNhGCpQhHCpgSC2IEvAAQA0AAAkAkQAlAlAAA0QAAAzglAlQglAkgzAAIkvAAQASC4BHCqQBGCqB1CPIDVjTQAlglA0AAQAzAAAlAlQAlAkAAA0QAAA0glAkIjWDWQCOB0CqBHQCqBGC2ATIAAkvQAAg0AlglQAlgkAyAAQA0AAAlAkg");
	this.shape.setTransform(70.9431,71.6354,0.1812,0.1812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// lancetta_minuti
	this.instance_2 = new lib.minuti();
	this.instance_2.setTransform(71,75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:135,x:71.05},9).wait(16));

	// lancetta_ore
	this.instance_3 = new lib.ore();
	this.instance_3.setTransform(71,75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.0002,x:70.95},9).wait(16));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-188.2,-295.7,319.4,427.6);
// library properties:
lib.properties = {
	id: '41DE9D3B679E46D8AC4295FBA9355633',
	width: 140,
	height: 140,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['41DE9D3B679E46D8AC4295FBA9355633'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;