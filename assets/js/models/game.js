class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.enemies = new Enemies(ctx);

        this.intervalId = undefined;
        
    }

    start() {
        this.intervalId = setInterval(() => {
        this.clear()
    
        this.move()
    
        this.draw()
        }, 1000 / 60)

    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      }

    draw() {
        this.background.draw();  
        this.player.draw();
        this.enemies.draw();
        
    }

    move() {
        this.background.move();
        this.player.move();
        // this.enemies.move();
    }

    setUpListeners(event) {
        this.player.setUpListeners(event);
}

}