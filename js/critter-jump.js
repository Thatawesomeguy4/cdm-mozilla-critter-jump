domready(function()
{
    init();
});

// list variables
var game;

/**
 * init game
 * this will be the main function that initializes the game
 */
function init() {

    game = new GAME.CJEngine();
    document.body.appendChild(game.view.renderer.view);

    requestAnimFrame(update);
}

function update() {
    game.update();
    requestAnimFrame(update);
}