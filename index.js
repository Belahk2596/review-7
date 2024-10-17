const time = new Date();
const hours = time.getHours();
const mins = time.getMinutes();

const alertButton = document.querySelector(".alert");
alertButton.addEventListener("click", function () {
  alert("Stop clicking the button!!!");
});
const currentTime = document.querySelector("#currentTime");
const logButton = document.querySelector(".log");
logButton.addEventListener("click", function () {
  currentTime.innerText = `${currentTime.innerText} ${hours}:${mins}`;
});

const blueButton = document.querySelector(".blue");
blueButton.addEventListener("click", function () {
  blueButton.style.backgroundColor = "blue";
  whiteButton.style.backgroundColor = "blue";
  logButton.style.backgroundColor = "blue";
  alertButton.style.backgroundColor = "blue";
});
const whiteButton = document.querySelector(".white");
whiteButton.addEventListener("click", function () {
  blueButton.style.backgroundColor = "white";
  whiteButton.style.backgroundColor = "white";
  logButton.style.backgroundColor = "white";
  alertButton.style.backgroundColor = "white";
});
