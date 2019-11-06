class Controls {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.x;
        this.y;
        

    }


    setControls() {
        window.addEventListener('keydown', (event) => {
            // Stop the default behavior (moving the screen to the left/up/right/down)
            event.preventDefault();

            // React based on the key pressed
            switch (event.keyCode) {
                case 37:
                    // left
                    game.player.moveLeft();

                    break;
                case 39:
                    //right
                    game.player.moveRight();

                    break;
                case 40:
                    game.player.moveDown();
                    //down
                    break;
                case 38:
                    game.player.moveUp();
                    //up
                    break;
                case 65:
                    game.player.moveLeft();
                    // A
                    break;
                case 87:
                    game.player.moveUp();
                    // W
                    break;
                case 68:
                    game.player.moveRight();
                    // D
                    break;
                case 83:
                    game.player.moveDown();
                    // S
                    break;
            }
        });

        window.addEventListener('keyup', event => {
            switch (event.keyCode) {
                //LEFT
                case 37:
                    this.game.player.velocityX = 0
                    //console.log("MoveLEFT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //RIGHT
                case 39:
                    this.game.player.velocityX = 0
                    //console.log("MoveRIGHT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //UP
                case 38:
                    this.game.player.velocityY = 0
                    //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //DOWN
                case 40:
                    this.game.player.velocityY = 0
                    //console.log("MoveDOWN, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                case 87:
                    this.game.player.velocityY = 0
                    //console.log("MoveLEFT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //RIGHT
                case 68:
                    this.game.player.velocityX = 0
                    //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //UP
                case 65:
                    this.game.player.velocityX = 0
                    //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
                //DOWN
                case 83:
                    this.game.player.velocityY = 0
                    //console.log("MoveDOWN, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
                    break;
            }
        })

        window.addEventListener('mousemove', e => {
            let bounds = e.target.getBoundingClientRect();
            
            this.x = e.pageX - bounds.left - scrollX; // scroll is to fix the offset
            
            this.y = e.pageY - bounds.top - scrollY;
            

        });
                window.addEventListener('click', e => {
                    if(!game.running){
                        
                    }
                    this.game.bullets.push(new Bullet(this.game, this.x, this.y))
                    
                    
                    //console.log("click in X: " + this.x + " Y: " + this.y )
                    //console.log(this.bullets)
                })

        
    }

    
}
