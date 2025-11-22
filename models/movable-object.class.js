class MovableObjects {
    ground = 180;
    x = 30;
    y = 75;
    img;
    height = 50;
    width = 80;
    imageCache = {};
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;

    isAboveGround() {
        return this.y < ground;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
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
            this.imageCache[path] = img;

        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}