class MovableObject extends DrawableObject {
    x = 30;
    y = 75;
    height = 50;
    width = 80;
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    moveRight() {
        setStoppableInterval(this.x += this.speed, 1000 / 60);
    }

    moveLeft() {
        setStoppableInterval(this.x -= this.speed, 1000 / 60);
    }

    moveUp() {
        console.log('Moving up');
    }

    moveDown() {
        console.log('Moving down');
    }

    animate() {
        setStoppableInterval(this.x -= this.speed, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}