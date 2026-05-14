class DrawableObjects {
    ground = 400;
    img;
    x;
    y;
    height;
    width;
    imageCache = {};
    currentImage = 0;
    flipDirection = false;

    isAboveGround() {
        return this.y < this.ground;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.save();

        // Spiegelung aktiv?
        if (this.flipX) {
            ctx.translate(this.x + this.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(this.img, 0, this.y, this.width, this.height);
        } else {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }

        ctx.restore();
    }
}
