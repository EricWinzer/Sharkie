class Statusbars extends DrawableObjects {
    y = 0;
    x;
    height = 60;
    width = 200;

    percentage = 100;

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        switch (true) {
            case this.percentage == 100:
                return 5;
            case this.percentage >= 80:
                return 4;
            case this.percentage >= 60:
                return 3;
            case this.percentage >= 40:
                return 2;
            case this.percentage >= 20:
                return 1;
            default:
                return 0;
        }
    }
}
