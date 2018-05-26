class Walker {
  constructor(height, width) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
  }

  walk() {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Walker;
