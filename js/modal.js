const buttonForm = document.querySelector('.order-form__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const scrollY2 = document.body.style.top;

buttonForm.addEventListener('click', () => {
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';
    // document.body.style.top = `-${window.scrollY}px`;
});

modalClose.addEventListener('click', () => {
    modal.style.display = "";
    document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY2 || '0') * -1);
});
