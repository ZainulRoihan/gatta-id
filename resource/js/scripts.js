document.addEventListener('scroll', () => {
    const navbar = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const brand = document.querySelector('#brnd');

    if (window.scrollY > 0) {
        navbar.classList.remove('bg-opacity-10');
        navbar.classList.replace('bg-white', 'bg-blue-900');
        
    }else{
        navbar.classList.add('bg-opacity-10');
        navbar.classList.replace('bg-blue-900', 'bg-white');
        
    }

});

function openSide(){
    var side = document.querySelector('#sidebar');
    side.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeSide(){
    var side = document.querySelector('#sidebar');
    side.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-slate-200", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " bg-slate-200";
  setTimeout(showSlides, 5000);
}

function jasaWeb() {
  var buka = document.querySelector('#jWebOpen');
  var navbar = document.querySelector('#nav');
  buka.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  navbar.classList.add('hidden');
}

function jWebClose() {
  var buka = document.querySelector("#jWebOpen");
  var navbar = document.querySelector('#nav');
  buka.classList.add("hidden");
  document.body.classList.remove('overflow-hidden');
  navbar.classList.remove('hidden');
}

function jasaDesain() {
  var buka = document.querySelector('#jDesainOpen');
  var navbar = document.querySelector('#nav');
  buka.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  navbar.classList.add('hidden');
}

function jDesainClose() {
  var buka = document.querySelector("#jDesainOpen");
  var navbar = document.querySelector('#nav');
  buka.classList.add("hidden");
  document.body.classList.remove('overflow-hidden');
  navbar.classList.remove('hidden');
}

function jasaTugas() {
  var buka = document.querySelector('#jTugasOpen');
  var navbar = document.querySelector('#nav');
  buka.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  navbar.classList.add('hidden');
}

function jTugasClose() {
  var buka = document.querySelector("#jTugasOpen");
  var navbar = document.querySelector('#nav');
  buka.classList.add("hidden");
  document.body.classList.remove('overflow-hidden');
  navbar.classList.remove('hidden');
}
