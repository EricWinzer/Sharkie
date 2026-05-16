class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character;
    statusbarHealth;
    statusbarCoin;
    statusbarPoison;
    statusbarEndboss;
    level;

    intervalsIDs = [];

    constructor(canvas, keyboard, level = level1) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.setWorld();
        this.statusbarHealth = new StatusbarHealth();
        this.statusbarCoin = new StatusbarCoin();
        this.statusbarPoison = new StatusbarPoison();
        this.draw();

        this.checkCollisions();
    }

    setWorld() {
        this.character = new Character();
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Collision with Character', enemy);
                }
            });

            this.level.coins = this.level.coins.filter((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.collecting(coin);
                    this.statusbarCoin.setPercentage(this.character.coins);
                    return false;
                }
                return true;
            });
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poison);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarPoison);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addObjectsToMap(movableObjects) {
        movableObjects.forEach((movableObject) => {
            this.addToMap(movableObject);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

    setStoppableInterval(func, time) {
        let interval = setInterval(func, time);
        this.intervalsIDs.push(interval);
    }

    stopGame() {
        this.intervalsIDs.forEach((intervalID) => {
            clearInterval(intervalID);
        });
    }
}
