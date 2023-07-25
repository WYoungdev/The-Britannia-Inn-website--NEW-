//This is the function to enable the dark mode button to function.
function toggleDarkMode() {
  // Get the <body> element
  const body = document.body;

  // Toggle the 'dark-mode' class on the body
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