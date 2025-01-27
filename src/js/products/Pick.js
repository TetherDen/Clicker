import {Product} from "./Product.js";
import {Game} from "../Game.js";

export class Pick extends Product {
    constructor(img, name, income, price, multiplier, level) {
        super(img, name, income, price, multiplier, level);
    }

    buy() {
        if (super.buy()) {
            setInterval(() => {
                Game.setScore(Game.getScore() + this.income);
            }, 1000);
        }
    }
}