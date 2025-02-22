import { Product } from "./Product.js";
import { Game } from "../Game.js";
export class Mine extends Product {
    static isBought = false;

    constructor(img, name, income, price, multiplier, level) {
        super(img, name, income, price, multiplier, level);
    }

    buy() {
        if (super.buy() && !this.isBought) {
            setInterval(() => {
                const score = Game.getScore();
                Game.setScore(score + (score * (this.income / 100)));
                this.income += 0.2;

            }, 60_000);

            this.level.classList.add('active');
            this.isBought = true;
        }
    }
}
