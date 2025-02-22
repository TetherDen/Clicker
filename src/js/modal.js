import { pressMenuBtnSound } from "./soundManager.js";

const overlay = document.querySelector('.js--overlay');
const openModalBtns = document.querySelectorAll('[data-modal-id]');

openModalBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('data-modal-id');
        const modal = document.getElementById(id);

        if (modal) {
            pressMenuBtnSound();
            overlay.classList.add('open');
            modal.classList.add('open')
        }
    })
});

overlay.addEventListener('click', function (e) {
    if (e.target.classList.contains('js--overlay') || e.target.classList.contains('js--modal_close')) {
        pressMenuBtnSound();
        overlay.classList.remove('open')
        overlay.querySelector('.js--modal.open').classList.remove('open');
    }
});

