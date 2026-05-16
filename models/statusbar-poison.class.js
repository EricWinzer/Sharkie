class StatusbarPoison extends Statusbars {
    x = 460;

    percentage = 0;

    images = [
        '../assets/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        '../assets/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        '../assets/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        '../assets/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        '../assets/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        '../assets/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    constructor() {
        super();
        this.loadImage(this.images[5]);
        this.loadImages(this.images);
        this.setPercentage(this.percentage);
    }
}
