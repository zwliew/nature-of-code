class Walker {
  constructor(height, width) {
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);
  }

  walk() {
    this.x += Math.floor(Math.random() * 3) - 1;
    this.y += Math.floor(Math.random() * 3) - 1;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Walker;
