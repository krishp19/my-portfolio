// components/Sphere.jsx
"use client";
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export default function DrivingGame() {
  const mountRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false); // Renamed to avoid potential conflicts
  const [gameScore, setGameScore] = useState(0); // Renamed for clarity
  const animationFrameId = useRef(null);
  const gameObjects = useRef({});

  // Start game function
  const handleStartGame = () => {
    if (!gameStarted && mountRef.current) {
      setGameStarted(true);
      setGameScore(0);
    }
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Cleanup existing canvas
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild);
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(600, 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1.2);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Background
    const bgGeometry = new THREE.SphereGeometry(500, 32, 32);
    const bgMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a1a,
      side: THREE.BackSide,
    });
    const background = new THREE.Mesh(bgGeometry, bgMaterial);
    scene.add(background);

    // Road
    const roadGeometry = new THREE.PlaneGeometry(8, 1000);
    const roadMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a1a1a,
      shininess: 10,
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.y = -0.01;
    road.receiveShadow = true;
    scene.add(road);

    // Road Lines
    const lineGeometry = new THREE.PlaneGeometry(0.2, 1.5);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const lines = [];
    for (let z = -500; z <= 500; z += 4) {
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.01, z);
      scene.add(line);
      lines.push(line);
    }

    // Car
    const carGroup = new THREE.Group();
    const carBodyGeometry = new THREE.BoxGeometry(1.2, 0.4, 2.5);
    const carBodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      shininess: 50,
    });
    const carBody = new THREE.Mesh(carBodyGeometry, carBodyMaterial);
    carBody.position.y = 0.2;
    carBody.castShadow = true;
    carGroup.add(carBody);

    const carTopGeometry = new THREE.BoxGeometry(0.8, 0.2, 1.5);
    const carTop = new THREE.Mesh(carTopGeometry, carBodyMaterial);
    carTop.position.y = 0.5;
    carTop.castShadow = true;
    carGroup.add(carTop);

    const wheelGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
    const wheels = [];
    for (let i = 0; i < 4; i++) {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(
        i % 2 === 0 ? -0.75 : 0.75,
        0.15,
        i < 2 ? -0.8 : 0.8
      );
      wheel.castShadow = true;
      carGroup.add(wheel);
      wheels.push(wheel);
    }

    carGroup.position.set(0, 0, 0);
    scene.add(carGroup);

    // Obstacles
    const obstacles = [];
    const obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
    const obstacleMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      shininess: 20,
    });
    const spawnObstacle = () => {
      const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
      obstacle.position.set(
        Math.floor(Math.random() * 7) - 3,
        0.5,
        -30 - Math.random() * 20
      );
      obstacle.castShadow = true;
      scene.add(obstacle);
      obstacles.push(obstacle);
    };

    // Game Variables
    let speed = 0.15;
    let carX = 0;
    let gameOver = false;
    let lastSpawn = 0;
    let localScore = 0;

    // Controls
    let leftPressed = false;
    let rightPressed = false;

    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') leftPressed = true;
      if (event.key === 'ArrowRight') rightPressed = true;
    };

    const onKeyUp = (event) => {
      if (event.key === 'ArrowLeft') leftPressed = false;
      if (event.key === 'ArrowRight') rightPressed = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // Score Display
    const scoreElement = document.createElement('div');
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '10px';
    scoreElement.style.left = '10px';
    scoreElement.style.color = '#00ffff';
    scoreElement.style.fontFamily = 'Arial, sans-serif';
    scoreElement.style.fontSize = '24px';
    scoreElement.style.textShadow = '0 0 5px #00ffff';
    scoreElement.innerText = `Score: ${localScore}`;
    mount.appendChild(scoreElement);

    // Animation Loop
    const animate = (time) => {
      if (!gameStarted) return;

      animationFrameId.current = requestAnimationFrame(animate);

      if (gameOver) {
        speed *= 0.95;
        if (speed < 0.01) {
          alert(`Game Over! Final Score: ${localScore}`);
          setGameStarted(false);
          setGameScore(localScore);
          localScore = 0;
          speed = 0.15;
          gameOver = false;
          carX = 0;
          carGroup.position.set(0, 0, 0);
          obstacles.forEach(obstacle => scene.remove(obstacle));
          obstacles.length = 0;
          return;
        }
      }

      // Move car
      const moveSpeed = 0.08;
      if (leftPressed && carX > -3) carX -= moveSpeed;
      if (rightPressed && carX < 3) carX += moveSpeed;
      carGroup.position.x = THREE.MathUtils.lerp(carGroup.position.x, carX, 0.1);

      // Animate wheels
      wheels.forEach(wheel => {
        wheel.rotation.x += speed * 5;
      });

      // Move road lines
      lines.forEach(line => {
        line.position.z += speed;
        if (line.position.z > 8) {
          line.position.z -= 1000;
          if (!gameOver) localScore += 5;
        }
      });

      // Move and manage obstacles
      obstacles.forEach((obstacle, index) => {
        obstacle.position.z += speed;
        obstacle.rotation.y += 0.02;
        if (obstacle.position.z > 8) {
          scene.remove(obstacle);
          obstacles.splice(index, 1);
        }

        // Collision detection
        const carBox = new THREE.Box3().setFromObject(carGroup);
        const obstacleBox = new THREE.Box3().setFromObject(obstacle);
        if (carBox.intersectsBox(obstacleBox) && !gameOver) {
          gameOver = true;
          speed = 0.2;
        }
      });

      // Spawn obstacles
      if (time - lastSpawn > 2000 && !gameOver) {
        spawnObstacle();
        lastSpawn = time;
      }

      // Update camera
      camera.position.lerp(
        new THREE.Vector3(carGroup.position.x, 3, carGroup.position.z + 8),
        0.05
      );
      camera.lookAt(carGroup.position);

      // Update score display
      scoreElement.innerText = `Score: ${localScore}`;

      renderer.render(scene, camera);
    };

    // Start animation when game starts
    if (gameStarted) {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    // Store game objects for cleanup
    gameObjects.current = {
      scene,
      camera,
      renderer,
      road,
      carGroup,
      background,
      lines,
      obstacles,
      scoreElement,
      onKeyDown,
      onKeyUp,
    };

    // Handle Resize
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      const { renderer, scoreElement, scene, road, carGroup, background, lines, obstacles } = gameObjects.current;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      if (mount && renderer?.domElement) {
        mount.removeChild(renderer.domElement);
        if (scoreElement) mount.removeChild(scoreElement);
      }

      if (scene) {
        scene.remove(road, carGroup, background);
        lines.forEach(line => scene.remove(line));
        obstacles.forEach(obstacle => scene.remove(obstacle));
        [roadGeometry, lineGeometry, carBodyGeometry, carTopGeometry, wheelGeometry, obstacleGeometry, bgGeometry].forEach(geo => geo.dispose());
        [roadMaterial, lineMaterial, carBodyMaterial, wheelMaterial, obstacleMaterial, bgMaterial].forEach(mat => mat.dispose());
        scene.remove(ambientLight, directionalLight);
      }
      if (renderer) renderer.dispose();
    };
  }, [gameStarted]);

  return (
    <div className="container" onClick={handleStartGame}>
      <div ref={mountRef} className="canvas" />
      {!gameStarted && (
        <div className="overlay">
          Click to Start Driving!
        </div>
      )}
      <style jsx>{`
        .container {
          width: 600px;
          height: 400px;
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
          cursor: ${!gameStarted ? 'pointer' : 'default'};
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
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          color: #00ffff;
          font-size: 32px;
          font-family: Arial, sans-serif;
          text-shadow: 0 0 10px #00ffff;
        }
      `}</style>
    </div>
  );
}