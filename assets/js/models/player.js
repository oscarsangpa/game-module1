class Player {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 250;
        this.y = 80;

        this.size = 50;

        this.speed = 3;

        this.vx = 0;


        this.movements = {
            top: false,
            left: false,
            right: false
        }
    }

    draw() {
        this.ctx.save()
    
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    
        this.ctx.restore()
      }

    setUpListeners(event){
        const status = event.type === 'keydown';

        switch(event.keyCode) {
        case TOP_KEY:
        this.movements.top = status;
        break;
        case RIGHT_KEY:
        this.movements.right = status;
        break;
         case LEFT_KEY:
        this.movements.left = status;
        break;
         default:
        break;
    }
}

    move(){
    if(!this.movements.right && !this.movements.left && !this.movements.top) {
        this.vx = 0;
    }
    if (this.movements.right) {
      this.vx = this.speed;
    }
    if (this.movements.left) {
      this.vx = -this.speed;
    }
    this.x += this.vx;
    if (this.x <= 50) {
      this.x = 50
    }
    if (this.x >= 410) {
        this.x = 410
      }
}
}
