import {Product} from "./Product.js";
import {Game} from "../Game.js";

export class Mine extends Product {

    constructor(img, name, income, price, multiplier, level) {
        super(img, name, income, price, multiplier, level);

        this.farmInterval = 60 * 1000;
        this.farmCallBack = () => {
            const score = Game.getScore();
            Game.setScore(score + (score * (this.income / 100)));
            this.income += 0.2;
        };
    }
}
