import Walker from './walker.js';

class Canvas {
  constructor(ctx) {
    this.ctx = ctx;

    this.walkers = [];
    for (let i = 0; i < 50; i++) {
      this.walkers.push(new Walker(this.ctx.canvas.width, this.ctx.canvas.height));
    }
  }

  step() {
    this.walkers.forEach(walker => {
      walker.walk();
      walker.draw(this.ctx);
    });
  }
}

export default Canvas;
