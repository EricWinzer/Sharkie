class StatusbarHealth extends Statusbars {
    x = 20;
    y = 0;
    height = 60;
    width = 200;

    images = [
        '../assets/4. Marcadores/green/Life/0_  copia 3.png',
        '../assets/4. Marcadores/green/Life/20_ copia 4.png',
        '../assets/4. Marcadores/green/Life/40_  copia 3.png',
        '../assets/4. Marcadores/green/Life/60_  copia 3.png',
        '../assets/4. Marcadores/green/Life/80_  copia 3.png',
        '../assets/4. Marcadores/green/Life/100_  copia 2.png',
    ];

    constructor() {
        super();
        this.loadImage(this.images[5]);
        this.loadImages(this.images);
        this.setPercentage(this.percentage);
    }
}
