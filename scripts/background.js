class Background {
  constructor(game) {
    this.context = game.context;
    this.height = game.height;
    this.width = game.width;
    this.wall = new Image();
    this.wall.src = "./images/wall.png";
    this.wallRight = new Image();
    this.wallRight.src = "./images/wall-right.png";
    this.wallLeft = new Image();
    this.wallLeft.src = "./images/wall-left.png";
    this.wallBottom = new Image();
    this.wallBottom.src = "./images/wall-bottom.png";
    this.floor = new Image();
    this.floor.src = "./images/floor.png";
  }
  draw() {
    for (let i = 0; i < this.width; i += 25) {
      for (let j = 0; j < this.height; j += 25) {
        this.context.drawImage(this.floor, i, j, 25, 25);
      }
    }

    //this.context.drawImage(this.corner, 0, 0, 25, 25);
    //this.context.drawImage(this.cornerBottomLeft, 0, this.height-25, 25, 25);

    //this.context.drawImage(this.cornerRight, this.width-25, 0, 25, 25);
    //this.context.drawImage(this.cornerBottomRight, this.width-25, this.height-25, 25, 25);
  }
  drawBorderTop() {
    for (let i = 0; i < this.width; i += 80) {
      this.context.drawImage(this.wall, i, -5, 80, 30);
    }
  }

  drawBordersBLR() {
    for (let i = 0; i < this.height; i += 80) {
      this.context.drawImage(this.wallRight, this.width - 25, i, 25, 80);
      this.context.drawImage(this.wallLeft, 0, i, 25, 80);
    }
    for (let i = 0; i < this.width; i += 80) {
      this.context.drawImage(this.wallBottom, i, this.height - 25, 80, 25);
    }
  }

  update() {}
}
