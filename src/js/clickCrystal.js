import {Game} from "./Game.js";
import {diamondClickSound} from "./soundManager.js";

const crystal = document.getElementById('crystal-item');
let pointsByClick = 1;

crystal.addEventListener('click', () => {
    Game.setScore(Game.getScore() + pointsByClick);
    diamondClickSound();
});

export function activateDoubleClick() {
    crystal.classList.add('gold');
    pointsByClick = 2;

    setTimeout(() => {
        crystal.classList.remove('gold');
        pointsByClick = 1;
    }, 60000);
}
