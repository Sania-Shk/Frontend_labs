let icon = document.querySelectorAll(".icon");

let colors = ["#B9C1B4", "#F9C5AD", "#DD9759", "#8B9767", "#3E3935", "#25725E"];
icon.forEach((element) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  element.style.color = randomColor;
});

let continueLoop = document.querySelector("#continueLoop");
let dot = ".";
let speed = 500;
count = 0;
function blinker() {
  setInterval(() => {
    continueLoop.textContent = dot.repeat(count);
    count++;
    if (count > 3) {
      count = 0;
    }
  }, speed);
}

blinker();
