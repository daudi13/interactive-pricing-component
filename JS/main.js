function el(e) {
    return document.querySelector(e);
}

const sliderRange = el("#TheRange");
const rate = el("#rate");
const rateMobile = el("#rateMobil")

sliderRange.addEventListener("input", () =>
{
        rate.textContent = "$" +
        sliderRange.value + ".00";
    rateMobile.textContent = "$" +
        sliderRange.value + ".00";
    sliderRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderRange.value / 32 * 100}%, hsl(224, 65%, 95%) ${sliderRange.value / 32 * 100}%, hsl(224, 65%, 95%) 100%)`;
});