const slides = document.querySelectorAll("#slides > img");
console.log(slides);
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  /* 모든 이미지를 가리고나서 해당 번호만 보여주기 */
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[n].style.display = 'block';
}

function prevSlide() {
  if(current > 0) {
    current -= 1;
  } else {
    current = slides.length - 1;
  }
  showSlides(current);
}

function nextSlide() {
  if(current < slides.length -1) {
    current += 1;
  } else {
    current = 0;
  }
  showSlides(current);
}