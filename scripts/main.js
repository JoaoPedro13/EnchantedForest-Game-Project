const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const game = new Game($canvas);

window.onload = function () {
    game.gameStart();


/*     document.getElementById("start-button").onclick = function () {
        //console.log("before: "+ game.running);

        if (!game.running) {
            game.startGame();
        }




        //console.log("after: "+ game.running);

    }; */

};