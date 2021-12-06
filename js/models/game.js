class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);

        this.intervalId = undefined;
        
    }

    start() {
        this.intervalId = setInterval(() => {
        this.clear()
    
        this.move()
    
        this.draw()
        }, 1000 / 60)

    }

    draw() {
        this.background.draw()
    }
}