class Level {
    enemies;
    backgroundObjects;
    level_end_x = 4 * 719;

    barrier;

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}
