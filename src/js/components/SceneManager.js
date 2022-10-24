import * as THREE from 'three';

export default class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;

    this.screenDimensions = {
      width: this.canvas.width,
      height: this.canvas.height
    }

    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
  }

  createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0000ff");

    return scene;
  }

  createCamera() {
    const aspectRatio = this.screenDimensions.width / this.screenDimensions.height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 100; 
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

    return camera;
  }

  createRenderer() {
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true }); 
    renderer.setSize(this.screenDimensions.width, this.screenDimensions.height);

    return renderer;
  }

  onWindowResize() {
    const { width, height } = this.canvas;

    this.screenDimensions.width = width;
    this.screenDimensions.height = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  }

  update() {
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
  }
}