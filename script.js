const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const targetElement = document.querySelector("[data-target]");

const calendar = document.getElementById("date")

const changeDateFormat = date => {
  const [yy, mm, dd] = date.split(/-/g);
  return `${dd}/${mm}/${yy}`;
};

targetElement.innerHTML = changeDateFormat(calendar.value);

calendar.addEventListener('change', () => {

  targetElement.innerHTML = changeDateFormat(calendar.value);
});

const render = (days, hours, minutes, seconds) => {

  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
  
};

const countdown = () => {
  const now = new Date();
  const targetData = calendar.valueAsNumber;
  const timeLeft = targetData - now;


  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds)
  

}

setInterval (countdown, 1000);