    function tabsToggler() {

        const tabs = document.querySelector('.tabs');
        if (!tabs) return;

        const datesBlock = tabs.querySelector('.tabs-dates');
        const programsBlock = tabs.querySelector('.tabs-programs');

        if (!datesBlock || !programsBlock) return;

        const datesTitle = datesBlock.querySelector('.tabs-dates-title');
        const programsTitle = tabs.querySelector('.tabs-programs-title');

        if (!datesTitle) {
            const title = tabs.querySelector('.tabs-dates-title');
            if (!title || !programsTitle) return;
        }

        const datesMainTitle = tabs.querySelector('.tabs-dates-title');

        if (!datesMainTitle || !programsTitle) return;

        datesMainTitle.addEventListener('click', () => {
            datesMainTitle.classList.add('active');
            programsTitle.classList.remove('active');
            datesBlock.classList.add('active');
            programsBlock.classList.remove('active');
        });

        programsTitle.addEventListener('click', () => {
            programsTitle.classList.add('active');
            datesMainTitle.classList.remove('active');
            programsBlock.classList.add('active');
            datesBlock.classList.remove('active');
        });
    }