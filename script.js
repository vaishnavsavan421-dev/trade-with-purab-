let time = 45;
const count = document.getElementById("count");

setInterval(() => {
  if (time > 0) {
    time--;
    count.innerText = time;
  }
}, 1000);
