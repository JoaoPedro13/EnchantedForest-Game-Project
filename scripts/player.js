class Player {
    constructor(game) {
        this.context = game.context
        this.game = game
        this.positionX = game.width / 2;
        this.positionY = game.height -200;
        this.height = 20;
        this.width = 20;
        this.health = 300;
        this.score = 0;
        this.count = 0; 
        this.direction = 'S';
        this.velocityX = 0;
        this.velocityY = 0;
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        
      

    }

    moveUp() {       
            //this.positionY -= 10
        this.velocityY = -5
        this.direction = 'N'        
    }

    moveDown() {        
        this.velocityY = 5
        this.direction = 'S'        
    }

    moveLeft() {        
        this.velocityX = -5
        this.direction = 'W'        
    }

    moveRight() {        
        this.velocityX = 5
        this.direction = 'E'        
    }

    
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.positionX, this.positionY, this.width, this.height);
        
        
        //DRAW AN IMAGE
        //this.context.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
    }
    
    update() {
        if (this.positionX + this.velocityX > 0 && this.positionX + this.velocityX + this.width < this.game.width){
            this.positionX += this.velocityX;
            
        }
        
        if (this.positionY + this.velocityY > 0 && this.positionY + this.velocityY + this.height < this.game.height){
            this.positionY += this.velocityY;
        }
    }

    
}