const shopButton = document.getElementById('shopLink');
const slider = document.getElementById('slider');

function toggleSlider(event) {
    let isClickInside = slider.contains(event.target) || shopButton.contains(event.target);

    if (!isClickInside) {
        slider.classList.add('hidden');
    }
}

shopButton.addEventListener('click', function () {
    slider.classList.remove('hidden');
    console.log("shop stisknuto")
    console.log(slider)
});

document.addEventListener('click', toggleSlider);