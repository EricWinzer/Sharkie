class Character extends MovableObject {

    x = 30;
    y = 240;
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

    imagesBubbleAttack = [
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    imagesFinAttack = [
        '../assets/1.Sharkie/4.Attack/Fin slap/1.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/2.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/3.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/4.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/5.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/6.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/7.png',
        '../assets/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    imagesWhaleBubbleAttack = [
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        '../assets/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    imagesIdle = [
        '../assets/1.Sharkie/1.IDLE/1.png',
        '../assets/1.Sharkie/1.IDLE/2.png',
        '../assets/1.Sharkie/1.IDLE/3.png',
        '../assets/1.Sharkie/1.IDLE/4.png',
        '../assets/1.Sharkie/1.IDLE/5.png',
        '../assets/1.Sharkie/1.IDLE/6.png',
        '../assets/1.Sharkie/1.IDLE/7.png',
        '../assets/1.Sharkie/1.IDLE/8.png',
        '../assets/1.Sharkie/1.IDLE/9.png',
        '../assets/1.Sharkie/1.IDLE/10.png',
        '../assets/1.Sharkie/1.IDLE/11.png',
        '../assets/1.Sharkie/1.IDLE/12.png',
        '../assets/1.Sharkie/1.IDLE/13.png',
        '../assets/1.Sharkie/1.IDLE/14.png',
        '../assets/1.Sharkie/1.IDLE/15.png',
        '../assets/1.Sharkie/1.IDLE/16.png',
        '../assets/1.Sharkie/1.IDLE/17.png',
        '../assets/1.Sharkie/1.IDLE/18.png'
    ];

    imagesLongIdle = [
        '../assets/1.Sharkie/2.Long_IDLE/i1.png',
        '../assets/1.Sharkie/2.Long_IDLE/I2.png',
        '../assets/1.Sharkie/2.Long_IDLE/I3.png',
        '../assets/1.Sharkie/2.Long_IDLE/I4.png',
        '../assets/1.Sharkie/2.Long_IDLE/I5.png',
        '../assets/1.Sharkie/2.Long_IDLE/I6.png',
        '../assets/1.Sharkie/2.Long_IDLE/I7.png',
        '../assets/1.Sharkie/2.Long_IDLE/I8.png',
        '../assets/1.Sharkie/2.Long_IDLE/I9.png',
        '../assets/1.Sharkie/2.Long_IDLE/I10.png',
        '../assets/1.Sharkie/2.Long_IDLE/I11.png',
        '../assets/1.Sharkie/2.Long_IDLE/I12.png',
        '../assets/1.Sharkie/2.Long_IDLE/I13.png',
        '../assets/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    imagesHurtElectrificed = [
        '../assets/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '../assets/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '../assets/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    imagesHurtPoisened = [
        '../assets/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        '../assets/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        '../assets/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        '../assets/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        '../assets/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];


    imagesDeadElectrificed = [
        '../assets/1.Sharkie/6.dead/2.Electro_shock/1.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/2.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/3.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/4.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/5.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/6.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/7.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/8.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/9.png',
        '../assets/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];

    imagesDeadPoisened = [
        '../assets/1.Sharkie/6.dead/1.Poisoned/1.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/2.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/3.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/4.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/5.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/6.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/7.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/8.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/9.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/10.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/11.png',
        '../assets/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];


    constructor() {
        super();
        this.loadImage(this.imagesIdle[0]);
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

            this.world.camera_x = -this.x + 20;
        }, 1000 / 60);


        setInterval(() => {
            if (keyboard.right || keyboard.left == true) {
                this.playAnimation(this.imagesSwim);
            }
        }, 50);
    }

    bubbleAttack() {

    }

    finAttack() {

    }
}