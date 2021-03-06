class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.running = false;
    this.player = new Player(this);
    this.controls = new Controls(this);
    this.timer = 0;
    this.controls.setControls();
    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyTimer2 = 0;
    this.enemyTimer3 = 0;
    this.enemyTimer4 = 0;
    this.enemyTimer5 = 0;
    this.enemyTimer6 = 0;
    this.coolDown = 1000;
    this.enemiesCollision = false;
    this.bullets = [];
    this.background = new Background(this);
    this.stamp;
    this.controlsScreen = new Image();
    this.controlsScreen.scr = "./images/Controls.png";
    this.startImage = new Image();
    this.startImage.src = "./images/start.png"
    
  }

  startGame() {
    if (!this.running) {
      this.running = true;
      this.reset();
      this.animation();
    } else {
      game.running = false;
      window.cancelAnimationFrame(this.stamp);
      this.running = true;
      this.reset();
      this.animation();
    }
  }

  animation(timestamp) {
    if (this.player.health <= 0) {
      this.gameOverScreen();
    } else {
      this.updateEverything(timestamp);
    }

    this.timer++;
    console.log(this.timer);
    this.stamp = window.requestAnimationFrame(timestamp =>
      this.animation(timestamp)
    );
  }

  drawEverything() {}

  updateEverything(timestamp) {
    this.clearCanvas();
    this.background.draw();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].spawn(timestamp);
      this.enemies[i].draw();
    }

    //console.log("enemy timer " + this.enemyTimer);
    //console.log("timestamp" + timestamp)

    //ENEMIES CREATION
    if (
      this.enemyTimer < timestamp - this.coolDown &&
      this.enemies.length < 100
    ) {
      this.enemies.push(
        new Enemy(
          this,
          Math.floor(Math.random() * game.width + 1),
          0,
          6,
          1,
          1,
          30,
          30
        )
      );

      this.enemyTimer = timestamp;
    }

    // console.log("check if true-> ", this.enemyTimer < timestamp - 7000)

    /* if (
      this.enemyTimer2 < timestamp - 3000 &&
      this.enemies.length < 10 && this.enemies.length  > 5
    ) {
      //console.log("orange enemies")
      this.enemies.push(
        new Enemy(
          this,
          this.width + 25,
          Math.floor(Math.random() * game.height + 1),
          6,
          (0.9),
          2,
          30,
          30
        )
      );

      this.enemyTimer2 = timestamp;
    } */

    /*  if (this.enemyTimer3 < timestamp - 3000 &&
      this.enemies.length < 20  && this.enemies.length  > 10) {
      //console.log("darkred 2 enemies")
      this.enemies.push(
        new Enemy(
          this,
          this.width + 25,
          Math.floor(Math.random() * game.height + 1),
          1,
          2,
          3,
          30,
          30
        )
      );
      this.enemyTimer3 = timestamp;
    } */

    if (
      this.enemyTimer1 < timestamp -this.coolDown ||
      this.enemies.length < 30 &&
      this.enemies.length > 15
    ) {
      this.enemies.push(
        new Enemy(
          this,
          this.width - 25,
          Math.floor(Math.random() * game.height + 1),
          6,
          1,
          4,
          30,
          30
        )
      );
      this.enemyTimer4 = timestamp;
    }

    /*  if (this.enemyTimer5 < timestamp - 4000 &&
      this.enemies.length < 50 && this.enemies.length  > 30) {
      this.enemies.push(
        new Enemy(
          this,
          this.width + 25,
          Math.floor(Math.random() * game.height + 1),
          3,
          2,
          5,
          30,
          30
        )
      );
      this.enemyTimer5 = timestamp;
    }
 */
    if (
      this.enemyTimer1 < timestamp - this.coolDown ||
      this.enemies.length < 60 &&
      this.enemies.length > 40
    ) {
      this.enemies.push(
        new Enemy(
          this,
          this.width + 25,
          Math.floor(Math.random() * game.height + 1),
          2,
          1,
          6,
          30,
          30
        )
      );
      /* this.enemies.push(
        new Enemy(
          this,
          Math.floor(Math.random() * game.width + 1),
          this.height+ 25,
          2,
          1,
          6,
          30,
          30
        )
      ); */
      this.enemies.push(
        new Enemy(
          this,
          -25,
          Math.floor(Math.random() * game.height + 1),
          6,
          1,
          1,
          30,
          30
        )
      );
      this.enemyTimer6 = timestamp;
    }
    //ENEMIES SPAWN
    for (let i = 0; i < this.enemies.length; i++) {
      //this.enemies[i].spawn(timestamp);
      //this.enemies[i].randomSpawn(2);

      //HitBox enemy-on-enemy
      for (let j = 1; j < this.enemies.length; j++) {
        if (
          this.hitBox(
            this.enemies[i].x,
            this.enemies[i].y,
            this.enemies[j].x,
            this.enemies[j].y,
            this.enemies[i].width,
            this.enemies[i].height,
            this.enemies[j].width,
            this.enemies[j].height
          )
        ) {
          this.enemies[i].move();

          this.enemies[j].move();
        }
      }

      if (
        this.hitBox(
          this.player.positionX,
          this.player.positionY,
          this.enemies[i].x,
          this.enemies[i].y,
          this.player.width,
          this.player.height,
          this.enemies[i].width,
          this.enemies[i].height
        )
      ) {
        this.enemies[i].collided = true;
        this.player.velocityX *= 0.8;
        this.player.velocityY *= 0.8;
      } else {
        this.enemies[i].collided = false;
        this.player.velocityX;
        this.player.velocityY;
      }
      //console.log(this.enemies[i].collided)
      this.enemies[i].update();

      //this.enemies[i].updateAngle();
      //this.enemies[i].updateSpeed();
      //this.enemies[i].move();
      if (this.enemies[i].collided === true) {
        this.player.health--;
        //console.log(this.player.health)
      }
    }

    if (this.player.health <= 0) {
      //console.log("You Died")
    }

    //console.log("mouse X: " + this.controls.x + "Y: " + this.controls.y)

    //console.log(this.bullets.length)

    if (!this.bullets.length) {
      // console.log("empty bullets array");
    } else if (this.bullets.length) {
      for (let i = 0; i < this.bullets.length; i++) {
        /* this.bullets[i].draw();
                this.bullets[i].x += this.bullets[i].directionX * this.bullets[i].speed;
                this.bullets[i].y += this.bullets[i].directionY * this.bullets[i].speed; */

        this.bullets[i].update();
        this.bullets[i].destroy(i);

        if (this.bullets[i])
          /////hit detection goes here
          for (let j = 0; j < this.enemies.length; j++) {
            /* console.log("X "+ this.enemies[j].x)
                      console.log("Y " + this.enemies[j].y)
                      console.log("W "+ this.enemies[j].width)
                      console.log("H "+ this.enemies[j].height) */
            /*  if (this.bullets.length && this.bullets[i].hit(this.enemies[j].x, this.enemies[j].y, this.enemies[j].width, this.enemies[j].height)) {
                          this.enemies[j].health--;
                          this.player.score += 2
  
                          this.bullets.splice(i, 1);
                          if (this.enemies[j].health <= 0) {
                              this.enemies.splice(j, 1);
                          }
                      }
          
  
  
  
                  }
                  if (this.bullets.length && this.bullets[i].x > this.width ||
                      this.bullets.length && this.bullets[i].x < 0 ||
                      this.bullets.length && this.bullets[i].y > this.height ||
                      this.bullets.length && this.bullets[i].y < 0) {
                      this.bullets.length && this.bullets.splice(i, 1)
                      //    console.log(this.bullets.length)
            */
          }
      }
    }
    this.background.drawBorderTop();
    this.player.draw(timestamp);
    this.player.update();
    this.background.drawBordersBLR();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  hitBox(x1, y1, x2, y2, width1, height1, width2, height2) {
    let bottom1, bottom2, left1, left2, right1, right2, top1, top2;
    left1 = x1;
    right1 = x1 + width1;
    top1 = y1;
    bottom1 = y1 + height1;
    left2 = x2;
    right2 = x2 + width2;
    top2 = y2;
    bottom2 = y2 + height2;
    return !(
      left1 > right2 ||
      left2 > right1 ||
      top1 > bottom2 ||
      top2 > bottom1
    );
  }

  gameOverScreen() {
    this.running = false;
    this.context.fillStyle = `rgba(6, 46, 5, 0.71)`;
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.font = "170px palatino";
    this.context.fillStyle = "darkred";
    this.context.fillText("YOU DIED", 95, 350);
    this.context.fillStyle = "darkgrey";
    this.context.font = "40px palatino";
    this.context.fillText(
      `*     SCORE     *     ${this.player.score}     *`,
      270,
      450
    );
    this.context.strokeStyle = "white";
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.moveTo(200, 400);
    this.context.lineTo(780, 400);
    this.context.stroke();
    this.context.closePath();
  }

  reset() {
    this.player = new Player(this);
    this.player.health = 1000;
    this.enemies = [];
    this.bullets = [];
    this.enemyTimer = 0;
    this.enemyTimer2 = 0;
    this.enemyTimer3 = 0;
    this.enemyTimer4 = 0;
    this.enemyTimer5 = 0;
    this.enemyTimer6 = 0;
    this.enemyTimer7 = 0;
    this.timer = 0;
    this.player.positionX = game.width / 2;
    this.player.positionY = game.height - 200;
    this.player.score = 0;
  }

  pause() {
    if (!this.running) {
      this.running = true;
      this.animation();
    } else {
      this.context.strokeWidth = 2;
      this.context.font = "170px palatino";
      this.context.fillStyle = "black";
      this.context.fillText("PAUSE", 240, 330);

      game.running = false;
      window.cancelAnimationFrame(this.stamp);
    }
  }

  controlsScreen() {
    if (!this.running) {
      this.context.drawImage(this.controlsScreen, 300, 200, 200, 400);
      
    } else {
      this.context.drawImage(this.controlsScreen, 300, 200, 200, 400);

      game.running = false;
      window.cancelAnimationFrame(this.stamp);
    }
  }
}
