//function initialize(){
	//var mapCanvas = document.getElementById('map-canvas');
	//var mapOptions = {
		//center : new google.maps.LatLng(-4.043477, 39.668206),
		//zoom : 15,
		//mapTypeId: google.maps.MapTypeId.ROADMAP
	//}
	//var map = new google.maps.Map(mapCanvas, mapOptions);

	//var myLatlng = new google.maps.LatLng(-4.043477, 39.668206);
	//var mapOptions = {
		//zoom: 15,
		//center: myLatlng
	//}
	//var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	//var input = (document.getElementById('mapsearch'));
	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	//var searchBox = new google.maps.places.SearchBox((input));

	//google.maps.event.addListener(searchBox, 'places_changed', function() {
    //var places = searchBox.getPlaces();
//})
	//var marker = new google.maps.Marker({
		//position : myLatlng,
		//scaleControl : true,
		//map: map,
		//animation: google.maps.Animation.BOUNCE,
		//draggable : true,
		//title : 'Hello World!'
	//});
	//marker.setMap(map);
//}

//var map = new google.Map(document.getElementById('map-canvas'),{
	//center : {
	//	lat : -4.043477,
	//	lng : 39.668206
	//},
	//zoom : 8
//});

//working search place bar

function initialize(){
	var kenyaLoc = new google.maps.LatLng(-4.043477, 39.668206);
	var mapOptions ={
		zoom : 15,
		center: kenyaLoc
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
	position : kenyaLoc,
	animation: google.maps.Animation.BOUNCE,
	draggable : true
});
	marker.setMap(map);


	var input = (document.getElementById('mapsearch'));
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	var searchBox = new google.maps.places.SearchBox((input));

	google.maps.event.addListener(searchBox, 'places_changed', function() {
		var places = searchBox.getPlaces();

		var bounds = new google.maps.LatLngBounds();

		for (var i =0, place; i<10; i++){
			if(places[i]!== undefined){
			place = places[i];

			bounds.extend(place.geometry.location);
			}
		}
		map.fitBounds(bounds);
	});
}

function getAllPlaces(place){
    var myPlace = {};    
    myPlace.place_id = place.place_id;
    myPlace.position = place.geometry.location.toString();
    myPlace.name = place.name;

    var address;    
    if (place.vicinity !== undefined) {
      address = place.vicinity;
    } else if (place.formatted_address !== undefined) {
      address = place.formatted_address;
    }
    myPlace.address = address;
    
    self.allPlaces.push(myPlace);                
  }

google.maps.event.addDomListener(window, 'load', initialize);