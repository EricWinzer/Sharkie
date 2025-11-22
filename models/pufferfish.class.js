class Pufferfish extends MovableObjects {
    
    height = 50;
    width = 80;
    y = 75;
    
    imagesSwim = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor() {
        super();
        this.loadImage(this.imagesSwim[0]);
        this.x = 100 + Math.random() * 300;
        this.loadImages(this.imagesSwim);
        this.speed = 0.1 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
                 this.playAnimation(this.imagesSwim);
            
        }, 1000 / 60);
    }




}