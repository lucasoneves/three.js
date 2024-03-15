import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry( 1,1,1 );
const material = new THREE.MeshBasicMaterial( { color: 0xf4f4f4 } );
const cube = new THREE.Mesh( geometry, material );

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
scene.add( cube );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  const animateRotation = 0.025
  cube.rotation.x += animateRotation;
  cube.rotation.y += animateRotation;
	renderer.render( scene, camera );
}

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}