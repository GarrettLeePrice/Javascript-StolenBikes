var googleMap = require('./../js/map.js').googleMapModule;

function initializeMap(){
  var userLatLng = new google.maps.LatLng(-34.397, 150.644);


  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  return mapObject;
}
$(document).ready(function() {

  var map = initializeMap();
  var myLatLng = {lat: -25.363, lng: 131.044};
  var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'Hello World!'
   });

});
