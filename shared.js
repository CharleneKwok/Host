const backdrop = document.getElementsByClassName("backdrop")[0];
// const backdrop = document.querySelector('.backdrop');
const modal = document.getElementsByClassName("modal")[0];
const buttons = document.getElementsByClassName("plan-card__button");
// const buttons = document.querySelectorAll('plan-card__button');
const noButton = document.getElementsByClassName("modal__action--negative")[0];
const toggle = document.querySelector(".toggle-button");
const mobileNav = document.getElementsByClassName("mobile-nav")[0];


[...buttons].forEach(button => {
    button.addEventListener('click', () => {
        backdrop.style.display = 'block';
        // modal.style.display = 'block';
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("open");
        }, 200);
    });
});

const closeModal = () => {
    backdrop.style.display = 'none';
    // modal.style.display = 'none';
    modal.style.display = "none";
    setTimeout(() => {
        modal.classList.remove("open");
    },200);
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    if (modal) {
        setTimeout(() => {
            modal.classList.remove("open");
        },200);
        modal.style.display = "none";
    }
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
    setTimeout(() => {
        mobileNav.classList.remove("open");
    }, 200);
});

toggle.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    setTimeout(() => {
        mobileNav.classList.add("open");
    }, 200);
    backdrop.style.display = 'block';
});


