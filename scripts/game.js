class Game{
    constructor($canvas){
        this.canvas =$canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;
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
        
        if (this.enemyTimer < timestamp - this.coolDown) {
            this.enemies.push(new Enemy(this))
            console.log("Number of enemies: " + this.enemies.length)
            this.enemyTimer = timestamp
        }
        if (this.enemyTimer < timestamp - this.coolDown) {
            
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].updateX();
                this.enemies[i].updateY();
            }
            this.enemyTimer = timestamp
        }

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].randomSpawn();
        }
                
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].updateAngle();
            this.enemies[i].updateSpeed();
            this.enemies[i].move();
            
           // console.log(this.enemies[i].x === !this.player.positionX)
            
            //if(this.enemies[i].x === !this.player.positionX){
                this.enemies[i].updateX();
            //}else if(this.enemies[i].y === !this.player.positionY){
                this.enemies[i].updateY();
            //}

            //console.log(this.enemies[0].x)
            //console.log(this.enemies[0].y)
            
        }   
        
        this.player.draw();
        this.player.update();
    }
    

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}

