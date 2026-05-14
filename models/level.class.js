class Level {
    enemies;
    backgroundObjects;
    barrier;

    level_end_x = 4 * 719;

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}
