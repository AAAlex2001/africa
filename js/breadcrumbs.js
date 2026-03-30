//хлебные крошки

function breadcrumbs() {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    if (!breadcrumbsContainer) return;

    breadcrumbsContainer.innerHTML = '';

    const homeLink = document.createElement('a');
    homeLink.href = '../landing/main.html';
    homeLink.className = 'breadcrumbs-link';
    homeLink.textContent = 'Главная';

    const separator = document.createElement('span');
    separator.className = 'breadcrumbs-separator';
    separator.textContent = '/';

    const currentPage = document.createElement('span');
    currentPage.className = 'breadcrumbs-current';
    currentPage.textContent = 'О форуме-конкурсе';

    breadcrumbsContainer.appendChild(homeLink);
    breadcrumbsContainer.appendChild(separator);
    breadcrumbsContainer.appendChild(currentPage);
}