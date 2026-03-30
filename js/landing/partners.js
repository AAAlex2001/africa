function initPartnersSlider() {
    const sliderEl = document.querySelector('.partners-slider');
    if (!sliderEl) return;

    const slider = new KeenSlider(sliderEl, {
        loop: true,
        slides: { 
            perView: 1,
            spacing: 4,
        },
        breakpoints: {
            '(min-width: 770px)': {
                slides: { perView: 2, spacing: 4 },
            },
            '(min-width: 1400px)': {
                slides: { perView: 3, spacing: 4 },
            },
        },
    });

    const prevBtn = document.querySelector('.partners-arrow-prev');
    const nextBtn = document.querySelector('.partners-arrow-next');

    if (prevBtn) prevBtn.addEventListener('click', () => slider.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => slider.next());
}
