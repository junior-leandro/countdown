const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const targetElement = document.querySelector("[data-target]");

const calendar = document.getElementById("date")

const changeDateFormatTo = date => {
    const [yy, mm, dd] = date.split(/-/g);
    return `${dd}/${mm}/${yy}`;
  };

  targetElement.innerHTML = changeDateFormatTo(calendar.value); 

calendar.addEventListener('change', () => {

    targetElement.innerHTML = changeDateFormatTo(calendar.value); 
});


  


