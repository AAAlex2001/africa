//хлебные крошки

function breadcrumbs() {
    var url = window.location.href;
    var urlParts = url.split('/');
    var breadcrumbsContainer = document.getElementById('breadcrumbs');
    breadcrumbsContainer.innerHTML = '';

    let path = '';
    urlParts.forEach(function(part, index) {
        if (index > 2) {
            path += '/' + part;
            var breadcrumb = document.createElement('a');
            breadcrumb.href = path;
            breadcrumb.textContent = part;
            breadcrumbsContainer.appendChild(breadcrumb);
        }
    });
}