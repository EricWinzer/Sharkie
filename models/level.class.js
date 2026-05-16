class Level {
    enemies;
    backgroundObjects;
    coins;
    poison;
    barrier;

    level_end_x = 4 * 719;

    constructor(enemies, backgroundObjects, coins, poison) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poison = poison;
    }
}
