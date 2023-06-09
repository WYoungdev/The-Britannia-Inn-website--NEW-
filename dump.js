// Script for the Google maps API //
<script>
  function initMap() {
    var mapOptions = {
      center: { lat: 51.195139923437374, lng: -3.4657318449463763 },
      zoom: 16,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
</script>