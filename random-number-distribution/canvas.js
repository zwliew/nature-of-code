import Count from './count.js';

class Canvas {
  constructor(ctx) {
    this.ctx = ctx;

    this.counts = [];
    for (let i = 0; i < 20; i++) {
      this.counts.push(new Count(i));
    }
  }

  step() {
    const num = Math.floor(Math.random() * 20);
    this.counts[num].increment(this.ctx.canvas.height);
    this.counts.forEach(count => count.draw(
      this.ctx, this.ctx.canvas.width / 20, this.ctx.canvas.height
    ));
  }
}

export default Canvas;
