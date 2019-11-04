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
        this.timer = 0;
        //this.background = new Background(this);
    }

    gameStart(){
        this.animation();
        this.enemy = new Enemy(this);
        this.enemy.randomSpawn();

    }

    animation(timestamp){
        this.updateEverything();
        
        
        //this.timer++
        
        window.requestAnimationFrame(timestamp => this.animation(timestamp));
    }
    
    drawEverything(){
        
    }
    
    updateEverything(){
        this.clearCanvas();
        this.player.update();
        this.player.draw();
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}

