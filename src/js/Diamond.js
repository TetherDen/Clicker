
export class Diamond {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = -30;

        this.size = 15 + Math.random() * 20;    // размер 15-35px
        this.speed = 2 + Math.random() * 3;     // скорость px/frame

        this.rotation = Math.random() * Math.PI * 2;        // текущий угол поворота      
        this.rotationSpeed = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.02);    // вращение скорость/направление
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        this.ctx.rotate(this.rotation);
        this.ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
        this.ctx.restore();
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        return this.y < this.canvas.height + 30;     // true если алмаз еще в кадре
    }
}

Diamond.prototype.image = new Image();
Diamond.prototype.image.src = "./src/images/crystal.png";