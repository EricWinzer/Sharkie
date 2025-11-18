class Keyboard {
left = false;
right = false;
up = false;
down = false;
space = false; 

    constructor() {
        window.addEventListener('keypressed', (e) => this.keyDownHandler(e));
    }


}