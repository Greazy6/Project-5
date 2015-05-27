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

//function initialize(){
	//var kenyaLoc = new google.maps.LatLng(-4.043477, 39.668206);
	//var mapOptions ={
		//zoom : 15,
		//center: kenyaLoc
	//};
	//getPlace();

	//var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	//var marker = new google.maps.Marker({
	//position : kenyaLoc,
	//animation: google.maps.Animation.BOUNCE,
	//draggable : true
//});
	//marker.setMap(map);


	//var input = (document.getElementById('mapsearch'));
	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	//var list = (document.getElementById('list'));
	//map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(list);

	//var title = (document.getElementById('title'));
	//map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);


	//var searchBox = new google.maps.places.SearchBox((input));

	//google.maps.event.addListener(searchBox, 'places_changed', function() {
		//var places = searchBox.getPlaces();

		//var bounds = new google.maps.LatLngBounds();

		//for (var i =0, place; i<10; i++){
			//if(places[i]!== undefined){
			//place = places[i];

			//bounds.extend(place.geometry.location);
			//}
		//}
		//map.fitBounds(bounds);
	//});
//}
//function getPlaces() {
    //var request = {
      //location: kenyaLoc,
      //radius: 600,
      //types: ['restaurant', 'bar', 'cafe', 'food']
    //};

//function getAllPlaces(place){
    //var myPlace = {};    
    //myPlace.place_id = place.place_id;
    //myPlace.position = place.geometry.location.toString();
    //myPlace.name = place.name;

    //var address;    
    //if (place.vicinity !== undefined) {
      //address = place.vicinity;
    //} else if (place.formatted_address !== undefined) {
      //address = place.formatted_address;
    //}
    //myPlace.address = address;
    
    //self.allPlaces.push(myPlace);                
  //}

//google.maps.event.addDomListener(window, 'load', initialize);


//Org code

//var map;
//var infowindow;

//function initialize() {
  //var pyrmont = new google.maps.LatLng(-4.043477, 39.668206);

  //map = new google.maps.Map(document.getElementById('map-canvas'), {
    //center: pyrmont,
    //zoom: 15
  //});

  //var request = {
    //location: pyrmont,
    //radius: 600,
    //types: ['store']
  //};
  //infowindow = new google.maps.InfoWindow();
  //var service = new google.maps.places.PlacesService(map);
  //service.nearbySearch(request, callback);
//}

//function callback(results, status) {
  //if (status == google.maps.places.PlacesServiceStatus.OK) {
    //for (var i = 0; i < results.length; i++) {
      //createMarker(results[i]);
    //}
  //}
//}




//function createMarker(place) {
  //var placeLoc = place.geometry.location;
  //var marker = new google.maps.Marker({
    //map: map,
    //position: place.geometry.location
  //});

  //google.maps.event.addListener(marker, 'click', function() {
    //infowindow.setContent(place.name);
    //infowindow.open(map, this);
  //});
//}
//var input = (document.getElementById('mapsearch'));
//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//var searchBox = new google.maps.places.SearchBox((input));

	//google.maps.event.addListener(searchBox, 'places_changed', function() {
		//var places = searchBox.getPlaces();

		//var bounds = new google.maps.LatLngBounds();

		//for (var i =0, place; i<10; i++){
			//if(places[i]!== undefined){
			//place = places[i];

			//bounds.extend(place.geometry.location);
			//}
		//}
		//map.fitBounds(bounds);
	//});
//}




//var list = (document.getElementById('list'));
//map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(list);

//var title = (document.getElementById('title'));
//map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);

//google.maps.event.addDomListener(window, 'load', initialize);

//function appViewModel() {
  //var self = this; 
  //var map;
  //var service;
  //var infowindow;
  //var lat = '';
  //var lng = '';
  //var kenyaLoc = new google.maps.LatLng(-4.043477, 39.668206);
  //var markersArray = [];  
  //var $loc = $('#title');

  // array to hold info for knockout
  //self.allPlaces = ko.observableArray([]);

  // string to hold foursquare information
  //self.foursquareInfo = '';

  // Finds the center of the map to get lat and lng values
  //function computeCenter() {
    //var latAndLng = map.getCenter();
      //lat = latAndLng.lat();
      //lng = latAndLng.lng(); 
  //}

  //var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+$loc.text()+'&format=json&callback=wikiCallback';
  //console.log($loc.text());
    
  //self.showLink = function() {
    //var wikiRequestTimeout = setTimeout(function(){
      //$loc.append("<p>failed to get wikipedia resources</p>");
    //}, 3000);
    //$.ajax({
     //url: wikiUrl,
     //dataType: "jsonp",
     //success: function (response){
       //var articleList = response[1];
       //for(i =0; i < articleList.length; i++){
        //articleStr = articleList[i];
        //var url = 'http://en.wikipedia.org/wiki/' + articleStr;
        //$loc.append('<p><a href="' + url + '">' + articleStr + '</a></p>');
      
      //}
      //clearTimeout(wikiRequestTimeout);
    //}
    //});
  //};
  
 
  /*
  Loads the map as well as position the search bar and list.  On a search, clearOverlays removes all markers already on the map and removes all info in allPlaces.  Then, once a search is complete, populates more markers and sends the info to getAllPlaces to populate allPlaces again.
  */
  //function initialize() {
    //map = new google.maps.Map(document.getElementById('map-canvas'), {
    //center: kenyaLoc,    
    //});
    //getPlaces();
    //computeCenter();       

    //var list = (document.getElementById('list'));
    //map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(list);
    //var input = (document.getElementById('pac-input'));
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    //var title = (document.getElementById('title'));
    //map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);

    //var searchBox = new google.maps.places.SearchBox(
      //(input));
    //google.maps.event.addListener(searchBox, 'places_changed', function() {
      //var places = searchBox.getPlaces();
      //clearOverlays();
      //self.allPlaces.removeAll();
      //var bounds = new google.maps.LatLngBounds();  


      //for(var i=0, place; i<10; i++){
        //if (places[i] !== undefined){
          //place = places[i];

          //getAllPlaces(place);
          //createMarker(place);
          //bounds.extend(place.geometry.location);          
        //}        
      //} 
      //map.fitBounds(bounds); 
      //computeCenter();                
    //});
    //google.maps.event.addListener(map, 'bounds_changed', function(){
      //var bounds = map.getBounds();
      //searchBox.setBounds(bounds);
    //});   
    // Handles an event where Google Maps taks too long to load
    //var timer = window.setTimeout(failedToLoad, 5000);
    //google.maps.event.addListener(map, 'tilesloaded', function() {
      //window.clearTimeout(timer);
    //});
  //}
  // Will let the user know when Google Maps fails to load.
  //function failedToLoad() {
    //$('#map-canvas').html("Google Maps Failed to Load");
  //}

  /*
  Function to pre-populate the map with place types.  nearbySearch retuns up to 20 places.
  */
  //function getPlaces() {
    //var request = {
      //location: kenyaLoc,
      //radius: 600,
      //types: ['restaurant', 'bar', 'cafe', 'food']
    //};

    //infowindow = new google.maps.InfoWindow();
    //service = new google.maps.places.PlacesService(map);
    //service.nearbySearch(request, callback);    
  //}

  /*
  Gets the callback from Google and creates a marker for each place.  Sends info to getAllPlaces.
  */
  //function callback(results, status){
    //if (status == google.maps.places.PlacesServiceStatus.OK){
      //bounds = new google.maps.LatLngBounds();
      //results.forEach(function (place){
        //place.marker = createMarker(place);
        //bounds.extend(new google.maps.LatLng(
          //place.geometry.location.lat(),
          //place.geometry.location.lng()));
      //});
      //map.fitBounds(bounds);
      //results.forEach(getAllPlaces);                 
    //}
  //}

  /*
  Function to create a marker at each place.  This is called on load of the map with the pre-populated list, and also after each search.  Also sets the content of each place's infowindow.
  */
  //function createMarker(place) {
    //var marker = new google.maps.Marker({
      //map: map,
      //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      //name: place.name.toLowerCase(),
      //position: place.geometry.location,
      //place_id: place.place_id,
      //animation: google.maps.Animation.DROP
    //});    
    //var address;
    //if (place.vicinity !== undefined) {
      //address = place.vicinity;
    //} else if (place.formatted_address !== undefined) {
      //address = place.formatted_address;
    //}       
    //var contentString = '<div style="font-weight: bold">' + place.name + '</div><div>' + address + '</div>' + self.foursquareInfo ;

    //google.maps.event.addListener(marker, 'click', function() {      
      //infowindow.setContent(contentString);      
      //infowindow.open(map, this);
      //map.panTo(marker.position); 
      //marker.setAnimation(google.maps.Animation.BOUNCE);
      //setTimeout(function(){marker.setAnimation(null);}, 1450);
    //});

    //markersArray.push(marker);
    //return marker;
  //}

  // Foursquare Credentials
  //var clientID = 'UVSLUM00CXLUB1P0UKPJSLDTG0VVYQ2E20W1C045PBU1OJNZ';
  //var clientSecret = 'JERNMOY0EUXF4LGZTWDLLJFR2CXWDSZWL1JU2W5CS1POPZBF';

  //this.getFoursquareInfo = function(point) {
    // creats our foursquare URL
    //var foursquareURL = 'https://api.foursquare.com/v2/venues/search?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20150321' + '&ll=' +lat+ ',' +lng+ '&query=\'' +point.name +'\'&limit=1';
    
    //$.getJSON(foursquareURL)
      //.done(function(response) {
        //self.foursquareInfo = '<p>Foursquare:<br>';
        //var venue = response.response.venues[0];         
        // Name       
        //var venueName = venue.name;
            //if (venueName !== null && venueName !== undefined) {
                //self.foursquareInfo += 'Name: ' +
                  //venueName + '<br>';
            //} else {
              //self.foursquareInfo += 'Name: Not Found' + '<br>';
            //}   
        // Phone Number     
        //var phoneNum = venue.contact.formattedPhone;
            //if (phoneNum !== null && phoneNum !== undefined) {
                //self.foursquareInfo += 'Phone: ' +
                  //phoneNum + '<br>';
            //} else {
              //self.foursquareInfo += 'Phone: Not Found' + '<br>';
            //}
        // Twitter
        //var twitterId = venue.contact.twitter;
            //if (twitterId !== null && twitterId !== undefined) {
              //self.foursquareInfo += 'twitter: @' +
                  //twitterId + '<br>';
            //} else {
              //self.foursquareInfo += 'twitter: Not Found' + '<br>';
            //}
      //});
  //};  
 
  /*
  Function that will pan to the position and open an info window of an item clicked in the list.
  */
  //self.clickMarker = function(place) {
    //var marker;

    //for(var e = 0; e < markersArray.length; e++) {      
      //if(place.place_id === markersArray[e].place_id) { 
        //marker = markersArray[e];
        //break; 
      //}
    //} 
    //self.getFoursquareInfo(place);         
    //map.panTo(marker.position);

    // waits 300 milliseconds for the getFoursquare async function to finish
    //setTimeout(function() {
      //var contentString = '<div style="font-weight: bold">' + place.name + '</div><div>' + place.address + '</div>' + self.foursquareInfo;
      //infowindow.setContent(contentString);
      //infowindow.open(map, marker); 
      //marker.setAnimation(google.maps.Animation.DROP); 
    //}, 300);     
  //};


  /*
  function that gets the information from all the places that we are going to search and also pre-populate.  Pushes this info to the allPlaces array for knockout.
  */
  //function getAllPlaces(place){
    //var myPlace = {};    
    //myPlace.place_id = place.place_id;
    //myPlace.position = place.geometry.location.toString();
    //myPlace.name = place.name;

    //var address;    
    //if (place.vicinity !== undefined) {
      //address = place.vicinity;
    //} else if (place.formatted_address !== undefined) {
      //address = place.formatted_address;
    //}
    //myPlace.address = address;
    
    //self.allPlaces.push(myPlace);                
  //}


  /*
  called after a search, this function clears any markers in the markersArray so that we can start with fresh map with new markers.
  */
  //function clearOverlays() {
    //for (var i = 0; i < markersArray.length; i++ ) {
     //markersArray[i].setMap(null);
    //}
    //markersArray.length = 0;
  //} 

  //google.maps.event.addDomListener(window, 'load', initialize);
//}

//$(function(){
//ko.applyBindings(new appViewModel());
//});

function appViewModel() {
var self = this; 
var map;
var service;
var infowindow;
var lat = '';
var lng = '';
var kenyaLoc = new google.maps.LatLng(-4.043477, 39.668206);
var markersArray = []; 
var $loc = $('#title');
var $city = $('#city');
var search = '';

// array to hold info for knockout
self.allPlaces = ko.observableArray([]);

// string to hold foursquare information
self.foursquareInfo = '';

// Finds the center of the map to get lat and lng values
function computeCenter() {
var latAndLng = map.getCenter();
lat = latAndLng.lat();
lng = latAndLng.lng(); 

var search = '';

geocoder = new google.maps.Geocoder();

geocoder.geocode({'latLng': latAndLng}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
//Check result 0
var result = results[0];
//look for locality tag and administrative_area_level_1
var city = "";
var state = "";
for(var i=0, len=result.address_components.length; i<len; i++) {
var ac = result.address_components[i];
if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
}
$city.html(city+', '+state); 
search += $city.text(); 
console.log(search); 
}
});

}

console.log(search);

var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ search +'&format=json&callback=wikiCallback';

self.showLink = function() {
var wikiRequestTimeout = setTimeout(function(){
$loc.append("<p>failed to get wikipedia resources</p>");
}, 3000);
$.ajax({
url: wikiUrl,
dataType: "jsonp",
success: function (response){
var articleList = response[1];
for(i =0; i < articleList.length; i++){
articleStr = articleList[i];
var url = 'http://en.wikipedia.org/wiki/' + articleStr;
$city.append('<p><a href="' + url + '">' + articleStr + '</a></p>');

}
clearTimeout(wikiRequestTimeout);
}
});
};


/*
Loads the map as well as position the search bar and list. On a search, clearOverlays removes all markers already on the map and removes all info in allPlaces. Then, once a search is complete, populates more markers and sends the info to getAllPlaces to populate allPlaces again.
*/
function initialize() {
map = new google.maps.Map(document.getElementById('map-canvas'), {
center: kenyaLoc, 
});
getPlaces();
computeCenter(); 

var list = (document.getElementById('list'));
map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(list);
var input = (document.getElementById('pac-input'));
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
var title = (document.getElementById('title'));
map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);

var searchBox = new google.maps.places.SearchBox(
(input));
google.maps.event.addListener(searchBox, 'places_changed', function() {
var places = searchBox.getPlaces();
clearOverlays();
self.allPlaces.removeAll();
var bounds = new google.maps.LatLngBounds(); 


for(var i=0, place; i<10; i++){
if (places[i] !== undefined){
place = places[i];

getAllPlaces(place);
createMarker(place);
bounds.extend(place.geometry.location); 
} 
} 
map.fitBounds(bounds); 
computeCenter(); 
});
google.maps.event.addListener(map, 'bounds_changed', function(){
var bounds = map.getBounds();
searchBox.setBounds(bounds);
}); 
// Handles an event where Google Maps taks too long to load
var timer = window.setTimeout(failedToLoad, 5000);
google.maps.event.addListener(map, 'tilesloaded', function() {
window.clearTimeout(timer);
});
}
// Will let the user know when Google Maps fails to load.
function failedToLoad() {
$('#map-canvas').html("Google Maps Failed to Load");
}

/*
Function to pre-populate the map with place types. nearbySearch retuns up to 20 places.
*/
function getPlaces() {
var request = {
location: kenyaLoc,
radius: 600,
types: ['restaurant', 'bar', 'cafe', 'food']
};

infowindow = new google.maps.InfoWindow();
service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback); 
}

/*
Gets the callback from Google and creates a marker for each place. Sends info to getAllPlaces.
*/
function callback(results, status){
if (status == google.maps.places.PlacesServiceStatus.OK){
bounds = new google.maps.LatLngBounds();
results.forEach(function (place){
place.marker = createMarker(place);
bounds.extend(new google.maps.LatLng(
place.geometry.location.lat(),
place.geometry.location.lng()));
});
map.fitBounds(bounds);
results.forEach(getAllPlaces); 
}
}

/*
Function to create a marker at each place. This is called on load of the map with the pre-populated list, and also after each search. Also sets the content of each place's infowindow.
*/
function createMarker(place) {
var marker = new google.maps.Marker({
map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
name: place.name.toLowerCase(),
position: place.geometry.location,
place_id: place.place_id,
animation: google.maps.Animation.DROP
}); 
var address;
if (place.vicinity !== undefined) {
address = place.vicinity;
} else if (place.formatted_address !== undefined) {
address = place.formatted_address;
} 
var contentString = '<div style="font-weight: bold">' + place.name + '</div><div>' + address + '</div>' + self.foursquareInfo ;

google.maps.event.addListener(marker, 'click', function() { 
infowindow.setContent(contentString); 
infowindow.open(map, this);
map.panTo(marker.position); 
marker.setAnimation(google.maps.Animation.BOUNCE);
setTimeout(function(){marker.setAnimation(null);}, 1450);
});

markersArray.push(marker);
return marker;
}

// Foursquare Credentials
var clientID = 'UVSLUM00CXLUB1P0UKPJSLDTG0VVYQ2E20W1C045PBU1OJNZ';
var clientSecret = 'JERNMOY0EUXF4LGZTWDLLJFR2CXWDSZWL1JU2W5CS1POPZBF';

this.getFoursquareInfo = function(point) {
// creats our foursquare URL
var foursquareURL = 'https://api.foursquare.com/v2/venues/search?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20150321' + '&ll=' +lat+ ',' +lng+ '&query=\'' +point.name +'\'&limit=1';

$.getJSON(foursquareURL)
.done(function(response) {
self.foursquareInfo = '<p>Foursquare:<br>';
var venue = response.response.venues[0]; 
// Name 
var venueName = venue.name;
if (venueName !== null && venueName !== undefined) {
self.foursquareInfo += 'Name: ' +
venueName + '<br>';
} else {
self.foursquareInfo += 'Name: Not Found' + '<br>';
} 
// Phone Number 
var phoneNum = venue.contact.formattedPhone;
if (phoneNum !== null && phoneNum !== undefined) {
self.foursquareInfo += 'Phone: ' +
phoneNum + '<br>';
} else {
self.foursquareInfo += 'Phone: Not Found' + '<br>';
}
// Twitter
var twitterId = venue.contact.twitter;
if (twitterId !== null && twitterId !== undefined) {
self.foursquareInfo += 'twitter: @' +
twitterId + '<br>';
} else {
self.foursquareInfo += 'twitter: Not Found' + '<br>';
}
});
}; 

/*
Function that will pan to the position and open an info window of an item clicked in the list.
*/
self.clickMarker = function(place) {
var marker;

for(var e = 0; e < markersArray.length; e++) { 
if(place.place_id === markersArray[e].place_id) { 
marker = markersArray[e];
break; 
}
} 
self.getFoursquareInfo(place); 
map.panTo(marker.position);

// waits 300 milliseconds for the getFoursquare async function to finish
setTimeout(function() {
var contentString = '<div style="font-weight: bold">' + place.name + '</div><div>' + place.address + '</div>' + self.foursquareInfo;
infowindow.setContent(contentString);
infowindow.open(map, marker); 
marker.setAnimation(google.maps.Animation.DROP); 
}, 300); 
};


/*
function that gets the information from all the places that we are going to search and also pre-populate. Pushes this info to the allPlaces array for knockout.
*/
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


/*
called after a search, this function clears any markers in the markersArray so that we can start with fresh map with new markers.
*/
function clearOverlays() {
for (var i = 0; i < markersArray.length; i++ ) {
markersArray[i].setMap(null);
}
markersArray.length = 0;
} 

google.maps.event.addDomListener(window, 'load', initialize);
}

$(function(){
ko.applyBindings(new appViewModel());
});