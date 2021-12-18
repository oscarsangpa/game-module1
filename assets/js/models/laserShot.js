class LaserShot {
    constructor(ctx, x, y, isEnemy = false) {
        this.ctx = ctx;

        this.x = x
        this.y = y

        this.vy = 5;

        this.width = 25;
        this.height = 25;

        

        this.img = new Image();
        this.img.src = './assets/images/laser-shot.png';
        this.img.isReady = false
    
        this.img.onload = () => {
          this.img.isReady = true
        }
        this.isEnemy = isEnemy
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
      if(this.isEnemy) {
        this.y -= this.vy;  
      } else {
        this.y += this.vy;  
      }
    }

    collidesWith(enemy) {
      if(
        this.y + this.height >= enemy.y &&
        this.y <= enemy.y + enemy.height &&
        this.x + this.width >= enemy.x &&
        this.x <= enemy.x + enemy.width
      ) {
        return true;
      }
      return false;
    }

  }  