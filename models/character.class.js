class Character extends MovableObjects {

    x = 100;
    y = 50;
    height = 100;
    width = 160;
    speed = 10;
    imagesSwim = [
        '../assets/1.Sharkie/3.Swim/1.png',
        '../assets/1.Sharkie/3.Swim/2.png',
        '../assets/1.Sharkie/3.Swim/3.png',
        '../assets/1.Sharkie/3.Swim/4.png',
        '../assets/1.Sharkie/3.Swim/5.png',
        '../assets/1.Sharkie/3.Swim/6.png'
    ];
    world;

    constructor() {
        super();
        this.loadImage('../assets/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.imagesSwim);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (keyboard.right == true && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (keyboard.left == true && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (keyboard.right || keyboard.left == true) {
                let i = this.currentImage % this.imagesSwim.length;
                let path = this.imagesSwim[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {

    }
}