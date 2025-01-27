import {Product} from "./Product.js";
import {Game} from "../Game.js";

export class Pick extends Product {
    static isBought = false;
    constructor(img, name, income, price, multiplier, level) {
        super(img, name, income, price, multiplier, level);
    }

    buy() {
        if (super.buy() && !this.isBought) {
            setInterval(() => {
                Game.setScore(Game.getScore() + (this.income * this.level));
            }, 1000);

            this.isBought = true;
        }
    }
}