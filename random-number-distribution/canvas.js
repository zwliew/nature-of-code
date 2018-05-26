import Count from './count.js';

class Canvas {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.counts = [];
    for (let i = 0; i < 20; i++) {
      this.counts.push(new Count(i));
    }
  }

  step() {
    const num = Math.floor(Math.random() * 20);
    this.counts[num].increment(this.height);
    this.counts.forEach(count => count.draw(this.ctx, this.width / 20, this.height));
  }
}

export default Canvas;
