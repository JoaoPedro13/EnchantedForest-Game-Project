class Player {
  constructor(game) {
    this.context = game.context;
    this.game = game;
    this.positionX = game.width / 2;
    this.positionY = game.height - 200;
    this.height = 40;
    this.width = 40;
    this.health = 1000;
    this.score = 0;
    this.count = 0;
    this.timer= 0;
    this.direction = "S";
    this.velocityX = 0;
    this.velocityY = 0;
    this.anchorX = 0.5;
    this.anchorY = 0.5;
    this.scoreBorder = new Image();
    this.scoreBorder.src = "./images/player/textborder.png";
    this.healthBar = new Image();
    this.healthBar.src = "./images/player/HealthBar.png";
    this.imageUp0= new Image()
    this.imageUp0.src="./images/player/rogue like run up_Animation 1_0.png"
    this.imageUp1= new Image()
    this.imageUp1.src="./images/player/rogue like run up_Animation 1_1.png"
    this.imageUp2= new Image()
    this.imageUp2.src="./images/player/rogue like run up_Animation 1_2.png"
    this.imageUp3= new Image()
    this.imageUp3.src="./images/player/rogue like run up_Animation 1_3.png"
    
    this.imageDown0= new Image()
    this.imageDown0.src="./images/player/roguelike run down_Animation 1_0.png"
    this.imageDown1= new Image()
    this.imageDown1.src="./images/player/roguelike run down_Animation 1_1.png"
    this.imageDown2= new Image()
    this.imageDown2.src="./images/player/roguelike run down_Animation 1_2.png"
    this.imageDown3= new Image()
    this.imageDown3.src="./images/player/roguelike run down_Animation 1_3.png"
    
    this.imageRight0 = new Image()
    this.imageRight0.src="./images/player/rogue like run_Animation 1_0.png"
    this.imageRight1= new Image()
    this.imageRight1.src="./images/player/rogue like run_Animation 1_1.png"
    this.imageRight2= new Image()
    this.imageRight2.src="./images/player/rogue like run_Animation 1_2.png"
    this.imageRight3= new Image()
    this.imageRight3.src="./images/player/rogue like run_Animation 1_3.png"
    
    this.imageLeft0 = new Image()
    this.imageLeft0.src="./images/player/rogue like run_Animation 1_0left.png"
    this.imageLeft1= new Image()
    this.imageLeft1.src="./images/player/rogue like run_Animation 1_1left.png"
    this.imageLeft2= new Image()
    this.imageLeft2.src="./images/player/rogue like run_Animation 1_2left.png"
    this.imageLeft3= new Image()
    this.imageLeft3.src="./images/player/rogue like run_Animation 1_3left.png"
    this.changeImages= 200;
  }

  moveUp() {
    
    
    //this.positionY -= 10
    this.velocityY = -5;
    this.direction = "N";
  }

  moveDown() {
    this.velocityY = 5;
    this.direction = "S";
  }

  moveLeft() {
    this.velocityX = -5;
    this.direction = "W";
  }

  moveRight() {
    this.velocityX = 5;
    this.direction = "E";
  }

  draw(timestamp) {
    this.context.fillStyle = "black";
    this.context.fillRect(82, 14, 250, 20);
    this.context.fillStyle = "#10ff00";
    this.context.fillRect(82, 14, this.health / 4, 20);


    if (this.direction === 'N'){
      this.context.drawImage(this.imageUp1, this.positionX, this.positionY, this.width, this.height);
      if (this.game.timer < timestamp - this.changeImages) {
        if(this.count >= 3){
            this.count = 0
            this.context.drawImage(this.imageUp3, this.positionX, this.positionY, this.width, this.height); 
            this.timer = timestamp
        }else if(this.count ===0){
            this.context.drawImage(this.imageUp0, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 1){
            this.context.drawImage(this.imageUp1, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 2)
            this.context.drawImage(this.imageUp2, this.positionX, this.positionY, this.width, this.height);
            this.count++
           
        }
    }

    if (this.direction === 'S'){
      this.context.drawImage(this.imageDown1, this.positionX, this.positionY, this.width, this.height);
      if (this.game.timer < timestamp - this.changeImages) {
        if(this.count >= 3){
            this.count = 0
            this.context.drawImage(this.imageDown3, this.positionX, this.positionY, this.width, this.height); 
            this.timer = timestamp
        }else if(this.count ===0){
            this.context.drawImage(this.imageDown0, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 1){
            this.context.drawImage(this.imageDown1, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 2)
            this.context.drawImage(this.imageDown2, this.positionX, this.positionY, this.width, this.height);
            this.count++
           
        }
    }

    if (this.direction === 'W'){
      this.context.drawImage(this.imageLeft1, this.positionX, this.positionY, this.width, this.height);
      if (this.game.timer < timestamp - this.changeImages) {
        if(this.count >= 3){
            this.count = 0
            this.context.drawImage(this.imageLeft3, this.positionX, this.positionY, this.width, this.height); 
            this.timer = timestamp
        }else if(this.count ===0){
            this.context.drawImage(this.imageLeft0, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 1){
            this.context.drawImage(this.imageLeft1, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 2)
            this.context.drawImage(this.imageLeft2, this.positionX, this.positionY, this.width, this.height);
            this.count++
           
        }
    }

    if (this.direction === 'E'){
      this.context.drawImage(this.imageRight1, this.positionX, this.positionY, this.width, this.height);
      if (this.game.timer < timestamp - this.changeImages) {
        if(this.count >= 3){
            this.count = 0
            this.context.drawImage(this.imageRight3, this.positionX, this.positionY, this.width, this.height); 
            this.timer = timestamp
        }else if(this.count ===0){
            this.context.drawImage(this.imageRight0, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 1){
            this.context.drawImage(this.imageRight1, this.positionX, this.positionY, this.width, this.height);
            this.count++

        }else if(this.count === 2)
            this.context.drawImage(this.imageRight2, this.positionX, this.positionY, this.width, this.height);
            this.count++
           
        }
    }




    /* this.context.fillStyle = "white ";
    this.context.fillRect(
      this.positionX,
      this.positionY,
      this.width,
      this.height
    ); */
    /* this.context.fillStyle = "rgba(255, 255, 255, 0.5)";
          this.context.fillRect(this.game.width - 170, 14, 150, 40); */
    this.context.save()
          //this.context.globalAlpha = 0.7
          this.context.drawImage(this.scoreBorder,this.game.width-180,10,170,55)
          this.context.restore();
    this.context.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.context.font = "28px palatino";
    this.context.fillText(`Score: ${this.score}`, this.game.width - 150, 45);
    this.context.drawImage(this.healthBar, 36, -40, 331, 140);

    

    //DRAW AN IMAGE
    //this.context.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
  }

  update() {
    if (
      this.positionX + this.velocityX > 0 &&
      this.positionX + this.velocityX + this.width < this.game.width
    ) {
      this.positionX += this.velocityX;
    }

    if (
      this.positionY + this.velocityY > 0 &&
      this.positionY + this.velocityY + this.height < this.game.height
    ) {
      this.positionY += this.velocityY;
    }
  }
}
