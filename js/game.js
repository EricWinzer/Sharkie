let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

};


window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 39:
            keyboard.right = true;
            break;
        case 37:
            keyboard.left = true;
            break;
        case 38:
            keyboard.up = true;
            break;
        case 40:
            keyboard.down = true;
            break;
        case 32:
            keyboard.space = true;
            break;

        default:
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 39:
            keyboard.right = false;
            break;
        case 37:
            keyboard.left = false;
            break;
        case 38:
            keyboard.up = false;
            break;
        case 40:
            keyboard.down = false;
            break;
        case 32:
            keyboard.space = false;
            break;

        default:
            break;
    }
});

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!document.fullscreenElement) {
        enterFullscreen(fullscreen);
    } else {
        exitFullscreen();
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

