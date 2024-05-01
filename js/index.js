function init() {
    import('./index.yoga-classes-carousel.js');
    import('./index.main-page.classes.js');
    import('./index.header__burger-menu.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});