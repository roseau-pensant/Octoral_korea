/*!
 *
 * Copyright	BlueBear Internet Solutions
 * Description	Impress Fx Animations
 * Date		2013
 * Media	screen
 * File		fx/impress.js
 * Todos	- Improve ImpressScrollEffects with limiting number of items to slide
 *		- HW Accelerated animation on mobile
 *
 */

 Array.implement({

	pushBack: function() {
		this.push(this[0]);
		this.splice(0, 1);
	},
	
	pushFront: function() {
		this.unshift(this[this.length - 1]);
		this.pop();
	}
});

Fx.ImpressEffects = {

	pushright: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': -size.x, 'top': 0, 'opacity': 1, 'z-index': 2, 'display': 'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display': 'block' });
		nextScene.morph({'left': 0});
		currentScene.morph({'left': size.x});
	},
	
	pushleft: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': size.x, 'top': 0, 'opacity': 1, 'z-index': 2, 'display': 'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display': 'block' });
		nextScene.morph({'left': 0});
		currentScene.morph({'left': -size.x});
	},
	
	pushup: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'top': 0});
		currentScene.morph({'top': -size.y});
	},
	
	pushdown: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': -size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'top': 0});
		currentScene.morph({'top': size.y});
	},
	
	coverleftdown: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': -size.x, 'top': -size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverrightdown: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': size.x, 'top': -size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverleftup: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': -size.x, 'top': size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverrightup: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': size.x, 'top': size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverleftright: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': -size.x, 'top': 0, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverrightleft: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': size.x, 'top': 0, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	covertopdown: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': -size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	coverbottomup: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': size.y, 'opacity': 1, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'left': 0, 'top': 0});
	},
	
	fade: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 0, 'z-index': 2, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		nextScene.morph({'opacity': 1});
	},
	
	crossfade: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 0, 'z-index': 1, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 2, 'display':'block' });
		nextScene.morph({'opacity': 1});
		currentScene.morph({'opacity': 0});
	},
	
	notransition: function(size, currentScene, nextScene) {
		nextScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'block' });
		currentScene.setStyles({ 'left': 0, 'top': 0, 'opacity': 1, 'z-index': 1, 'display':'none' });
	}
};

Fx.ImpressScrollEffects = {

	pushrightHorizontal: function(size, options, elements) {
		elements.pushFront();	
		elements.each(function(element, index) {
			var width = (size.x / options.perPage) - options.gap + (options.gap / options.perPage);
			var left = ((index - 1) * width) + (index * options.gap);
			element.setStyles({ 'left': left, 'top': 0, 'opacity': 1, 'z-index': 2, 'display':'block' });
			element.morph({ 'left': left + width });
		});
	},
	
	pushleftHorizontal: function(size, options, elements) {
		elements.each(function(element, index) {
			var width = (size.x / options.perPage) - options.gap + (options.gap / options.perPage);
			var left = ((index) * width) + (index * options.gap) - options.gap;
			element.setStyles({ 'left': left, 'top': 0, 'opacity': 1, 'z-index': 2, 'display':'block' });
			element.morph({ 'left': left - width });
		});
		elements.pushBack();
	},	
	
	pushdownVertical: function(size, options, elements) {
		elements.pushFront();
		elements.each(function(element, index) {
			var height = (size.y / options.perPage) - options.gap + (options.gap / options.perPage);
			var top = ((index - 1) * height) + (index * options.gap);
			element.setStyles({ 'left': 0, 'top': top, 'opacity': 1, 'z-index': 2, 'display':'block' });
			element.morph({ 'top': top + height });
		});
	},
	
	pushupVertical: function(size, options, elements) {
		elements.each(function(element, index) {
			var height = (size.y / options.perPage) - options.gap + (options.gap / options.perPage);
			var top = ((index) * height) + (index * options.gap) - options.gap;
			element.setStyles({ 'left': 0, 'top': top, 'opacity': 1, 'z-index': 2, 'display':'block' });
			element.morph({ 'top': top - height });
		});
		elements.pushBack();
	},
	
	pushrightVertical: function(size, options, elements) {
		this.pushdownVertical(size, options, elements);
	},
	
	pushleftVertical: function(size, options, elements) {
		this.pushupVertical(size, options, elements);
	}
};

Fx.Impress = new Class({

	Implements: [Options, Events],
    
	options: {
	
		/*
		onNavigate: function(from, to){},
		onComplete: function(from, to){},
		onPlay: function(){},
		onPause: function(){},
		onResume: function(){},
		*/
		
		onSwipeRight: function() { this.previous('pushright', 800); },
		onSwipeLeft: function() { this.next('pushleft', 800); },
		onKeyRight: function() { this.next('pushleft', 200); },
		onKeyLeft: function() { this.previous('pushright', 200); },
		
		effect: 'pushleft',
		transition: 'sine:out',
		duration: 2000,
		interval: 8000,
		allowSwipe: true,
		allowResize: false,
		allowArrowKeys: true,
		perPage: 1,
		gap: 10,
		orientation: 'horizontal' /* or vertical */
	},
    
	lock: false,
	timer: null,
	current: 0,
	playing: false,
	size: {x: 0, y: 0},
	support: { transitions: false },
	
	initialize: function(viewport, options) {
		this.setOptions(options);
		this.detectSupport();
		this.viewport = viewport;
		this.elements = viewport.getChildren();
		this.setup();
		this.attach();
	},
        
	detectSupport: function() {
		var s = document.body.style;
    		this.support.transitions = 'WebkitTransition' in s || 'MozTransition' in s || 'msTransition' in s || 'OTransition' in s || 'Transition' in s;
	},
	
	setup: function() {
		this.size = this.viewport.getSize();
		this.elements.each(function(element, index) {
		
			new Fx.Morph(element);
			
			var sceneStyle = {
				'display': 'block',
				'position': 'absolute',               
				'width': this.size.x,
				'height': this.size.y,
				'opacity': 1,
				'top': 0, 
				'left': 0
			};
			
			if(this.options.perPage > 1) {
				
				if(this.options.orientation === 'horizontal') {
					sceneStyle.width = (this.size.x / this.options.perPage) - this.options.gap + (this.options.gap / this.options.perPage);
					sceneStyle.left = (index * sceneStyle.width) + (index * this.options.gap);
				} else {
					sceneStyle.height = (this.size.y / this.options.perPage) - this.options.gap + (this.options.gap / this.options.perPage);
					sceneStyle.top = (index * sceneStyle.height) + (index * this.options.gap);
				}
			}
			
			element.setStyles(sceneStyle);
	
			if(this.current === 0 && this.options.perPage === 1) {
				element.setStyle('top', (index > 0 ? -this.size.y : 0));
			}
			
		}.bind(this));
		
		//var height = 400 * brandbox.getSize().x / 1100;
		//brandbox_gallery.setStyle('height', height);
	},
    
	attach: function() {
	
		if(this.options.allowResize) {
			window.addEvent('resize', function() {
				this.cancel();
				this.setup();
			}.bind(this));
		}
		
		if(this.options.allowArrowKeys) {

			$(document).addEvent('keydown', function(e) {
				switch(e.key) {
					case 'right': 
						this.fireEvent('keyRight', []);
					break;
					case 'left':
						this.fireEvent('keyLeft', []);
					break;
				}	
			}.bind(this));
		}
		
		if(this.options.allowSwipe) {
			
			this.viewport.addEvents({
				
				'touchstart': function(e) {
				}.bind(this),
				
				'touchend': function(e) {
				}.bind(this),
				
				'touchmove': function(e) {
					//e.preventDefault();
				}.bind(this),
				
				'swipe': function(e){
					switch(e.direction) {
						case 'right': 
							this.fireEvent('swipeRight', []);
						break;
						case 'left':
							this.fireEvent('swipeLeft', []);
						break;
					}			
				}.bind(this)				
			});
			
			this.viewport.store('swipe:cancelVertical', true);
		}
	},	
	    
	/* Get the index from te next scene */
	getNextScene: function() {
		return (this.current + 1 === this.elements.length) ? 0 : this.current + 1;
	},
	
	/* Get the index from te previous scene */
	getPreviousScene: function() {
		return (this.current - 1 < 0) ? this.elements.length - 1 : this.current - 1;
	},
	
	/* Get a scene element */
	getScene: function(index) {
		return this.elements[index];
	},
  
	/* goto the next scene */            
	next: function(effect, duration, transition) {
		this.gotoScene(this.getNextScene(), effect, duration, transition);
	},
	
	/* goto the previous scene */        
	previous: function(effect, duration, transition) {
		this.gotoScene(this.getPreviousScene(), effect, duration, transition);
	},
    
	/* cancel effects */
	cancel: function() {
		this.elements.each(function(element) {
			var fx = element.get('morph');
			if(fx.isRunning()) {
				fx.cancel();
			}
		});
	},

	/* goto a given scene */
	gotoScene: function(nextSceneIndex, effect, duration, transition) {
		
		if(nextSceneIndex == this.current) return false;
		if(this.options.perPage >= this.elements.length) return false;
		
		if(this.lock) return false;
		this.lock = true;
		
		this.pause();
		this.resume();
		
		var nextScene = this.getScene(nextSceneIndex);
		var currentScene = this.getScene(this.current);
		
		this.fireEvent('navigate', [this.current, nextSceneIndex]);
		
		var morph = {
			'transition': transition ? transition : this.options.transition,
			'duration': duration ? duration : this.options.duration
		};
		
		this.elements.each(function(el) {
			el.set('morph', morph);
		});
		
		(function() {
			this.lock = false;
			this.fireEvent('complete', [this.current, nextSceneIndex]);
		}.bind(this)).delay(duration ? duration : this.options.duration);
		
		this.doEffect(effect || this.options.effect, nextScene, currentScene);		
		this.current = nextSceneIndex;
	},
		
	doEffect: function(effect, nextScene, currentScene) {
	
		effect = Array.from(effect).getRandom();
		
		if(this.options.perPage > 1) {
			Fx.ImpressScrollEffects[effect + this.options.orientation.capitalize()](this.size, this.options, this.elements);
		} else {
			this.elements.setStyles({ 'z-index': 0, 'display': 'none' });
			Fx.ImpressEffects[effect](this.size, currentScene, nextScene);
		}	
	},
		
	play: function() {
		this.playing = true;
		this.fireEvent('play', []);
		this.pause();
		this.resume();
		return this;
	},
	
	resume: function() {
		if(!this.playing) return;
		this.fireEvent('resume', []);
		this.timer = (function() {
			this.next();			
		}.bind(this)).periodical(this.options.interval);
	},
	
	pause: function() {
		this.fireEvent('pause', []);
		if(this.timer !== null) clearTimeout(this.timer);
	}
});
