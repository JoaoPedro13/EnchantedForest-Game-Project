class Player{
    constructor(game){
        this.context = game.context
        this.positionX = game.width/2;
        this.positionY = game.height/2;
        this.height = 20;
        this.width = 20;
        this.health = 300;
        

    }

    moveUp(){
      if (this.positionY > 0) {
        this.positionY -= 10
          console.log("MoveUP, Player-position: " + this.positionX + ", " +this.positionY)
        }
    }
    
    moveDown(){
        if (this.positionY < game.height - this.height) {
            this.positionY += 10
            console.log("MoveDOWN, Player-position: " + this.positionX + ", " +this.positionY)
        }
    }
    
    moveLeft() {
        if (this.positionX > 0) {
            //console.log('b' + game.boundaryLeft)
            
            this.positionX -= 10
            console.log("MoveLEFT, Player-position: " + this.positionX + ", " +this.positionY)
        }
    }
    
    moveRight() {
        
        
        if (this.positionX < game.width- this.width) {
            this.positionX += 10
            console.log("MoveRIGHT, Player-position: " + this.positionX + ", " +this.positionY)
        }
    }

    draw(){
        this.context.fillStyle = 'black';
        this.context.fillRect(this.positionX, this.positionY, this.width, this.height);
        
        
        //DRAW AN IMAGE
        //this.context.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
    }
}