let timerDisplay = document.getElementById("timer");
let playBtn = document.getElementById("play");
let resetBtn = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

// Format numbers to always be two digits (e.g., 01, 09)
function format(num) {
  return num < 10 ? "0" + num : num;
}

// Update the display
function updateDisplay() {
  timerDisplay.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// Start the timer
function startTimer() {
  if (isRunning) return;

  isRunning = true;

  interval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

// Event listeners
playBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
 