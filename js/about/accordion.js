function toggleAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length === 0) return;

    function scrollToAccordionStart(item) {
        const header = document.querySelector('.header-container');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetTop = item.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'auto'
        });
    }

    accordionItems.forEach((item) => {
        const title = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const collapseButton = item.querySelector('.accordion-collapse-button');
        if (!title || !content) return;

        title.setAttribute('aria-expanded', 'false');

        function openAccordion() {
            title.classList.add('is-open');
            title.setAttribute('aria-expanded', 'true');
            content.classList.add('is-open');
        }

        function closeAccordion() {
            title.classList.remove('is-open');
            title.setAttribute('aria-expanded', 'false');
            content.classList.remove('is-open');
        }

        title.addEventListener('click', () => {
            const isOpen = title.classList.contains('is-open');

            if (isOpen) {
                scrollToAccordionStart(item);
                closeAccordion();
                return;
            }

            openAccordion();
        });

        if (collapseButton) {
            collapseButton.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                scrollToAccordionStart(item);
                closeAccordion();
            });
        }
    });
}