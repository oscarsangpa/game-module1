class LaserShot {
    constructor(ctx, x, y, isEnemy = false, isPlayer = true) {
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
        this.isEnemy = isEnemy;
        this.isPlayer = isPlayer;
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

    collidesWith(spaceShip) {
      if(
        this.y + this.height >= spaceShip.y &&
        this.y <= spaceShip.y + spaceShip.height &&
        this.x + this.width >= spaceShip.x &&
        this.x <= spaceShip.x + spaceShip.width
      ) {
        return true;
      }
      return false;
    }


  }  