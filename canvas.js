import RandomWalkerCanvas from './random-walker/canvas.js';

class Canvas {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    }
  }

  customCanvas(choice) {
    const w = this.width;
    const h = this.height;
    const ctx = this.ctx;

    switch (choice) {
      case 'random-walker':
        return new RandomWalkerCanvas(w, h, ctx);
      default:
        return undefined;
    }
  }

  start(window) {
    this.canvas = this.customCanvas();
    this.window = window;
    this.requestId = this.window.requestAnimationFrame(this.loop.bind(this));
    return () => this.stop();
  }

  stop() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
    this.window = null;
  }

  loop() {
    if (!this.canvas) {
      console.log('No canvas selected.');
      return;
    }
    this.canvas.step();
    this.requestId = this.window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default Canvas;
