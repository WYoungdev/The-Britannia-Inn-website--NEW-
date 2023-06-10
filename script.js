// Script for the Google maps API //

// Initialising the map //
var map = new google.maps.Map(document.getElementById("map"), {
  center: new google.maps.LatLng(latitude, longitude),
  zoom: 15
});

// Adding The Britannia Inn as a marker on the map //
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(51.195160093748925, -3.465345606871718),
  map: map
});
