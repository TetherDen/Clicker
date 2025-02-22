import {Pick} from "./products/Pick.js";
import {Tnt} from "./products/Tnt.js";
import { Trolley } from "./products/Trolley.js";
import { DrillingMachine } from "./products/DrillingMachine.js";
import { Excavator } from "./products/Excavator.js";
import {Mine} from "./products/Mine.js";

export class Game {
    static products = [
        // (img, name, income, price, multiplier, level)
        new Pick("pick.png", "Pick", 0.5, 20, 1.15, 0),
        new Tnt("tnt.png", "Tnt", 3.8, 100, 1.755, 0),
        new Trolley("trolley.png", "Trolley", 1.5, 300, 1.15, 0),
        new DrillingMachine("drilling_machine.webp", "D-Machine", 10, 600, 1.20, 0),
        new Excavator("excavator.png", "Excavator", 20, 1800, 1.20, 0),
        new Mine("mine.png", "Mine", 2, 4000, 1.8, 0),
    ];
    static storeElement = document.getElementById('store-section');
    static scorePointsElement = document.getElementById('score-points');

    constructor() {
    }

    static fillStore() {
        if (this.products.length !== 0) {
            this.products.forEach((el, index) => {
                const id = `${el.name.toLowerCase()}-${index}`;
                const content = `
                    <div class="store__product" id="${id}" style="top:${index*(-6)}px">
                        <span class="store__product_border_vertical"></span>
                        <span class="store__product_border_horizontal"></span>
                        <div class="store__product_content">
                            <div class="store__product_img_wrapper">
                                <img class="store__product_img" src="./src/images/products/${el.img}" alt="${el.name}">
                            </div>
                            <div class="align-content-center">
                                <div class="store__product_name">${el.name}</div>
                                <div class="store__product_price js--store__product_price">${el.price}</div>
                            </div>
                            <div class="store__product_level js--store__product_level">${el.level}</div>
                        </div>
                    </div>
                `;

                if (this.storeElement !== null) {
                    this.storeElement.insertAdjacentHTML("beforeend", content);
                }

                const product = this.storeElement.querySelector(`#${id}`);
                if (product) {
                    product.addEventListener('click', () => {
                        el.buy();
                    });

                    el.priceElement = product.querySelector('.js--store__product_price');
                    el.levelElement = product.querySelector('.js--store__product_level');
                }
            });
        }
    }

    static getScore() {
        return Number(this.scorePointsElement.textContent);
    }

    static setScore(newScore) {
        if (newScore >= 0) {
            this.scorePointsElement.textContent = newScore.toFixed(1);
        }
    }
}


