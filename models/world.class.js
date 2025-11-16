class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Jellyfish()
    ];
    barrier = [
        new Barrier(),
        new Barrier(),
        new Barrier()
    ]; 
    light = new Light();
    floor = new Floor();
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(
            this.floor.img,
            this.floor.x, this.floor.y,
            this.floor.width, this.floor.height);

        this.ctx.drawImage(
            this.barrier.img,
            this.barrier.x, this.barrier.y,
            this.barrier.width, this.barrier.height);
        
        this.ctx.drawImage(
            this.light.img,
            this.light.x, this.light.y,
            this.light.width, this.light.height);
        this.ctx.drawImage(
            this.character.img,
            this.character.x, this.character.y,
            this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(
                enemy.img,
                enemy.x, enemy.y,
                enemy.width, enemy.height);
        });

        let self = this;
        requestAnimationFrame(() => { self.draw() });
    }
}