
const pickBtn = document.getElementById("pick_btn");
const priceElement = pickBtn.querySelector(".store__product_price");
const levelElement = pickBtn.querySelector(".store__product_count");

const PlayerScore = document.getElementById("score_points");


//  TODO  подумать как лучше хранить переменные и потом сохранять/загружать в localStorage
let basePickPrice = 10;
let pickPriceMultiplier = 1.15;
let pickBaseIncome = 1;
let currentPickLevel = 0;

// PickAxe Click Event
pickBtn.addEventListener("click", () =>{
    const pickPrice = calculatePickPrice();
    const currentScore = getPlayerScore();
    if(currentScore >= pickPrice) {
        setPlayerScore(currentScore - pickPrice);
        currentPickLevel++;

        updatePickDisplay();
        //..... save mthod()

        console.log(`Pick upgraded to level: ${currentPickLevel}, Remaining score: ${PlayerScore}`);        // После тестов log убрать
    }
    else {
        console.log("Not enpught PlayerScore to upgrade Pick");       // После тестов log убрать
    }
});


// Вызываем метод для обновления данных кирки
updatePickDisplay();
// Старт Доход Кирка в 1/сек
startPickIncome();





// Functions
function startPickIncome() {
    setInterval(() => {
        const currentScore = getPlayerScore();
        const income = pickBaseIncome * currentPickLevel;
        setPlayerScore(currentScore + income);      
    }, 1000);
}


function calculatePickPrice() {
    return Math.floor(basePickPrice * Math.pow(pickPriceMultiplier, currentPickLevel));
}

function updatePickDisplay() {
    priceElement.textContent = calculatePickPrice();
    levelElement.textContent = currentPickLevel;
}

function getPlayerScore() {
    return parseInt(PlayerScore.textContent);
}

// обновление счета
function setPlayerScore(newScore) {
    PlayerScore.textContent = newScore;
}



