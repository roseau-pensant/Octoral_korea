window.addEvent('domready', function() {

	var brandbox = document.getElement('.block-brandbox');
	if(brandbox) {
		var brandbox_nav = brandbox.getElements('nav a');
		var brandbox_fx = new Fx.Impress(brandbox.getElement('.gallery'), { 
			effect: 'fade',
			onNavigate: function(from, to) {
				brandbox_nav[from].removeClass('active');
				brandbox_nav[to].addClass('active');
			}
		}).play();
		
		brandbox_nav.each(function(a, i) {
			a.addEvent('click', function(e) {
				if(e) e.stop();
				brandbox_fx.gotoScene(i, 'fade', 300);
			});
		});
	}
	
	$$('form').each(function(f) { new Form.Validator(f); });
	$$('.overtext').each(function(f) { new OverText(f); });

	///
	// Mainmenu
	///
	
	var mainmenu = document.id('mainmenu');
	if(mainmenu) {
		
		mainmenu.addEvent('click:relay(li.has-submenu > a)', function(e) {
			
			var parentli = this.getParent('li');
			
			var activesubmenuitems = mainmenu.getElements('.submenu li.active')
			if(activesubmenuitems.length > 0) activesubmenuitems.removeClass('active');
			
			var parentul = this.getParent('ul');
			if(parentul && parentul.hasClass('menu')) {
				mainmenu.getElements('li.active').removeClass('active');
			}
			
			var submenu = this.getNext('ul');
			var openstate = (submenu.getStyle('display') === 'block');

			if(e) e.stop();
			parentli.toggleClass('active', !openstate);

			if(!openstate) {
				var url = this.get('href');
				new Request.HTML({
					filter: '#ajaxcontent',
					url: url,
					onSuccess: function(responseTree, responseElements, responseHTML, responseJavaScript) {
						document.id('ajaxcontent').set('html', responseTree.get('html'));
					}				
				}).get();
			}
			
			submenu.setStyle('display', openstate ? 'none' : 'block');
		});
		
	}
	
	///
	// truncated tables
	///
	
	var object_tables = document.getElements('.object table');
	if(object_tables.length > 0) {
		object_tables.each(function(table) {
			var collapsedrows = table.getElements('tr.collapsed');
			var morebtn = table.getElement('.col-more a');
			if(collapsedrows.length > 0) {
				var state = false;
				morebtn.addEvent('click', function(e) {
					if(e) e.stop();					
					collapsedrows.toggleClass('hidden', state);
					morebtn.set('html', state ? morebtn.get('data-more') : morebtn.get('data-less'));
					state = !state;
				});
			}
		});
	}	
	
	//
	// newshighlights
	//
	
	var newshighlights = document.getElement('.block-newshighlights');
	if(newshighlights) {
		new Fx.Impress(newshighlights.getElement('.news'), {}).play();
	}
	
	//
	// Google map with directions
	//
	
	var googlemap = document.id('googlemap');
	if (googlemap) {
		window.addEvent('load', function(){
			var gmaps = new GoogleMaps(googlemap);
			if (gmaps.checkAPI()) {
				var lat = googlemap.get('data-latitude');
				var lng = googlemap.get('data-longitude');
				
				if(lat && lat) {
					gmaps.addMarker(lat, lng, 'Octoral', { name: 'Octoral', street: 'Zuiveringweg 89<br />8243 PE Lelystad<br />Flevoland, Nederland' }, null);
				}
				gmaps.fitBounds();
				
				// getdirections
				var directions = document.id('directions');
				var getdirections = document.id('getdirections');
				var getdirection_from = document.id('getdirection_from');
				var getdirection_to = document.id('getdirection_to');
				
				if(getdirections && getdirection_from && getdirection_to) {
					getdirections.addEvent('click', function(e){
						if(e) e.stop();
						gmaps.getDirections(
							getdirection_from.get('value'), 
							getdirection_to.get('value'), 
							directions.getElement('.directions-inside'), 
							function() {
								directions.removeClass('hidden');
							}, 
							function() {
								directions.addClass('hidden');
							}
						);
					});
				}
			} else {
				googlemap.set('html', '<p>Google Maps content is not available, this might be because of <a href="' + window.location.pathname.substr(0, 3) + '/cookie_settings#app_11">your privacy settings</a>.</p>');
				googlemap.getAllNext().destroy();
			}
		});
	}

});
