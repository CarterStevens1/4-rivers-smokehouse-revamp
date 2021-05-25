const background = document.querySelector(".bg");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const left = document.querySelector(".left-slider");
const right = document.querySelector(".right-slider");
const containers = document.querySelectorAll(".container");
const active = document.querySelector(".active");
const sliders = document.querySelectorAll(".slider");

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  background.style.filter = `blur(${scale(load, 0, 20, 30, 0)}px`;
}
//comparing two numbers to make them equal
//num, minimum, maximum, output min, output max
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//functions

let activeSlide = 0;

right.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > containers.length - 1) {
    return;
  }

  changeSlide();
  sliderActive();
});

left.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide > containers.length - 1) {
    return;
  }

  changeSlide();
  sliderActive();
});

setInterval(() => {
  activeSlide++;

  if (activeSlide > containers.length - 1) {
    activeSlide = 0;
  }
  changeSlide();
  sliderActive();
}, 10000);

function changeSlide() {
  containers.forEach((c) => c.classList.remove("active"));

  containers[activeSlide].classList.add("active");
}

function sliderActive() {
  sliders.forEach((s) => s.classList.remove("active-slider"));

  sliders[activeSlide].classList.add("active-slider");
}

changeSlide();
