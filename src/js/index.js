import {Game} from './Game.js'
import './modal.js'


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

    Game.fillStore();
});
