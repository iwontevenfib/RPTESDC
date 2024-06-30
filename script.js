
  
/* mobile menu
const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('links-container')[0]
openmenu.addEventListener('click', () => {
  nav.classList.toggle('active1')
})



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
    };
  });
};   




//IMAGE ON CLICK

document.querySelectorAll('.grid-container img').forEach(image => {
  image.onclick = () => {
   document.querySelector('.popup-image').style.display = 'block';
   document.querySelector('.popup-image img').src = image.getAttribute('src');
  };
   });

   document.querySelector('.popup-image span').onclick = () => {
       document.querySelector('.popup-image').style.display = 'none';
   };*/


   // Mobile menu
(function() {
  const openmenu = document.getElementsByClassName('menu-btn')[0];
  const nav = document.getElementsByClassName('links-container')[0];
  if (openmenu && nav) {
      openmenu.addEventListener('click', () => {
          nav.classList.toggle('active1');
      });
  }
})();



// FAQ accordion
(function() {
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          const panel = this.nextElementSibling;
          if (panel) {
              panel.style.display = (panel.style.display === "block") ? "none" : "block";
          }
      });
  }
})();

// Image on click
(function() {
  const images = document.querySelectorAll('.grid-container img');
  const popupImage = document.querySelector('.popup-image');
  const popupImageSpan = document.querySelector('.popup-image span');
  if (popupImage && popupImageSpan) {
      images.forEach(image => {
          image.addEventListener('click', () => {
              popupImage.style.display = 'block';
              const popupImageTag = popupImage.querySelector('img');
              if (popupImageTag) {
                  popupImageTag.src = image.getAttribute('src');
              }
          });
      });

      popupImageSpan.addEventListener('click', () => {
          popupImage.style.display = 'none';
      });
  }
})();



  const slides = document.querySelectorAll('.main-sec-bg-slider .slide');
  let currentSlide = 0;

  slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  
  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Change image every 5 seconds

  

  