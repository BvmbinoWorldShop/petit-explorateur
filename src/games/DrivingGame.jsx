import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Car, Star, Trophy, Zap, Heart } from 'lucide-react';

const CAR_COLORS = [
  { id: 'red', nameFr: 'Rouge', nameEn: 'Red', primary: '#ff4757', secondary: '#e84118', wheels: '#2f3542' },
  { id: 'blue', nameFr: 'Bleue', nameEn: 'Blue', primary: '#3498db', secondary: '#2980b9', wheels: '#2c3e50' },
  { id: 'yellow', nameFr: 'Jaune', nameEn: 'Yellow', primary: '#ffd93d', secondary: '#f4a300', wheels: '#7f5539' },
  { id: 'green', nameFr: 'Verte', nameEn: 'Green', primary: '#2ed573', secondary: '#10ac84', wheels: '#1e3a2e' },
  { id: 'pink', nameFr: 'Rose', nameEn: 'Pink', primary: '#ff78cb', secondary: '#e84393', wheels: '#8e44ad' },
  { id: 'purple', nameFr: 'Violette', nameEn: 'Purple', primary: '#a55eea', secondary: '#7d3ac1', wheels: '#4a148c' }
];

// 3D Enhanced Car Component
function Car3D({ color, isMoving = false, direction = 'forward' }) {
  return (
    <svg viewBox="0 0 140 80" className="car-3d-svg" style={{ 
      width: '100%',
      filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))',
      transform: isMoving ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.2s',
    }}>
      <defs>
        <radialGradient id={`carBody_${color.id}`} cx="40%" cy="30%">
          <stop offset="0%" stopColor={color.primary} />
          <stop offset="70%" stopColor={color.secondary} />
          <stop offset="100%" stopColor={color.wheels} stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="wheel" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="60%" stopColor="#222" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="70" cy="75" rx="55" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Main Body */}
      <rect x="20" y="35" width="100" height="30" rx="15" fill={`url(#carBody_${color.id})`} />
      
      {/* Roof/Cabin */}
      <path d="M 40 35 L 52 18 L 88 18 L 100 35 Z" fill={`url(#carBody_${color.id})`} />
      
      {/* Windows with shine effect */}
      <path d="M 53 22 L 63 22 L 63 33 L 45 33 Z" fill="#B3E5FC" opacity="0.8" />
      <path d="M 68 22 L 86 22 L 95 33 L 68 33 Z" fill="#B3E5FC" opacity="0.8" />
      <ellipse cx="57" cy="26" rx="4" ry="6" fill="#fff" opacity="0.6" />
      <ellipse cx="78" cy="26" rx="4" ry="6" fill="#fff" opacity="0.6" />
      
      {/* Door line */}
      <line x1="70" y1="38" x2="70" y2="63" stroke={color.wheels} strokeWidth="2" opacity="0.3" />
      
      {/* Wheels (animated if moving) */}
      <g className={isMoving ? 'wheel-spinning' : ''}>
        <circle cx="42" cy="66" r="14" fill="url(#wheel)" />
        <circle cx="42" cy="66" r="6" fill="#aaa" />
        <circle cx="98" cy="66" r="14" fill="url(#wheel)" />
        <circle cx="98" cy="66" r="6" fill="#aaa" />
      </g>
      
      {/* Headlights */}
      <circle cx="115" cy="48" r="5" fill="#FFEAA7" opacity="0.9" />
      <circle cx="115" cy="52" r="4" fill="#FFF" opacity="0.6" />
      
      {/* Taillights */}
      <rect x="21" y="44" width="4" height="8" rx="2" fill="#ff4757" />
      
      {/* Bumper details */}
      <rect x="114" y="58" width="4" height="6" rx="1" fill={color.wheels} />
      
      {/* Side mirror */}
      <ellipse cx="37" cy="36" rx="4" ry="3" fill={color.secondary} />
      
      {/* Smile/face on front */}
      <path d="M 110 56 Q 115 60 118 56" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7" />
    </svg>
  );
}

// Obstacle types
const OBSTACLES = [
  { id: 'cone', emoji: '🚧', type: 'avoidable' },
  { id: 'tree', emoji: '🌳', type: 'avoidable' },
  { id: 'box', emoji: '📦', type: 'avoidable' },
];

const COLLECTIBLES = [
  { id: 'star', emoji: '⭐', points: 1, color: '#ffd93d' },
  { id: 'coin', emoji: '🪙', points: 2, color: '#ffa94d' },
  { id: 'gift', emoji: '🎁', points: 3, color: '#ff6b9d' },
];

export default function DrivingGame({ onTeacherPrompt }) {
  const [selectedColor, setSelectedColor] = useState(CAR_COLORS[0]);
  const [carLane, setCarLane] = useState(1); // 0 = left, 1 = center, 2 = right
  const [score, setScore] = useState(0);
  const [trafficLight, setTrafficLight] = useState('green');
  const [isMoving, setIsMoving] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [gameActive, setGameActive] = useState(false);
  const [roadItems, setRoadItems] = useState([]);
  const [collisions, setCollisions] = useState(0);
  const [distance, setDistance] = useState(0);
  const [level, setLevel] = useState(1);
  const gameLoopRef = useRef(null);

  const lanes = [25, 50, 75]; // percentage positions

  useEffect(() => {
    const welcome = "Bienvenue dans la course en ville ! Choisis ta voiture et évite les obstacles ! 🚗";
    onTeacherPrompt(welcome);
    doraVoice.speak(welcome);

    // Traffic light cycle
    const lightInterval = setInterval(() => {
      setTrafficLight((prev) => {
        const next = prev === 'green' ? 'red' : 'green';
        if (next === 'red') {
          const msg = "Feu ROUGE ! Arrête-toi !";
          onTeacherPrompt(msg);
          doraVoice.speak(msg);
        } else {
          const msg = "Feu VERT ! Vroum !";
          onTeacherPrompt(msg);
          doraVoice.speak(msg);
        }
        return next;
      });
    }, 8000);

    return () => {
      clearInterval(lightInterval);
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, []);

  useEffect(() => {
    if (gameActive) {
      startGameLoop();
    }
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameActive, trafficLight]);

  const startGameLoop = () => {
    let lastSpawn = Date.now();
    
    const loop = () => {
      if (!gameActive) return;
      
      // Only move items when light is green
      if (trafficLight === 'green') {
        setDistance(prev => prev + speed);
        
        // Move items down
        setRoadItems(prev => {
          const moved = prev.map(item => ({
            ...item,
            y: item.y + speed,
          })).filter(item => item.y < 110); // Remove off-screen items
          
          // Check collisions
          moved.forEach(item => {
            if (item.y > 85 && item.y < 95 && item.lane === carLane) {
              if (item.type === 'obstacle' && !item.hit) {
                handleCollision(item);
                item.hit = true;
              } else if (item.type === 'collectible' && !item.collected) {
                handleCollect(item);
                item.collected = true;
              }
            }
          });
          
          return moved.filter(item => !item.hit && !item.collected);
        });
        
        // Spawn new items
        const now = Date.now();
        if (now - lastSpawn > 1500 / speed) {
          spawnRoadItem();
          lastSpawn = now;
        }
      }
      
      gameLoopRef.current = requestAnimationFrame(loop);
    };
    
    loop();
  };

  const spawnRoadItem = () => {
    const randomLane = Math.floor(Math.random() * 3);
    const isCollectible = Math.random() > 0.6;
    
    if (isCollectible) {
      const collectible = COLLECTIBLES[Math.floor(Math.random() * COLLECTIBLES.length)];
      setRoadItems(prev => [...prev, {
        id: Date.now(),
        type: 'collectible',
        emoji: collectible.emoji,
        points: collectible.points,
        color: collectible.color,
        lane: randomLane,
        y: -10,
      }]);
    } else {
      const obstacle = OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)];
      setRoadItems(prev => [...prev, {
        id: Date.now(),
        type: 'obstacle',
        emoji: obstacle.emoji,
        lane: randomLane,
        y: -10,
      }]);
    }
  };

  const handleCollision = (item) => {
    sounds.playError();
    setCollisions(prev => prev + 1);
    
    const msg = "Attention ! Tu as touché un obstacle !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const handleCollect = (item) => {
    sounds.playSuccess();
    setScore(prev => prev + item.points);
    
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.7 },
      colors: [item.color],
    });
    
    if (item.points >= 3) {
      const msg = "Super ! Un gros cadeau collecté !";
      onTeacherPrompt(msg);
      doraVoice.speak(msg);
    }
  };

  const startDriving = () => {
    if (trafficLight === 'red') {
      sounds.playError();
      const msg = "Le feu est ROUGE ! Attends le VERT !";
      onTeacherPrompt(msg);
      doraVoice.speak(msg);
      return;
    }
    
    sounds.playEngineRev();
    setGameActive(true);
    setIsMoving(true);
    
    const msg = "C'est parti ! Vroum vroum !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const moveLeft = () => {
    if (!gameActive || trafficLight === 'red') return;
    sounds.playPop();
    setCarLane(prev => Math.max(0, prev - 1));
  };

  const moveRight = () => {
    if (!gameActive || trafficLight === 'red') return;
    sounds.playPop();
    setCarLane(prev => Math.min(2, prev + 1));
  };

  const honk = () => {
    sounds.playCarHorn();
    const msg = "Tut-tut !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const selectCarColor = (car) => {
    setSelectedColor(car);
    sounds.playPop();
    const msg = `Belle voiture ${car.nameFr} !`;
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const resetGame = () => {
    setGameActive(false);
    setIsMoving(false);
    setScore(0);
    setCollisions(0);
    setDistance(0);
    setCarLane(1);
    setRoadItems([]);
    sounds.playPop();
  };

  return (
    <div className="center-activity-card driving-premium-card">
      {/* Header */}
      <div className="activity-card-header" style={{
        background: 'linear-gradient(135deg, #339af0, #74c0fc)',
        padding: '20px',
      }}>
        <div className="header-info">
          <span className="card-badge-icon" style={{ fontSize: '48px' }}>🚗</span>
          <div>
            <h2 className="card-main-title">Course en Ville 3D</h2>
            <p className="card-subtitle">Conduis ta voiture, évite les obstacles et collecte des étoiles ! 🏁</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="score-pill-header" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '8px 16px',
            borderRadius: '24px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}>
            <Star size={20} fill="#FFD93D" color="#FFD93D" />
            <span style={{ fontWeight: 'bold' }}>Score: {score}</span>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '8px 16px',
            borderRadius: '24px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}>
            <Zap size={18} color="#ff6b35" />
            <span style={{ fontSize: '14px' }}>Distance: {Math.floor(distance)}m</span>
          </div>
          
          {gameActive && (
            <button
              onClick={resetGame}
              style={{
                background: 'white',
                border: '2px solid #339af0',
                color: '#339af0',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              🔄 Recommencer
            </button>
          )}
        </div>
      </div>

      {/* Car Selection */}
      {!gameActive && (
        <div style={{
          padding: '20px',
          background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}>
          <h3 style={{ fontSize: '20px', color: '#495057', margin: 0 }}>
            🎨 Choisis la couleur de ta voiture :
          </h3>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {CAR_COLORS.map(car => (
              <button
                key={car.id}
                onClick={() => selectCarColor(car)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '12px',
                  border: selectedColor.id === car.id ? `4px solid ${car.primary}` : '3px solid #dee2e6',
                  background: selectedColor.id === car.id ? car.primary : 'white',
                  color: selectedColor.id === car.id ? 'white' : '#495057',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.2s',
                }}
              >
                🚗 {car.nameFr}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Game Arena */}
      <div style={{
        padding: '32px',
        background: 'linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)',
        minHeight: '600px',
        position: 'relative',
      }}>
        {/* Traffic Light */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: '#2c3e50',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 20,
        }}>
          <div style={{
            width: '60px',
            height: '120px',
            background: '#34495e',
            borderRadius: '12px',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: trafficLight === 'red' ? '#ff4757' : '#555',
              boxShadow: trafficLight === 'red' ? '0 0 20px #ff4757' : 'none',
              transition: 'all 0.3s',
            }} />
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: trafficLight === 'green' ? '#2ed573' : '#555',
              boxShadow: trafficLight === 'green' ? '0 0 20px #2ed573' : 'none',
              transition: 'all 0.3s',
            }} />
          </div>
          <div style={{
            marginTop: '8px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
            {trafficLight === 'red' ? 'STOP 🛑' : 'GO 🟢'}
          </div>
        </div>

        {/* Road */}
        <div style={{
          position: 'relative',
          maxWidth: '600px',
          margin: '0 auto',
          height: '500px',
          background: 'linear-gradient(180deg, #555 0%, #333 100%)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3)',
        }}>
          {/* Road markings */}
          <div style={{
            position: 'absolute',
            left: '33%',
            top: 0,
            width: '4px',
            height: '100%',
            background: 'repeating-linear-gradient(to bottom, #FFF 0px, #FFF 30px, transparent 30px, transparent 60px)',
            animation: gameActive && trafficLight === 'green' ? 'roadScroll 1s linear infinite' : 'none',
          }} />
          <div style={{
            position: 'absolute',
            left: '66%',
            top: 0,
            width: '4px',
            height: '100%',
            background: 'repeating-linear-gradient(to bottom, #FFF 0px, #FFF 30px, transparent 30px, transparent 60px)',
            animation: gameActive && trafficLight === 'green' ? 'roadScroll 1s linear infinite' : 'none',
          }} />

          {/* Road items (obstacles and collectibles) */}
          {roadItems.map(item => (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                left: `${lanes[item.lane]}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)',
                fontSize: '48px',
                transition: 'all 0.1s linear',
                zIndex: 5,
                filter: item.type === 'collectible' ? 'drop-shadow(0 4px 8px rgba(255,215,0,0.6))' : 'none',
              }}
            >
              {item.emoji}
            </div>
          ))}

          {/* Player's car */}
          <div style={{
            position: 'absolute',
            left: `${lanes[carLane]}%`,
            bottom: '10%',
            transform: 'translateX(-50%)',
            width: '140px',
            transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            zIndex: 10,
          }}>
            <Car3D color={selectedColor} isMoving={isMoving && trafficLight === 'green'} />
          </div>

          {/* Side decorations */}
          <div style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            fontSize: '32px',
            opacity: 0.7,
          }}>
            🌳
          </div>
          <div style={{
            position: 'absolute',
            right: '-20px',
            top: '30%',
            fontSize: '32px',
            opacity: 0.7,
          }}>
            🏢
          </div>
        </div>

        {/* Controls */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={moveLeft}
            disabled={!gameActive || trafficLight === 'red'}
            style={{
              background: 'linear-gradient(135deg, #4dabf7, #339af0)',
              border: 'none',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '16px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: (!gameActive || trafficLight === 'red') ? 'not-allowed' : 'pointer',
              opacity: (!gameActive || trafficLight === 'red') ? 0.5 : 1,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            ⬅️ GAUCHE
          </button>

          {!gameActive ? (
            <button
              onClick={startDriving}
              style={{
                background: 'linear-gradient(135deg, #2ed573, #10ac84)',
                border: 'none',
                color: 'white',
                padding: '20px 48px',
                borderRadius: '16px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
              }}
            >
              🚀 DÉMARRER !
            </button>
          ) : (
            <button
              onClick={honk}
              style={{
                background: 'linear-gradient(135deg, #ffa502, #ff6348)',
                border: 'none',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '16px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              📢 TUT-TUT !
            </button>
          )}

          <button
            onClick={moveRight}
            disabled={!gameActive || trafficLight === 'red'}
            style={{
              background: 'linear-gradient(135deg, #4dabf7, #339af0)',
              border: 'none',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '16px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: (!gameActive || trafficLight === 'red') ? 'not-allowed' : 'pointer',
              opacity: (!gameActive || trafficLight === 'red') ? 0.5 : 1,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            DROITE ➡️
          </button>
        </div>

        {/* Stats */}
        {gameActive && (
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '16px',
            borderRadius: '16px',
            maxWidth: '400px',
            margin: '24px auto 0',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <div style={{ fontSize: '14px', color: '#6c757d' }}>Collisions</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b6b' }}>{collisions}</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: '#6c757d' }}>Distance</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#339af0' }}>{Math.floor(distance)}m</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: '#6c757d' }}>Score</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2ed573' }}>{score}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes roadScroll {
          from { background-position-y: 0px; }
          to { background-position-y: 60px; }
        }
        
        @keyframes wheel-spinning {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .wheel-spinning circle {
          animation: wheel-spinning 0.5s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
