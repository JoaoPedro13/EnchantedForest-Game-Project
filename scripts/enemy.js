class Enemy {
  constructor(game, startX, startY, life, velocity, type, width, height) {
    this.game = game;
    this.context = game.context;
    this.x = startX;
    this.y = startY;
    this.height = height;
    this.width = width;
    this.rndmDir = Math.floor(Math.random() * 4 + 1);
    //this.rndmX = Math.floor((Math.random() * game.width) + 1);
    //this.rndmY = Math.floor((Math.random() * game.height) + 1);
    this.playerX = game.player.positionX;
    this.playerY = game.player.positionY;
    this.velocityX = 1;
    this.velocityY = 1;
    this.speed = velocity * 0.2;
    this.distance = 0;
    this.angle = 0;
    this.health = life;
    this.healthBar = life;
    this.collided = false;
    this.timer = 0;
    this.coolDown = 10;
    this.count = 0;
    this.miniMushroom = new Image();
    this.miniMushroom.src = "./images/enemies/miniMushroom.png";
    this.miniMushroomArray = [
      [0, 0],
      [50, 0],
      [0, 50],
      [50, 50]
    ];

    this.enemy11 = new Image();
    this.enemy11.src = "./images/enemies/NormalMushroom_Walk_1.png";
    this.enemy12 = new Image();
    this.enemy12.src = "./images/enemies/NormalMushroom_Walk_2.png";
    this.enemy13 = new Image();
    this.enemy13.src = "./images/enemies/NormalMushroom_Walk_3.png";
    this.enemy14 = new Image();
    this.enemy14.src = "./images/enemies/NormalMushroom_Walk_4.png";

    /* this.enemy21 = new Image();
        this.enemy21.src = './images/enemies/LargeMushroom_Walk_1.png';
        this.enemy22 = new Image();
        this.enemy22.src = './images/enemies/LargeMushroom_Walk_2.png';
        this.enemy23 = new Image();
        this.enemy23.src = './images/enemies/LargeMushroom_Walk_2.png';
        this.enemy24 = new Image();
        this.enemy24.src = './images/enemies/LargeMushroom_Walk_4.png'; */

    /* this.enemy31 = new Image();
        this.enemy31.src = './images/enemies/GnollShaman_Walk_1.png';
        this.enemy32 = new Image();
        this.enemy32.src = './images/enemies/GnollShaman_Walk_2.png';
        this.enemy33 = new Image();
        this.enemy33.src = './images/enemies/GnollShaman_Walk_2.png';
        this.enemy34 = new Image();
        this.enemy34.src = './images/enemies/GnollShaman_Walk_4.png'; */

    this.enemy41 = new Image();
    this.enemy41.src = "./images/enemies/Golem_Walk_1.png";
    this.enemy42 = new Image();
    this.enemy42.src = "./images/enemies/Golem_Walk_2.png";
    this.enemy43 = new Image();
    this.enemy43.src = "./images/enemies/Golem_Walk_2.png";
    this.enemy44 = new Image();
    this.enemy44.src = "./images/enemies/Golem_Walk_4.png";

    /*  this.enemy51 = new Image();
        this.enemy51.src = './images/enemies/Bear_Walk_1.png';
        this.enemy52 = new Image();
        this.enemy52.src = './images/enemies/Bear_Walk_2.png';
        this.enemy53 = new Image();
        this.enemy53.src = './images/enemies/Bear_Walk_2.png';
        this.enemy54 = new Image();
        this.enemy54.src = './images/enemies/Bear_Walk_4.png';
         */

    this.enemy61 = new Image();
    this.enemy61.src = "./images/enemies/Ent_Walk_1.png";
    this.enemy62 = new Image();
    this.enemy62.src = "./images/enemies/Ent_Walk_2.png";
    this.enemy63 = new Image();
    this.enemy63.src = "./images/enemies/Ent_Walk_2.png";
    this.enemy64 = new Image();
    this.enemy64.src = "./images/enemies/Ent_Walk_4.png";

    /* this.enemy71 = new Image();
        this.enemy71.src = './images/enemies/Troll_Walk_1.png';
        this.enemy72 = new Image();
        this.enemy72.src = './images/enemies/Troll_Walk_2.png';
        this.enemy73 = new Image();
        this.enemy73.src = './images/enemies/Troll_Walk_2.png';
        this.enemy74 = new Image();
        this.enemy74.src = './images/enemies/Troll_Walk_4.png'; */

    this.changeImages = 200;
    this.type = type;
  }

  spawn(timestamp) {
    //this.draw(this.x, this.y, this.colour)

    switch (this.type) {
      case 1:
        if (this.timer < timestamp - this.changeImages) {
          if (this.count > 3) {
            this.count = 0;
            this.context.drawImage(
              this.enemy14,
              this.x,
              this.y,
              this.width,
              this.height
            );
          } else if (this.count >= 0) {
            /* this.context.drawImage(
              this.miniMushroom,
              this.miniMushroomArray[this.count][0],
              this.miniMushroomArray[this.count][1],
              this.width,
              this.height,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++ */
            this.context.drawImage(
              this.enemy11,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 1) {
            this.context.drawImage(
              this.enemy12,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 2) {
            this.context.drawImage(
              this.enemy13,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          }
        }

        break;

      /*  case 2:
                if (this.timer < timestamp - this.changeImages) {
                    if(this.count >= 3){
                        this.count = 0
                        this.context.drawImage(this.enemy24, this.x, this.y, this.width, this.height); 
                        
                    }else if(this.count ===0){
                        this.context.drawImage(this.enemy21, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 1){
                        this.context.drawImage(this.enemy22, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 2)
                        this.context.drawImage(this.enemy23, this.x, this.y, this.width, this.height);
                        this.count++
                       
                    }
                    break; */

      /* case 3:
                if (this.timer < timestamp - this.changeImages) {
                    if(this.count >= 3){
                        this.count = 0
                        this.context.drawImage(this.enemy34, this.x, this.y, this.width, this.height); 
                        
                    }else if(this.count ===0){
                        this.context.drawImage(this.enemy31, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 1){
                        this.context.drawImage(this.enemy32, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 2)
                        this.context.drawImage(this.enemy33, this.x, this.y, this.width, this.height);
                        this.count++
                       
                    }
                    break; */

      case 4:
        if (this.timer < timestamp - this.changeImages) {
          if (this.count >= 3) {
            this.count = 0;
            this.context.drawImage(
              this.enemy44,
              this.x,
              this.y,
              this.width,
              this.height
            );
          } else if (this.count === 0) {
            this.context.drawImage(
              this.enemy41,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 1) {
            this.context.drawImage(
              this.enemy42,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 2)
            this.context.drawImage(
              this.enemy43,
              this.x,
              this.y,
              this.width,
              this.height
            );
          this.count++;
        }
        break;

      /*   case 5:
                if (this.timer < timestamp - this.changeImages) {
                    if(this.count >= 3){
                        this.count = 0
                        this.context.drawImage(this.enemy54, this.x, this.y, this.width, this.height); 
                        
                    }else if(this.count ===0){
                        this.context.drawImage(this.enemy51, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 1){
                        this.context.drawImage(this.enemy52, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 2)
                        this.context.drawImage(this.enemy53, this.x, this.y, this.width, this.height);
                        this.count++
                       
                    }
                    break; */

      case 6:
        if (this.timer < timestamp - this.changeImages) {
          if (this.count >= 3) {
            this.count = 0;
            this.context.drawImage(
              this.enemy64,
              this.x,
              this.y,
              this.width,
              this.height
            );
          } else if (this.count === 0) {
            this.context.drawImage(
              this.enemy61,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 1) {
            this.context.drawImage(
              this.enemy62,
              this.x,
              this.y,
              this.width,
              this.height
            );
            this.count++;
          } else if (this.count === 2)
            this.context.drawImage(
              this.enemy63,
              this.x,
              this.y,
              this.width,
              this.height
            );
          this.count++;
        }
        break;

      /*  case 7:
                if (this.timer < timestamp - this.changeImages) {
                    if(this.count >= 3){
                        this.count = 0
                        this.context.drawImage(this.enemy74, this.x, this.y, this.width, this.height); 
                        
                    }else if(this.count ===0){
                        this.context.drawImage(this.enemy71, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 1){
                        this.context.drawImage(this.enemy72, this.x, this.y, this.width, this.height);
                        this.count++
        
                    }else if(this.count === 2)
                        this.context.drawImage(this.enemy73, this.x, this.y, this.width, this.height);
                        this.count++
                       
                    }
                    break; */
    }
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

  draw() {
    switch (this.healthBar) {
      case 1:
        if (this.health === 1) {
          context.save();
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "green";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.restore();
        } else {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
        }

        break;
      case 2:
        if (this.health === 2) {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "green";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
        } else {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "red";
          context.fillRect(this.x - 2, this.y - 5, 12, 4);
        }

        break;
      case 3:
        if (this.health === 3) {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "green";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
        } else if (this.health === 2) {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "orange";
          context.fillRect(this.x - 2, this.y - 5, 16, 4);
        } else {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "red";
          context.fillRect(this.x - 2, this.y - 5, 8, 4);
        }

        break;
      case 6:
        if (this.health === 6) {
          context.fillStyle = "black";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
          context.fillStyle = "green";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
        } else if (this.health === 5) {
          context.fillStyle = "black";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
          context.fillStyle = "green";
          context.fillRect(this.x - 5, this.y - 5, 20, 4);
        } else if (this.health === 4) {
          context.fillStyle = "black";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
          context.fillStyle = "orange";
          context.fillRect(this.x - 5, this.y - 5, 16, 4);
        } else if (this.health === 3) {
          context.fillStyle = "black";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
          context.fillStyle = "orange";
          context.fillRect(this.x - 5, this.y - 5, 12, 4);
        } else if (this.health === 2) {
          context.fillStyle = "black";
          context.fillRect(this.x - 5, this.y - 5, 24, 4);
          context.fillStyle = "red";
          context.fillRect(this.x - 5, this.y - 5, 8, 4);
        } else {
          context.fillStyle = "black";
          context.fillRect(this.x - 2, this.y - 5, 24, 4);
          context.fillStyle = "red";
          context.fillRect(this.x - 2, this.y - 5, 4, 4);
        }
    }
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
    if (
      this.x === this.game.player.positionX &&
      this.y === this.game.player.positionY
    ) {
      collided = true;
      console.log(collided);
    } else {
      this.updateAngle();
      this.updateSpeed();
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
    this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
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
