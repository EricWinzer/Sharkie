class Poison extends DrawableObjects {
    height = 80;
    width = 80;
    groundZero = 380;

    state = 'idle'; // idle | collecting | collected
    rotation = 0;
    collectTime = 0;

    images = ['../assets/4. Marcadores/Posi¢n/Dark - Left.png', '../assets/4. Marcadores/Posi¢n/Dark - Right.png'];

    constructor(x = 0, bottleDirection = 1) {
        super();
        this.loadImage(this.images[bottleDirection]);
        this.loadImages(this.images);
        this.x = x;
        this.y = this.groundZero - this.height;
    }

    collect() {
        if (this.state !== 'idle') return;
        this.state = 'collecting';
        this.collectTime = 0;
    }

    update(intervalTime) {
        if (this.state === 'collecting') {
            this.updateCollectAnimation(intervalTime);
        }
    }

    updateCollectAnimation(intervalTime) {
        this.collectTime += intervalTime;

        this.y -= intervalTime * 0.05;
        this.rotation += intervalTime * 0.005;

        if (this.collectTime > 800) {
            this.state = 'collected';
            this.remove = true; // World entfernt Bottle
        }
    }

    draw(ctx) {
        if (this.state === 'collecting') {
            this.drawRotating(ctx);
        } else {
            super.draw(ctx);
        }
    }

    drawRotating(ctx) {
        ctx.save();

        const cx = this.x + this.width / 2;
        const cy = this.y + this.height / 2;

        ctx.translate(cx, cy);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);

        ctx.restore();
    }
}
