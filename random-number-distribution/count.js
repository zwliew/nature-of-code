class Number {
  constructor(id) {
    this.id = id;
    this.count = 0;
  }

  increment(max) {
    if (this.count >= max) return;
    this.count++;
  }

  draw(ctx, width) {
    ctx.fillStyle = 'black';
    ctx.fillRect(width * this.id, 0, width, this.count);
  }
}

export default Number;
