/* 
http://kreaturamedia.com/clearbox/index_en.html
cdn: 'http://images.weserv.nl/?w=800&q=60&url=farm4.staticflickr.com/3688/9255342839_a7706634ca_z.jpg' 
*/

/*! 
 * Minified version of Mootools Scroller from More 
 */
 
if(window.Scroller === undefined) {
	var Scroller=new Class({Implements:[Events,Options],options:{area:20,velocity:1,onChange:function(e,t){this.element.scrollTo(e,t)},fps:50},initialize:function(e,t){this.setOptions(t);this.element=document.id(e);this.docBody=document.id(this.element.getDocument().body);this.listener=typeOf(this.element)!=="element"?this.docBody:this.element;this.timer=null;this.bound={attach:this.attach.bind(this),detach:this.detach.bind(this),getCoords:this.getCoords.bind(this)}},start:function(){this.listener.addEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});return this},stop:function(){this.listener.removeEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});this.detach();this.timer=clearInterval(this.timer);return this},attach:function(){this.listener.addEvent("mousemove",this.bound.getCoords)},detach:function(){this.listener.removeEvent("mousemove",this.bound.getCoords);this.timer=clearInterval(this.timer)},getCoords:function(e){this.page=this.listener.get("tag")=="body"?e.client:e.page;if(!this.timer)this.timer=this.scroll.periodical(Math.round(1e3/this.options.fps),this)},scroll:function(){var e=this.element.getSize(),t=this.element.getScroll(),n=this.element!==this.docBody?this.element.getOffsets():{x:0,y:0},r=this.element.getScrollSize(),i={x:0,y:0},s=this.options.area.top||this.options.area,o=this.options.area.bottom||this.options.area;for(var u in this.page){if(this.page[u]<s+n[u]&&t[u]!==0){i[u]=(this.page[u]-s-n[u])*this.options.velocity}else if(this.page[u]+o>e[u]+n[u]&&t[u]+e[u]!=r[u]){i[u]=(this.page[u]-e[u]+o-n[u])*this.options.velocity}i[u]=i[u].round()}if(i.y||i.x)this.fireEvent("change",[t.x+i.x,t.y+i.y])}})
}

/*!
 *
 * Copyright	BlueBear Internet Solutions
 * Description	Lightbox
 * Date			2013
 *
 */
 
var LightBox = {};

LightBox = new Class({

	Implements: [Events, Options],
	
	version: '0.0.3',

	options: {
		timeout: 2000,
		bounds: 40,
		loaderdelay: 200,
		padding: 30,
		max: { width: 980, height: 700 }
	},
	
	ui: {
		box: null, 
		overlay: null,
		media: null,
		mediatitle: null,
		btnnext: null,
		btnclose: null,
		btnprevious: null,
		btnthumbnails: null,
		thumbnails: null
	},
	
	fx: { 
		box: null 
	},
	
	active: {
		media: null,
		collection: null,
		box: false
	},
	
	collections: {},	
	paginator: null,	

	initialize: function(options) {
		this.setOptions(options);
		this.build();
		this.attach();		
		this.attachPaginator();
		this.attachBoxfx();
		this.loader();
	},
	
	// loader for plugin loaders
	loader: function() {
		/*
		var options, rel;	
		$$('a[data-lightbox]').each(function(element) {
			console.log(element);
			rel = element.get('data-lightbox');
			options = JSON.decode(rel);
			if(options) {
				if(!options.thumbnail) {
					var inlineimg = element.getElement('img');
					if(inlineimg) {
						options.thumbnail = inlineimg.get('src');
					}
				}
			}
			this.add(element, options ? options.gallery : null, options);			
		}.bind(this));
		*/
	},
	
	// add media to the lightbox
	add: function(element, collection_name, options) {
		
		var self = this, media = null, count = 0;
		
		collection_name = (collection_name !== undefined) ? collection_name : 'default';
		
		media = new LightBox.Media(element, options);
		
		this.collections[collection_name] = this.collections[collection_name] || [];
		this.collections[collection_name].push(media);
		
		count = this.collections[collection_name].length;
		
		// register index position within the collection, for later use.
		media.index = count - 1;
		
		media.element.addEvent('click', function(e) {
			if(e) e.stop();
			self.paginator.setCollection(self.collections[collection_name]);
			self.paginator.setCursor(media.index);
			self.active.collection = collection_name;
			self.active.media = media;
			self.open();
		});
		
	},
		
	// Media loader with image preloader
	loadMedia: function(media, events, property) {
		
		if(!property) property = 'href';
		
		events.onComplete = events.onComplete || function() {};
		events.onTimeout = events.onTimeout || function() {};
		events.onStart = events.onStart || function() {};	
		events.onError = events.onError || function() {};
		
		events.onStart();
		
		if(media.type !== 'image') { 
			events.onComplete(media); return; 
		}
		
		var timeout = function() {
			events.onTimeout();	
		}.delay(this.options.timeout);
		
		var image = new Image();	
		
		image.onerror = function() {
			clearTimeout(timeout);
			events.onError();
			events.onComplete();
		};
		
		image.onload = function() { 
			clearTimeout(timeout);
			if(property === 'href') {
				if(!media.width) media.width = image.width;
				if(!media.height) media.height = image.height;
			}
			events.onComplete(media);
		};
		
		//image.src = media.href;
		image.src = media[property];
	},	
	
	changeMedia: function(media) {
		var self = this, windowsize, maxwidth, maxheight, loaderdelay;
		
		this.loadMedia(media, {			
			onStart: function() {				
				self.ui.mediatitle.setStyle('display', 'none');				
				clearTimeout(loaderdelay);								
				loaderdelay = (function() {
					self.ui.loading.setStyle('display', 'block');
				}).delay(self.options.loaderdelay);				
			},			
			onComplete: function(result) {
				
				self.fx.box.set({
					onComplete: function() {
						
						clearTimeout(loaderdelay);
						
						self.ui.loading.setStyle('display', 'none');
						self.ui.media.empty();
						self.ui.mediatitle.set('html', media.title);						
						
						var nextmedia = document.id(media);
						nextmedia.setStyle('opacity', 0);
						nextmedia.inject(self.ui.media);						
						
						new Fx.Tween(nextmedia, { 
							property: 'opacity', 
							onComplete: function() {
								self.ui.mediatitle.setStyle('display', 'block');
							} 
						}).start(1);
					}
				});
				
				windowsize = window.getSize();				
				maxwidth = self.options.max.width;
				maxheight = self.options.max.height;
				
				if(maxwidth > windowsize.x) maxwidth = windowsize.x - self.options.bounds;
				if(maxheight > windowsize.y) maxheight = windowsize.y - self.options.bounds;
								
				var newsize = self.calcAspectRatio(result.width, result.height, maxwidth, maxheight);							
				
				newsize.width = newsize.width - self.options.padding;
				newsize.height = newsize.height - self.options.padding;
				
				self.fx.box.start({
					width: newsize.width,
					height: newsize.height,
					'margin-left': -(Math.ceil(newsize.width / 2) + self.options.padding),
					'margin-top': -(Math.ceil(newsize.height / 2) + self.options.padding)
				});				
							
			}			
		});
	},
	
	calcAspectRatio: function(width, height, maxwidth, maxheight) {
		var ratio = Math.min(maxwidth / width, maxheight / height);	
		var newwidth = width < width * ratio ? width : width * ratio;
		var newheight = height < height * ratio ? height : height * ratio;
		return { width: newwidth, height: newheight };
	},
	
	loadThumbnails: function() {
		var self = this, collection;			
		collection = this.collections[this.active.collection];
		
		collection.each(function(media, index){			
			var thumbnail = new Element('a.thumbnail.loading[href=#]');
			
			thumbnail.addEvent('click', function(e) {
				if(e) e.stop(); 
				self.paginator.goto(index); 
				self.ui.thumbnails.getElements('a.thumbnail').removeClass('active');
				this.addClass('active');
			});
			
			thumbnail.inject(self.ui.thumbnails);
			
			if(self.active.media.index === index) {
				thumbnail.addClass('active');
			}
			
			self.loadMedia(media, {
				onComplete: function() {
					thumbnail.removeClass('loading');
					new Element('img', { src: media.thumbnail }).inject(thumbnail);
				}	
			}, 'thumbnail');
		});
		
		new Scroller(this.ui.thumbnails, { area: 40 }).start();
	},
	
	toggleThumbnails: function() {
		var current, style;
		current = this.ui.thumbnails.getStyle('display');
		style = (current === 'none') ? 'block' : 'none';
		styleinverse = (style === 'none') ? 'block' : 'none'; 
		
		this.ui.thumbnails.setStyle('display', style);
		this.ui.mediatitle.setStyle('display', styleinverse);
		
		if(style === 'block') {
			this.ui.thumbnails.empty();	
			this.loadThumbnails();
		}
	},
	
	attach: function() {
		this.ui.overlay.addEvent('click', function(e) { if(e) e.stop(); this.close(); }.bind(this));
		this.ui.btnnext.addEvent('click', function(e) { if(e) e.stop(); this.paginator.next(); }.bind(this));
		this.ui.btnprevious.addEvent('click', function(e) { if(e) e.stop(); this.paginator.previous(); }.bind(this));
		this.ui.btnthumbnails.addEvent('click', function(e) { if(e) e.stop(); this.toggleThumbnails(); }.bind(this));
		this.ui.btnclose.addEvent('click', function(e) { if(e) e.stop(); this.close(); }.bind(this));
		
		window.addEvent('resize', function() { 
			if(!this.active.box) return;
			this.paginator.reload(); 
		}.bind(this));
		
		document.addEvent('keydown', function(e) { 
			if(!this.active.box) return;			
			switch(e.key) {
				case 'left':
					this.paginator.previous();
					break;
				case 'enter':
				case 'right':
					this.paginator.next();
					break;
				case 'esc':
					this.close();
					break;
			}
		}.bind(this));
	},
		
	attachPaginator: function() {
		var self = this;
		this.paginator = new LightBox.Paginator({			
			onChange: function() {
				self.ui.media.empty();
				self.changeMedia(this.getItem());
			}
		});
	},
	
	attachBoxfx: function() {
		this.fx.box = new Fx.Morph(this.ui.box, {
			duration: 200,
			transition: 'back:out',
			link: 'cancel'
		});	
	},
	
	setNavigation: function(state) {
		this.ui.btnnext.setStyle('display', state ? 'block' : 'none');
		this.ui.btnprevious.setStyle('display', state ? 'block' : 'none');
	},
	
	// opens the lightbox
	open: function() {
		this.ui.loading.setStyle('display', 'none');
		this.ui.overlay.setStyle('display', 'block');
		this.ui.box.setStyle('display', 'block');
		this.ui.media.empty();
		this.setNavigation(this.collections[this.active.collection].length > 1);
		this.changeMedia(this.active.media);
		this.active.box = true;
	},
	
	// closes the lightbox
	close: function() {
		this.active.box = false;
		this.ui.overlay.setStyle('display', 'none');
		this.ui.box.setStyle('display', 'none');
		this.ui.thumbnails.setStyle('display', 'none');
		this.ui.media.empty();
		this.ui.thumbnails.empty();
	},
	
	// build elements
	build: function() {
		this.ui.overlay = new Element('div.lightbox-overlay');
		this.ui.box = new Element('div.lightbox');
		this.ui.loading = new Element('div.lightbox-loading');
		this.ui.media = new Element('div.lightbox-media');
		this.ui.mediatitle = new Element('div.lightbox-media-title');
		this.ui.btnnext = new Element('a.lightbox-nav.lightbox-nav-next[href=#next]');
		this.ui.btnprevious = new Element('a.lightbox-nav.lightbox-nav-previous[href=#previous]');
		this.ui.btnthumbnails = new Element('a.lightbox-btn-thumbnails[href=#thumbnails]');
		this.ui.btnclose = new Element('a.lightbox-btn-close[href=#close]', { html: '&times' });
		this.ui.thumbnails = new Element('div.lightbox-thumbnails');
		
		this.ui.overlay.inject(document.body);
		this.ui.box.inject(document.body);
		this.ui.loading.inject(this.ui.box);
		this.ui.media.inject(this.ui.box);
		this.ui.mediatitle.inject(this.ui.box);
		this.ui.btnnext.inject(this.ui.box);
		this.ui.btnprevious.inject(this.ui.box);
		this.ui.btnthumbnails.inject(this.ui.box);
		this.ui.btnclose.inject(this.ui.box);
		this.ui.thumbnails.inject(this.ui.box);
	}

});

LightBox.Media = new Class({	
	
	href: null, type: null, element: null, thumbnail: null,
	title: null, description: null, height: 0, width: 0,
	
	initialize: function(element, options) {
		if(element) {
			this.element = element;
			this.href = element.get('href');
			this.title = options.title;
			this.description = options.description;
			this.thumbnail = options.thumbnail;
			this.type = this.detect();
		}
		if(options) {
			if(options.width) this.width = options.width;
			if(options.height) this.height = options.height;			
		}
	},
	
	detect: function() {
		if(this.href.test(/\.png|\.jp(e)?g|\.gif/ig)) return 'image';
		if(this.href.test(/youtu(\.)?be/ig)) return 'youtube';
		return 'iframe';
	},
	
	toElement: function() {
		switch(this.type) {
			case 'image':
				return new Element('img', { src: this.href });
			case 'youtube':
				return this.toFlashElement(this.href);
			case 'iframe':
				return new Element('iframe', { src: this.href, frameBorder: 0 });
		}
	},
	
	toFlashElement: function(url) {
		
		var flash_object = '<object width="100%" height="100%" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + 
		'<param name="movie" value="' + url + '" />' +
		'<param name="allowFullScreen" value="true" />' +
		'<param name="allowscriptaccess" value="always" />' +
		'<param name="wmode" value="transparent" />' +
		'<embed src="' + url + '" width="100%" height="100%" type="application/x-shockwave-flash" wmode="transparent" allowscriptaccess="always" allowfullscreen="true"></embed>' +
		'</object>';
		
		return new Element('div.flashobject', { html: flash_object });
	}
	
});

/*!
 * Lightbox Paginator for iterating over collections
 */
 
LightBox.Paginator = new Class({
	
	Implements: [Options, Events],
	
	options: {
		// onNext, onPrevious, onChange, onCollectionChange
		continuous: true
	},
	
	collection: [],
	cursor: 0,
	
	initialize: function(options) {
		this.setOptions(options);
		this.cursor = 0;
	},
	
	setCursor: function(index) {
		this.cursor = index;
	},
	
	setCollection: function(collection) {
		this.cursor = 0;
		this.collection = collection;
		this.fireEvent('collectionChange');
	},
	
	next: function() {
		this.cursor = this.getNext();
		this.fireEvent('next');
		this.fireEvent('change');
	},
	
	previous: function() {
		this.cursor = this.getPrevious();
		this.fireEvent('previous');
		this.fireEvent('change');		
	},
	
	goto: function(index) {
		this.cursor = index;
		this.fireEvent('change');
	},
	
	reload: function() {
		this.goto(this.cursor);
	},
	
	getItem: function(index) {
		return index ? this.collection[index] : this.collection[this.cursor];
	},
	
	getNext: function() {
		var endpoint = (this.options.continuous) ? 0 : this.cursor;
		return (this.cursor + 1 === this.collection.length) ? endpoint : this.cursor + 1;
	},
	
	getPrevious: function() {
		var endpoint = (this.options.continuous) ? this.collection.length - 1 : this.cursor;
		return (this.cursor - 1 < 0) ? endpoint : this.cursor - 1;
	}
	
});

/*!
 * ClearBox Compatibility Loader
 */
 
var ClearBox = new Class({
	
	Extends: LightBox,
	
	loader: function() {		
		var options, rel;		
		$$('a[rel^=clearbox]').each(function(element) {			
			rel = element.get('rel');
			options = this.parse(rel);			
			if(!options.thumbnail) {
				var inlineimg = element.getElement('img');
				if(inlineimg) {
					options.thumbnail = inlineimg.get('src');
				}
			}			
			//console.log(element, JSON.encode(options));
			this.add(element, options.gallery, options);			
		}.bind(this));		
	},
	
	parse: function(rel) {		
		var pair, options = {}, key;
		rel = rel.replace(/clearbox|\[|\]/gi, '').clean();
		rel.split(',,').each(function(option){
			pair = option.split('=');
			if(pair.length === 2) {				
				key = pair[0];				
				switch(key) { 
					case 'tnhrf':
						key = 'thumbnail';
						break;
					case 'html':
						key = 'description';
						break;
				}
				options[key] = pair[1];
			}
		});	
		return options;
	}
	
});

window.addEvent('domready', function() {
	var cb = new ClearBox();
	//var lb = new LightBox();
});
