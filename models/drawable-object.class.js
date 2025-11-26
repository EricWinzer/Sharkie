class DrawableObject extends World {
    ground = 400;
    img;
    x;
    y;
    height;
    width;
    imageCache = {};

    isAboveGround() {
        return this.y < ground;
    }

    currentImage = 0;

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
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}