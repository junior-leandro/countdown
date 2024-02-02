const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const targetElement = document.querySelector("[data-target]");

const calendar = document.getElementById("date")


targetElement.innerHTML = calendar.value;

calendar.addEventListener('change', () => {
    targetElement.innerHTML = calendar.value; });