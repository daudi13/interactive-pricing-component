const slider = document.getElementById("TheRange");
const output = document.getElementById("rate");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}