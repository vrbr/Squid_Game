// закрытие меню при клике по якорям

function onMenuLinkClick(evt) {
    const links = document.querySelectorAll('.anchor');
    links.forEach((item) => {
        item.addEventListener('click', () => {
            menu.style.display = "";
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        })
    })
}
onMenuLinkClick();

// плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};