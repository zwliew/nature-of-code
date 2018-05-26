import Walker from './walker.js';

class Canvas {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.walkers = [];
    for (let i = 0; i < 50; i++) {
      this.walkers.push(new Walker(this.height, this.width));
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
