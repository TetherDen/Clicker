//imports


document.addEventListener('DOMContentLoaded', () => {
    // Background canvas
    const canvasBg = document.querySelector('.background-canvas');
    const ctx = canvasBg.getContext('2d');

    canvasBg.width = canvasBg.offsetWidth;
    canvasBg.height = canvasBg.offsetHeight;

    const img = new Image();
    img.src = './src/images/background-canvas.jpg';
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvasBg.width, canvasBg.height);
    };

    // Overlay / modal
    const overlay = document.querySelector('.js--overlay');
    const openModalBtns = document.querySelectorAll('[data-modal-id]');

    openModalBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-modal-id');
            const modal = document.getElementById(id);

            if (modal) {
                overlay.classList.add('open');
                modal.classList.add('open')
            }
        })
    });

    overlay.addEventListener('click', function (e) {
        if (e.target.classList.contains('js--overlay') || e.target.classList.contains('js--modal_close')) {
            overlay.classList.remove('open')
            overlay.querySelector('.js--modal.open').classList.remove('open');
        }
    });
});