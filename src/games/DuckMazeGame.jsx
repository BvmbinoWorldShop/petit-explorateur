import React, { useState, useEffect, useRef } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, Star, Trophy, Heart, Zap } from 'lucide-react';

// Enhanced 3D Duck SVG Component
function Duck3D({ direction = 'right', isSwimming = false }) {
  const flipX = direction === 'left' ? 'scale(-1, 1)' : '';
  
  return (
    <svg viewBox="0 0 120 100" className="duck-3d-sprite" style={{ transform: flipX }}>
      <defs>
        <radialGradient id="duckBody" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FFE66D" />
          <stop offset="60%" stopColor="#FFD93D" />
          <stop offset="100%" stopColor="#F4A300" />
        </radialGradient>
        <radialGradient id="duckHead" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#FFEC99" />
          <stop offset="70%" stopColor="#FFD93D" />
          <stop offset="100%" stopColor="#E8B000" />
        </radialGradient>
        <linearGradient id="beak" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="92" rx="32" ry="6" fill="rgba(0,0,0,0.15)" />
      
      {/* Body */}
      <ellipse cx="55" cy="60" rx="35" ry="28" fill="url(#duckBody)" />
      
      {/* Wing detail */}
      <path d="M 40 55 Q 28 60 32 70 L 42 68 Z" fill="#FFC93D" opacity="0.7" />
      
      {/* Head */}
      <circle cx="75" cy="40" r="22" fill="url(#duckHead)" />
      
      {/* Eye */}
      <circle cx="82" cy="35" r="4" fill="#2C3E50" />
      <circle cx="83" cy="34" r="1.5" fill="#fff" />
      
      {/* Beak */}
      <ellipse cx="95" cy="42" rx="12" ry="6" fill="url(#beak)" />
      <line x1="89" y1="42" x2="89" y2="42" stroke="#C44900" strokeWidth="1" />
      
      {/* Feet (if swimming, hide feet) */}
      {!isSwimming && (
        <>
          <ellipse cx="50" cy="88" rx="8" ry="4" fill="#FF8C42" />
          <ellipse cx="68" cy="88" rx="8" ry="4" fill="#FF8C42" />
        </>
      )}
      
      {/* Water ripples if swimming */}
      {isSwimming && (
        <>
          <ellipse cx="60" cy="88" rx="35" ry="8" fill="none" stroke="#4DA6FF" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="60" cy="88" rx="25" ry="5" fill="none" stroke="#4DA6FF" strokeWidth="1" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

// Collectible items (fish, flowers, stars)
function CollectibleItem({ type, x, y, collected, onClick }) {
  const icons = {
    fish: { emoji: '🐟', color: '#4DA6FF', glow: '#74C0FC' },
    flower: { emoji: '🌸', color: '#FF6B9D', glow: '#FFA6C9' },
    star: { emoji: '⭐', color: '#FFD93D', glow: '#FFE66D' },
  };
  
  const item = icons[type];
  
  if (collected) return null;
  
  return (
    <button
      onClick={onClick}
      className="collectible-item animate-bounce-soft"
      style={{
        position: 'absolute',
        left: `${x * 20}%`,
        top: `${y * 25}%`,
        background: `radial-gradient(circle, ${item.glow}, ${item.color})`,
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: `0 4px 12px ${item.color}66`,
        transition: 'transform 0.2s',
        zIndex: 10,
      }}
      title={`Collecte ${type} !`}
    >
      {item.emoji}
    </button>
  );
}

// Obstacle (hedge, rock, water puddle)
function ObstacleGraphic({ type }) {
  const obstacles = {
    hedge: '🌳',
    rock: '🪨',
    water: '💧',
  };
  
  return (
    <span style={{ fontSize: '32px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
      {obstacles[type]}
    </span>
  );
}

// Difficulty levels with different mazes
const DIFFICULTY_LEVELS = {
  easy: {
    name: 'Facile',
    maze: [
      { x: 0, y: 0, type: 'path' },
      { x: 1, y: 0, type: 'path' },
      { x: 2, y: 0, type: 'path', collectible: 'star' },
      { x: 2, y: 1, type: 'path' },
      { x: 2, y: 2, type: 'path', collectible: 'flower' },
      { x: 3, y: 2, type: 'path' },
      { x: 4, y: 2, type: 'path' },
      { x: 4, y: 3, type: 'finish' },
    ],
    gridSize: { cols: 5, rows: 4 },
  },
  medium: {
    name: 'Moyen',
    maze: [
      { x: 0, y: 0, type: 'path' },
      { x: 1, y: 0, type: 'path', collectible: 'fish' },
      { x: 1, y: 1, type: 'path' },
      { x: 1, y: 2, type: 'path', collectible: 'star' },
      { x: 2, y: 2, type: 'path' },
      { x: 3, y: 2, type: 'path' },
      { x: 3, y: 3, type: 'path', collectible: 'flower' },
      { x: 4, y: 3, type: 'path' },
      { x: 5, y: 3, type: 'path' },
      { x: 5, y: 4, type: 'finish' },
    ],
    gridSize: { cols: 6, rows: 5 },
  },
  hard: {
    name: 'Difficile',
    maze: [
      { x: 0, y: 0, type: 'path' },
      { x: 0, y: 1, type: 'path', collectible: 'fish' },
      { x: 1, y: 1, type: 'path' },
      { x: 2, y: 1, type: 'path', collectible: 'star' },
      { x: 2, y: 2, type: 'path' },
      { x: 2, y: 3, type: 'path' },
      { x: 3, y: 3, type: 'path', collectible: 'flower' },
      { x: 4, y: 3, type: 'path' },
      { x: 4, y: 2, type: 'path', collectible: 'fish' },
      { x: 5, y: 2, type: 'path' },
      { x: 6, y: 2, type: 'path', collectible: 'star' },
      { x: 6, y: 3, type: 'path' },
      { x: 6, y: 4, type: 'finish' },
    ],
    gridSize: { cols: 7, rows: 5 },
  },
};

export default function DuckMazeGame({ onNiaSpeak, onRewardStar }) {
  const [difficulty, setDifficulty] = useState('easy');
  const [duckStep, setDuckStep] = useState(0);
  const [reachedPond, setReachedPond] = useState(false);
  const [collectedItems, setCollectedItems] = useState([]);
  const [totalCollectibles, setTotalCollectibles] = useState(0);
  const [completedLevels, setCompletedLevels] = useState({ easy: false, medium: false, hard: false });
  const [direction, setDirection] = useState('right');

  const currentLevel = DIFFICULTY_LEVELS[difficulty];
  const mazePath = currentLevel.maze;

  useEffect(() => {
    startMaze();
  }, [difficulty]);

  const startMaze = () => {
    setDuckStep(0);
    setReachedPond(false);
    setCollectedItems([]);
    setDirection('right');
    
    // Count collectibles
    const collectibles = mazePath.filter(cell => cell.collectible).length;
    setTotalCollectibles(collectibles);
    
    const welcome = `Niveau ${currentLevel.name} ! Aide le canard à collecter tous les trésors et rejoindre son bain !`;
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const moveDuck = () => {
    if (reachedPond) return;

    sounds.playPop();
    const nextStep = duckStep + 1;
    
    // Update direction based on movement
    if (nextStep < mazePath.length) {
      const currentPos = mazePath[duckStep];
      const nextPos = mazePath[nextStep];
      setDirection(nextPos.x > currentPos.x ? 'right' : nextPos.x < currentPos.x ? 'left' : direction);
    }
    
    setDuckStep(nextStep);

    // Check for collectible at new position
    const currentCell = mazePath[nextStep];
    if (currentCell?.collectible && !collectedItems.includes(nextStep)) {
      collectItem(nextStep, currentCell.collectible);
    }

    if (nextStep >= mazePath.length - 1) {
      // Reached finish!
      finishLevel();
    } else {
      const encouragements = [
        "Coin coin ! En avant !",
        "Super ! Continue comme ça !",
        "Bravo ! Le bain approche !",
        "Vas-y petit canard !"
      ];
      doraVoice.speak(encouragements[Math.floor(Math.random() * encouragements.length)]);
    }
  };

  const collectItem = (stepIndex, itemType) => {
    setCollectedItems(prev => [...prev, stepIndex]);
    sounds.playSuccess();
    
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FFD93D', '#4DA6FF', '#FF6B9D'],
    });

    const messages = {
      fish: "Oh ! Un poisson brillant ! 🐟",
      flower: "Jolie fleur parfumée ! 🌸",
      star: "Une étoile magique ! ⭐",
    };
    
    onNiaSpeak(messages[itemType]);
    doraVoice.speak(messages[itemType]);
    
    if (onRewardStar) onRewardStar();
  };

  const finishLevel = () => {
    setReachedPond(true);
    sounds.playWaterSplash();
    sounds.playSuccess();
    
    confetti({ 
      particleCount: 100, 
      spread: 80,
      colors: ['#FFD93D', '#4DA6FF', '#FF6B9D', '#7BED9F'],
    });
    
    // Mark level as completed
    setCompletedLevels(prev => ({ ...prev, [difficulty]: true }));
    
    const allCollected = collectedItems.length === totalCollectibles;
    let winMessage = "Youpi ! Coin coin ! Le canard barbote dans l'eau ! 🦆💦";
    
    if (allCollected) {
      winMessage += " Et tu as tout collecté ! Champion ! 🏆";
      if (onRewardStar) onRewardStar();
    }
    
    onNiaSpeak(winMessage);
    doraVoice.speak(winMessage);
  };

  const changeDifficulty = (level) => {
    sounds.playPop();
    setDifficulty(level);
  };

  const currentPos = mazePath[duckStep];

  return (
    <div className="center-activity-card duck-maze-premium-card">
      {/* Header */}
      <div className="activity-card-header" style={{ 
        background: 'linear-gradient(135deg, #2ed573, #7bed9f)',
        padding: '20px',
      }}>
        <div className="header-info">
          <span className="card-badge-icon" style={{ fontSize: '48px' }}>🦆</span>
          <div>
            <h2 className="card-main-title">Labyrinthe Aventure du Canard 3D</h2>
            <p className="card-subtitle">Collecte les trésors et trouve le bain moussant ! 🛁✨</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Score display */}
          <div className="score-pill-header" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '8px 16px',
            borderRadius: '24px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={18} fill="#FFD93D" color="#FFD93D" />
              <span style={{ fontWeight: 'bold' }}>{collectedItems.length}/{totalCollectibles}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Trophy size={18} fill="#FF6B35" color="#FF6B35" />
              <span style={{ fontSize: '12px' }}>Niveau: {currentLevel.name}</span>
            </div>
          </div>
          
          <button onClick={startMaze} className="refresh-mission-btn" style={{
            background: 'white',
            border: '2px solid #2ed573',
            color: '#2ed573',
            padding: '10px 20px',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <RotateCcw size={18} /> Recommencer
          </button>
        </div>
      </div>

      {/* Difficulty selector */}
      <div style={{
        padding: '16px',
        background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {Object.entries(DIFFICULTY_LEVELS).map(([key, level]) => (
          <button
            key={key}
            onClick={() => changeDifficulty(key)}
            disabled={reachedPond && key === difficulty}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: difficulty === key ? '3px solid #2ed573' : '2px solid #dee2e6',
              background: difficulty === key ? '#2ed573' : 'white',
              color: difficulty === key ? 'white' : '#495057',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
          >
            {completedLevels[key] && <Trophy size={16} fill="currentColor" />}
            {level.name}
          </button>
        ))}
      </div>

      {/* Maze Game Arena */}
      <div className="maze-playground-arena" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, #E3F9E5 0%, #C1F2E3 100%)',
        minHeight: '500px',
        position: 'relative',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          fontSize: '32px',
          opacity: 0.6,
        }}>
          ☀️ ☁️ 🌈
        </div>

        {/* Visual Maze Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${currentLevel.gridSize.cols}, 1fr)`,
          gap: '8px',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}>
          {Array.from({ length: currentLevel.gridSize.rows }).map((_, r) => (
            Array.from({ length: currentLevel.gridSize.cols }).map((_, c) => {
              const pathCell = mazePath.find((p) => p.x === c && p.y === r);
              const isPath = !!pathCell;
              const isDuckHere = currentPos?.x === c && currentPos?.y === r;
              const isFinish = pathCell?.type === 'finish';
              const cellIndex = mazePath.findIndex(p => p.x === c && p.y === r);
              const hasCollectible = pathCell?.collectible && !collectedItems.includes(cellIndex);

              return (
                <div
                  key={`${r}-${c}`}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    background: isFinish 
                      ? 'linear-gradient(135deg, #4DA6FF, #74C0FC)'
                      : isPath 
                      ? 'linear-gradient(135deg, #C1F2E3, #95E1D3)'
                      : 'linear-gradient(135deg, #34A853, #2D8E44)',
                    border: isPath ? '3px solid #7BED9F' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: isPath ? '0 4px 8px rgba(0,0,0,0.1)' : 'inset 0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s',
                  }}
                >
                  {/* Duck */}
                  {isDuckHere && (
                    <div style={{
                      width: '80%',
                      height: '80%',
                      animation: isFinish ? 'none' : 'wiggle 1s ease-in-out infinite',
                    }}>
                      <Duck3D direction={direction} isSwimming={isFinish} />
                    </div>
                  )}
                  
                  {/* Finish icon */}
                  {isFinish && !isDuckHere && (
                    <span style={{ fontSize: '48px', animation: 'bounce 2s ease-in-out infinite' }}>
                      🛁
                    </span>
                  )}
                  
                  {/* Collectible */}
                  {hasCollectible && !isDuckHere && (
                    <span style={{ fontSize: '36px', animation: 'float 2s ease-in-out infinite' }}>
                      {pathCell.collectible === 'fish' ? '🐟' : pathCell.collectible === 'flower' ? '🌸' : '⭐'}
                    </span>
                  )}
                  
                  {/* Hedge decoration */}
                  {!isPath && !isFinish && Math.random() > 0.6 && (
                    <span style={{ fontSize: '24px', opacity: 0.7 }}>🌳</span>
                  )}
                </div>
              );
            })
          ))}
        </div>

        {/* Control Button */}
        {!reachedPond ? (
          <div style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <button
              onClick={moveDuck}
              style={{
                background: 'linear-gradient(135deg, #FFD93D, #FFC93D)',
                border: '4px solid #F4A300',
                color: '#2C3E50',
                padding: '20px 48px',
                borderRadius: '24px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🦆 AVANCER LE CANARD ! ➡️
            </button>
          </div>
        ) : (
          <div style={{
            marginTop: '32px',
            textAlign: 'center',
            animation: 'popIn 0.5s ease-out',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFD93D, #FFE66D)',
              padding: '24px',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              <h3 style={{
                fontSize: '32px',
                margin: '0 0 16px 0',
                color: '#2C3E50',
              }}>
                🎉 Plouf ! Le canard est dans son bain ! 💦
              </h3>
              {collectedItems.length === totalCollectibles && (
                <p style={{
                  fontSize: '20px',
                  color: '#2D8E44',
                  fontWeight: 'bold',
                  margin: '8px 0',
                }}>
                  🏆 Tous les trésors collectés ! Champion !
                </p>
              )}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={startMaze}
                  style={{
                    background: 'linear-gradient(135deg, #2ed573, #10ac84)',
                    border: 'none',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '16px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  🔄 Rejouer ce niveau
                </button>
                {difficulty === 'easy' && (
                  <button
                    onClick={() => changeDifficulty('medium')}
                    style={{
                      background: 'linear-gradient(135deg, #FFB534, #FF8C42)',
                      border: 'none',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '16px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    ⬆️ Niveau Moyen
                  </button>
                )}
                {difficulty === 'medium' && (
                  <button
                    onClick={() => changeDifficulty('hard')}
                    style={{
                      background: 'linear-gradient(135deg, #FF6B6B, #EE5A52)',
                      border: 'none',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '16px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    🔥 Niveau Difficile
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .duck-3d-sprite {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }
      `}</style>
    </div>
  );
}
