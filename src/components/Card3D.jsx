"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class ScrollManager {
  constructor() {
    this.velocity = 0;
    this.targetRotation = 0;
    this.damping = 0.95;
    this.sensitivity = 0.005;
    
    window.addEventListener('wheel', (e) => {
      this.targetRotation += e.deltaY * this.sensitivity;
    });
  }

  update(rotation) {
    this.velocity += (this.targetRotation - rotation) * 0.1;
    this.velocity *= this.damping;
    return this.velocity;
  }
}

export default function DeveloperShowcase() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    if (!mountRef.current) return; // Ensure mountRef is valid
  
    // Cleanup any existing canvas before adding a new one
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
  
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 256 / 320, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
    renderer.setSize(256, 320);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
  
    // Camera Position
    camera.position.set(0, 0, 5);
  
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
  
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
  
    const pointLight = new THREE.PointLight(0xffffff, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
  
    // Developer Card
    const cardGeometry = new THREE.PlaneGeometry(3, 4);
    const cardMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Color('#00ffff') },
        progress: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(pos.x * 2.0 + time) * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 glowColor;
        uniform float progress;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv - 0.5;
          float dist = length(uv);
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          vec3 color = mix(vec3(0.1, 0.1, 0.2), glowColor, glow * progress);
          float pulse = sin(time * 2.0) * 0.5 + 0.5;
          gl_FragColor = vec4(color * (0.5 + pulse * 0.5), 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
  
    const card = new THREE.Mesh(cardGeometry, cardMaterial);
    scene.add(card);
  
    // Particle System
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
  
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
  
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
  
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
  
    // Scroll Manager (Ensure it's defined or remove it)
    const scrollManager = typeof ScrollManager !== 'undefined' ? new ScrollManager() : null;
  
    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.02;
      cardMaterial.uniforms.time.value = time;
  
      // Card animation
      card.rotation.y += scrollManager ? scrollManager.update(card.rotation.y) : 0.01;
      cardMaterial.uniforms.progress.value = Math.sin(time) * 0.5 + 0.5;
  
      // Particle animation
      const posArray = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];
  
        // Reset particles when they go too far
        if (Math.abs(posArray[i * 3]) > 5 || Math.abs(posArray[i * 3 + 1]) > 5) {
          posArray[i * 3] = (Math.random() - 0.5) * 10;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
  
      renderer.render(scene, camera);
    };
    
    animate();
  
    // Cleanup Function
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
  
      // Dispose of objects
      cardGeometry.dispose();
      cardMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
  
      // Remove objects from scene
      scene.remove(card);
      scene.remove(particles);
  
      // Dispose renderer
      renderer.dispose();
    };
  }, []); // Run only once on mount
  

  return (
    <div className="container">
      <div ref={mountRef} className="canvas" />
      <div className="overlay">
        <h1 className='text-'>Frontend Developer</h1>
        <p>Creative Code Architect</p>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          width: 256px;
          height: 320px;
          perspective: 1000px;
        }

        .canvas {
          width: 100%;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          pointer-events: none;
          font-family: 'Arial', sans-serif;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
        }

        h1 {
          font-size: 24px;
          margin: 0;
          animation: pulse 2s infinite;
        }

        p {
          font-size: 14px;
          margin: 5px 0 0;
          opacity: 0.8;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}