// An event listener was used to handle clicking on navigation links, so that the website knows the currently active tab.
var navLinks = document.querySelectorAll(".navbar-links li a"); //This selects all of the elements within the navigation bar list and stores them in the navLinks variable.
for (var i = 0; i < navLinks.length; i++) { //This starts a for-loop that iterates through every element in the newly created navLinks variable. The for loop increments by 1 for each index until the length of the variable items is reached.
  navLinks[i].addEventListener("click", function () { //This line listens for the click of the user. When the user clicks the toggle button, the for loop below begins.
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active"); //This removes the 'active' class from all navigation options.
    }
    this.classList.add("active"); //This readds the 'active' class to whichever navigation option the user clicked, applying the 'active' class styling to that option and showing the user which webpage they are currently on.
  }); //Ends the listener.
}