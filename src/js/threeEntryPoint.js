import SceneManager from "./components/SceneManager.js";

export default canvasContainer => {
  const canvas = createCanvas(document, canvasContainer);
  const sceneManager = new SceneManager(canvas); // high level component for scene, camera, renderer, etc

  bindEventListeners();
  render();

  // create canvas within target container
  function createCanvas(document, canvasContainer) {
    const canvas = document.createElement("canvas");
    canvasContainer.appendChild(canvas);

    return canvas;
  }

  // dom events
  function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.style.width = "100%";
    canvas.style.height= "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
  }

  function render() {
    requestAnimationFrame(render);
    sceneManager.update();
  }
}