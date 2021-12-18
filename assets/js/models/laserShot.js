class LaserShot {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x
        this.y = y

        this.vy = 3;

        this.width = 25;
        this.height = 25;

        

        this.img = new Image();
        this.img.src = './assets/images/laser-shot.png';
        this.img.isReady = false
    
        this.img.onload = () => {
          this.img.isReady = true
        }

    }

    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
    )
}

    move() {
      this.y += this.vy;  
    }

  }  