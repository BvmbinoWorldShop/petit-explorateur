import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Flame, Droplet, Trophy, Star, Zap } from 'lucide-react';

// 3D Fire Truck SVG
function FireTruck3D() {
  return (
    <svg viewBox="0 0 180 100" style={{ width: '100%', maxWidth: '250px', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))' }}>
      <defs>
        <radialGradient id="truckBody" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="70%" stopColor="#ee5a52" />
          <stop offset="100%" stopColor="#c23728" />
        </radialGradient>
        <radialGradient id="wheel" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="60%" stopColor="#222" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="90" cy="92" rx="70" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Main body */}
      <rect x="30" y="40" width="120" height="35" rx="8" fill="url(#truckBody)" />
      
      {/* Cabin */}
      <path d="M 30 40 L 45 22 L 75 22 L 90 40 Z" fill="url(#truckBody)" />
      
      {/* Windows */}
      <path d="M 48 26 L 60 26 L 60 38 L 40 38 Z" fill="#B3E5FC" opacity="0.8" />
      <path d="M 64 26 L 73 26 L 82 38 L 64 38 Z" fill="#B3E5FC" opacity="0.8" />
      
      {/* Ladder on top */}
      <rect x="90" y="20" width="50" height="8" rx="2" fill="#c23728" />
      <line x1="95" y1="24" x2="135" y2="24" stroke="#aaa" strokeWidth="2" />
      
      {/* Equipment compartments */}
      <rect x="95" y="48" width="15" height="20" fill="#d35400" opacity="0.7" />
      <rect x="115" y="48" width="15" height="20" fill="#d35400" opacity="0.7" />
      <rect x="135" y="48" width="10" height="20" fill="#d35400" opacity="0.7" />
      
      {/* Wheels */}
      <circle cx="55" cy="76" r="14" fill="url(#wheel)" />
      <circle cx="55" cy="76" r="6" fill="#aaa" />
      <circle cx="130" cy="76" r="14" fill="url(#wheel)" />
      <circle cx="130" cy="76" r="6" fill="#aaa" />
      
      {/* Headlights */}
      <circle cx="28" cy="52" r="4" fill="#FFEAA7" />
      
      {/* Emergency light on top */}
      <ellipse cx="70" cy="18" rx="6" ry="4" fill="#3498db" />
      <circle cx="70" cy="16" r="3" fill="#5dade2" className="emergency-light" />
      
      {/* Side details */}
      <text x="100" y="62" fontSize="12" fill="white" fontWeight="bold">🚒</text>
    </svg>
  );
}

// 3D Animated Fire
function AnimatedFire({ intensity = 100, size = 'normal' }) {
  const sizeMap = {
    small: { width: 60, height: 80 },
    normal: { width: 100, height: 130 },
    large: { width: 140, height: 180 },
  };
  
  const dims = sizeMap[size] || sizeMap.normal;
  const opacity = intensity / 100;
  
  if (intensity <= 0) {
    return (
      <div style={{ fontSize: dims.width, textAlign: 'center' }}>
        🌸
      </div>
    );
  }
  
  return (
    <svg viewBox="0 0 100 130" style={{ width: dims.width, height: dims.height, opacity: opacity }}>
      <defs>
        <radialGradient id={`fireGrad_${size}`} cx="50%" cy="70%">
          <stop offset="0%" stopColor="#ffeb3b" />
          <stop offset="30%" stopColor="#ff9800" />
          <stop offset="60%" stopColor="#ff5722" />
          <stop offset="100%" stopColor="#d32f2f" stopOpacity="0.8" />
        </radialGradient>
      </defs>
      
      {/* Main flame */}
      <path d="M 50 120 Q 35 100 30 70 Q 28 50 40 30 Q 45 20 50 5 Q 55 20 60 30 Q 72 50 70 70 Q 65 100 50 120 Z" 
            fill={`url(#fireGrad_${size})`}>
        <animate attributeName="d" 
          values="M 50 120 Q 35 100 30 70 Q 28 50 40 30 Q 45 20 50 5 Q 55 20 60 30 Q 72 50 70 70 Q 65 100 50 120 Z;
                  M 50 120 Q 32 95 28 70 Q 26 48 42 28 Q 47 18 50 3 Q 53 18 58 28 Q 74 48 72 70 Q 68 95 50 120 Z;
                  M 50 120 Q 35 100 30 70 Q 28 50 40 30 Q 45 20 50 5 Q 55 20 60 30 Q 72 50 70 70 Q 65 100 50 120 Z" 
          dur="0.8s" 
          repeatCount="indefinite" />
      </path>
      
      {/* Inner yellow core */}
      <path d="M 50 110 Q 40 95 38 75 Q 37 60 45 45 Q 48 38 50 25 Q 52 38 55 45 Q 63 60 62 75 Q 60 95 50 110 Z" 
            fill="#ffeb3b" opacity="0.8">
        <animate attributeName="d" 
          values="M 50 110 Q 40 95 38 75 Q 37 60 45 45 Q 48 38 50 25 Q 52 38 55 45 Q 63 60 62 75 Q 60 95 50 110 Z;
                  M 50 110 Q 38 92 36 75 Q 35 58 46 43 Q 49 36 50 22 Q 51 36 54 43 Q 65 58 64 75 Q 62 92 50 110 Z;
                  M 50 110 Q 40 95 38 75 Q 37 60 45 45 Q 48 38 50 25 Q 52 38 55 45 Q 63 60 62 75 Q 60 95 50 110 Z" 
          dur="0.6s" 
          repeatCount="indefinite" />
      </path>
    </svg>
  );
}

// 3D Water Jet
function WaterJet({ active, angle = 0 }) {
  if (!active) return null;
  
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      bottom: '20%',
      transform: `translateX(-50%) rotate(${angle}deg)`,
      transformOrigin: 'bottom center',
      pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 60 200" style={{ width: '60px', height: '200px' }}>
        <defs>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#29b6f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#039be5" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Water stream */}
        <path d="M 25 200 L 20 150 Q 18 100 22 50 L 24 10 L 36 10 L 38 50 Q 42 100 40 150 L 35 200 Z" 
              fill="url(#waterGrad)">
          <animate attributeName="d" 
            values="M 25 200 L 20 150 Q 18 100 22 50 L 24 10 L 36 10 L 38 50 Q 42 100 40 150 L 35 200 Z;
                    M 25 200 L 22 150 Q 20 100 24 50 L 26 10 L 34 10 L 36 50 Q 40 100 38 150 L 35 200 Z;
                    M 25 200 L 20 150 Q 18 100 22 50 L 24 10 L 36 10 L 38 50 Q 42 100 40 150 L 35 200 Z" 
            dur="0.3s" 
            repeatCount="indefinite" />
        </path>
        
        {/* Water droplets */}
        {[...Array(5)].map((_, i) => (
          <circle key={i} cx={28 + (i % 2) * 4} cy={30 + i * 30} r="3" fill="#4fc3f7" opacity="0.7">
            <animate attributeName="cy" 
              values={`${30 + i * 30};${10 + i * 30};${30 + i * 30}`}
              dur="0.4s" 
              repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

// Fire locations (buildings)
const FIRE_LOCATIONS = [
  { id: 1, name: 'Maison', emoji: '🏠', fires: 1, difficulty: 'easy' },
  { id: 2, name: 'École', emoji: '🏫', fires: 2, difficulty: 'easy' },
  { id: 3, name: 'Forêt', emoji: '🌲', fires: 3, difficulty: 'medium' },
  { id: 4, name: 'Immeuble', emoji: '🏢', fires: 4, difficulty: 'medium' },
  { id: 5, name: 'Usine', emoji: '🏭', fires: 5, difficulty: 'hard' },
];

export default function FirefighterGame({ onTeacherPrompt }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [fires, setFires] = useState([]);
  const [isSpraying, setIsSpraying] = useState(false);
  const [waterPressure, setWaterPressure] = useState(100);
  const [score, setScore] = useState(0);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [selectedFire, setSelectedFire] = useState(0);
  const sprayIntervalRef = useRef(null);

  useEffect(() => {
    const welcome = "Pompier ! Un incendie ! Choisis un lieu et éteins tous les feux avec ta lance à eau ! 🚒💦";
    onTeacherPrompt(welcome);
    doraVoice.speak(welcome);
  }, []);

  const selectLocation = (location) => {
    sounds.playPop();
    setSelectedLocation(location);
    
    // Create fires for this location
    const newFires = Array.from({ length: location.fires }, (_, i) => ({
      id: i,
      intensity: 100,
      x: 20 + (i * (60 / location.fires)),
    }));
    setFires(newFires);
    setWaterPressure(100);
    setSelectedFire(0);
    
    const msg = `Urgence à ${location.name} ! ${location.fires} feu${location.fires > 1 ? 'x' : ''} à éteindre ! Vite pompier !`;
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const startSpraying = () => {
    if (waterPressure <= 0) {
      sounds.playError();
      const msg = "Plus d'eau ! Il faut recharger le camion !";
      onTeacherPrompt(msg);
      doraVoice.speak(msg);
      return;
    }
    
    setIsSpraying(true);
    sounds.playWaterSplash();
    
    sprayIntervalRef.current = setInterval(() => {
      // Reduce water pressure
      setWaterPressure(prev => Math.max(0, prev - 2));
      
      // Reduce fire intensity
      setFires(prevFires => {
        const updated = [...prevFires];
        if (updated[selectedFire]) {
          updated[selectedFire].intensity = Math.max(0, updated[selectedFire].intensity - 8);
          
          // Fire extinguished
          if (updated[selectedFire].intensity <= 0 && prevFires[selectedFire].intensity > 0) {
            sounds.playSuccess();
            setScore(prev => prev + 10);
            
            confetti({
              particleCount: 30,
              spread: 50,
              colors: ['#4fc3f7', '#29b6f6', '#81c784'],
            });
            
            const remaining = updated.filter(f => f.intensity > 0).length;
            if (remaining === 0) {
              // All fires extinguished
              setTimeout(() => {
                missionComplete();
              }, 500);
            } else {
              const msg = remaining === 1 ? "Super ! Plus qu'un feu !" : `Bravo ! Plus que ${remaining} feux !`;
              onTeacherPrompt(msg);
              doraVoice.speak(msg);
              
              // Auto-select next fire
              const nextFireIndex = updated.findIndex(f => f.intensity > 0);
              if (nextFireIndex !== -1) {
                setSelectedFire(nextFireIndex);
              }
            }
          }
        }
        return updated;
      });
    }, 100);
  };

  const stopSpraying = () => {
    setIsSpraying(false);
    if (sprayIntervalRef.current) {
      clearInterval(sprayIntervalRef.current);
      sprayIntervalRef.current = null;
    }
  };

  const missionComplete = () => {
    stopSpraying();
    setCompletedMissions(prev => [...prev, selectedLocation.id]);
    sounds.playSuccess();
    
    confetti({
      particleCount: 100,
      spread: 80,
      colors: ['#4fc3f7', '#81c784', '#ffd93d'],
    });
    
    const msg = `Mission accomplie ! ${selectedLocation.name} est sauvé ! Tu es un super pompier ! 🏆`;
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const refillWater = () => {
    sounds.playPop();
    setWaterPressure(100);
    const msg = "Camion rechargé ! Prêt à éteindre les flammes !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  const backToMenu = () => {
    stopSpraying();
    setSelectedLocation(null);
    setFires([]);
    sounds.playPop();
  };

  useEffect(() => {
    return () => {
      if (sprayIntervalRef.current) {
        clearInterval(sprayIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="center-activity-card firefighter-premium-card">
      {/* Header */}
      <div className="activity-card-header" style={{
        background: 'linear-gradient(135deg, #fa5252, #ff8787)',
        padding: '20px',
      }}>
        <div className="header-info">
          <span className="card-badge-icon" style={{ fontSize: '48px' }}>🚒</span>
          <div>
            <h2 className="card-main-title">Mission Pompier 3D</h2>
            <p className="card-subtitle">Sauve la ville en éteignant tous les incendies ! 💦🔥</p>
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
            <Trophy size={20} fill="#FFD93D" color="#FFD93D" />
            <span style={{ fontWeight: 'bold' }}>Missions: {completedMissions.length}/{FIRE_LOCATIONS.length}</span>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '8px 16px',
            borderRadius: '24px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}>
            <Star size={18} fill="#FFD93D" color="#FFD93D" />
            <span style={{ fontWeight: 'bold' }}>Score: {score}</span>
          </div>
          
          {selectedLocation && (
            <button
              onClick={backToMenu}
              style={{
                background: 'white',
                border: '2px solid #fa5252',
                color: '#fa5252',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              🔙 Retour
            </button>
          )}
        </div>
      </div>

      {/* Mission Selection or Game Arena */}
      {!selectedLocation ? (
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #FFE8E8 0%, #FFD6D6 100%)',
          minHeight: '500px',
        }}>
          <h3 style={{
            fontSize: '28px',
            textAlign: 'center',
            color: '#495057',
            marginBottom: '24px',
          }}>
            🚨 Choisis une mission d'urgence !
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {FIRE_LOCATIONS.map(location => {
              const isCompleted = completedMissions.includes(location.id);
              const difficultyColors = {
                easy: '#51cf66',
                medium: '#ffa94d',
                hard: '#ff6b6b',
              };
              
              return (
                <button
                  key={location.id}
                  onClick={() => selectLocation(location)}
                  style={{
                    background: 'white',
                    border: '3px solid #dee2e6',
                    borderRadius: '16px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isCompleted && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: '#51cf66',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Trophy size={18} color="white" />
                    </div>
                  )}
                  
                  <div style={{ fontSize: '72px', marginBottom: '12px' }}>
                    {location.emoji}
                  </div>
                  
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    margin: '0 0 8px 0',
                  }}>
                    {location.name}
                  </h4>
                  
                  <div style={{
                    fontSize: '18px',
                    color: '#ff6b6b',
                    fontWeight: 'bold',
                    margin: '8px 0',
                  }}>
                    🔥 {location.fires} feu{location.fires > 1 ? 'x' : ''}
                  </div>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: difficultyColors[location.difficulty],
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginTop: '8px',
                  }}>
                    {location.difficulty === 'easy' ? '⭐ Facile' : location.difficulty === 'medium' ? '⭐⭐ Moyen' : '⭐⭐⭐ Difficile'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Game Arena */
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #FFE5E5 0%, #FFD0D0 100%)',
          minHeight: '600px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            <h3 style={{ fontSize: '28px', color: '#2c3e50', margin: '0 0 8px 0' }}>
              {selectedLocation.emoji} Incendie à {selectedLocation.name} !
            </h3>
            <p style={{ fontSize: '16px', color: '#6c757d' }}>
              Éteins tous les feux avant que ça se propage !
            </p>
          </div>

          {/* Fire Truck */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
          }}>
            <FireTruck3D />
          </div>

          {/* Fires Display */}
          <div style={{
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '16px',
            padding: '32px',
            minHeight: '250px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            position: 'relative',
            marginBottom: '24px',
          }}>
            {fires.map((fire, index) => (
              <div
                key={fire.id}
                onClick={() => setSelectedFire(index)}
                style={{
                  cursor: 'pointer',
                  border: selectedFire === index ? '4px solid #ffd93d' : '3px solid transparent',
                  borderRadius: '16px',
                  padding: '8px',
                  background: selectedFire === index ? 'rgba(255, 217, 61, 0.2)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                <AnimatedFire 
                  intensity={fire.intensity} 
                  size={selectedLocation.fires <= 2 ? 'large' : selectedLocation.fires <= 4 ? 'normal' : 'small'}
                />
                <div style={{
                  textAlign: 'center',
                  marginTop: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: fire.intensity > 0 ? '#ff6b6b' : '#51cf66',
                }}>
                  {fire.intensity > 0 ? `${fire.intensity}%` : '✓ Éteint'}
                </div>
              </div>
            ))}
            
            {/* Water jet */}
            <WaterJet active={isSpraying} />
          </div>

          {/* Water Pressure Bar */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 24px',
            background: 'white',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#495057' }}>
                💧 Pression d'eau
              </span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: waterPressure > 30 ? '#4fc3f7' : '#ff6b6b' }}>
                {waterPressure}%
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '24px',
              background: '#e9ecef',
              borderRadius: '12px',
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${waterPressure}%`,
                height: '100%',
                background: waterPressure > 30 
                  ? 'linear-gradient(90deg, #4fc3f7, #29b6f6)'
                  : 'linear-gradient(90deg, #ff6b6b, #ff8787)',
                transition: 'width 0.2s',
              }} />
            </div>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <button
              onMouseDown={startSpraying}
              onMouseUp={stopSpraying}
              onMouseLeave={stopSpraying}
              onTouchStart={startSpraying}
              onTouchEnd={stopSpraying}
              disabled={waterPressure <= 0 || fires.every(f => f.intensity <= 0)}
              style={{
                background: 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
                border: 'none',
                color: 'white',
                padding: '20px 48px',
                borderRadius: '16px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: (waterPressure <= 0 || fires.every(f => f.intensity <= 0)) ? 'not-allowed' : 'pointer',
                opacity: (waterPressure <= 0 || fires.every(f => f.intensity <= 0)) ? 0.5 : 1,
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.1s',
              }}
              onMouseDown={(e) => {
                if (waterPressure > 0) e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              💦 ARROSER LE FEU !
            </button>

            <button
              onClick={refillWater}
              disabled={waterPressure > 90}
              style={{
                background: 'linear-gradient(135deg, #51cf66, #37b24d)',
                border: 'none',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '16px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: waterPressure > 90 ? 'not-allowed' : 'pointer',
                opacity: waterPressure > 90 ? 0.5 : 1,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              🚰 Recharger l'eau
            </button>
          </div>

          {/* Instructions */}
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '24px auto 0',
          }}>
            <p style={{ fontSize: '14px', color: '#6c757d', margin: 0 }}>
              💡 <strong>Conseil :</strong> Maintiens le bouton appuyé pour arroser ! Sélectionne un feu en cliquant dessus.
            </p>
          </div>
        </div>
      )}

      <style>{`
        .emergency-light {
          animation: blink 1s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
