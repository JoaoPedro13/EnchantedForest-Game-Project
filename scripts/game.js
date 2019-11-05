class Game{
    constructor($canvas){
        this.canvas =$canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.running = false;
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.enemies = []; 
        this.enemyTimer = 0;
        this.coolDown = 2000;
        this.enemiesCollision = false;

        //this.background = new Background(this);
    }

    gameStart(){
        this.animation();

    }

    animation(timestamp){



        this.updateEverything(timestamp);
        
        
        //this.timer++
        
        window.requestAnimationFrame(timestamp => this.animation(timestamp));
    }
    
    drawEverything(){
        
    }
    
    updateEverything(timestamp){
        this.clearCanvas();
        if (this.enemyTimer < timestamp - this.coolDown && this.enemies.length -1 < 3000 ) {
            this.enemies.push(new Enemy(this))
            console.log("Number of enemies: " + this.enemies.length)
            this.enemyTimer = timestamp
        }
        

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].randomSpawn(1);
        }
                
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemyHitBox();
            if(this.playerHitBox(this.player.positionX, this.player.positionY, this.enemies[i].x, this.enemies[i].y)){
                this.enemies[i].collided = true;
            }else{
                this.enemies[i].collided = false;
            }
            //console.log(this.enemies[0].collided)
            this.enemies[i].update();

            //this.enemies[i].updateAngle();
            //this.enemies[i].updateSpeed();
            //this.enemies[i].move();
            if(this.enemies[i].collided = true){
                this.player.health--
                //console.log(this.player.health)
            }
            
        }

        if(this.player.health <= 0){
            console.log("You Died")
        }
        
        //console.log("mouse X: " + this.controls.x + "Y: " + this.controls.y)
        
        this.player.draw();
        this.player.update();
    
        for (let i = 0; i < this.player.bullets.length; i++) {
            this.player.bullets[0] += bullets.directionxx * bulletSpeed;
            this.player.bullets[1] += bullets.directionyy * bulletSpeed;
            /////hit detection goes here
        }
    
    }
    

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    playerHitBox(x1, y1, x2, y2){
    
            let bottom1, bottom2, left1, left2, right1, right2, top1, top2;
            left1 = x1 - 20;
            right1 = x1 + 20;
            top1 = y1 - 20;
            bottom1 = y1 + 20;
            left2 = x2 - 20;
            right2 = x2 + 20;
            top2 = y2 - 20;
            bottom2 = y2 + 20;
            return !(left1 > right2 || left2 > right1 || top1 > bottom2 || top2 > bottom1);
        
    }


    enemyHitBox(){
        for (let i = 1; i < this.enemies.length; i++) {
            if (this.enemies[i].y === this.enemies[i-1].y){
                this.enemies[i].y++;
                this.enemies[i-1].y--
                //console.log(this.enemies[i].y === this.enemies[i - 1].y)
            }
        }
    }

}

