async function loadComponent(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(path);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    el.innerHTML = doc.body.innerHTML;
}

function initBurgerMenu() {
    const burgerButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger-menu');

    if (!burgerButton || !burgerMenu) return;

    burgerButton.addEventListener('click', () => {
        const isOpen = burgerButton.classList.toggle('is-open');
        burgerMenu.classList.toggle('is-open', isOpen);
        burgerButton.setAttribute('aria-expanded', String(isOpen));

        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100dvh';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
        }
    });
}

async function initPage() {
    await loadComponent('#header-root', 'header.html');
    await loadComponent('#burger-slot', 'burger.html');
    await loadComponent('#hero-root', 'hero.html');
    await loadComponent('#organizators-root', 'organizators.html');
    await loadComponent('#mission-root', 'mission.html');

    initBurgerMenu();
}

initPage();