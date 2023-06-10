// Script for the Google maps API //
let map, InfoWindow;
function initMap(){
    const britannia = {lat: 51.0126235, lng: -3.120104};
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14,
        center: britannia,
        mapTypeId: 'satellite',
    });
    const marker = new google.maps.Marker({
        position: britannia,
        map: map,
    });
    InfoWindow = new google.maps.InfoWindow();
    const locationbutton = document.createElement("button");
    locationbutton.textContent = ("pan to current location");
    locationbutton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationbutton);
    locationbutton.addEventListener("click", ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const pos = {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude,
                    };
                    InfoWindow.setPosition(pos);
                    InfoWindow.setContent("Location found");
                    InfoWindow.open(map);
                    map.setCenter(pos);
                    },
                    ()=>{
                        handlelocationError(true,InfoWindow,map.getCenter());
                    }
            )}
            else{
                handlelocationError(false,InfoWindow,map.getCenter());
            }
    })
}
function handlelocationError(browserHasGeolocation,InfoWindow,pos){
    InfoWindow.setPosition(pos);
    InfoWindow.setContent(
        browserHasGeolocation
        ?"Error: The geolocation service failed."
        :"Error: Your browser doesn't support geolocation"
    );
}
window.initMap = initMap;