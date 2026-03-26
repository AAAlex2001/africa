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

function initContactsMap() {
    const mapElement = document.getElementById('contacts-map');
    if (!mapElement || !window.ymaps || mapElement.dataset.initialized === 'true') return;

    ymaps.ready(function () {
        if (mapElement.dataset.initialized === 'true') return;

        var myMap = new ymaps.Map('contacts-map', {
            center: [59.9363, 30.2482],
            zoom: 13,
            controls: ['zoomControl']
        });

        var label1 = new ymaps.Placemark([59.9418, 30.2303], {
            iconContent: 'МФК Горный'
        }, {
            preset: 'islands#orangeStretchyIcon'
        });

        var label2 = new ymaps.Placemark([59.9308, 30.2661], {
            iconContent: 'Горный университет'
        }, {
            preset: 'islands#blueStretchyIcon'
        });

        myMap.geoObjects.add(label1);
        myMap.geoObjects.add(label2);
        mapElement.dataset.initialized = 'true';
    });
}

async function initPage() {
    await loadComponent('#header-root', 'header.html');
    await loadComponent('#burger-slot', 'burger.html');
    await loadComponent('#hero-root', 'hero.html');
    await loadComponent('#organizators-root', 'organizators.html');
    await loadComponent('#mission-root', 'mission.html');
    await loadComponent('#request-root', 'request.html');
    await loadComponent('#benefits-root', 'benefits.html');
    await loadComponent('#tabs-root', 'tabs.html');
    await loadComponent('#news-root', 'news.html');
    await loadComponent('#partners-root', 'partners.html');
    await loadComponent('#contacts-root', 'contacts.html');
    await loadComponent('#footer-root', 'footer.html');

    initBurgerMenu();
    tabsToggler();
    highlightNearestDate('.tabs-dates');
    highlightNearestDate('.tabs-programs');
    initPartnersSlider();
    initContactsMap();
}

initPage();