class Player {
    constructor(game) {
        this.context = game.context
        this.game = game
        this.positionX = game.width / 2;
        this.positionY = game.height -200;
        this.height = 20;
        this.width = 20;
        this.health = 3000;
        this.direction = 'S';
        this.velocityX = 0;
        this.velocityY = 0;
        this.fireHeight = 5;
        this.fireWidth = 5;
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.bulletSpeed =5;
        this.bullets = [];
        this.bulletPos
       // this.bulletDirectionX = this.game.controls.x - this.positionX;
       // this.bulletDirectionY = this.game.controls.y - this.positionY;

    }

    moveUp() {
        if (this.positionY > 0) {
            //this.positionY -= 10
            this.velocityY = -5
            this.direction = 'N'
        } else if (this.positionY <= 0) {
            this.velocityY *= 0
            this.positionY = -1
        }
    }

    moveDown() {

        if (this.positionY < game.height - this.height) {
            this.velocityY = 5
            this.direction = 'S'
        }
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.velocityX = -5
            this.direction = 'W'
        }
    }

    moveRight() {


        if (this.positionX < game.width - this.width) {
            this.velocityX = 5
            this.direction = 'E'
        }
    }

    
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.positionX, this.positionY, this.width, this.height);
        
        
        //DRAW AN IMAGE
        //this.context.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
    }
    
    update() {
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
    }

    shoot() {
        this.context.fillStyle = 'yellowgreen';
        this.context.fillRect(this.positionX, this.positionY, this.fireWidth, this.fireHeight);
        //console.log('test')
        //this.context.fillRect(this.positionX, this.positionX, 200,200);
        
        //Normalize
        let length = Math.sqrt(this.bulletDirectionX* this.bulletDirectionX + this.bulletDirectionY * this.bulletDirectionY);
        this.bulletDirectionX /= length;
        this.bulletDirectionY /= length;

    }


/* 
    for (let i = 0; i < bullets.length; i++) {
        bullet[i][0] += bulletDirectionX * bulletSpeed;
        bullet[i][1] += bulletDirectionY * bulletSpeed;
        /////hit detection goes here
    }
} */
}