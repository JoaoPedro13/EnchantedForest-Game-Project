class Controls {
    constructor(game) {
        this.game = game;
        this.context = game.context;
    }


    setControls() {
        window.addEventListener('keydown', (event) => {
            // Stop the default behavior (moving the screen to the left/up/right/down)
            event.preventDefault();

            // React based on the key pressed
            switch (event.keyCode) {
                case 37:
                    game.player.moveLeft();
                
                    break;
                case 39:
                    game.player.moveRight();

                    break;
                case 40:
                    game.player.moveDown();
                  
                  break;
                case 38:
                    game.player.moveUp();
                  
                  break;
                case 65:
                    game.player.moveLeft();
                    
                    break;
                case 87:
                    game.player.moveUp();
                    
                    break;
                case 68:
                    game.player.moveRight();
                    
                    break;
                case 83:
                    game.player.moveDown();
                    
                    break;
            }
        });
    }
}