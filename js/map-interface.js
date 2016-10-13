var googleMap = require('./../js/map.js').googleMapModule;
var apiKey = require('./../.env').apiKey;
var mapObject;
var infoWindows = [];
var userLocation;
var bikeStores = [];
$(document).ready(function() {
  $('#show-map').click(function() {
    locateUser();
  });
});

function locateUser() {
  if (navigator.geolocation) {
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess,
      geolocationError, positionOptions);
  } else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords
    .longitude);
  userLocation = userLatLng;
  var myOptions = {
    zoom: 13,
    center: userLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  var contentString = 'You Are Here';
  var infowindow0 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow0);
  var marker = new google.maps.Marker({
    map: mapObject,
    position: userLatLng,
    icon: 'http://maps.google.com/mapfiles/arrow.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow0.open(mapObject, this);
  });
  var contentString = 'H&B Jewelry & Loan';
  var infowindow1 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow1);
  var pawnShop1 = {
    lat: 45.519104,
    lng: -122.674709
  };
  var marker = new google.maps.Marker({
    position: pawnShop1,
    map: mapObject,
    title: 'H&B Jewelry & Loan',
    icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow1.open(mapObject, this);
  });
  contentString = 'Silver Lining Jewelry & Loan';
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow2);
  var pawnShop2 = {
    lat: 45.526233,
    lng: -122.643930
  };
  var marker = new google.maps.Marker({
    position: pawnShop2,
    map: mapObject,
    title: 'Silver Lining Jewelry & Loan',
    icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow2.open(mapObject, this);
  });
  contentString = 'Aces Quick Cash';
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow3);
  var pawnShop3 = {
    lat: 45.505129,
    lng: -122.611575
  };
  var marker = new google.maps.Marker({
    position: pawnShop3,
    map: mapObject,
    title: 'Aces Quick Cash',
    icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow3.open(mapObject, this);
  });
  contentString = 'Hawkers Locker';
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow4);
  var pawnShop4 = {
    lat: 45.529779,
    lng: -122.579387
  };
  var marker = new google.maps.Marker({
    position: pawnShop4,
    map: mapObject,
    title: 'Hawkers Locker',
    icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow4.open(mapObject, this);
  });
  contentString = 'USA Pawn & Jewelry Co';
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString
  });
  infoWindows.push(infowindow5);
  var pawnShop5 = {
    lat: 45.498349,
    lng: -122.580266
  };
  var marker = new google.maps.Marker({
    position: pawnShop5,
    map: mapObject,
    title: 'USA Pawn & Jewelry Co',
    icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
  });
  marker.addListener('click', function() {
    infoWindows.forEach(function(value) {
      value.close();
    });
    infowindow5.open(mapObject, this);
  });
  getBikeStores();
}

function geolocationError(positionError) {
  alert(positionError);
}

function getBikeStores() {
  var url =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + apiKey + "&location=" +
    userLocation.lat() + "," + userLocation.lng() +
    "&radius=2000&type=bicycle_store";
  $.getJSON(url).then(function(response) {
    response.results.forEach(function(result) {
      var storeMarker = new google.maps.Marker({
        position: {
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng
        },
        map: mapObject,
        title: result.name,
        icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
      });
      bikeStores.push(storeMarker);
    });
  });
}
