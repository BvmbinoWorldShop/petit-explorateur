import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Car, Star, Volume2 } from 'lucide-react';

const CAR_COLORS = [
  { id: 'red', nameFr: 'Voiture Rouge', nameEn: 'Red Car', color: '#ff4757', hex: '#ff4757' },
  { id: 'blue', nameFr: 'Voiture Bleue', nameEn: 'Blue Car', color: '#2ed573', hex: '#1e90ff' },
  { id: 'yellow', nameFr: 'Voiture Jaune', nameEn: 'Yellow Car', color: '#ffa502', hex: '#ffa502' },
  { id: 'green', nameFr: 'Voiture Verte', nameEn: 'Green Car', color: '#2ed573', hex: '#2ed573' }
];

export default function DrivingGame({ onTeacherPrompt }) {
  const [selectedColor, setSelectedColor] = useState(CAR_COLORS[0]);
  const [carPosition, setCarPosition] = useState(50); // 20% (left), 50% (center), 80% (right)
  const [starsCollected, setStarsCollected] = useState(0);
  const [trafficLight, setTrafficLight] = useState('green'); // 'red' or 'green'
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    const welcome = "Bienvenue sur la route ! Choisis ta jolie voiture et fais Tut-tut !";
    onTeacherPrompt(welcome);
    teacher.speakBilingual(welcome, "Welcome to the road! Pick your cute car and honk beep beep!");

    // Traffic light cycle every 8 seconds
    const interval = setInterval(() => {
      setTrafficLight((prev) => {
        const next = prev === 'green' ? 'red' : 'green';
        if (next === 'red') {
          const msg = "Feu ROUGE ! Arrête-toi comme un grand !";
          onTeacherPrompt(msg);
          teacher.speakBilingual(msg, "Red light! Stop!");
        } else {
          const msg = "Feu VERT ! Tu peux rouler ! Vroum vroum !";
          onTeacherPrompt(msg);
          teacher.speakBilingual(msg, "Green light! Go! Vroom vroom!");
        }
        return next;
      });
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  const moveLeft = () => {
    sounds.playEngineRev();
    setCarPosition((pos) => Math.max(20, pos - 30));
    checkCollectStar();
  };

  const moveRight = () => {
    sounds.playEngineRev();
    setCarPosition((pos) => Math.min(80, pos + 30));
    checkCollectStar();
  };

  const honk = () => {
    sounds.playCarHorn();
    const msg = "Tut-tut ! La voiture klaxonne !";
    onTeacherPrompt(msg);
    teacher.speakFrench(msg);
  };

  const driveForward = () => {
    if (trafficLight === 'red') {
      sounds.playCarHorn();
      const msg = "Attention, le feu est ROUGE ! Il faut attendre le VERT !";
      onTeacherPrompt(msg);
      teacher.speakBilingual(msg, "Wait, the light is RED! Wait for GREEN!");
      return;
    }

    sounds.playEngineRev();
    setIsDriving(true);
    setTimeout(() => setIsDriving(false), 800);
    checkCollectStar();
  };

  const checkCollectStar = () => {
    sounds.playPop();
    const newCount = starsCollected + 1;
    setStarsCollected(newCount);
    if (newCount % 3 === 0) {
      sounds.playSuccess();
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      const cheer = `Super pilote ! Tu as gagné ${newCount} étoiles !`;
      onTeacherPrompt(cheer);
      teacher.speakFrench(cheer);
    }
  };

  const selectCarColor = (car) => {
    setSelectedColor(car);
    sounds.playPop();
    const msg = `Jolie ${car.nameFr} ! En route !`;
    onTeacherPrompt(msg);
    teacher.speakBilingual(msg, `Pretty ${car.nameEn}! Let's roll!`);
  };

  return (
    <div className="game-card driving-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Car className="game-icon" /> La Petite Voiture en Ville 🚗
        </h2>
        <div className="score-badge">
          <Star className="star-icon" fill="#ffb703" color="#ffb703" />
          <span>Étoiles : {starsCollected}</span>
        </div>
      </div>

      {/* Car color selection bar */}
      <div className="car-color-selector">
        <span className="selector-title">Choisis ta couleur :</span>
        <div className="car-palette">
          {CAR_COLORS.map((car) => (
            <button
              key={car.id}
              onClick={() => selectCarColor(car)}
              className={`car-color-btn ${selectedColor.id === car.id ? 'active' : ''}`}
              style={{ backgroundColor: car.hex }}
            >
              🚗
            </button>
          ))}
        </div>
      </div>

      {/* Road Canvas Arena */}
      <div className="road-container">
        {/* Traffic Light widget */}
        <div className="traffic-light-post">
          <div className={`light-bulb red ${trafficLight === 'red' ? 'on' : ''}`}></div>
          <div className={`light-bulb green ${trafficLight === 'green' ? 'on' : ''}`}></div>
          <span className="light-label">
            {trafficLight === 'red' ? 'STOP 🛑' : 'PARTEZ 🟢'}
          </span>
        </div>

        {/* Road background with moving road lines */}
        <div className={`road-track ${isDriving ? 'driving-fast' : ''}`}>
          <div className="road-line"></div>
          <div className="road-side side-left">🌳 🏠 🌳</div>
          <div className="road-side side-right">🌻 🏡 🌳</div>

          {/* Collectible Star on the road */}
          <div 
            className="road-star" 
            style={{ left: `${carPosition}%` }}
            onClick={checkCollectStar}
          >
            ⭐
          </div>

          {/* Toddler's Car */}
          <div
            className="car-player"
            style={{
              left: `${carPosition}%`,
              transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {/* Cute Cartoon Car SVG */}
            <svg viewBox="0 0 120 70" className="car-svg">
              {/* Car Body */}
              <rect x="15" y="25" width="90" height="28" rx="14" fill={selectedColor.hex} />
              {/* Car Roof */}
              <path d="M 32 25 L 45 10 L 78 10 L 92 25 Z" fill={selectedColor.hex} />
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
              {/* Smile on front */}
              <path d="M 98 44 Q 103 48 103 43" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Big Toddler Controls (Easy Touch Targets) */}
      <div className="car-controls">
        <button onClick={moveLeft} className="control-btn nav-btn">
          ⬅️ À Gauche !
        </button>

        <button onClick={honk} className="control-btn horn-btn">
          📢 TUT-TUT !
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
