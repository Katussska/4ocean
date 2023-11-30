var shopLink = document.getElementById('shopLink');
var slider = document.getElementById('slider');

shopLink.addEventListener('click', function (event) {
    event.stopPropagation(); // Zabraňuje "propagation" kliknutí na další elementy
    slider.classList.toggle('slider-visible');
});

document.addEventListener('click', function (event) {
    var isClickInsideSlider = slider.contains(event.target);
    var isClickOnShopLink = event.target === shopLink || shopLink.contains(event.target);

    if (!isClickInsideSlider && !isClickOnShopLink) {
        slider.classList.remove('slider-visible');
    }
});
