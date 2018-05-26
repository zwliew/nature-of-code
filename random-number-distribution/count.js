class Number {
  constructor(id) {
    this.id = id;
    this.count = 0;
  }

  increment(max) {
    if (this.count >= max) return;
    this.count++;
  }

  draw(ctx, width, maxHeight) {
    ctx.fillStyle = 'black';
    ctx.fillRect(width * this.id, maxHeight, width, -this.count);
  }
}

export default Number;
