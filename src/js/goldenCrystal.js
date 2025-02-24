import {dropGoldenDiamondSound, spawnGoldenDiamondSound, stopSoundGrowGoldenDiamond} from "./soundManager.js";

const crystal = document.getElementById('golden-crystal');
const board = document.getElementById('board');

// координаты
let currentX, currentY;
let targetX, targetY;
// скорость перемещения
const speed = 0.01;
// минимальное растояние от бортов контейнера
const minSpace = 30;
// состояние отображение кристалика
let isShow = true;
let intervalId, timeoutId;
const timeIntervalShow = 3 * 60 * 1000;

function display() {
    // устанавливаем изначальные координаты
    const {x, y} = getRandomPosition();
    currentX = x;
    currentY = y;

    // указываем целевые координаты
    setTargetPosition();

    // показываем кристал
    crystal.style.display = 'block';
    crystal.style.transform = `translate(${currentX}px, ${currentY}px)`;
    spawnGoldenDiamondSound();

    isShow = true;

    // вызываем передвижение кристалика
    requestAnimationFrame(move);
}

function setTargetPosition() {
    // максимально разрешеные координаты
    const maxX = board.offsetWidth - crystal.offsetWidth - minSpace;
    const maxY = board.offsetHeight - crystal.offsetHeight - minSpace;

    // присваиваем новые целевые координаты
    targetX = Math.max(minSpace, Math.random() * maxX);
    targetY = Math.max(minSpace, Math.random() * maxY);
}

function move() {
    // новые координаты для передвижения
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    crystal.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // дистанция от текущей позиции до целевой
    const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));

    // если осталось меньше 25px то устанавливаем новые целевые позиции
    if (distance < 25) setTargetPosition();

    if (isShow) requestAnimationFrame(move);
}

function getRandomPosition() {
    const maxX = board.offsetWidth - crystal.offsetWidth - minSpace;
    const maxY = board.offsetHeight - crystal.offsetHeight - minSpace;

    const x = Math.max(minSpace, Math.random() * maxX);
    const y = Math.max(minSpace, Math.random() * maxY);

    return {x, y};
}

function showAndHide() {
    display();
    timeoutId = setTimeout(() => {
        isShow = false;
        crystal.style.display = 'none';
        stopSoundGrowGoldenDiamond();
    }, 60 * 1000)
}

intervalId = setInterval(showAndHide, timeIntervalShow);

// ф-я для активации x2 и добавления класса .gold
// function activateDoubleClick() {
//     if (isDoubleClickActive) return;
//     isDoubleClickActive = true;
//
//     crystal.classList.add('gold');
//     Game.setClickMultiplier(2);
//
//     boostTimeoutId = setTimeout(() => {
//         isDoubleClickActive = false;
//         crystal.classList.remove('gold');
//         Game.setClickMultiplier(1);
//     }, 60000);
// }

crystal.onclick = function () {
    if (!isShow) return;
    // todo: вызов меттода что дает x2 на минуту
    isShow = false;
    crystal.style.display = 'none';
    dropGoldenDiamondSound();

    clearInterval(intervalId);
    clearTimeout(timeoutId);

    intervalId = setInterval(showAndHide, timeIntervalShow);
}

