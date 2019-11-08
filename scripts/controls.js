class Controls {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.x;
    this.y;
  }

  setControls() {
    window.addEventListener("keydown", event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          // left
          event.preventDefault();
          game.player.moveLeft();

          break;
        case 39:
          //right
          event.preventDefault();
          game.player.moveRight();

          break;
        case 40:
          game.player.moveDown();
          //down
          event.preventDefault();
          break;
        case 38:
          game.player.moveUp();
          //up
          event.preventDefault();
          break;
        case 65:
          game.player.moveLeft();
          // A
          event.preventDefault();
          break;
        case 87:
          game.player.moveUp();
          // W
          event.preventDefault();
          break;
        case 68:
          game.player.moveRight();
          // D
          event.preventDefault();
          break;
        case 83:
          game.player.moveDown();
          // S
          event.preventDefault();
          break;
        case 80:
          game.pause();
          // P
          event.preventDefault();
          break;
      }
    });

    
    window.addEventListener("keyup", event => {
      switch (event.keyCode) {
        //LEFT
        case 37:
          this.game.player.velocityX = 0;
          event.preventDefault();
          //console.log("MoveLEFT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //RIGHT
        case 39:
          this.game.player.velocityX = 0;
          event.preventDefault();
          //console.log("MoveRIGHT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //UP
        case 38:
          this.game.player.velocityY = 0;
          event.preventDefault();
          //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //DOWN
        case 40:
          this.game.player.velocityY = 0;
          event.preventDefault();
          //console.log("MoveDOWN, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        case 87:
          this.game.player.velocityY = 0;
          event.preventDefault();
          //console.log("MoveLEFT, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //RIGHT
        case 68:
          this.game.player.velocityX = 0;
          event.preventDefault();
          //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //UP
        case 65:
          this.game.player.velocityX = 0;
          event.preventDefault();
          //console.log("MoveUP, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
        //DOWN
        case 83:
          this.game.player.velocityY = 0;
          event.preventDefault();
          //console.log("MoveDOWN, Player-position: " + this.game.player.positionX + ", " + this.game.player.positionY)
          break;
      }
    });
    
    window.addEventListener("mousemove", e => {
      let bounds = e.target.getBoundingClientRect();

      this.x = e.pageX - bounds.left - scrollX; // scroll is to fix the offset

      this.y = e.pageY - bounds.top - scrollY;
    });
   

    this.game.canvas.addEventListener("click", e => {
      // e.offsetX;
      // e.offsetY;
      this.game.bullets.push(new Bullet(this.game, this.x, this.y));

      //console.log("click in X: " + x + " Y: " + y )
      //console.log(this.bullets)
    });
  }
}
