
// FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}   



// mobile menu


const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('links-container')[0]

openmenu.addEventListener('click', () => {
  nav.classList.toggle('active1')
})