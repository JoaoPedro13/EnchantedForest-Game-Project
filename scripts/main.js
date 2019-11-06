const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const game = new Game($canvas);
let running = false;



window.onload = function () {
    //game.gameStart();
    
    
    document.getElementById("start-button").onclick = function () {
        //console.log("before: "+ game.running);
        
        if (!running) {
            running = true;
            game.running=true;
            game.gameStart();
        }else{
            game.pause();
            running = false;
            game.running=false;

        }




        //console.log("after: "+ game.running);

    };

};