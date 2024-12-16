const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide'); 
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
        mobileMenu.classList.add('hide');
    }
})

