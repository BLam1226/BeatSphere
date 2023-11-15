import React, { useEffect } from 'react';
import * as THREE from 'three';
import spaceTexture from './space_texture.jpg'; // Import your space texture

const Globe = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer with alpha: true for a transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globe-container').appendChild(renderer.domElement);

    // Set the clear color of the renderer to transparent
    renderer.setClearColor(0x000000, 0); // 0x000000 represents black, and 0 represents full transparency

    // Create a sphere geometry (globe)
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load a texture (earth texture)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./earth_texture.jpg');

    // Create a material with the texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a mesh (globe) with the geometry and material
    const globe = new THREE.Mesh(geometry, material);

    // Add the globe to the scene
    scene.add(globe);

    // Load a texture for the space background
    const spaceBackgroundTexture = textureLoader.load(spaceTexture);
    scene.background = spaceBackgroundTexture;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the globe
      globe.rotation.y += 0.001;

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
        
        // Check if renderer and renderer.domElement exist before disposal
        if (renderer && renderer.domElement) {
          const globeContainer = document.getElementById('globe-container');
          
          // Check if globeContainer exists before attempting to removeChild
          if (globeContainer) {
            globeContainer.removeChild(renderer.domElement);
          }
          
          // Dispose of the renderer
          renderer.dispose();
        }
      };
  }, []);

  return <div id="globe-container" />;
};

export default Globe;
