var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(num) {
  var slides = document.getElementsByClassName("mySlides");
  var newIndex = slideIndex + num;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (newIndex > slideIndex) {
    slideIndex = 1
    slides[slideIndex].style.display = "block";
  } else if (newIndex < slideIndex){
    slideIndex = slides.length;
    slides[slideIndex].style.display = "block";
  } else {
    slideIndex = newIndex;
    slides[newIndex].style.display = "block";
  }
}

function currentSlide(num) {
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[num].style.display = "block";
  slideIndex = num;
}
