async function loadComponent(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(path);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    el.innerHTML = doc.body.innerHTML;
}

async function initPage() {
    await loadComponent('#header-root', 'header.html');
    await loadComponent('#hero-root', 'hero.html');
    await loadComponent('#organizators-root', 'organizators.html');
    await loadComponent('#mission-root', 'mission.html');
}

initPage();