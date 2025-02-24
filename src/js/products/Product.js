import {Game} from "../Game.js";
import { playToolUpgradeSound } from "../soundManager.js";

export class Product {
    static commonId = 1;
    priceElement = null;
    levelElement = null;
    farmCallBack = () => {};
    farmInterval = 1000;
    isBought = false;

    constructor(img, name, income, price, multiplier, level) {
        this.id = Product.commonId++;
        this.img = img;
        this.name = name;
        this.income = income;
        this.price = price;
        this.multiplier = multiplier;
        this.level = level;
    }

    calculatePrice() {
        return this.price *= this.multiplier.toFixed(1);
    }

    updateDisplay() {
        if (this.priceElement && this.levelElement) {
            this.priceElement.textContent = this.price.toFixed(1);
            this.levelElement.textContent = this.level;

            if (!this.levelElement.classList.contains('active') && this.level > 0) {
                this.levelElement.classList.add('active');
            }
        }
    }

    buy() {
        const score = Game.getScore();

        if (score >= this.price) {
            playToolUpgradeSound();
            Game.setScore(score - this.price)
            this.level += 1;
            this.price = this.calculatePrice();
            this.updateDisplay();
            if (!this.isBought) this.startFarmPoints();
        }
    }

    startFarmPoints() {
        setInterval(() => this.farmCallBack(), this.farmInterval);
        this.isBought = true;
    }
}
