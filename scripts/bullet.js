class Bullet {
    constructor(game, x, y){
        this.game = game;
        this.fireHeight = 5;
        this.fireWidth = 5;
        this.bullets = [];
        this.x = this.game.player.positionX;
        this.y = this.game.player.positionY;
        this.speed = 5;
        this.directionX = x
        this.directionY = y
    }
    shoot() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, 15, 15);
        //console.log('test')
        //this.context.fillRect(this.positionX, this.positionX, 200,200);

        //Normalize
        let length = Math.sqrt(this.directionX * this.directionX + this.directionY * this.directionY);
        this.directionX /= length;
        this.directionY /= length;

    }



}