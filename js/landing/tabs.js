function tabsToggler() {
    const tabs = document.querySelector('.tabs');
    if (!tabs) return;

    const datesBlock = tabs.querySelector('.tabs-dates');
    const programsBlock = tabs.querySelector('.tabs-programs');
    if (!datesBlock || !programsBlock) return;

    const datesTitle = tabs.querySelector('.tabs-dates-title');
    const programsTitle = tabs.querySelector('.tabs-programs-title');
    if (!datesTitle || !programsTitle) return;

    datesTitle.addEventListener('click', () => {
        datesTitle.classList.add('active');
        programsTitle.classList.remove('active');
        datesBlock.classList.add('active');
        programsBlock.classList.remove('active');

        highlightNearestDate('.tabs-dates');
    });

    programsTitle.addEventListener('click', () => {
        programsTitle.classList.add('active');
        datesTitle.classList.remove('active');
        programsBlock.classList.add('active');
        datesBlock.classList.remove('active');

        highlightNearestDate('.tabs-programs');
    });
}

function parseRussianDate(dateStr) {
    const months = {
        'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3,
        'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7,
        'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    };
    const cleanStr = dateStr.replace(/\s*\([^)]*\)/, '').trim();
    const parts = cleanStr.split(/\s+/);
    if (parts.length < 3) return null;
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
}

function parseTabDate(timeDiv) {
    if (!timeDiv) return null;

    const dateValue = timeDiv.dataset.date;
    if (dateValue) {
        return new Date(dateValue + 'T00:00:00');
    }

    return parseRussianDate(timeDiv.textContent.trim());
}

function getHighlightedDateItem(blockSelector) {
    const items = document.querySelectorAll(blockSelector + ' .tabs-item');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let lastPast = null;
    let lastPastItem = null;

    items.forEach(item => {
        const timeDiv = item.querySelector('.tabs-time');
        if (!timeDiv) return;
        const eventDate = parseTabDate(timeDiv);
        if (!eventDate) return;
        eventDate.setHours(0, 0, 0, 0);

        if (eventDate < today) {
            if (!lastPast || eventDate > lastPast) {
                lastPast = eventDate;
                lastPastItem = item;
            }
        }
    });

    return lastPastItem;
}

function highlightNearestDate(blockSelector) {
    const items = document.querySelectorAll(blockSelector + ' .tabs-item');
    const toHighlight = getHighlightedDateItem(blockSelector);
    items.forEach(item => item.classList.remove('highlight'));
    if (toHighlight) {
        toHighlight.classList.add('highlight');
    }
}

