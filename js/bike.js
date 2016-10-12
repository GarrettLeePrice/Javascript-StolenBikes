var stolenBike = function(){
  var userIp;

};

stolenBike.prototype.getIp = function(){
  $.getJSON("http://ipinfo.io").then(function(response) {
    this.userIp = response.ip;
    console.log(this.userIp);
  }, "json");
};

stolenBike.prototype.lastStolenBikes = function(location){
  console.log(this.userIp);
  var apiUrl = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=10&proximity=" + location + "&proximity_square=15";
  console.log(apiUrl);
  $.getJSON(apiUrl).then( function(response){
    var bikes = response.bikes;
    $.each(bikes, function(index, value){
      $(".stolenBikeList ol").append("<li>" + value.title + "</li>");
    });
  });
};

stolenBike.prototype.findStolenBikes = function(color, location){
  $(".searchResults ol").text("");
  var apiUrl = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=10&colors=" + color + "&proximity=" + location + "&proximity_square=15";
  console.log(apiUrl);
  $.getJSON(apiUrl).then( function(response){
    var bikes = response.bikes;
    $.each(bikes, function(index, value){
      $(".searchResults ol").append("<li>" + value.title + "</li>");
    });
  });
};


stolenBike.prototype.brandStolenBikes =
function(brand, location){
  $(".searchBrandResults ol").text("");
  var apiUrl =  "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&manufacturer=" + brand + "&proximity=" + location + "&proximity_square=15";
  $.getJSON(apiUrl).then( function(response){
    $.each(response.bikes, function(index, value){
      $(".searchBrandResults ol").append("<li>" + value.title + "</li>");
    });
  });
};

stolenBike.prototype.dateStolenBikes =
function(date, location){
  $(".searchDateResults ol").text("");
  var apiUrl =  "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=" + location + "&proximity_square=15&stolen_after="+ date;
  $.getJSON(apiUrl).then( function(response){
    $.each(response.bikes, function(index, value){
      $(".searchDateResults ol").append("<li>" + value.title + "</li>");
    });
  });
};







exports.stolenBikeModule = stolenBike;
