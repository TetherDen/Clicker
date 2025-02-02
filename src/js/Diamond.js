
export class Diamond {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = -30;

        this.size = 15 + Math.random() * 25;    // размер 15-40px
        this.speed = 1 + Math.random() * 2;     // скорость 1-3 px/frame

        this.rotation = Math.random() * Math.PI * 2;        // текущий угол поворота
        this.rotationSpeed = (Math.random() - 0.05) * 0.02;     // cкорость вращения
        this.image = new Image();
        this.image.src = "./src/images/crystal.png";  

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