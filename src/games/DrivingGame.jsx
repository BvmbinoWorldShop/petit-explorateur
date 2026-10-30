import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Car, Star } from 'lucide-react';

const VEHICLES = [
  { id: 'red', nameFr: 'Voiture Rouge', nameEn: 'Red Car', emoji: '🚗', hex: '#ff4757', roofHex: '#ff6b81' },
  { id: 'police', nameFr: 'Voiture de Police', nameEn: 'Police Car', emoji: '🚓', hex: '#1e90ff', roofHex: '#ffffff', siren: true },
  { id: 'fire', nameFr: 'Camion de Pompier', nameEn: 'Fire Truck', emoji: '🚒', hex: '#e74c3c', roofHex: '#f1c40f', siren: true },
  { id: 'bus', nameFr: 'Bus Scolaire Jaune', nameEn: 'Yellow Bus', emoji: '🚌', hex: '#ffa502', roofHex: '#ffd32a' },
];

const LANES = [20, 50, 80];

export default function DrivingGame({ onTeacherPrompt }) {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const [carPosition, setCarPosition] = useState(50); // 20%, 50%, 80%
  const [starLane, setStarLane] = useState(80);
  const [bonusEmoji, setBonusEmoji] = useState('⭐');
  const [starsCollected, setStarsCollected] = useState(0);
  const [trafficLight, setTrafficLight] = useState('green'); // 'red' or 'green'
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    const welcome = "Bienvenue en ville ! Choisis ton véhicule, dirige-le vers l'étoile et attention au feu tricolore !";
    onTeacherPrompt(welcome);
    teacher.speakBilingual(welcome, "Welcome to town! Pick your vehicle, steer to the star, and watch the traffic light!");

    const interval = setInterval(() => {
      setTrafficLight((prev) => {
        const next = prev === 'green' ? 'red' : 'green';
        if (next === 'red') {
          const msg = "Feu ROUGE ! Stop, on s'arrête ! (Ou touche le feu pour le passer au vert !)";
          onTeacherPrompt(msg);
          teacher.speakBilingual("Feu ROUGE ! Stop !", "Red light! Stop!");
        } else {
          const msg = "Feu VERT ! En route ! Vroum vroum !";
          onTeacherPrompt(msg);
          teacher.speakBilingual(msg, "Green light! Go! Vroom vroom!");
        }
        return next;
      });
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  const spawnNextStar = (currentLane) => {
    const otherLanes = LANES.filter((l) => l !== currentLane);
    const nextLane = otherLanes[Math.floor(Math.random() * otherLanes.length)];
    const items = ['⭐', '🌟', '🍓', '🎈', '💎'];
    setStarLane(nextLane);
    setBonusEmoji(items[Math.floor(Math.random() * items.length)]);
  };

  const steerToLane = (targetLane) => {
    if (trafficLight === 'red') {
      sounds.playCarHorn();
      const msg = "Attention, le feu est ROUGE ! Touche le feu pour le mettre au VERT !";
      onTeacherPrompt(msg);
      teacher.speakBilingual(msg, "Wait, the light is RED! Tap the traffic light to turn it GREEN!");
      return;
    }

    sounds.playEngineRev();
    setIsDriving(true);
    setTimeout(() => setIsDriving(false), 600);
    setCarPosition(targetLane);

    if (targetLane === starLane) {
      collectStarReward(targetLane);
    }
  };

  const moveLeft = () => {
    const nextPos = Math.max(20, carPosition - 30);
    steerToLane(nextPos);
  };

  const moveRight = () => {
    const nextPos = Math.min(80, carPosition + 30);
    steerToLane(nextPos);
  };

  const honk = () => {
    sounds.playCarHorn();
    const msg = selectedVehicle.siren
      ? `Pin-pon pin-pon ! ${selectedVehicle.nameFr} arrive !`
      : `Tut-tut ! ${selectedVehicle.nameFr} klaxonne !`;
    onTeacherPrompt(msg);
    teacher.speakFrench(msg);
  };

  const driveForward = () => {
    if (trafficLight === 'red') {
      sounds.playCarHorn();
      const msg = "Attention, le feu est ROUGE ! Touche le feu pour le passer au VERT !";
      onTeacherPrompt(msg);
      teacher.speakBilingual(msg, "Wait, the light is RED!");
      return;
    }

    sounds.playEngineRev();
    setIsDriving(true);
    setTimeout(() => setIsDriving(false), 800);
    collectStarReward(carPosition);
  };

  const collectStarReward = (laneUsed) => {
    sounds.playPop();
    const newCount = starsCollected + 1;
    setStarsCollected(newCount);
    spawnNextStar(laneUsed);

    if (newCount % 3 === 0) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      const cheer = `Super pilote ! Tu as gagné ${newCount} étoiles sur la route !`;
      onTeacherPrompt(cheer);
      teacher.speakFrench(cheer);
    }
  };

  const toggleLightManually = () => {
    sounds.playPop();
    const next = trafficLight === 'green' ? 'red' : 'green';
    setTrafficLight(next);
    teacher.speakFrench(next === 'green' ? "Feu VERT ! Tu peux rouler !" : "Feu ROUGE ! Stop !");
  };

  const selectVehicle = (v) => {
    setSelectedVehicle(v);
    sounds.playPop();
    const msg = `Génial ! Voici ${v.nameFr} ! En route !`;
    onTeacherPrompt(msg);
    teacher.speakBilingual(msg, `Awesome! ${v.nameEn}! Let's roll!`);
  };

  return (
    <div className="game-card driving-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Car className="game-icon" /> Circuit Ville & Feux Tricolores 🚗
        </h2>
        <div className="score-badge">
          <Star className="star-icon" fill="#ffb703" color="#ffb703" />
          <span>Étoiles : {starsCollected}</span>
        </div>
      </div>

      {/* Vehicle Selection Bar */}
      <div className="car-color-selector">
        <span className="selector-title">Choisis ton véhicule :</span>
        <div className="car-palette">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => selectVehicle(v)}
              className={`car-color-btn ${selectedVehicle.id === v.id ? 'active' : ''}`}
              style={{ backgroundColor: v.hex, width: 'auto', padding: '6px 12px', borderRadius: '999px', color: '#fff', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <span style={{ fontSize: '1.3rem' }}>{v.emoji}</span>
              <span>{v.nameFr}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Road Canvas Arena */}
      <div className="road-container">
        {/* Interactive Traffic Light widget (Tap to toggle!) */}
        <div
          className="traffic-light-post"
          onClick={toggleLightManually}
          style={{ cursor: 'pointer' }}
          title="Touche le feu pour changer Rouge / Vert !"
        >
          <div className={`light-bulb red ${trafficLight === 'red' ? 'on' : ''}`}></div>
          <div className={`light-bulb green ${trafficLight === 'green' ? 'on' : ''}`}></div>
          <span className="light-label">
            {trafficLight === 'red' ? 'STOP 🛑 (Touche)' : 'PARTEZ 🟢'}
          </span>
        </div>

        {/* Road background with 3 interactive lanes */}
        <div className={`road-track ${isDriving ? 'driving-fast' : ''}`}>
          <div className="road-line"></div>
          <div className="road-side side-left">🌳 🏠 🌳</div>
          <div className="road-side side-right">🌻 🏡 🌳</div>

          {/* Collectible Star on the road in target lane */}
          <div
            className="road-star animate-bounce-soft"
            style={{ left: `${starLane}%`, cursor: 'pointer' }}
            onClick={() => steerToLane(starLane)}
            title="Touche pour diriger la voiture ici !"
          >
            {bonusEmoji}
          </div>

          {/* Toddler's Vehicle */}
          <div
            className="car-player"
            style={{
              left: `${carPosition}%`,
              transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <svg viewBox="0 0 120 75" className="car-svg">
              {/* Siren for Police/Fire */}
              {selectedVehicle.siren && (
                <rect x="55" y="4" width="14" height="7" rx="3" fill="#ff4757" />
              )}
              {/* Car Body */}
              <rect x="15" y="25" width="90" height="28" rx="14" fill={selectedVehicle.hex} />
              {/* Car Roof */}
              <path d="M 32 25 L 45 10 L 78 10 L 92 25 Z" fill={selectedVehicle.roofHex} />
              {/* Windows */}
              <path d="M 46 13 L 56 13 L 56 24 L 37 24 Z" fill="#E0F7FA" />
              <path d="M 62 13 L 75 13 L 86 24 L 62 24 Z" fill="#E0F7FA" />
              {/* Wheels */}
              <circle cx="36" cy="54" r="12" fill="#2d3436" />
              <circle cx="36" cy="54" r="5" fill="#dfe6e9" />
              <circle cx="84" cy="54" r="12" fill="#2d3436" />
              <circle cx="84" cy="54" r="5" fill="#dfe6e9" />
              {/* Headlights */}
              <circle cx="103" cy="38" r="4" fill="#FFEAA7" />
              {/* Smile */}
              <path d="M 98 44 Q 103 48 103 43" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Big Toddler Controls */}
      <div className="car-controls">
        <button onClick={moveLeft} className="control-btn nav-btn">
          ⬅️ À Gauche !
        </button>

        <button onClick={honk} className="control-btn horn-btn">
          📢 {selectedVehicle.siren ? 'PIN-PON !' : 'TUT-TUT !'}
        </button>

        <button onClick={driveForward} className="control-btn gas-btn">
          🚀 Vroum ! Rouler !
        </button>

        <button onClick={moveRight} className="control-btn nav-btn">
          À Droite ! ➡️
        </button>
      </div>
    </div>
  );
}
