async function loadComponent(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(path);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    el.innerHTML = doc.body.innerHTML;

    if (typeof applyTranslations === 'function') {
        applyTranslations(el);
    }

    if (typeof initLanguageControls === 'function') {
        initLanguageControls();
    }

    if (typeof updateBurgerButtonLabel === 'function') {
        updateBurgerButtonLabel();
    }
}

const componentBase = window.COMPONENT_BASE || '';

function initBurgerMenu() {
    const burgerButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger-menu');

    if (!burgerButton || !burgerMenu) return;

    function closeBurgerMenu() {
        burgerButton.classList.remove('is-open');
        burgerMenu.classList.remove('is-open');
        burgerButton.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.height = '';

        if (typeof updateBurgerButtonLabel === 'function') {
            updateBurgerButtonLabel();
        }
    }

    if (typeof updateBurgerButtonLabel === 'function') {
        updateBurgerButtonLabel();
    }

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

        if (typeof updateBurgerButtonLabel === 'function') {
            updateBurgerButtonLabel();
        }
    });

    burgerMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            closeBurgerMenu();
        });
    });
}

let contactsMapInstance = null;
let contactsMapLabels = null;

function updateContactsMapLabels() {
    if (!contactsMapLabels || typeof getTranslation !== 'function') return;

    contactsMapLabels.label1.properties.set('iconContent', getTranslation('contacts.mapLabel1'));
    contactsMapLabels.label2.properties.set('iconContent', getTranslation('contacts.mapLabel2'));
}

function initContactsMap() {
    const mapElement = document.getElementById('contacts-map');
    if (!mapElement || !window.ymaps) return;

    if (contactsMapInstance) {
        updateContactsMapLabels();
        return;
    }

    ymaps.ready(function () {
        if (contactsMapInstance) {
            updateContactsMapLabels();
            return;
        }

        contactsMapInstance = new ymaps.Map('contacts-map', {
            center: [59.9363, 30.2482],
            zoom: 13,
            controls: ['zoomControl']
        });

        contactsMapLabels = {
            label1: new ymaps.Placemark([59.9418, 30.2303], {
                iconContent: ''
            }, {
                preset: 'islands#orangeStretchyIcon'
            }),
            label2: new ymaps.Placemark([59.9308, 30.2661], {
                iconContent: ''
            }, {
                preset: 'islands#blueStretchyIcon'
            })
        };

        contactsMapInstance.geoObjects.add(contactsMapLabels.label1);
        contactsMapInstance.geoObjects.add(contactsMapLabels.label2);
        updateContactsMapLabels();
        mapElement.dataset.initialized = 'true';
    });
}

async function initPage() {
    await loadComponent('#header-root', `${componentBase}header.html`);
    await loadComponent('#burger-slot', `${componentBase}burger.html`);
    await loadComponent('#hero-root', `${componentBase}hero.html`);
    await loadComponent('#organizators-root', `${componentBase}organizators.html`);
    if (typeof bindOrganizatorsAccordionTitle === 'function') {
        bindOrganizatorsAccordionTitle();
    }
    await loadComponent('#mission-root', `${componentBase}mission.html`);
    await loadComponent('#request-root', `${componentBase}request.html`);
    await loadComponent('#benefits-root', `${componentBase}benefits.html`);
    await loadComponent('#tabs-root', `${componentBase}tabs.html`);
    await loadComponent('#news-root', `${componentBase}news.html`);
    await loadComponent('#partners-root', `${componentBase}partners.html`);
    await loadComponent('#contacts-root', `${componentBase}contacts.html`);
    await loadComponent('#footer-root', `${componentBase}footer.html`);

    if (typeof initLanguageControls === 'function') {
        initLanguageControls();
    }

    if (typeof applyTranslations === 'function') {
        applyTranslations(document);
    }

    initBurgerMenu();
    if (typeof tabsToggler === 'function') {
        tabsToggler();
    }

    if (typeof highlightNearestDate === 'function') {
        highlightNearestDate('.tabs-dates');
        highlightNearestDate('.tabs-programs');
    }

    if (typeof initPartnersSlider === 'function') {
        initPartnersSlider();
    }

    if (typeof initContactsMap === 'function') {
        initContactsMap();
    }
}

initPage();