const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const game = new Game($canvas);





window.onload = function () {
 /* game.context.drawImage(game.startImage,0,0) */
    document.getElementById("pause-button").onclick = function () {
        game.controlsScreen();
    }
    document.getElementById("controls-button").onclick = function () {
        game.pause();
    }
    document.getElementById("start-button").onclick = function () {
        //console.log("before: "+ game.running);
        
        /* if (!running) {
           
            game.running=true; */
            game.startGame();
       /*  }else{
            game.pause(game.stamp);
            
            game.running=false;

        }
 */



        //console.log("after: "+ game.running);

    };

};