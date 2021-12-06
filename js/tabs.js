
const tabs = () => {
    const rec = document.querySelector('.inside-box__rec');
    const input1 = document.querySelector('.inside-box__input1');
    const input2 = document.querySelector('.inside-box__input2');
    const input3 = document.querySelector('.inside-box__input3');
    const input4 = document.querySelector('.inside-box__input4');

    input1.addEventListener('click', () => {
        rec.style.top = "-4px";
    });
    input2.addEventListener('click', () => {
        rec.style.top = "38px";
    });
    input3.addEventListener('click', () => {
        rec.style.top = "80px";
    });
    input4.addEventListener('click', () => {
        rec.style.top = "122px";
    });

    if (document.documentElement.clientWidth >= 768) {
        input1.addEventListener('click', () => {
            rec.style.top = "-2px";
        });
        input2.addEventListener('click', () => {
            rec.style.top = "41px";
        });
        input3.addEventListener('click', () => {
            rec.style.top = "85px";
        });
        input4.addEventListener('click', () => {
            rec.style.top = "126px";
        });
    }
};

tabs();