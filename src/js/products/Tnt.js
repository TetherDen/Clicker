import { Product } from "./Product.js";
import { Game } from "../Game.js";

export class Tnt extends Product {
    constructor(img, name, income, price, multiplier, level) {
        super(img, name, income, price, multiplier, level);

        this.farmCallBack = () => {
            Game.setScore(Game.getScore() + this.income);
        };
    }
}
