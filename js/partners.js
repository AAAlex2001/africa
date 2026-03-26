function initPartnersSlider() {
    const sliderEl = document.querySelector('.partners-slider');
    if (!sliderEl) return;

    const slider = new KeenSlider(sliderEl, {
        loop: true,
        slides: {
            perView: 1,
            spacing: 4,
        },
    });

    const prevBtn = document.querySelector('.partners-arrow-prev');
    const nextBtn = document.querySelector('.partners-arrow-next');

    if (prevBtn) prevBtn.addEventListener('click', () => slider.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => slider.next());
}
