// components/Card3D.jsx
"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DeveloperShowcase() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Cleanup any existing canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Set renderer size to cover the entire viewport
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Camera Position
    camera.position.set(0, 0, 5);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Scattered Particles Across the Viewport
    const particleCount = 2000; // Current particle count
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Calculate world-space dimensions based on camera FOV and distance
    const aspectRatio = window.innerWidth / window.innerHeight;
    const fovRad = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const width = height * aspectRatio;

    for (let i = 0; i < particleCount; i++) {
      // Spread particles across the entire viewport, starting from the left
      positions[i * 3] = (Math.random() - 0.5) * width; // X: -width/2 to width/2
      positions[i * 3 + 1] = (Math.random() - 0.5) * height; // Y: -height/2 to height/2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5; // Z: -2.5 to 2.5 for depth

      // Set velocities for left-to-right movement
      velocities[i * 3] = 0.05 + Math.random() * 0.03; // X velocity (positive for left to right)
      velocities[i * 3 + 1] = 0; // No vertical movement
      velocities[i * 3 + 2] = 0; // No depth movement
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xFFFFFF, // Changed to white
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.02;

      // Animate particles (left to right)
      const posArray = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Update positions with velocities
        posArray[i * 3] += velocities[i * 3]; // Move right

        // Reset particle to the left side if it goes off the right edge
        if (posArray[i * 3] > width / 2) {
          posArray[i * 3] = -width / 2; // Reset to the left edge
          posArray[i * 3 + 1] = (Math.random() - 0.5) * height; // Randomize Y position
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 5; // Randomize Z position
        }

        // Pulse effect for particles
        particlesMaterial.opacity = 0.6 + Math.sin(time + i) * 0.2;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);

      // Recalculate world space dimensions for particle bounds
      const newAspectRatio = newWidth / newHeight;
      const newFovRad = (camera.fov * Math.PI) / 180;
      const worldHeight = 2 * Math.tan(newFovRad / 2) * camera.position.z;
      const worldWidth = worldHeight * newAspectRatio;

      // Update particle bounds
      const posArray = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        if (posArray[i * 3] > worldWidth / 2) posArray[i * 3] = -worldWidth / 2;
        if (Math.abs(posArray[i * 3 + 1]) > worldHeight / 2) posArray[i * 3 + 1] = (Math.random() - 0.5) * worldHeight;
      }
      particles.geometry.attributes.position.needsUpdate = true;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup Function
    return () => {
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particles);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div ref={mountRef} className="canvas" />
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1; /* Place behind content */
        }

        .canvas {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}