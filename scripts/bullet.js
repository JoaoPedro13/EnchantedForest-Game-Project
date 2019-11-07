class Bullet {
    constructor(game, X, Y){
        this.game = game;
        this.context = game.context
        this.height = 5;
        this.width = 5;
        this.bullets = [];
        this.x = this.game.player.positionX;
        this.y = this.game.player.positionY;
        this.speed = 7;
        this.directionX = 0;
        this.directionY = 0;
        this.mouseX = X;
        this.mouseY = Y;
        this.normalize();

    }
    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, this.width, this.height);
        //console.log('test')
        //this.context.fillRect(this.positionX, this.positionX, 200,200);

        
    }
    normalize(){
        let dirX = this.mouseX - this.x;
        let dirY = this.mouseY - this.y;
        
        let length = Math.round(Math.sqrt(dirX * dirX + dirY * dirY));

        this.directionX = dirX / length;
        this.directionY = dirY / length;
        
        
    }

   
    hit(x2, y2, width2, height2) {
        let left1 = this.x;
        let right1 = this.x + this.width;
        let top1 = this.y;
        let bottom1 = this.y + this.height;
        let left2 = x2;
        let right2 = x2 +  width2;
        let top2 = y2;
        let bottom2 = y2 + height2;
        /* console.log("L1 "+left1)
        console.log("R1 "+right1)
        console.log("T1 "+top1)
        console.log("B1 "+bottom1)
        console.log("L2 "+left2)
        console.log("R2 "+right2)
        console.log("T2 "+top2)
        console.log("B2 "+bottom2) */
        return !(left1 > right2 || left2 > right1 || top1 > bottom2 || top2 > bottom1);

    }

    destroy(i){
        for( let j = 0; j < this.game.enemies.length; j++)
        if (this.hit(this.game.enemies[j].x, this.game.enemies[j].y, this.game.enemies[j].width, this.game.enemies[j].height)) {
            this.game.enemies[j].health--;
            this.game.player.score += 2
            this.game.bullets.splice(i, 1)

            this.bullets.splice(i, 1);
            if (this.game.enemies[j].health <= 0) {
                this.game.enemies.splice(j, 1);
                
            }
        }



        for( let i = 0; i< this.game.bullets.length; i++)
    
        if(this.x > this.game.width ||
            this.x < 0 ||
            this.y > this.game.height ||
            this.y < 0) {
            this.game.bullets.splice(i, 1)
        }
    }

    update(){
            this.draw();
            this.x += this.directionX * this.speed;
            this.y += this.directionY * this.speed;
        }
    

}