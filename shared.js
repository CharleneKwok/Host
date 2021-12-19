const backdrop = document.getElementsByClassName("backdrop");
const modal = document.getElementsByClassName("modal");
const buttons = document.getElementsByClassName("plan-card__button");
const noButton = document.getElementsByClassName("modal__action--negative");

console.log("?");
[...buttons].forEach(button => {
    button.addEventListener('click', () => {
        backdrop[0].style.display = 'block';
        modal[0].style.display = 'block';
    });
});

noButton[0].addEventListener('click', () => {
    backdrop[0].style.display = 'none';
    modal[0].style.display = 'none';
});

