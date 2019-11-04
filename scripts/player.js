class Player {
    constructor(game) {
        this.context = game.context
        this.positionX = game.width / 2;
        this.positionY = game.height / 2;
        this.height = 20;
        this.width = 20;
        this.health = 300;
        this.direction = 'S';
        this.velocityX = 0;
        this.velocityY = 0;


    }

    moveUp() {
        if (this.positionY < 0) {
            this.positionY = 0
            this.velocityY = 0
        }
        if (this.positionY > 0) {
            //this.positionY -= 10
            this.velocityY = -5
            this.direction = 'N'

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
}