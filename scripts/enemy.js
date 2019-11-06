class Enemy {
    constructor(game) {
        this.game = game
        this.x = -50;
        this.y = -50;
        this.height = 20;
        this.width = 20;        
        this.rndmDir = Math.floor((Math.random() * 4) + 1);
        //this.rndmX = Math.floor((Math.random() * game.width) + 1);
        //this.rndmY = Math.floor((Math.random() * game.height) + 1);
        this.playerX = game.player.positionX
        this.playerY = game.player.positionY
        this.velocityX = 1;
        this.velocityY = 1;
        this.speed = 0.5;
        this.distance = 0;
        this.angle = 0;
        this.health = 1;
        this.collided = false;
        

    }

    randomSpawn(n) {


        let direction = ""
        switch (n) {
            case 1:
                //this.x = this.rndmX;
                direction = "top";
                this.draw(this.x, this.y, "darkred")
                break;
            case 2:
                //this.y = this.rndmY;
                direction = "right"
                this.draw(this.x, this.y, "green")
                break;
            case 3:
                //this.x = this.rndmX;
                direction = "bott"
                this.draw(this.x, this.y, "blue")
                break;
            case 4:
                //this.y = this.rndmY;
                this.draw(this.x, this.y, "orange")
                direction = "left";
                break;
        }

    }


    draw(x, y, color) {
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