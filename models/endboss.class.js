class Endboss extends MovableObjects {
    height = 150;
    width = 240;
    y = 0;

    imagesSwim = [
        '../assets/2.Enemy/3 Final Enemy/2.floating/1.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/2.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/3.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/4.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/5.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/6.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/7.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/8.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/9.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/10.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/11.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/12.png',
        '../assets/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    imagesIntro = [
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        '../assets/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    imagesAttack = [
        '../assets/2.Enemy/3 Final Enemy/Attack/1.png',
        '../assets/2.Enemy/3 Final Enemy/Attack/2.png',
        '../assets/2.Enemy/3 Final Enemy/Attack/3.png',
        '../assets/2.Enemy/3 Final Enemy/Attack/4.png',
        '../assets/2.Enemy/3 Final Enemy/Attack/5.png',
        '../assets/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    imagesHurt = [
        '../assets/2.Enemy/3 Final Enemy/Hurt/1.png',
        '../assets/2.Enemy/3 Final Enemy/Hurt/2.png',
        '../assets/2.Enemy/3 Final Enemy/Hurt/3.png',
        '../assets/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    imagesDead = [
        '../assets/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        '../assets/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        '../assets/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        '../assets/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
    ];

    constructor() {
        super();
        this.loadImage(this.imagesSwim[0]);
        this.x = 2100;
        this.loadImages(this.imagesSwim);
        this.loadImages(this.imagesIntro);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.speed = 0.15;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesSwim);
        }, 6000 / 60);
    }
}
