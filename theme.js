const check = document.getElementById('checkbox');
const count = document.getElementById('countdown');
const input = document.getElementById('input');

let color = "white";

check.addEventListener('change', () => {

    document.body.classList.toggle('light');

    if (color === "white") {
        input.style.color = "#000000";
        count.style.color = "#000000";
        color = "black"
    } else {
        input.style.color = "#FFFFFF";
        count.style.color = "#FFFFFF"
        color = "white"
    }

});