const clock = document.getElementById("clock");
let timer = null;
let elapsed = 0;
let starttime = 0;
let isrunning = false;
function start() {
  if (!isrunning) {
    starttime = Date.now() - elapsed;
    timer = setInterval(update, 10);
    isrunning = true;
  }
}
function stop() {
  if (isrunning) {
    clearInterval(timer);
    elapsed = Date.now() - starttime;
    isrunning = false;
  }
}
function reset() {
  clearInterval(timer);
  elapsed = 0;
  isrunning = false;
  clock.textContent="00:00:00:00"
}
function update() {
  const current = Date.now();
  elapsed = current - starttime;
  let hours = Math.floor(elapsed / (1000 * 60 * 60));
  let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsed / 1000) % 60);
  let ms = Math.floor((elapsed % 1000) / 10);
  clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(ms)}`;
}
function pad(number) {
  return number.toString().padStart(2, "0");
}