import { Diamond } from "./Diamond.js";
import { Game } from "./Game.js";

export class DiamondAnimation {
    constructor(canvasSelector, backgroundImage) {
        this.canvas = document.querySelector(canvasSelector);
        this.ctx = this.canvas.getContext("2d");
        this.diamonds = [];
        this.backgroundImage = backgroundImage;

        this.currentMaxCrystals = 0;        // Текущий максимум кристалов
        this.totalMaxCrystals = 200;        // Всего максимум кристалов

        this.requiredScoreForNewDiamond = 100;  // Начальный порог
        this.maxSpawnInterval = 1500;           // Начальный интервал появления кристаллов
        this.minSpawnInterval = 1000;           // Минимальный интервал появления

        this.spawnDiamonds();
        this.animate();
    }

    addDiamond() {
        if (this.diamonds.length < this.currentMaxCrystals) {
            this.diamonds.push(new Diamond(this.canvas, this.ctx));
        }
    }

    spawnDiamonds() {
        const spawn = () => {
            this.updateMaxDiamonds(); // Проверяем можно ли увеличить лимит кристаллов
            this.addDiamond();

            const randomInterval =
                Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
            setTimeout(() => {
                requestAnimationFrame(spawn);
            }, randomInterval);
        };
        spawn();
    }

    updateMaxDiamonds() {
        const currentScore = Game.getScore();
    
        if (currentScore >= this.requiredScoreForNewDiamond && this.currentMaxCrystals < this.totalMaxCrystals) {
            this.currentMaxCrystals++;
            this.requiredScoreForNewDiamond = Math.floor(this.requiredScoreForNewDiamond * 1.3);
            
            // Уменьшаем максимальный и минимальный интервалы
            this.maxSpawnInterval = Math.max(this.minSpawnInterval, Math.floor(this.maxSpawnInterval * 0.85));
            this.minSpawnInterval = Math.max(5, Math.floor(this.minSpawnInterval * 0.9));  // 5 - mininterval spawn   
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.backgroundImage.complete) {
            this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);
        }

        // Удаляем невидимые алмазы
        this.diamonds = this.diamonds.filter(diamond => {
            const isVisible = diamond.update();
            diamond.draw();
            return isVisible;
        });

        requestAnimationFrame(() => this.animate());
    }
}
