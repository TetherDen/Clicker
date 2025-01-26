
const pickBtn = document.getElementById("pick_btn");
const priceElement = pickBtn.querySelector(".store__product_price");
const levelElement = pickBtn.querySelector(".store__product_count");

// TODO заменить счет игрока на реальный...
let PlayerScore = 1000;     // <<-- Заглушка


//  TODO  подумать как лучше хранить переменные и потом сохранять/загружать в localStorage
let basePickPrice = 10;
let pickPriceMultiplier = 1.15;
let pickBaseIncome = 1;
let currentPickLevel = 1;

// PickAxe Click Event
pickBtn.addEventListener("click", () =>{
    const pickPrice = calculatePickPrice();
    if(PlayerScore >= pickPrice) {
        PlayerScore -= pickPrice;
        currentPickLevel++;
        // TODO Pick Income ?!

        updatePickDisplay();
        console.log(`Pick upgraded to level: ${currentPickLevel}, Remaining score: ${PlayerScore}`);        // После тестов log убрать
    }
    else {
        console.log("Not enpught PlayerScore to upgrade Pick");       // После тестов log убрать
    }
});


// Вызываем метод для обновления данных кирки
updatePickDisplay();




// Functions
function calculatePickPrice() {
    return Math.floor(basePickPrice * Math.pow(pickPriceMultiplier, currentPickLevel - 1));
}

function updatePickDisplay() {
    priceElement.textContent = calculatePickPrice();
    levelElement.textContent = currentPickLevel;
}



