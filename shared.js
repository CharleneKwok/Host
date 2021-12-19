const backdrop = document.getElementsByClassName("backdrop")[0];
// const backdrop = document.querySelector('.backdrop');
const modal = document.getElementsByClassName("modal")[0];
const buttons = document.getElementsByClassName("plan-card__button");
// const buttons = document.querySelectorAll('plan-card__button');
const noButton = document.getElementsByClassName("modal__action--negative")[0];
const toggle = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

[...buttons].forEach(button => {
    button.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});

const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'none';
    }
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
});

toggle.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});


