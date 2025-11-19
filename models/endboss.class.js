class Endboss extends MovableObject {

    height = 50;
    width = 80;
    y = 75;

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
        '../assets/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    constructor() {
        super();
        this.loadImage('../assets/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.x = 800;
        this.loadImages(this.imagesSwim);
        this.speed = 0.15;
        this.animate();

    }

}