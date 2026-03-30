function organizatorsAccordion() {
    const header = document.querySelector('.organizators-title');
    const items = document.querySelectorAll('.organizators-accordion-item');
    const plusIcon = header.querySelector('img');

    if (!header || items.length === 0) return;

    header.classList.toggle('open');
    const isOpen = header.classList.contains('open');

    if (isOpen) {
        plusIcon.style.transform = 'rotate(45deg)';
        plusIcon.style.transition = 'transform 0.3s ease';
    } else {
        plusIcon.style.transform = 'rotate(0deg)';
        plusIcon.style.transition = 'transform 0.3s ease';
    }
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