class World {
    character = new Character();

    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];

    barrier = new Barrier();

    backgroundObjects = [
        new BackgroundObject('../assets/3. Background/Layers/5. Water/D.png', 0, 0, 300, 150),
        new BackgroundObject('../assets/3. Background/Layers/1. Light/COMPLETO.png', 0, 0, 300, 150),
        new BackgroundObject('../assets/3. Background/Layers/4.Fondo 2/D.png', 0, 0, 300, 150),
        new BackgroundObject('../assets/3. Background/Layers/3.Fondo 1/D.png', 0, 0, 300, 150),
        new BackgroundObject('../assets/3. Background/Layers/2. Floor/D.png', 0, 0, 300, 150)
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        /*
            this.addToMap(this.barrier);
        */

        let self = this;
        requestAnimationFrame(() => { self.draw() });
    }

    addObjectsToMap(movableObjects) {
        movableObjects.forEach(movableObject => {
            this.addToMap(movableObject);
        });
    }

    addToMap(movableObject) {
        this.ctx.drawImage(
            movableObject.img,
            movableObject.x, movableObject.y,
            movableObject.width, movableObject.height);
    }


}