class Walker {
  constructor(height, width) {
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);
  }

  walk() {
    const rand = Math.random();
    if (rand < 0.2) {
      this.y--;
    } else if (rand < 0.4) {
      this.y++;
    } else if (rand < 0.6) {
      this.x--;
    } else {
      this.x++;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Walker;
