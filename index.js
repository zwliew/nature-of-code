import Canvas from './canvas.js';

window.onload = () => {
  const canvas = document.getElementById('canvas');
  if (!canvas.getContext) {
    console.log(`canvas.getContext isn't supported; quitting.`);
    return;
  }

  const controllerType = document.getElementById('controller-type');
  const controller = new Canvas(canvas.getContext('2d'));
  let stop = controller.start(window, controllerType.value);

  controllerType.addEventListener('change', async () => {
    (await stop)();
    stop = controller.start(window, controllerType.value);
  })
};
