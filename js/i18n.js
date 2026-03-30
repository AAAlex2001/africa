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
        'accordion.item1.header': 'О форуме',
        'accordion.collapse': 'Свернуть описание',
        'accordion.item1.content': '<div class="accordion-rich-content"><p>Форум направлен на укрепление академического и научного потенциала африканских стран, поддержку молодых учёных и исследователей и является логическим продолжением Первого Российско-Африканского сырьевого диалога.</p><div class="accordion-rich-block"><h3>Миссия</h3><p>Создание постоянно действующей платформы для диалога, обмена знаниями и формирования совместного видения будущего инженерного образования и технологий между молодёжью России и Африки. Способствовать укреплению научно-технического сотрудничества, дружбы и взаимопонимания между странами.</p></div><div class="accordion-rich-block"><h3>Цель и задачи</h3><p>Формирование устойчивой международной сети будущих лидеров научно-технического прогресса через результаты научной деятельности, совместную разработку проектных решений в сфере инженерного образования; сырьевой экономики, направленных на реализацию ЦУР 4 (Качественное образование) и партнёрства в интересах устойчивого развития; интеграция молодого специалиста в международную профессиональную среду, а также популяризация на международном уровне принципов устойчивого развития применительно к минерально-сырьевому сектору экономики, включая поддержку вклада ЮНЕСКО в борьбу с нарушениями климатической системы и содействие сохранению и устойчивому использованию биоразнообразия.</p></div><div class="accordion-rich-block"><h3>Организаторы</h3><ul class="accordion-list accordion-list-organizers"><li>Международный центр компетенций в горнотехническом образовании под эгидой ЮНЕСКО на базе Санкт-Петербургского горного университета императрицы Екатерины II</li><li>Министерство иностранных дел Российской Федерации</li><li>Всеафриканский студенческий союз (Африка)</li><li>Консорциум университетов «Недра» (Россия)</li></ul></div><div class="accordion-rich-block"><h3>Партнеры:</h3><ul class="accordion-list"><li>Ассоциация Африканских университетов</li><li>Всемирная федерация инженерных ассоциаций, в том числе Комитет женщин в инженерии</li><li>Профессиональное сообщество «Институт инженеров Кении», в том числе Комитет будущих лидеров Кении</li><li>Южно-Африканская федерация инженерных организаций</li><li>Нигерийское общество инженеров</li><li>Кафедры ЮНЕСКО</li><li>Центры категории 2 под эгидой ЮНЕСКО стран Африки (Гана, Египет, Намибия, Нигерия и др.)</li><li>Институт Африки Российской академии наук</li><li>Национальная ассоциации горных инженеров</li><li>Ассоциация сенегальских студентов</li><li>Ассоциация африканских студентов РУДН</li><li>Общественно-профессиональное сообщество технических университетов Африки «Консорциум университетов Недра Африки»</li><li>Крупные российские и африканские компании — потенциальные работодатели.</li></ul></div><div class="accordion-rich-block"><h3>Языки:</h3><p>Русский, английский (синхронный перевод)</p></div><div class="accordion-rich-block"><h3>Формат:</h3><p>Гибридный (очно + трансляция ключевых мероприятий)</p></div></div>',
        'accordion.item2.header': 'Форум и ЮНЕСКО',
        'accordion.item2.content': '<div class="accordion-rich-content"><p>Выполнению мандата и миссии ЮНЕСКО по углублению международного сотрудничества, диалога и взаимопонимания в целях построения прочного мира. Форум является практическим инструментом для реализации ключевых глобальных приоритетов ЮНЕСКО - «Африка» и «Гендерное равенство» - посредством углубления международного сотрудничества в сфере образования и науки. Мероприятие выступает платформой для стратегического диалога между молодыми учёными, экспертами и будущими лидерами России и Африки, прямо способствуя построению взаимопонимания и долгосрочных профессиональных связей, которые составляют основу прочного мира.</p><p class="accordion-intro">В частности, Форум вносит вклад в достижение Повестки дня на период до 2030 года и Стратегии ЮНЕСКО в следующих ключевых аспектах:</p><div class="accordion-rich-block"><h2>Приоритет «Африка»</h2><div class="accordion-rich-block"><h3>Связь с мандатом и программами ЮНЕСКО</h3><p>Продвижение Оперативной стратегии ЮНЕСКО по приоритету «Африка» на 2022–2029 гг., (Флагманская программа 1 «Кампус Африка: укрепление системы высшего образования в странах Африки» (ED); Флагманская программа 5: «Укрепление открытой науки и создания потенциала в области фундаментальных и прикладных наук и научных исследований в целях содействия инновациям и технологическому развитию и их использованию в области науки об океане, устойчивости к изменению климата и управления водными ресурсами в Африке»)</p></div><div class="accordion-rich-block"><h3>Конкретный вклад Форума</h3><p>Проведение Форума напрямую поддерживает стратегические цели Оперативной стратегии «Африка». Он призван укрепить научно-исследовательский потенциал вузов и колледжей Африки, а также повысить эффективность научной работы. Этому будет способствовать координируемое Центром ЮНЕСКО взаимодействие с международной сетью молодых инженеров, нацеленное на установление прочного научно-образовательного диалога. Проектная деятельность и обмен имеющимся опытом, предусмотренные в рамках Форума, станут вкладом в развитие кадрового научного потенциала стран-участниц в области науки, технологии, инноваций и образования в интересах устойчивого развития.</p></div></div><div class="accordion-rich-block"><h2>ЦУР 4: Качественное образование</h2><div class="accordion-rich-block"><h3>Связь с мандатом и программами ЮНЕСКО</h3><p>Обеспечение всеохватного и справедливого качественного образования для всех.</p></div><div class="accordion-rich-block"><h3>Конкретный вклад Форума</h3><p>Форум фокусируется на развитии востребованных технических и инженерных навыков (индикатор 4.4) и продвижении знаний для устойчивого развития (индикатор 4.7), включая культуру мира.</p></div></div><div class="accordion-rich-block"><h2>Глобальный приоритет «Гендерное равенство»</h2><div class="accordion-rich-block"><h3>Связь с мандатом и программами ЮНЕСКО</h3><p>Преодоление неравенства в и через образование как предпосылка устойчивого развития.</p></div><div class="accordion-rich-block"><h3>Конкретный вклад Форума</h3><p>Форум включает целевые меры для обеспечения гендерного паритета среди участников и вовлечения девушек в инженерные и научные дисциплины, что прямо способствует индикатору 4.5.</p></div></div><div class="accordion-rich-block"><h2>Международное сотрудничество</h2><div class="accordion-rich-block"><h3>Связь с мандатом и программами ЮНЕСКО</h3><p>Укрепление мира посредством образования, науки и культуры.</p></div><div class="accordion-rich-block"><h3>Конкретный вклад Форума</h3><p>Форум действует как механизм кооперации на основе Соглашения 2025 г. между ЮНЕСКО, Правительством РФ и Международным центром компетенций о возобновлении статуса в качестве Центра категории 2 под эгидой ЮНЕСКО, направляя коллективные усилия на совершенствование образования для устойчивого управления ресурсами.</p></div></div><p class="accordion-emphasis">Форум напрямую поддерживает основную идею ЮНЕСКО о том, что образование, построенное на принципах справедливости, инклюзивности и международного партнерства, является наиболее прочным фундаментом для мирного будущего.</p></div>',
        'accordion.item3.header': 'Круглый стол',
        'accordion.item3.content': '<div class="accordion-rich-content"><h2>Круглый стол «Глобальная академия: Инженерное образование и кадровый суверенитет»</h2><div class="accordion-rich-block"><h3>Концепция мероприятия</h3><p>Мир вступает в эпоху технологического передела, где доступ к ресурсам (не только природным, но и интеллектуальным) определяет контуры нового многополярного мира. Россия и Африка обладают уникальным комплементарным потенциалом: африканский континент — кладовая полезных ископаемых и молодое население, Россия — фундаментальная инженерная школа и опыт освоения сложнейших территорий. Однако «кадровый суверенитет» сегодня невозможен без образовательной интеграции. Цель круглого стола — перейти от деклараций о дружбе к созданию общего инженерного пространства Россия — Африка. Мы должны ответить на главный вызов: как воспитать инженера будущего, способного работать на стыке культур, юрисдикций и технологических укладов, обеспечивая устойчивое развитие (ЦУР 4) обеих сторон.</p></div><div class="accordion-rich-block"><h3>Фокус</h3><p>Гармонизация образовательных программ Россия-Африка. Реализация ЦУР 4 (Качественное образование).</p></div><div class="accordion-rich-block"><h3>Ключевые вопросы:</h3><ul class="accordion-list"><li>Пилотный проект инженерного образования</li><li>Образовательный суверенитет без границ</li><li>Портрет инженера 2030</li><li>Перспективы совместных образовательных программ и проектов</li><li>Летние школы: образовательный туризм или стартап-инкубатор для совместных проектов?</li><li>Консорциум университетов «Недра» - лидер развития инженерного образования</li><li>Студенческая дипломатия: инструмент мягкой силы или реальный механизм влияния на образование?</li><li>Молодёжная политика для иностранных студентов</li></ul></div><div class="accordion-rich-block"><h3>О чем поговорим:</h3><p>В ходе круглого стола участники сформулируют конкретные шаги по гармонизации инженерного образования между Россией и странами Африканского континента. Мы разберём кейсы запуска пилотных образовательных проектов, обсудим проблему несоответствия дипломов и пути создания универсального «портрета инженера 2030». Отдельный блок будет посвящён инструментам soft power: как через студенческую дипломатию, летние школы и совместные стартапы формировать новую техническую элиту, способную управлять ресурсами будущего в интересах устойчивого развития (ЦУР 4).</p></div><div class="accordion-rich-block"><h3>Ключевые тезисы для дискуссии:</h3><ul class="accordion-list"><li>Инженерное образование становится главным активом в борьбе за ресурсы Африки.</li><li>Кадровый суверенитет невозможен без подготовки элит для дружественных стран.</li><li>Летняя школа – это стартап-акселератор международных студенческих команд.</li><li>Консорциум «Недра»: от объединения вузов к объединению компетенций на континенте.</li></ul></div><a class="benefits-button accordion-cta" href="#" download><span>Полная информация о Круглом столе</span><span class="benefits-button-icon" aria-hidden="true"></span></a></div>',
        'about.navigation.program': 'Программа форума',
        'about.navigation.participation': 'Что нужно для участия',
        'about.navigation.roundTable': 'Полная информация о Круглом столе',
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
        'tabs.date1.time': '1 апреля 2026',
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
        'accordion.item1.header': 'About the Forum',
        'accordion.collapse': 'Collapse description',
        'accordion.item1.content': '<div class="accordion-rich-content"><p>The Forum is aimed at strengthening the academic and scientific potential of African countries, supporting young scientists and researchers, and serves as a logical continuation of the First Russian-African Raw Materials Dialogue.</p><div class="accordion-rich-block"><h3>Mission</h3><p>Creating a permanent platform for dialogue, knowledge exchange, and the formation of a shared vision of the future of engineering education and technology among the youth of Russia and Africa. Contributing to stronger scientific and technical cooperation, friendship, and mutual understanding between countries.</p></div><div class="accordion-rich-block"><h3>Purpose and Objectives</h3><p>Building a sustainable international network of future leaders in scientific and technological progress through research outcomes and the joint development of project solutions in engineering education and the raw materials economy aimed at advancing SDG 4 (Quality Education) and partnerships for sustainable development; integrating young professionals into the international professional community; and promoting sustainable development principles internationally in relation to the mineral resources sector, including support for UNESCO’s contribution to combating climate system disruption and preserving biodiversity.</p></div><div class="accordion-rich-block"><h3>Organizers</h3><ul class="accordion-list accordion-list-organizers"><li>International Centre of Competence in Mining Engineering Education under the auspices of UNESCO at Empress Catherine II Saint Petersburg Mining University</li><li>Ministry of Foreign Affairs of the Russian Federation</li><li>All-Africa Students Union (Africa)</li><li>Nedra University Consortium (Russia)</li></ul></div><div class="accordion-rich-block"><h3>Partners:</h3><ul class="accordion-list"><li>Association of African Universities</li><li>World Federation of Engineering Organizations, including the Women in Engineering Committee</li><li>Professional community “Institution of Engineers of Kenya”, including the Committee of Future Leaders of Kenya</li><li>South African Federation of Engineering Organizations</li><li>Nigerian Society of Engineers</li><li>UNESCO Chairs</li><li>UNESCO Category 2 Centres in African countries (Ghana, Egypt, Namibia, Nigeria, etc.)</li><li>Institute of Africa of the Russian Academy of Sciences</li><li>National Association of Mining Engineers</li><li>Senegalese Students Association</li><li>RUDN African Students Association</li><li>Professional community of technical universities in Africa “Nedra of Africa University Consortium”</li><li>Major Russian and African companies — potential employers.</li></ul></div><div class="accordion-rich-block"><h3>Languages:</h3><p>Russian, English (simultaneous interpretation)</p></div><div class="accordion-rich-block"><h3>Format:</h3><p>Hybrid (in person + broadcast of key events)</p></div></div>',
        'accordion.item2.header': 'Forum and UNESCO',
        'accordion.item2.content': '<div class="accordion-rich-content"><p>It serves the UNESCO mandate and mission of deepening international cooperation, dialogue, and mutual understanding for the sake of building lasting peace. The Forum is a practical instrument for advancing UNESCO’s key global priorities, “Africa” and “Gender Equality”, through stronger international cooperation in education and science. The event acts as a platform for strategic dialogue between young scientists, experts, and future leaders of Russia and Africa, directly contributing to mutual understanding and long-term professional ties that form the foundation of lasting peace.</p><p class="accordion-intro">In particular, the Forum contributes to the 2030 Agenda and UNESCO Strategy in the following key areas:</p><div class="accordion-rich-block"><h2>Priority “Africa”</h2><div class="accordion-rich-block"><h3>Link to the UNESCO mandate and programmes</h3><p>Advancing the UNESCO Operational Strategy for Priority Africa 2022–2029, including Flagship Programme 1 “Campus Africa: Strengthening higher education systems in African countries” (ED) and Flagship Programme 5 “Strengthening open science and building capacity in basic and applied sciences and research to foster innovation, technological development, and their use in ocean science, climate resilience, and water resource management in Africa”.</p></div><div class="accordion-rich-block"><h3>Concrete contribution of the Forum</h3><p>Holding the Forum directly supports the strategic goals of the Operational Strategy for Africa. It is designed to strengthen the research potential of African universities and colleges and improve the effectiveness of scientific work. This will be supported through UNESCO Centre-coordinated interaction with the international network of young engineers aimed at building a strong scientific and educational dialogue. The project work and exchange of experience planned within the Forum will contribute to the development of scientific human capacity in participating countries in science, technology, innovation, and education for sustainable development.</p></div></div><div class="accordion-rich-block"><h2>SDG 4: Quality Education</h2><div class="accordion-rich-block"><h3>Link to the UNESCO mandate and programmes</h3><p>Ensuring inclusive and equitable quality education for all.</p></div><div class="accordion-rich-block"><h3>Concrete contribution of the Forum</h3><p>The Forum focuses on the development of relevant technical and engineering skills (indicator 4.4) and the promotion of knowledge for sustainable development (indicator 4.7), including a culture of peace.</p></div></div><div class="accordion-rich-block"><h2>Global Priority “Gender Equality”</h2><div class="accordion-rich-block"><h3>Link to the UNESCO mandate and programmes</h3><p>Overcoming inequality in and through education as a prerequisite for sustainable development.</p></div><div class="accordion-rich-block"><h3>Concrete contribution of the Forum</h3><p>The Forum includes targeted measures to ensure gender parity among participants and encourage girls to enter engineering and scientific disciplines, directly supporting indicator 4.5.</p></div></div><div class="accordion-rich-block"><h2>International Cooperation</h2><div class="accordion-rich-block"><h3>Link to the UNESCO mandate and programmes</h3><p>Strengthening peace through education, science, and culture.</p></div><div class="accordion-rich-block"><h3>Concrete contribution of the Forum</h3><p>The Forum acts as a cooperation mechanism based on the 2025 Agreement between UNESCO, the Government of the Russian Federation, and the International Centre of Competence on the renewal of its status as a Category 2 Centre under the auspices of UNESCO, directing collective efforts toward improving education for sustainable resource management.</p></div></div><p class="accordion-emphasis">The Forum directly supports UNESCO’s core idea that education built on fairness, inclusion, and international partnership is the strongest foundation for a peaceful future.</p></div>',
        'accordion.item3.header': 'Round Table',
        'accordion.item3.content': '<div class="accordion-rich-content"><h2>Round Table “Global Academy: Engineering Education and Human Resources Sovereignty”</h2><div class="accordion-rich-block"><h3>Event concept</h3><p>The world is entering an era of technological redistribution where access to resources, both natural and intellectual, defines the contours of a new multipolar order. Russia and Africa have a unique complementary potential: the African continent is rich in mineral resources and has a young population, while Russia offers a strong engineering school and experience in developing highly complex territories. However, human resources sovereignty is impossible today without educational integration. The goal of the round table is to move from declarations of friendship to the creation of a shared engineering space between Russia and Africa. We must answer the main challenge: how to educate the engineer of the future who can work across cultures, jurisdictions, and technological paradigms while ensuring sustainable development (SDG 4) for both sides.</p></div><div class="accordion-rich-block"><h3>Focus</h3><p>Harmonisation of Russia-Africa educational programmes. Implementation of SDG 4 (Quality Education).</p></div><div class="accordion-rich-block"><h3>Key questions:</h3><ul class="accordion-list"><li>Pilot engineering education project</li><li>Educational sovereignty without borders</li><li>Profile of the engineer 2030</li><li>Prospects for joint educational programmes and projects</li><li>Summer schools: educational tourism or a startup incubator for joint projects?</li><li>Nedra University Consortium as a leader in engineering education development</li><li>Student diplomacy: an instrument of soft power or a real mechanism of influence on education?</li><li>Youth policy for international students</li></ul></div><div class="accordion-rich-block"><h3>What we will discuss:</h3><p>During the round table, participants will formulate concrete steps to harmonise engineering education between Russia and African countries. We will review cases of pilot educational projects, discuss the problem of non-equivalent diplomas, and explore ways of creating a universal “engineer 2030 profile”. A separate section will focus on soft power tools: how student diplomacy, summer schools, and joint startups can shape a new technical elite capable of managing the resources of the future in the interests of sustainable development (SDG 4).</p></div><div class="accordion-rich-block"><h3>Key theses for discussion:</h3><ul class="accordion-list"><li>Engineering education is becoming the main asset in the struggle for Africa’s resources.</li><li>Human resources sovereignty is impossible without training elites for friendly countries.</li><li>Summer school is a startup accelerator for international student teams.</li><li>Nedra Consortium: from a university alliance to a continent-wide competence network.</li></ul></div><a class="benefits-button accordion-cta" href="#" download><span>Full round table information</span><span class="benefits-button-icon" aria-hidden="true"></span></a></div>',
        'about.navigation.program': 'Forum Programme',
        'about.navigation.participation': 'Participation Requirements',
        'about.navigation.roundTable': 'Full Round Table Information',
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
        'tabs.date1.time': 'April 1, 2026',
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