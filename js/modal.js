const buttonForm = document.querySelector('.order-form__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


buttonForm.addEventListener('click', () => {
    modal.style.display = "block";
    document.body.style.width = '100vw';
    document.body.style.position = 'fixed';
    document.body.style.bottom = '0';
});

modalClose.addEventListener('click', () => {
    modal.style.display = '';
    document.body.style.width = '';
    document.body.style.position = '';
    document.body.style.bottom = '';
});

document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;

    if (key == 27) {
        modal.style.display = '';
        document.body.style.width = '';
        document.body.style.position = '';
        document.body.style.bottom = '';
    }
}, false);
