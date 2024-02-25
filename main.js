// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >  0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus' ) {
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    })
})

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const classBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.Style.display = "flex";
})
