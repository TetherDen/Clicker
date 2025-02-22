import { Diamond } from "./Diamond.js";

export class DiamondAnimation {
    constructor(canvasSelector,  maxCrystals = 50) {
        this.canvas = document.querySelector(canvasSelector);
        this.ctx = this.canvas.getContext("2d");
        this.diamonds = [];
        this.maxCrystals = maxCrystals;

        this.minSpawnInterval = 50; // время спавна алмазов на фоне в милисекундах
        this.maxSpawnInterval = 700; 

        this.spawnDiamonds();
        this.animate();
    }

    addDiamond() {
        if(this.diamonds.length < this.maxCrystals) {
            this.diamonds.push(new Diamond(this.canvas, this.ctx));
        }
    }
            

    spawnDiamonds() {
        const spawn = () => {
            this.addDiamond();   
            const randomInterval = Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
            setTimeout(spawn, randomInterval);
        };

        spawn();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // фильтр чистить ненжные алмазы
        this.diamonds = this.diamonds.filter(diamond => {
            const isVisible = diamond.update();
            diamond.draw();
            return isVisible;
        });

        requestAnimationFrame(() => this.animate());
    }
}