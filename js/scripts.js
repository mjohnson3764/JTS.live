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

const emails = ["sales@johnsonturbine.com", "shop@johnsonturbine.com"];

const emailHolder = document.getElementById("email-holder");
const emailPrincipal = document.getElementById("email-principal");
if (emailHolder) {
  this.setTimeout(function () {
    emailPrincipal.href = `mailto:${emails[0]}`;
    for (email of emails) {
      const a = document.createElement("a");
      a.text = email;
      a.href = `mailto:${email}`;
      emailHolder.appendChild(a);
    }
  }, 1000);
}
