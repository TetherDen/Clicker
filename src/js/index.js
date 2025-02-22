import {DiamondAnimation} from './DiamondAnimation.js';
import {Game} from './Game.js'
import './modal.js'
import './goldenCrystal.js'
import { initializeSettings } from './settings.js';






document.addEventListener("DOMContentLoaded", () => {
    // Background canvas
    const canvasBg = document.querySelector("#canvas-background");
    const ctx = canvasBg.getContext('2d');

    canvasBg.width = canvasBg.offsetWidth;
    canvasBg.height = canvasBg.offsetHeight;

    const img = new Image();
    img.src = './src/images/background-canvas.jpg';
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvasBg.width, canvasBg.height);
    };

    // Content Canvas
    const canvasContent = document.querySelector("#canvas-content");
    canvasContent.width = canvasContent.offsetWidth;
    canvasContent.height = canvasContent.offsetHeight;
    new DiamondAnimation("#canvas-content",50);
    Game.fillStore();
    initializeSettings();
    
});

