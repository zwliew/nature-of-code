class Canvas {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async start(window, controllerType) {
    const controller = await import(`./${controllerType}/canvas.js`);
    this.controller = new controller.default(this.ctx);
    this.window = window;
    this.requestId = this.window.requestAnimationFrame(this.loop.bind(this));
    return () => this.stop();
  }

  stop() {
    window.cancelAnimationFrame(this.requestId);
    this.requestId = undefined;
    this.window = undefined;
    this.controller = undefined;
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  loop() {
    this.controller.step();
    this.requestId = this.window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default Canvas;
