class Level {
    enemies;
    backgroundObjects;
    level_end_x = 3 * 719;

    barrier;

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }

}