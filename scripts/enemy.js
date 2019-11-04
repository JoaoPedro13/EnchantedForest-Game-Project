class Enemy {
    constructor(game) {
        this.x = -50;
        this.y = -50;
        this.height = 20;
        this.width = 30;
        this.colided = false;
        this.rndmDir = Math.floor((Math.random() * 4 ) + 1 );
        this.rndmX = Math.floor((Math.random() * game.width) + 1);
        this.rndmY = Math.floor((Math.random() * game.height) + 1);
        this.playerX = game.player.positionX
        this.playerY = game.player.positionY

    }

    randomSpawn(){
        
        let direction = ""
        switch (this.rndmDir) {
            case 1:
                direction = "top";
                this.draw(this.rndmX, this.y)
                break;
            case 2:
                direction = "right"
                this.draw(this.x, this.rndmY)
                break;
            case 3:
                direction = "bott"
                this.draw(this.rndmX, this.y)
                break;
            case 4:
                this.draw(this.x, this.rndmY)
                direction = "left";
                break;
        }            
        
    }


    draw(x, y) {
        context.save();
        context.fillStyle = 'darkred';
        context.fillRect(x, y, this.width , this.height );
        context.restore();
    }
    update() {
        if (this.x > this.playerX){
            this.x++
        }
    }
}