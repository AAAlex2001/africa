function toggleAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length === 0) return;

    accordionItems.forEach((item) => {
        const title = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const collapseButton = item.querySelector('.accordion-collapse-button');
        if (!title || !content) return;

        content.style.maxHeight = '0px';

        function setOpenState(isOpen) {
            title.classList.toggle('is-open', isOpen);
            title.setAttribute('aria-expanded', String(isOpen));
            content.classList.toggle('is-open', isOpen);
            content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';
        }

        title.addEventListener('click', () => {
            const isOpen = title.classList.contains('is-open');
            setOpenState(!isOpen);
        });

        if (collapseButton) {
            collapseButton.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                setOpenState(false);
            });
        }
    });
}