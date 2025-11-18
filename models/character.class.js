class Character extends MovableObjects {

    x = -20;
    y = 50;
    height = 100;
    width = 160;
    imagesSwim = [
        '../assets/1.Sharkie/3.Swim/1.png', 
        '../assets/1.Sharkie/3.Swim/2.png',
        '../assets/1.Sharkie/3.Swim/3.png',
        '../assets/1.Sharkie/3.Swim/4.png',
        '../assets/1.Sharkie/3.Swim/5.png',
        '../assets/1.Sharkie/3.Swim/6.png'
    ];


    constructor() {
        super();
        this.loadImage('../assets/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwim);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.imagesSwim % this.imagesSwim.length;
            let path = this.imagesSwim[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 60);
    }

    jump() {

    }
}