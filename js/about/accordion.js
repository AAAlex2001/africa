function toggleAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    if (accordions.length === 0) return;

    accordions.forEach(accordion => {
        const title = accordion.querySelector('.accordion-title');
        const content = accordion.querySelector('.accordion-content');
        if (!title || !content) return;

        title.addEventListener('click', () => {
            const isOpen = title.classList.toggle('is-open');
            content.classList.toggle('is-open', isOpen);
        });
    });
}