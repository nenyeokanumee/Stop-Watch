const pauseButton = document.getElementById("pauseButton");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
let timer = null;
let display = document.getElementById("stopWatchDisplay");
let [second, minute, hour] = [0, 0, 0];

function clockFormatter(clockHand) {
  return clockHand < 10 ? "0" + clockHand : clockHand;
}

function stopWatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  if (hour == 24) {
    hour = 0;
  }
  let formattedHour = clockFormatter(hour);
  let formattedMinute = clockFormatter(minute);
  let formattedSecond = clockFormatter(second);

  display.textContent = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

function startTimer() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function resetTimer() {
  clearInterval(timer);
  [second, minute, hour] = [0, 0, 0];
  display.textContent = `00:00:00`;
}

function pauseTimer() {
  clearInterval(timer);
}
pauseButton.addEventListener('click', pauseTimer);
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);