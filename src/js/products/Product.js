import {Game} from "../Game.js";
import { playToolUpgradeSound } from "../soundManager.js";

export class Product {
    priceElement = null;
    levelElement = null;

    constructor(img, name, income, price, multiplier, level) {
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
            return true;
        }

        return false;
    }
}