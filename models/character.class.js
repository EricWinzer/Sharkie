class Character extends MovableObjects {

    x = -100;
    y = 50;
    height = 100;
    width = 160;
    speed = 10;
    world;

    imagesSwim = [
        '../assets/1.Sharkie/3.Swim/1.png',
        '../assets/1.Sharkie/3.Swim/2.png',
        '../assets/1.Sharkie/3.Swim/3.png',
        '../assets/1.Sharkie/3.Swim/4.png',
        '../assets/1.Sharkie/3.Swim/5.png',
        '../assets/1.Sharkie/3.Swim/6.png'
    ];

    imagesAttack = [
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    imagesWhaleAttack = [
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

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

            if (keyboard.space == true && !this.isAboveGround()) {
                this.speedY = 20;
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (keyboard.right || keyboard.left == true) {
                this.playAnimation(this.imagesSwim);
            }
        }, 50);
    }

    jump() {

    }
}