const background = document.querySelector(".bg");

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
