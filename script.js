//This is the function to enable functionality of the darkmode button.
function toggleDarkMode() {
  // Selects the <body> element.
  const body = document.body;``
  // Toggles the 'dark-mode' class on the body of the webpage, enabling the altered style settings in the CSS.
  body.classList.toggle('dark-mode');
}

// This is the function for the navigation bar toggle button. The 'navbarlinks' variable was set to the 'navbarLinks' class in HTML to enable functionality
// to the correct element on the webpage. A simple if/else statement was used to hide/show the navigation bar depending on the current state of the navigation
//bar. If it is shown, when the toggle button is clicked, the reverse will be true.
function toggleNav() {
  var navbarLinks = document.getElementById("navbarLinks");
  if (navbarLinks.style.display === "flex") {
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.style.display = "flex";
  }
}

  // This JavaScript code listens for if the user is on the homepage.
  document.addEventListener("DOMContentLoaded", function () { //This line listens for if the DOM content is loaded.
    if (window.location.pathname === "/") { //If the above listener is true, the callback function is run and then if the window location returns the root of the website, '/', which is the homepage,
      document.body.classList.add("homepage"); //the homepage class is added to the classlist of the body, allowing for different styling to be added to the body, which contains the homepage, that does not apply to
    } //other webpages. This is why the "homepage" class is in the body on the homepage HTML, but not on any other webpages.
  });

  //Creating the script needed for the interactive map functionality
  //The map is initiated so that it will load with the webpage. The 'location' variable is set to the LNG and LAT of The Britannia Inn, so that the script can center the map correctly.
  //The 'map' variable is set to a new map that will call the "map" ID set in the HTML. Zoom is set to 15 and center is set to the location variable previously set. A marker variable is then
  //created so that when the map initialises, it is loaded with a marker corresponding to the location variable, which is The Britannia Inn 
  function initMap() {
    var location = {lat: 51.19513, lng: -3.46577};
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, 
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }