/*

Copyright: BlueBear Internet Solutions
Lib: Mootools 1.3

Documentation:
http://code.google.com/intl/nl-NL/apis/maps/documentation/javascript/reference.html#MapOptions
*/

var GoogleMaps = new Class({

	Implements: Options,

	container: null,
	map: null,
	bubble: null,
	markers: [],
	markersIcon: null,
	markersShadow: null,
	
	options: {
		autoFitBounds: true,
		scrollwheel: true,
		mapTypeControl: false,
		streetViewControl: true,
		panControl: false,
		useCurstomMarker: false,
		markerIcon: '/scripts/google/marker_icon.png',
		markerShadow: '/scripts/google/marker_shadow.png',
		bubbleTemplate: '<div class="bubble"><h1>{name}</h1>{street} {number} {numberext}<br />{zipcode} {city}</div>'
	},

	initialize: function(id, options) {

		if (!this.checkAPI()) return false;
		
		this.setOptions(options);
		this.container = document.id(id);
		
		if(!this.container) return false;
	
		this.markersIcon = new google.maps.MarkerImage(
			this.options.markerIcon,
			new google.maps.Size(31, 36), 
			new google.maps.Point(0, 0), 
			new google.maps.Point(0, 36)
		);
		this.markersShadow = new google.maps.MarkerImage(
			this.options.markerShadow,
			new google.maps.Size(55, 28), 
			new google.maps.Point(0, 0), 
			new google.maps.Point(0, 28)
		);
		
		this.map = new google.maps.Map(this.container, {
			center: new google.maps.LatLng(52.2648569, 6.8018085),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: this.options.streetViewControl,
			mapTypeControl: this.options.mapTypeControl,
			scrollwheel: this.options.scrollwheel,
			panControl: this.options.panControl			
		});
		
		var maxWidth = this.container.getSize().x;
		
		this.bubble = new google.maps.InfoWindow({
			maxWidth: maxWidth,
			disableAutoPan: false
		});
		
		google.maps.event.addListener(this.map, 'click', function(e){
			this.bubble.close();
			google.maps.event.trigger(this.bubble, 'closeclick');
		}.bind(this));
	},
	
	update: function() {
		google.maps.event.trigger(this.map, 'resize');
		if(this.options.autoFitBounds) {
			this.fitBounds();
		}
	},
	
	fitBounds: function() {
		if(this.markers.length == 0) {
			return false;
		}
		
		if(this.markers.length == 1) { 
			this.map.panTo(this.markers[0].getPosition()); 
		}
		
		if(this.markers.length > 1) {
		
			var bound = new google.maps.LatLngBounds();
			var bound2 = this;
			
			for(var i = 0; i < this.markers.length; i++) {
				bound.extend(this.markers[i].getPosition());
			}		
			
			this.map.fitBounds(bound);
			
			google.maps.event.addListenerOnce(this.map, 'zoom_changed', function() {
				/*if(bound2.markers.length > 1) {
					this.setZoom(8);
				} else {
					this.setZoom(14);
				}*/
				//this.setZoom(14);
				/*if(this.getZoom() > 13) {
					this.setZoom(13);
				}*/
			});	

		}
	},
	
	addMarker: function(lat, lng, title, content, fn) {

		var latlng = new google.maps.LatLng(lat, lng);
		var marker = new google.maps.Marker({
			map: this.map,
			position: latlng,
			title: title,
			icon: (this.options.useCurstomMarker) ? this.markersIcon : null,
			shadow: (this.options.useCurstomMarker) ? this.markersShadow : null
		});
		
		if(content !== null) {
			this.attachBubble(marker, content);
		}
		if(fn !== undefined) {
			google.maps.event.addListener(marker, 'click', fn);
		}
		this.markers.push(marker);	
	},
	
	addLabeledMarker: function(lat, lng, label, title, content, fn) {
		var latlng = new google.maps.LatLng(lat, lng);
		var marker = new google.maps.Marker({
			map: this.map,
			position: latlng,
			title: title,
			icon: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+label+'|FF776B|000000',
			shadow: null
		});
		
		if(content !== null) {
			this.attachBubble(marker, content);
		}
		if(fn !== undefined) {
			google.maps.event.addListener(marker, 'click', fn);
		}
		this.markers.push(marker);
	},
	
	clear: function() {
		this.markers.each(function(marker) { marker.setMap(null); });
		this.markers.empty();
	},
	
	attachBubble: function(marker, content) {
		var application = this;
		google.maps.event.addListener(marker, 'click', function(){
			application.bubble.setContent(application.options.bubbleTemplate.substitute(content));
			application.bubble.open(application.map, this);
		});
		
	},
	
	toggleStreetview: function() {
		var streetview = this.map.getStreetView();
		var toggle = streetview.getVisible();
		streetview.setPosition(this.markers[0].position);
		streetview.setVisible(!toggle);
	},
	
	directionsService: null,
	directionsDisplay: null,
	getDirections: function(from, to, outputElement, onSuccess, onError) {
		var out = this;
		
		if(this.directionsDisplay !== null) {
			this.directionsDisplay.setMap(null);
			this.directionsDisplay = null;
		}
		
		this.directionsService = new google.maps.DirectionsService();
		this.directionsDisplay = new google.maps.DirectionsRenderer({
			draggable: true
		});
		
		outputElement.empty();
		
		this.directionsDisplay.setMap(this.map);
 		this.directionsDisplay.setPanel(outputElement);
		this.directionsService.route({
			origin: from,
			destination: to,
			travelMode: google.maps.TravelMode.TRANSIT	
		}, function(response, status) {
			if(status == google.maps.DirectionsStatus.OK) {
				out.directionsDisplay.setDirections(response);
				if(onSuccess !== undefined && onSuccess !== null) onSuccess();
			} else {
				if(onError !== undefined && onError !== null) onError();
			}
		});
	},

	checkAPI: function() {
		return (window.google && window.google.maps);
	}
});
