
// Получаем элемент главного кристалла
const crystal = document.getElementById('main-crystal');
const scoreElement = document.getElementById('score'); // Элемент для отображения счета

let score = 0;

function increaseScore() {
    score += 1;
    scoreElement.textContent = score;
}

// ф-я анимации дрожания к кристаллу
function shakeCrystal() {
    crystal.classList.add('shake'); // Добавляем класс для анимации

    // Убираем класс после завершения анимации (например, 0.3s)
    setTimeout(() => {
        crystal.classList.remove('shake');
    }, 300);
}

// лбработчик клика по кристаллу
crystal.addEventListener('click', () => {
    increaseScore();
    shakeCrystal();
});



let isDoubleClickActive = false;
let boostTimeoutId;

export function activateDoubleClick(crystal) {
    if (isDoubleClickActive) return;
    isDoubleClickActive = true;

    crystal.classList.add('gold');
    Game.setClickMultiplier(2);

    boostTimeoutId = setTimeout(() => {
        isDoubleClickActive = false;
        crystal.classList.remove('gold');
        Game.setClickMultiplier(1);
    }, 60000);
}