class Pufferfish extends MovableObjects {
    height = 50;
    width = 80;
    y = 75;

    imagesSwimGreen = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    imagesGreenTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    imagesBubbleSwimGreen = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    imagesSwimOrange = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    imagesOrangeTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    ];

    imagesBubbleSwimOrange = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];

    imagesSwimRed = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    imagesRedTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    ];

    imagesBubbleSwimRed = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    imagesGreenTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    imagesBubbleSwimGreen = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    imagesSwimOrange = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    imagesOrangeTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    ];

    imagesBubbleSwimOrange = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];

    imagesSwimRed = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    imagesRedTransform = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    ];

    imagesBubbleSwimRed = [
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        '../assets/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    constructor() {
        super();
        this.loadImage(this.imagesSwimGreen[0]);
        this.x = 400 + Math.random() * 300;
        this.loadImages(this.imagesSwimGreen);
        this.speed = 0.1 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.imagesSwimGreen);
        }, 1000 / 60);
        setStoppableInterval(this.playAnimation(this.imagesSwim), 1000 / 60);
    }
}
