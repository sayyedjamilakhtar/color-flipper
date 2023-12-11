const colorCode = document.querySelector(".color-code");
const colorBtn = document.querySelector(".color-btn");
const colorSection = document.querySelector(".color-picker");

const colorCodeArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

colorBtn.addEventListener("click", function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorCodeArray.random();
  }
  colorCode.textContent = color;
  colorCode.style.color = color;
  colorSection.style.background = color;
});

function randomArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomArr(colorCodeArray));
