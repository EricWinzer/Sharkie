class Jellyfish extends MovableObjects {
    y = 55;

    constructor() {
        super();
        this.loadImage('../assets/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.x = 100 + Math.random() * 300;
    }


}