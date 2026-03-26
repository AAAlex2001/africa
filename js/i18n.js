const I18N_STORAGE_KEY = 'landing-language';

const translations = {
    ru: {
        'pageTitle': 'Российско-Африканский форум',
        'header.logoAlt': 'Логотип форума',
        'header.nav.about': 'О форуме-конкурсе',
        'header.nav.program': 'Программа',
        'header.nav.participants': 'Участники',
        'header.nav.partners': 'Партнёры',
        'header.nav.contacts': 'Контакты',
        'header.register': 'Подать заявку',
        'burger.open': 'Открыть меню',
        'burger.close': 'Закрыть меню',
        'burger.nav.about': 'О форуме-конкурсе',
        'burger.nav.program': 'Программа',
        'burger.nav.participants': 'Участники',
        'burger.nav.partners': 'Партнёры',
        'burger.nav.contacts': 'Контакты',
        'burger.register': 'Подать заявку',
        'hero.title': 'РОССИЙСКО-АФРИКАНСКИЙ <span>ФОРУМ-конкурс МОЛОДЫХ УЧЁНЫХ</span> под эгидой ЮНЕСКО',
        'hero.subtitle': '«Будущие инженеры мира — основа устойчивого развития»',
        'hero.requestsAlt': 'Сроки подачи заявок',
        'hero.requestsText': '<span>Подача заявок: с 1 апреля по 1 июля 2026 года</span> Проведение форума: 12–17 октября 2026 года',
        'hero.contactsAlt': 'Место проведения форума',
        'hero.contactsText': 'Санкт-Петербургский горный университет императрицы Екатерины II',
        'organizators.title': 'Организаторы',
        'organizators.toggleAlt': 'Открыть раздел организаторов',
        'organizators.item2': 'Министерство иностранных дел Российской Федерации',
        'organizators.item3': 'Всеафриканский студенческий союз (AASU)',
        'organizators.item4': 'Консорциум университетов «Недра» (Россия)',
        'mission.title': 'Миссия и цель',
        'mission.text': 'Развитие российско-африканского научно-технического сотрудничества, выявление и поддержка талантливых студентов и молодых учёных, работающих над решением актуальных инженерных задач, создание постоянно действующей платформы для диалога, обмена знаниями и формирования совместного видения будущего инженерного образования и технологий между молодёжью России и Африки.',
        'mission.button': 'О форуме-конкурсе',
        'request.title': 'Подача заявки',
        'request.description': 'К участию в Форуме-конкурсе приглашаются <span class="highlight">команды (3–5 человек)</span>, состоящие из студентов старших курсов обучения, аспирантов и молодых учёных (<span class="highlight">до 35 лет включительно</span>) из Российской Федерации и стран Африканского континента.<br><br><span class="bold">Для подачи заявки нужно:</span><span class="request-step">1. Сформировать команду (3–5 человек)</span><span class="request-step">2. Выбрать направление из <span class="highlight">11 номинаций</span></span><span class="request-step">3. Подготовить тезисы и презентацию</span><br><br>* Оргкомитет приветствует формирование смешанных (интернациональных) команд, включающих граждан Российской Федерации и граждан стран Африканского континента.',
        'request.buttonFilled': 'Подать заявку',
        'request.buttonOutline': 'Подробнее об участии',
        'benefits.title': 'Что ждёт участников, прошедших квалификационный отбор',
        'benefits.description': 'Команды, которые прошли квалификационный отбор, получат приглашение на очный этап в Санкт-Петербург. Организационный взнос отсутствует. Все расходы по пребыванию в Санкт-Петербурге для участников, прошедших конкурсный отбор, оплачиваются Оргкомитетом:',
        'benefits.item1': 'проживание',
        'benefits.item2': 'питание',
        'benefits.item3': 'культурная программа',
        'benefits.buttonFull': 'Полный регламент Форума-конкурса',
        'benefits.buttonCriteria': 'Критерии оценивания',
        'benefits.buttonApplication': 'Шаблон заявки',
        'benefits.buttonPresentation': 'Шаблон презентации',
        'benefits.buttonTheses': 'Шаблон тезисов',
        'tabs.titleDates': 'Ключевые Даты',
        'tabs.titlePrograms': 'Программы',
        'tabs.date1.time': '25 марта 2026',
        'tabs.date1.text': 'Старт приёма заявок',
        'tabs.date2.time': '1 июля 2026',
        'tabs.date2.text': 'Окончание приёма заявок',
        'tabs.date3.time': '15 июля 2026',
        'tabs.date3.text': 'Объявление результатов заочного этапа',
        'tabs.date4.time': '14 октября 2026',
        'tabs.date4.text': 'Открытие форума',
        'tabs.date5.time': '17 октября 2026',
        'tabs.date5.text': 'Закрытие форума',
        'tabs.program1.time': '12 октября 2026 (пн)',
        'tabs.program1.text': 'Заезд участников, регистрация',
        'tabs.program2.time': '13 октября 2026 (вт)',
        'tabs.program2.text': 'Технические экскурсии в научные лаборатории, обзорная экскурсия по Санкт-Петербургу',
        'tabs.program3.time': '14 октября 2026 (ср)',
        'tabs.program3.text': 'Торжественное открытие Российско-Африканского сырьевого диалога. Круглый стол «Глобальная академия»: Инженерное образование и кадровый суверенитет',
        'tabs.program4.time': '15 октября 2026 (чт)',
        'tabs.program4.text': 'Защита командных проектов. Культурная программа: Вечер культуры и дружбы «Россия – Африка»',
        'tabs.program5.time': '16 октября 2026 (пт)',
        'tabs.program5.text': 'Кейс-соревнования / закрытие РАСДа. Подведение итогов. Награждение победителей. Принятие Открытого письма в ЮНЕСКО',
        'tabs.program6.time': '17 октября 2026 (сб)',
        'tabs.program6.text': 'Посещение учебно-научного полигона Саблино. Отъезд участников',
        'news.title': 'Новости и анонсы',
        'news.image1Alt': 'Новость 1',
        'news.image2Alt': 'Новость 2',
        'news.image3Alt': 'Новость 3',
        'news.image4Alt': 'Новость 4',
        'news.text1': 'Студенты Горного университета встретились с потенциальным работодателем',
        'news.text2': 'Российско-иранские отношения в области научного сотрудничества выходят на новый уровень',
        'news.text3': 'В Санкт-Петербургском горном университете состоялось заседание Учёного Совета',
        'news.text4': 'Студенты Санкт-Петербургского горного университета рассказали о своих впечатлениях от нового общежития',
        'news.button': 'Все новости',
        'partners.title': 'Партнёры',
        'partners.prev': 'Предыдущий',
        'partners.next': 'Следующий',
        'partners.image1Alt': 'Партнёр 1',
        'partners.image2Alt': 'Партнёр 2',
        'partners.image3Alt': 'Партнёр 3',
        'partners.name1': 'Ассоциация Африканских университетов',
        'partners.name2': 'Всемирная федерация инженерных ассоциаций',
        'partners.name3': 'Институт инженеров Кении',
        'contacts.title': 'Контакты',
        'contacts.organizersTitle': 'Организаторы',
        'contacts.organizer1': 'Санкт-Петербургский горный университет императрицы Екатерины II',
        'contacts.organizer2': 'Международный центр компетенций в горнотехническом образовании под эгидой ЮНЕСКО',
        'contacts.address': '199106, г. Санкт-Петербург, Васильевский остров, 21-я линия, д. 2',
        'contacts.metro': '«Горный институт»',
        'contacts.personTitle': 'Контактное лицо',
        'contacts.personRole': 'руководитель проекта «Образование» Центра ЮНЕСКО',
        'contacts.mapLabel1': 'МФК Горный',
        'contacts.mapLabel2': 'Горный университет',
        'footer.link1': 'Политика конфиденциальности',
        'footer.link2': 'Политика в отношении обработки персональных данных',
        'footer.link3': 'Политика использования cookie-файлов',
        'footer.copy': '© 2025 Санкт-Петербургский горный университет'
    },
    en: {
        'pageTitle': 'Russian-African Forum',
        'header.logoAlt': 'Forum logo',
        'header.nav.about': 'About the Forum-Competition',
        'header.nav.program': 'Programme',
        'header.nav.participants': 'Participants',
        'header.nav.partners': 'Partners',
        'header.nav.contacts': 'Contacts',
        'header.register': 'Apply now',
        'burger.open': 'Open menu',
        'burger.close': 'Close menu',
        'burger.nav.about': 'About the Forum-Competition',
        'burger.nav.program': 'Programme',
        'burger.nav.participants': 'Participants',
        'burger.nav.partners': 'Partners',
        'burger.nav.contacts': 'Contacts',
        'burger.register': 'Apply now',
        'hero.title': 'RUSSIAN-AFRICAN <span>FORUM-COMPETITION OF YOUNG SCIENTISTS</span> under the auspices of UNESCO',
        'hero.subtitle': '“Future engineers of the world are the foundation of sustainable development”',
        'hero.requestsAlt': 'Application timeline',
        'hero.requestsText': '<span>Application period: April 1 to July 1, 2026</span> Forum dates: October 12–17, 2026',
        'hero.contactsAlt': 'Forum venue',
        'hero.contactsText': 'Empress Catherine II Saint Petersburg Mining University',
        'organizators.title': 'Organizers',
        'organizators.toggleAlt': 'Open organizers section',
        'organizators.item2': 'Ministry of Foreign Affairs of the Russian Federation',
        'organizators.item3': 'All-Africa Students Union (AASU)',
        'organizators.item4': 'Nedra University Consortium (Russia)',
        'mission.title': 'Mission and Goal',
        'mission.text': 'To foster Russian-African scientific and technical cooperation, identify and support talented students and young scientists working on urgent engineering challenges, and create a permanent platform for dialogue, knowledge exchange, and a shared vision of the future of engineering education and technology among the youth of Russia and Africa.',
        'mission.button': 'About the Forum-Competition',
        'request.title': 'Application',
        'request.description': 'Teams of <span class="highlight">3 to 5 participants</span> made up of senior students, postgraduate students, and young scientists (<span class="highlight">up to and including 35 years old</span>) from the Russian Federation and African countries are invited to take part in the Forum-Competition.<br><br><span class="bold">To apply, you need to:</span><span class="request-step">1. Form a team of 3 to 5 participants</span><span class="request-step">2. Choose one of the <span class="highlight">11 categories</span></span><span class="request-step">3. Prepare your abstract and presentation</span><br><br>* The Organizing Committee welcomes mixed international teams that include citizens of the Russian Federation and African countries.',
        'request.buttonFilled': 'Apply now',
        'request.buttonOutline': 'Participation details',
        'benefits.title': 'What awaits participants who pass the qualifying round',
        'benefits.description': 'Teams that pass the qualifying round will receive an invitation to the in-person stage in Saint Petersburg. There is no participation fee. All stay-related expenses in Saint Petersburg for participants who pass the competition round are covered by the Organizing Committee:',
        'benefits.item1': 'accommodation',
        'benefits.item2': 'meals',
        'benefits.item3': 'cultural programme',
        'benefits.buttonFull': 'Full Forum-Competition regulations',
        'benefits.buttonCriteria': 'Evaluation criteria',
        'benefits.buttonApplication': 'Application template',
        'benefits.buttonPresentation': 'Presentation template',
        'benefits.buttonTheses': 'Abstract template',
        'tabs.titleDates': 'Key Dates',
        'tabs.titlePrograms': 'Programme',
        'tabs.date1.time': 'March 25, 2026',
        'tabs.date1.text': 'Applications open',
        'tabs.date2.time': 'July 1, 2026',
        'tabs.date2.text': 'Applications close',
        'tabs.date3.time': 'July 15, 2026',
        'tabs.date3.text': 'Remote stage results announced',
        'tabs.date4.time': 'October 14, 2026',
        'tabs.date4.text': 'Forum opening',
        'tabs.date5.time': 'October 17, 2026',
        'tabs.date5.text': 'Forum closing',
        'tabs.program1.time': 'October 12, 2026 (Mon)',
        'tabs.program1.text': 'Arrival of participants, registration',
        'tabs.program2.time': 'October 13, 2026 (Tue)',
        'tabs.program2.text': 'Technical visits to research laboratories, sightseeing tour of Saint Petersburg',
        'tabs.program3.time': 'October 14, 2026 (Wed)',
        'tabs.program3.text': 'Grand opening of the Russian-African Raw Materials Dialogue. Round table “Global Academy”: Engineering education and human resources sovereignty',
        'tabs.program4.time': 'October 15, 2026 (Thu)',
        'tabs.program4.text': 'Team project presentations. Cultural programme: “Russia – Africa” evening of culture and friendship',
        'tabs.program5.time': 'October 16, 2026 (Fri)',
        'tabs.program5.text': 'Case competitions / closing of the Russian-African Raw Materials Dialogue. Summary session. Award ceremony. Adoption of the Open Letter to UNESCO',
        'tabs.program6.time': 'October 17, 2026 (Sat)',
        'tabs.program6.text': 'Visit to the Sablino educational and research field site. Departure of participants',
        'news.title': 'News and announcements',
        'news.image1Alt': 'News item 1',
        'news.image2Alt': 'News item 2',
        'news.image3Alt': 'News item 3',
        'news.image4Alt': 'News item 4',
        'news.text1': 'Mining University students met with a potential employer',
        'news.text2': 'Russian-Iranian cooperation in scientific research is reaching a new level',
        'news.text3': 'A meeting of the Academic Council was held at Saint Petersburg Mining University',
        'news.text4': 'Students of Saint Petersburg Mining University shared their impressions of the new dormitory',
        'news.button': 'All news',
        'partners.title': 'Partners',
        'partners.prev': 'Previous',
        'partners.next': 'Next',
        'partners.image1Alt': 'Partner 1',
        'partners.image2Alt': 'Partner 2',
        'partners.image3Alt': 'Partner 3',
        'partners.name1': 'Association of African Universities',
        'partners.name2': 'World Federation of Engineering Organizations',
        'partners.name3': 'Institution of Engineers of Kenya',
        'contacts.title': 'Contacts',
        'contacts.organizersTitle': 'Organizers',
        'contacts.organizer1': 'Empress Catherine II Saint Petersburg Mining University',
        'contacts.organizer2': 'International Centre of Competence in Mining Engineering Education under the auspices of UNESCO',
        'contacts.address': '2, 21st Line, Vasilievsky Island, Saint Petersburg, 199106',
        'contacts.metro': 'Gorny Institut',
        'contacts.personTitle': 'Contact person',
        'contacts.personRole': 'Head of the UNESCO Centre Education Project',
        'contacts.mapLabel1': 'Gorny MFC',
        'contacts.mapLabel2': 'Mining University',
        'footer.link1': 'Privacy policy',
        'footer.link2': 'Personal data processing policy',
        'footer.link3': 'Cookie policy',
        'footer.copy': '© 2025 Saint Petersburg Mining University'
    }
};

function readStoredLanguage() {
    try {
        const storedLanguage = localStorage.getItem(I18N_STORAGE_KEY);
        if (storedLanguage === 'ru' || storedLanguage === 'en') {
            return storedLanguage;
        }
    } catch (error) {
    }

    return 'ru';
}

let currentLanguage = readStoredLanguage();

function getTranslation(key) {
    const activeTranslations = translations[currentLanguage] || translations.ru;
    return activeTranslations[key] || translations.ru[key] || '';
}

function collectTranslatableElements(root) {
    const selector = '[data-i18n], [data-i18n-html], [data-i18n-value], [data-i18n-attr-alt], [data-i18n-attr-aria-label]';
    const elements = [];

    if (root && root.nodeType === 1 && root.matches(selector)) {
        elements.push(root);
    }

    if (root && root.querySelectorAll) {
        root.querySelectorAll(selector).forEach(function (element) {
            elements.push(element);
        });
    }

    return elements;
}

function applyTranslations(root) {
    const scope = root || document;
    const elements = collectTranslatableElements(scope);

    elements.forEach(function (element) {
        Array.from(element.attributes).forEach(function (attribute) {
            if (attribute.name.indexOf('data-i18n-attr-') !== 0) {
                return;
            }

            const attributeName = attribute.name.replace('data-i18n-attr-', '');
            element.setAttribute(attributeName, getTranslation(attribute.value));
        });

        if (element.dataset.i18nHtml) {
            element.innerHTML = getTranslation(element.dataset.i18nHtml);
            return;
        }

        if (element.dataset.i18n) {
            element.textContent = getTranslation(element.dataset.i18n);
        }

        if (element.dataset.i18nValue) {
            element.value = getTranslation(element.dataset.i18nValue);
        }
    });

    document.documentElement.lang = currentLanguage;
}

function updateLanguageControls() {
    const languageButtons = document.querySelectorAll('[data-lang-switch]');

    languageButtons.forEach(function (button) {
        button.classList.toggle('is-active', button.dataset.langSwitch === currentLanguage);
    });
}

function initLanguageControls() {
    const languageButtons = document.querySelectorAll('[data-lang-switch]');

    languageButtons.forEach(function (button) {
        if (button.dataset.bound === 'true') {
            return;
        }

        button.dataset.bound = 'true';
        button.addEventListener('click', function (event) {
            event.preventDefault();
            setLanguage(button.dataset.langSwitch);
        });
    });

    updateLanguageControls();
}

function updateBurgerButtonLabel() {
    const burgerButton = document.querySelector('.burger-button');
    if (!burgerButton) return;

    const labelKey = burgerButton.classList.contains('is-open') ? 'burger.close' : 'burger.open';
    burgerButton.setAttribute('aria-label', getTranslation(labelKey));
}

function setLanguage(language) {
    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    try {
        localStorage.setItem(I18N_STORAGE_KEY, currentLanguage);
    } catch (error) {
    }

    applyTranslations(document);
    updateLanguageControls();
    updateBurgerButtonLabel();

    if (typeof initContactsMap === 'function') {
        initContactsMap();
    }
}

window.getCurrentLanguage = function () {
    return currentLanguage;
};
window.getTranslation = getTranslation;
window.applyTranslations = applyTranslations;
window.initLanguageControls = initLanguageControls;
window.updateLanguageControls = updateLanguageControls;
window.updateBurgerButtonLabel = updateBurgerButtonLabel;
window.setLanguage = setLanguage;

document.documentElement.lang = currentLanguage;