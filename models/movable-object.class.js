class MovableObjects extends DrawableObjects {
    ground = 380;
    x = 30;
    y = 75;
    height = 50;
    width = 80;
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    flipDirection = false;
    energy = 100;
    lastHit = 0;

    isAboveGround() {
        return this.y >= this.ground;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    isColliding(movableObject) {
        return (
            this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height
        );
    }

    collecting(itemCollected) {
        if (!itemCollected) return;
        const ctor = itemCollected.constructor ? itemCollected.constructor.name : null;
        if (ctor === 'Coin') {
            this.coins++;
        } else if (ctor === 'Poison') {
            this.poison += 10;
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = Date.now();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = Date.now() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }
}
