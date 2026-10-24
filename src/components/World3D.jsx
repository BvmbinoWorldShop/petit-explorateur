import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { sounds } from '../utils/audio';
import teacherImg from '../assets/teacher-pixar.jpg';
import { Compass, Sparkles, Star, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Footprints } from 'lucide-react';

const LOCATIONS = [
  {
    id: 'school',
    nameFr: "L'École",
    nameEn: "School",
    emoji: "🏫",
    color: "#ff7675",
    x: -8,
    z: -8,
    description: "Apprends l'alphabet, les chiffres et les couleurs !",
  },
  {
    id: 'grocery',
    nameFr: "L'Épicerie",
    nameEn: "Grocery Store",
    emoji: "🛒",
    color: "#00b894",
    x: 8,
    z: -8,
    description: "Remplis ton caddie avec de bons fruits et légumes !",
  },
  {
    id: 'mall',
    nameFr: "Le Centre Commercial",
    nameEn: "Shopping Mall",
    emoji: "🛍️",
    color: "#6c5ce7",
    x: -9,
    z: 7,
    description: "Explore les magasins de jouets, vêtements et trésors !",
  },
  {
    id: 'restaurant',
    nameFr: "Le Restaurant",
    nameEn: "Restaurant",
    emoji: "🍽️",
    color: "#fdcb6e",
    x: 8,
    z: 7,
    description: "Deviens un petit chef et cuisine de délicieux plats !",
  },
  {
    id: 'firefighter',
    nameFr: "La Caserne des Pompiers",
    nameEn: "Fire Station",
    emoji: "🚒",
    color: "#d63031",
    x: 0,
    z: -12,
    description: "Conduis le camion de pompier et éteins les flammes !",
  },
];

export default function World3D({ onSelectLocation, onTeacherSpeech, starsCount, onCollectStar }) {
  const mountRef = useRef(null);
  const [activeNearLocation, setActiveNearLocation] = useState(null);
  const characterPos = useRef({ x: 0, z: 0, targetX: 0, targetZ: 0, angle: 0 });
  const characterMesh = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const pinsRef = useRef([]);
  const starsRef = useRef([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#dff9fb');
    scene.fog = new THREE.FogExp2('#dff9fb', 0.02);

    // Camera (Isometric Toddler Angle)
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 18, 22);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7d6, 1.2);
    sunLight.position.set(15, 25, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    scene.add(sunLight);

    // Ground Island (Soft Green Cartoon Turf)
    const groundGeo = new THREE.CylinderGeometry(20, 21, 2, 48);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#a8e6cf',
      roughness: 0.8,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Crossroad Roads
    const roadMat = new THREE.MeshStandardMaterial({ color: '#dfe6e9', roughness: 0.9 });
    const roadHGeo = new THREE.PlaneGeometry(36, 4);
    const roadH = new THREE.Mesh(roadHGeo, roadMat);
    roadH.rotation.x = -Math.PI / 2;
    roadH.position.y = 0.02;
    roadH.receiveShadow = true;
    scene.add(roadH);

    const roadVGeo = new THREE.PlaneGeometry(4, 36);
    const roadV = new THREE.Mesh(roadVGeo, roadMat);
    roadV.rotation.x = -Math.PI / 2;
    roadV.position.y = 0.02;
    roadV.receiveShadow = true;
    scene.add(roadV);

    // Town Central Fountain
    const fountainBaseGeo = new THREE.CylinderGeometry(2.5, 2.7, 0.5, 24);
    const fountainMat = new THREE.MeshStandardMaterial({ color: '#74b9ff', roughness: 0.4 });
    const fountain = new THREE.Mesh(fountainBaseGeo, fountainMat);
    fountain.position.set(0, 0.25, 0);
    fountain.receiveShadow = true;
    scene.add(fountain);

    // Trees & Nature around town
    const createTree = (x, z) => {
      const trunkGeo = new THREE.CylinderGeometry(0.25, 0.35, 1.2, 8);
      const trunkMat = new THREE.MeshStandardMaterial({ color: '#b5651d' });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(x, 0.6, z);
      trunk.castShadow = true;
      scene.add(trunk);

      const leavesGeo = new THREE.ConeGeometry(1.2, 2.2, 8);
      const leavesMat = new THREE.MeshStandardMaterial({ color: '#55efc4', roughness: 0.6 });
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.set(x, 2, z);
      leaves.castShadow = true;
      scene.add(leaves);
    };

    [
      [-14, 0], [14, 0], [0, 14], [-14, -14], [14, 14], [-14, 14], [14, -14],
      [-5, -14], [5, -14], [-5, 14], [5, 14]
    ].forEach(([tx, tz]) => createTree(tx, tz));

    // Floating Clouds
    const clouds = [];
    for (let i = 0; i < 6; i++) {
      const cloudGroup = new THREE.Group();
      const cloudMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
      for (let j = 0; j < 4; j++) {
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.2 - j * 0.15, 12, 12), cloudMat);
        sphere.position.set(j * 0.8, 0, (Math.random() - 0.5) * 0.6);
        cloudGroup.add(sphere);
      }
      cloudGroup.position.set(
        (Math.random() - 0.5) * 35,
        10 + Math.random() * 4,
        (Math.random() - 0.5) * 35
      );
      scene.add(cloudGroup);
      clouds.push(cloudGroup);
    }

    // Build 3D Locations
    LOCATIONS.forEach((loc) => {
      const buildingGroup = new THREE.Group();
      buildingGroup.position.set(loc.x, 0, loc.z);

      // Building base
      const bodyGeo = new THREE.BoxGeometry(4.2, 3.2, 4.2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: loc.color, roughness: 0.5 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 1.6;
      body.castShadow = true;
      body.receiveShadow = true;
      buildingGroup.add(body);

      // Roof (Cone / Pyramid)
      const roofGeo = new THREE.ConeGeometry(3.4, 2, 4);
      const roofMat = new THREE.MeshStandardMaterial({ color: '#2d3436', roughness: 0.4 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = 4.2;
      roof.rotation.y = Math.PI / 4;
      roof.castShadow = true;
      buildingGroup.add(roof);

      // Door & Windows
      const doorGeo = new THREE.PlaneGeometry(1.2, 1.8);
      const doorMat = new THREE.MeshStandardMaterial({ color: '#ffffff' });
      const door = new THREE.Mesh(doorGeo, doorMat);
      door.position.set(0, 0.9, 2.12);
      buildingGroup.add(door);

      // Glowing Badge / Marker Pin on top
      const pinGeo = new THREE.SphereGeometry(0.7, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: '#ffffff',
        emissive: loc.color,
        emissiveIntensity: 0.6,
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.y = 6.2;
      buildingGroup.add(pin);

      pinsRef.current.push({ mesh: pin, location: loc });
      scene.add(buildingGroup);
    });

    // Collectible 3D Stars
    const starGeo = new THREE.OctahedronGeometry(0.5, 0);
    const starMat = new THREE.MeshStandardMaterial({
      color: '#ffd32a',
      emissive: '#ffa502',
      emissiveIntensity: 0.8,
    });

    const starPositions = [
      [3, 3], [-3, -3], [-3, 3], [3, -3], [0, 6], [0, -6], [6, 0], [-6, 0]
    ];

    starPositions.forEach(([sx, sz], idx) => {
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.position.set(sx, 1, sz);
      scene.add(starMesh);
      starsRef.current.push({ mesh: starMesh, id: idx, collected: false });
    });

    // 3D Pixar Character Avatar (Billboard sprite with round shadow)
    const charGroup = new THREE.Group();
    charGroup.position.set(0, 0, 0);

    // Shadow blob
    const shadowGeo = new THREE.CircleGeometry(0.8, 16);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.25, transparent: true });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.05;
    charGroup.add(shadow);

    // Pixar Teacher Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(teacherImg, (texture) => {
      // Rounded billboard sprite for the Pixar character
      const spriteMat = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.y = 2.2;
      sprite.scale.set(3, 3.8, 1);
      charGroup.add(sprite);
    });

    scene.add(charGroup);
    characterMesh.current = charGroup;

    // Raycaster for touch / click interactions on buildings
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check click on ground plane to walk there
      const groundIntersects = raycaster.intersectObject(ground);
      if (groundIntersects.length > 0) {
        const point = groundIntersects[0].point;
        characterPos.current.targetX = point.x;
        characterPos.current.targetZ = point.z;
        sounds.playPop();

        // Check if clicked close to a location
        LOCATIONS.forEach((loc) => {
          const dist = Math.hypot(point.x - loc.x, point.z - loc.z);
          if (dist < 4.5) {
            onSelectLocation(loc);
          }
        });
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', handlePointerDown);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Cloud drift
      clouds.forEach((cloud, i) => {
        cloud.position.x += (0.6 + i * 0.1) * delta;
        if (cloud.position.x > 25) cloud.position.x = -25;
      });

      // Character Movement Lerp
      const c = characterPos.current;
      const dx = c.targetX - c.x;
      const dz = c.targetZ - c.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.1) {
        const speed = 7 * delta;
        c.x += (dx / dist) * Math.min(speed, dist);
        c.z += (dz / dist) * Math.min(speed, dist);

        // Bobbing walking motion
        if (characterMesh.current) {
          characterMesh.current.position.set(c.x, 0, c.z);
          characterMesh.current.position.y = Math.abs(Math.sin(elapsed * 12)) * 0.35;
        }

        // Camera follow smoothly
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, c.x * 0.4, 0.05);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 22 + c.z * 0.4, 0.05);
        camera.lookAt(c.x * 0.3, 1, c.z * 0.3);
      } else {
        if (characterMesh.current) {
          characterMesh.current.position.set(c.x, 0, c.z);
          // Gentle idle breathing
          characterMesh.current.position.y = Math.sin(elapsed * 3) * 0.1;
        }
      }

      // Check proximity to locations
      let nearLoc = null;
      LOCATIONS.forEach((loc) => {
        const d = Math.hypot(c.x - loc.x, c.z - loc.z);
        if (d < 3.8) {
          nearLoc = loc;
        }
      });
      setActiveNearLocation(nearLoc);

      // Animate pins and check stars collection
      pinsRef.current.forEach(({ mesh }) => {
        mesh.position.y = 6.2 + Math.sin(elapsed * 4) * 0.25;
      });

      starsRef.current.forEach((item) => {
        if (!item.collected) {
          item.mesh.rotation.y += 2 * delta;
          item.mesh.position.y = 1 + Math.sin(elapsed * 3 + item.id) * 0.2;

          const starDist = Math.hypot(c.x - item.mesh.position.x, c.z - item.mesh.position.z);
          if (starDist < 1.4) {
            item.collected = true;
            item.mesh.visible = false;
            sounds.playSuccess();
            onCollectStar();
            onTeacherSpeech("Bravo ! Tu as trouvé une étoile dorée ! ⭐");
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointerdown', handlePointerDown);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Toddler D-Pad / Move Controls
  const moveCharacter = (dx, dz) => {
    sounds.playBloop();
    characterPos.current.targetX = Math.max(-14, Math.min(14, characterPos.current.targetX + dx));
    characterPos.current.targetZ = Math.max(-14, Math.min(14, characterPos.current.targetZ + dz));
  };

  const jump = () => {
    sounds.playPop();
    if (characterMesh.current) {
      characterMesh.current.position.y = 1.2;
    }
  };

  return (
    <div className="world-3d-wrapper">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="world-3d-canvas-container" />

      {/* Top Banner Guide */}
      <div className="world-overlay-header">
        <div className="world-stars-badge">
          <Star size={24} fill="#ffd32a" color="#ffa502" />
          <span>Étoiles : {starsCount}</span>
        </div>
        <p className="world-hint">
          👉 Touche le sol ou les bâtiments pour déplacer Maîtresse Nia !
        </p>
      </div>

      {/* Quick Location Shortcuts Bar */}
      <div className="world-quick-pins">
        {LOCATIONS.map((loc) => (
          <button
            key={loc.id}
            onClick={() => {
              sounds.playPop();
              characterPos.current.targetX = loc.x;
              characterPos.current.targetZ = loc.z;
              onSelectLocation(loc);
            }}
            className="world-pin-btn"
            style={{ borderColor: loc.color }}
          >
            <span className="pin-emoji">{loc.emoji}</span>
            <span className="pin-label">{loc.nameFr}</span>
          </button>
        ))}
      </div>

      {/* Enter Location Floating Popup Button when near a building */}
      {activeNearLocation && (
        <div className="location-nearby-card animate-bounce-soft">
          <div className="nearby-info">
            <span className="nearby-emoji">{activeNearLocation.emoji}</span>
            <div>
              <h4 className="nearby-name">{activeNearLocation.nameFr}</h4>
              <p className="nearby-sub">({activeNearLocation.nameEn})</p>
            </div>
          </div>
          <button
            onClick={() => onSelectLocation(activeNearLocation)}
            className="nearby-enter-btn"
            style={{ backgroundColor: activeNearLocation.color }}
          >
            Entrer jouer ! 🌟
          </button>
        </div>
      )}

      {/* Big Toddler D-Pad Navigation Controls */}
      <div className="toddler-dpad">
        <button onClick={() => moveCharacter(0, -3.5)} className="dpad-btn up">
          <ArrowUp size={28} />
        </button>
        <div className="dpad-mid-row">
          <button onClick={() => moveCharacter(-3.5, 0)} className="dpad-btn left">
            <ArrowLeft size={28} />
          </button>
          <button onClick={jump} className="dpad-btn jump">
            ⭐
          </button>
          <button onClick={() => moveCharacter(3.5, 0)} className="dpad-btn right">
            <ArrowRight size={28} />
          </button>
        </div>
        <button onClick={() => moveCharacter(0, 3.5)} className="dpad-btn down">
          <ArrowDown size={28} />
        </button>
      </div>
    </div>
  );
}
