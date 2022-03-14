var backToTopButton = document.getElementById("toTop");
backToTopButton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

var navBarTogglerButton = document.getElementById("navbar-toggler");
var modal = document.getElementById("modal");

var body = document.body;

navBarTogglerButton.addEventListener("click", function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
});

var modalCloseButton = document.getElementById("modal-close-button");
modalCloseButton.addEventListener("click", function () {
  modal.style.display = "none";
  body.style.overflow = "unset";
});
