class StatusbarCoin extends Statusbars {
    x = 240;

    percentage = 0;

    images = [
        '../assets/4. Marcadores/green/Coin/0_  copia 4.png',
        '../assets/4. Marcadores/green/Coin/20_  copia 2.png',
        '../assets/4. Marcadores/green/Coin/40_  copia 4.png',
        '../assets/4. Marcadores/green/Coin/60_  copia 4.png',
        '../assets/4. Marcadores/green/Coin/80_  copia 4.png',
        '../assets/4. Marcadores/green/Coin/100_ copia 4.png',
    ];

    constructor(percentage) {
        super();
        this.loadImage(this.images[5]);
        this.loadImages(this.images);
        this.setPercentage(this.percentage);
    }

    drawStatusbarCoin(ctx) {
        if (!ctx) return;
        // draw icon
        if (this.img) {
            ctx.drawImage(this.img, this.x + 10, this.y + 10, this.width, this.height);
        }
        // draw number next to icon
        ctx.fillStyle = 'black';
        ctx.font = '40px Luckiest Guy';
        ctx.textAlign = 'left';
        ctx.fillText(this.percentage.toString(), this.x + this.width + 10, this.y + this.height);
    }
}
