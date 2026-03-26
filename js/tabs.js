    function tabsToggler() {

        const tabs = document.querySelector('.tabs');
        if (!tabs) return;

        const datesBlock = tabs.querySelector('.tabs-dates');
        const programsBlock = tabs.querySelector('.tabs-programs');

        if (!datesBlock || !programsBlock) return;

        const datesTitle = datesBlock.querySelector('.tabs-dates-title');
        const programsTitle = tabs.querySelector('.tabs-programs-title');

        if (!datesTitle || !programsTitle) return;

        datesTitle.addEventListener('click', () => {
            datesTitle.classList.add('active');
            programsTitle.classList.remove('active');
            datesBlock.classList.add('active');
            programsBlock.classList.remove('active');
        });

        programsTitle.addEventListener('click', () => {
            programsTitle.classList.add('active');
            datesTitle.classList.remove('active');
            programsBlock.classList.add('active');
            datesBlock.classList.remove('active');
        });
    }