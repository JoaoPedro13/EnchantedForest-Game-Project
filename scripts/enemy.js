class Enemy {
    constructor(game, startX, startY, life, color, velocity) {
        this.game = game
        this.x = startX;
        this.y = startY;
        this.height = 20;
        this.width = 20;        
        this.rndmDir = Math.floor((Math.random() * 4) + 1);
        //this.rndmX = Math.floor((Math.random() * game.width) + 1);
        //this.rndmY = Math.floor((Math.random() * game.height) + 1);
        this.playerX = game.player.positionX
        this.playerY = game.player.positionY
        this.velocityX = 1;
        this.velocityY = 1;
        this.speed = velocity;
        this.distance = 0;
        this.angle = 0;
        this.health = life;
        this.healthBar = life;
        this.collided = false;
        this.colour = color
        
        

    }

    spawn(){
        this.draw(this.x, this.y, this.colour)
    }

    /* randomSpawn(n) {


        let direction = ""
        switch (n) {
            case 1:
                //this.y = -50
                //this.x = Math.floor((Math.random() * game.width) + 1);
                direction = "top";
                this.draw(this.x, this.y, "darkred")
                break;
            case 2:
                this.x = 0;
                this.y = Math.floor((Math.random() * game.height) + 1);
                direction = "right"
                this.draw(this.x, this.y, "green")
                break;
            case 3:
                //this.y = -50
                //this.x = Math.floor((Math.random() * game.width) + 1);
                direction = "bott"
                this.draw(this.x, this.y, "blue")
                break;
            case 4:
                //this.x = -50;
                //this.y = Math.floor((Math.random() * game.height) + 1);
                this.draw(this.x, this.y, "orange")
                direction = "left";
                break;
        }

    } */


    draw(x, y, color) {
        switch (this.healthBar) {
            case 1:
                if (this.health === 1) {
                    context.save();
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.restore();
                } else {
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                }
                
            break;
            case 2:
                if (this.health === 2){
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 24, 2)    
                }else{
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 12, 2)
                }
                
            break;
            case 3:
                if (this.health === 3) {
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 24, 2)
                } else if (this.health === 2) {
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 16, 2)
                }else{
                    context.fillStyle = "black"
                    context.fillRect(x-2, y - 5, 24, 2)
                    context.fillStyle = "red"
                    context.fillRect(x-2, y - 5, 8, 2)
                }
                
            break;
            
        }
        context.save();
        context.fillStyle = color;
        context.fillRect(x, y, this.width, this.height);
        context.restore();
    }
    /* updateX() {
        if (this.x > this.playerX){
            this.velocityX = -1;
            this.x += this.velocityX;

        }else if (this.x < this.playerX){
            this.velocityX = 1;
            this.x += this.velocityX;
        }
    } */
    update() {
        if (this.x === this.game.player.positionX && this.y === this.game.player.positionY) {
            collided = true;
            console.log(collided)
        } else {
            this.updateAngle()
            this.updateSpeed()
            this.move();

        }

    }

    /* updateY(){
    
        if (this.y > this.playerY){
            this.velocityY = -1;
            this.y += this.velocityY;
        }else if (this.y < this.playerY){
            this.velocityY = 1;
            this.y += this.velocityY;
        }        
            
    } */

    updateAngle() {
        this.dx = game.player.positionX - this.x;
        this.dy = game.player.positionY - this.y;
        this.distance = Math.sqrt((this.dx * this.dx) + (this.dy * this.dy));
        //this.angle = Math.atan2(this.dy, this.dx) * 180 / Math.PI;
        //console.log("dx: "+ this.dx)
        //console.log("dy: "+ this.dy)
        //console.log("distance: "+ this.distance)
        //console.log("angle: "+ this.angle)
    }
    updateSpeed() {
        this.velocityX = this.speed * (this.dx / this.distance);
        this.velocityY = this.speed * (this.dy / this.distance);
    }
    move() {
        /* this.UpdateAngle();
        this.UpdateSpeed(); */
        this.x += this.velocityX;
        this.y += this.velocityY;
        //console.log(position)
    }
}