var stolenBike = require('./../js/bike.js').stolenBikeModule;


$(document).ready(function(){
  var newBike = new stolenBike();
  newBike.getIp();

  $("#searchLocation").submit(function(event) {
    event.preventDefault();
    newBike.lastStolenBikes($("#location").val());
  });

  $("#searchStolenBikes").submit(function(event) {
    event.preventDefault();
    newBike.findStolenBikes($("#searchAttributes").val(), $("#location").val());
  });

  $("#brandStolenBikes").submit(function(event) {
    event.preventDefault();
    newBike.brandStolenBikes($("#findBrand").val(), $("#location").val());
  });

  $("#dateStolenBikes").submit(function(event) {
    event.preventDefault();
    var inputDate = $("#findDate").val();
    var newDate = new Date(inputDate);
    var epochDate = newDate.getTime()/1000.0;
    newBike.dateStolenBikes(epochDate, $("#location").val());
  });


});
