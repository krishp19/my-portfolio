// components/OrbitingSpheres.jsx
"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function OrbitingSpheres() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Cleanup any existing canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // Constants from the original code
    const COLORS = [0x69D2E7, 0xA7DBD8, 0xE0E4CC, 0xF38630, 0xFA6900, 0xFF4E50, 0xF9D423];
    const RADIUS = 500; // Increased from 300 to 400
    const spheres = [];

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 10000); // Aspect ratio will be updated in resize
    camera.position.z = 1200; // Adjusted to accommodate larger sphere

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400); // Increased canvas size to accommodate larger sphere
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Orbit Controls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zooming (optional)
    controls.enablePan = false; // Disable panning (optional)
    controls.autoRotate = false; // Disable auto-rotation (we'll handle rotation manually)
    controls.minDistance = 500; // Minimum zoom distance
    controls.maxDistance = 1500; // Maximum zoom distance

    // Central Sphere
    const geometry = new THREE.SphereGeometry(RADIUS, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0x333344 });
    const centralMesh = new THREE.Mesh(geometry, material);
    scene.add(centralMesh);

    // Orbiting Spheres
    for (let i = 0; i < 30; i++) {
      const sphereGeometry = new THREE.SphereGeometry(Math.random() * 25 + 15, 10, 10); // Increased size: random between 15 and 40
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: COLORS[Math.floor(Math.random() * COLORS.length)] });
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // Use spherical coordinates to position the sphere on the surface of the central sphere
      const theta = Math.random() * 2 * Math.PI; // Random angle66 in the XY plane
      const phi = Math.acos(2 * Math.random() - 1); // Random angle from the Z-axis
      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = RADIUS * Math.cos(phi);
      sphereMesh.position.set(x, y, z);

      // Apply random initial rotation for self-rotation
      sphereMesh.rotation.x = Math.random() * 100;
      sphereMesh.rotation.y = Math.random() * 100;
      sphereMesh.rotation.z = Math.random() * 100;

      // Store initial spherical coordinates and a random orbital speed for each sphere
      sphereMesh.userData = {
        theta: theta,
        phi: phi,
        orbitalSpeed: 0.01 + Math.random() * 0.02, // Random speed for orbiting
      };

      scene.add(sphereMesh);
      spheres.push(sphereMesh);
    }

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update each sphere's position to make it orbit around the central sphere
      for (let i = 0; i < spheres.length; i++) {
        const sphere = spheres[i];

        // Update theta to make the sphere orbit around the central sphere
        sphere.userData.theta += sphere.userData.orbitalSpeed;

        // Recalculate position using spherical coordinates
        const x = RADIUS * Math.sin(sphere.userData.phi) * Math.cos(sphere.userData.theta);
        const y = RADIUS * Math.sin(sphere.userData.phi) * Math.sin(sphere.userData.theta);
        const z = RADIUS * Math.cos(sphere.userData.phi);
        sphere.position.set(x, y, z);

        // Continue self-rotation
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.rotation.z += 0.01;
      }

      // Update controls
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    // Initial resize to set correct dimensions
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup Function
    return () => {
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        sphere.material.dispose();
        scene.remove(sphere);
      });
      scene.remove(centralMesh);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div ref={mountRef} className="canvas" />
      <style jsx>{`
        .container {
          width: 400px; /* Increased to match renderer size */
          height: 400px; /* Increased to match renderer size */
          position: relative;
        }

        .canvas {
          width: 100%;
          height: 100%;
          /* Background is transparent */
        }
      `}</style>
    </div>
  );
}