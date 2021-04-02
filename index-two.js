const slider = document.getElementById("TheRangeMobil");
const output = document.getElementById("rateMobil");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}