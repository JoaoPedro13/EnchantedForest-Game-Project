class Player {
    constructor(game) {
        this.context = game.context
        this.game = game
        this.positionX = game.width / 2;
        this.positionY = game.height -200;
        this.height = 20;
        this.width = 20;
        this.health = 3000;
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
        
        this.context.fillStyle = 'black'
        this.context.fillRect(22,14,300,20)
        this.context.fillStyle = '#10ff00'
        this.context.fillRect(22,14,this.health/10,20)


        this.context.fillStyle = 'white ';
        this.context.fillRect(this.positionX, this.positionY, this.width, this.height);


        /* this.context.beginPath();
        this.context.rect(250, 350, 200, 100);
        this.context.fillStyle = '#FFFFFF';
        this.context.fillStyle = 'rgba(225,225,225,0.5)';
        this.context.fillRect(25, 72, 32, 32);
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#000000';
        this.context.stroke();
        this.context.closePath();
        this.context.font = '40pt Kremlin Pro Web';
        this.context.fillStyle = '#000000';
        this.context.fillText('Start', 345, 415); */
        
        
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