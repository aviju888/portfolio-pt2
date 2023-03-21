var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementById("slideshow-container").getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Add click event listener to each navigation link
var navLinks = document.querySelectorAll('nav ul li a');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // Remove active class from all navigation links
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    // Add active class to the clicked navigation link
    this.classList.add('active');
  });
}
