class Statusbar {

    imageStatusbarLives = [
        '../assets/4. Marcadores/green/Life/0_  copia 3.png',
        '../assets/4. Marcadores/green/Life/20_  copia 3.png',
        '../assets/4. Marcadores/green/Life/40_  copia 3.png',
        '../assets/4. Marcadores/green/Life/60_  copia 3.png',
        '../assets/4. Marcadores/green/Life/80_  copia 3.png',
        '../assets/4. Marcadores/green/Life/100_  copia 3.png',
    ];

    imageStatusbarCoins = [
        '../assets/4. Marcadores/green/Coins/0_ copia 3.png',
        '../assets/4. Marcadores/green/Coins/20_ copia 3.png',
        '../assets/4. Marcadores/green/Coins/40_ copia 3.png',
        '../assets/4. Marcadores/green/Coins/60_ copia 3.png',
        '../assets/4. Marcadores/green/Coins/80_ copia 3.png',
        '../assets/4. Marcadores/green/Coins/100_ copia 3.png',
    ];

    imageStatusbarPoisoned = [
        '../assets/4. Marcadores/green/Poisoned/0_ copia 3.png',
        '../assets/4. Marcadores/green/Poisoned/20_ copia 3.png',
        '../assets/4. Marcadores/green/Poisoned/40_ copia 3.png',
        '../assets/4. Marcadores/green/Poisoned/60_ copia 3.png',
        '../assets/4. Marcadores/green/Poisoned/80_ copia 3.png',
        '../assets/4. Marcadores/green/Poisoned/100_ copia 3.png',
    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.imageStatusbarLives);
        this.loadImages(this.imageStatusbarCoins);
        this.loadImages(this.imageStatusbarPoisoned);

    }

    setPercentageLives(percentage) {
        this.percentage = percentage;
    }

    resolveImageIndex() {
        switch (this.percentage) {
            case 100:
                return 5;
            case >= 80:
                return 4;
            case >= 60:
                return 3;
            case >= 40:
                return 2;
            case >= 20:
                return 1;
            default:
                return 0;
        }


    }