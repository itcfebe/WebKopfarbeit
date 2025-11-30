// Enables the Anfang button if scrolled down a bit.
function enableToTopButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Binds the Anfang button display to onScroll event.
window.addEventListener("scroll", enableToTopButton);

// Scroll to Top when using this function.
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
// TODO: Function switching to next image displayed in the gallery.

// TODO: Function switching to previous image displayed in the gallery.

// TODO: Add timer event with next image as callback to automatically change images after x seconds.
