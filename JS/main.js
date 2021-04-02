const slider = document.getElementById("TheRange");
const output = document.getElementById("rate");
const slider = document.getElementById()
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}

sliderRange.addEventListener("input", () =>
{
    sliderRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderRange.value / 32 * 100}%, hsl(224, 65%, 95%) ${sliderRange.value / 32 * 100}%, hsl(224, 65%, 95%) 100%)`;
});