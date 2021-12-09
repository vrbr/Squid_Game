const menuOpen = document.querySelector('.header__menu');
const menuClose = document.querySelector('.mobile-menu__close');
const menu = document.querySelector('.mobile-menu');
const html = document.querySelector('html');
const scrollY = document.body.style.top;

menuOpen.addEventListener('click', () => {
    menu.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
});

menuClose.addEventListener('click', () => {
    menu.style.display = "";
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;

    if (key == 27) {
        menu.style.display = "";
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}, false);