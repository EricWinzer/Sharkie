class MovableObjects {
    x = 30;
    y = 75;
    img;
    height = 50;
    width = 80;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving left');
    }


}