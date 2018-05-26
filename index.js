import Canvas from './canvas.js';

window.onload = () => {
  const canvas = new Canvas(document.getElementById('canvas'));
  const stop = canvas.start(window);
};
