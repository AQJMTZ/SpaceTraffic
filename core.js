import * as THREE from "three";


const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, .6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, .8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);


// Creatting the camera
const aspectRatio = window.innerWidth/window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth/ aspectRatio;

const camera = new THREE.OrthographicCamera(
    cameraWidth/ -2, //left
    cameraWidth / 2, //right
    cameraHeight / 2, //top
    cameraHeight/ -2, //bottom
    0, //near plane
    1000 //far plane
);
camera.position.set(200, 200, 200);
camera.up.set(0, 0, 1)
camera.lookAt(0, 10, 0);

//Set up renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);
