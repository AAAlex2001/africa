function organizatorsAccordion() {
    const header = document.querySelector('.organizators-title');
    const items = document.querySelectorAll('.organizators-accordion-item');

    if (!header || items.length === 0) return;

    header.classList.toggle('open');
    const isOpen = header.classList.contains('open');

    items.forEach(content => {
        if (isOpen) {
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.classList.remove('open');
            content.style.maxHeight = null;
        }
    });
}