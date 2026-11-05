import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, ArrowRight, ArrowDown, ArrowUp, ArrowLeft, Star, Heart } from 'lucide-react';

const ANIMAL_AVATARS = [
  { id: 'duck', name: 'Petit Canard', emoji: '🦆', finishEmoji: '🛁', goalText: 'au grand bain moussant' },
  { id: 'puppy', name: 'Chiot Corgi', emoji: '🐶', finishEmoji: '🏡', goalText: 'à sa jolie niche' },
  { id: 'bunny', name: 'Petit Lapin', emoji: '🐰', finishEmoji: '🥕', goalText: 'au panier de carottes' },
  { id: 'kitty', name: 'Chaton Mignon', emoji: '🐱', finishEmoji: '🛋️', goalText: 'sur son coussin douillet' },
  { id: 'bear', name: 'Bébé Ours', emoji: '🐻', finishEmoji: '🍯', goalText: 'au grand pot de miel' },
];

const MAZE_LEVELS = [
  {
    id: 1,
    title: 'Niveau 1 : Le Sentier Fleuri 🌸',
    gridCols: 5,
    gridRows: 4,
    path: [
      { x: 0, y: 0 },
      { x: 1, y: 0, bonus: '⭐' },
      { x: 2, y: 0 },
      { x: 2, y: 1, bonus: '🌸' },
      { x: 2, y: 2 },
      { x: 3, y: 2, bonus: '⭐' },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
    ],
  },
  {
    id: 2,
    title: 'Niveau 2 : La Rivière aux Trésors ⭐',
    gridCols: 5,
    gridRows: 4,
    path: [
      { x: 0, y: 3 },
      { x: 0, y: 2, bonus: '⭐' },
      { x: 1, y: 2 },
      { x: 1, y: 1, bonus: '🍓' },
      { x: 2, y: 1 },
      { x: 3, y: 1, bonus: '⭐' },
      { x: 3, y: 0 },
      { x: 4, y: 0, bonus: '💎' },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
    ],
  },
  {
    id: 3,
    title: 'Niveau 3 : Le Jardin Magique 👑',
    gridCols: 5,
    gridRows: 4,
    path: [
      { x: 0, y: 0 },
      { x: 0, y: 1, bonus: '⭐' },
      { x: 0, y: 2 },
      { x: 1, y: 2, bonus: '👑' },
      { x: 2, y: 2 },
      { x: 2, y: 1, bonus: '⭐' },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0, bonus: '🌸' },
      { x: 4, y: 1 },
      { x: 4, y: 2, bonus: '⭐' },
      { x: 4, y: 3 },
    ],
  },
  {
    id: 4,
    title: 'Niveau 4 : L\'Île aux Étoiles Dorées 🌟',
    gridCols: 5,
    gridRows: 4,
    path: [
      { x: 4, y: 3 },
      { x: 3, y: 3, bonus: '⭐' },
      { x: 2, y: 3 },
      { x: 1, y: 3, bonus: '🍓' },
      { x: 1, y: 2 },
      { x: 1, y: 1, bonus: '⭐' },
      { x: 2, y: 1 },
      { x: 3, y: 1, bonus: '💎' },
      { x: 3, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 },
    ],
  },
];

export default function DuckMazeGame({ onNiaSpeak, onRewardStar }) {
  const [levelIdx, setLevelIdx] = useState(0);
  const [animalIdx, setAnimalIdx] = useState(0);
  const [animalStep, setAnimalStep] = useState(0);
  const [animalFacing, setAnimalFacing] = useState('right');
  const [reachedGoal, setReachedGoal] = useState(false);
  const [bonusesCollected, setBonusesCollected] = useState(0);
  const [wrongTileClicked, setWrongTileClicked] = useState(null);

  const selectedAnimal = ANIMAL_AVATARS[animalIdx];
  const currentLevel = MAZE_LEVELS[levelIdx % MAZE_LEVELS.length];
  const currentPath = currentLevel.path;

  useEffect(() => {
    startMaze(levelIdx);
  }, [levelIdx, animalIdx]);

  const startMaze = (idx = levelIdx) => {
    setAnimalStep(0);
    setAnimalFacing('right');
    setReachedGoal(false);
    setWrongTileClicked(null);
    const lvl = MAZE_LEVELS[idx % MAZE_LEVELS.length];
    const welcome = `${lvl.title} ! Guide ${selectedAnimal.name} jusqu'à son arrivée en touchant chaque dalle dorée !`;
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const advanceStep = (nextStep, facing = 'right') => {
    if (reachedGoal || nextStep >= currentPath.length) return;

    sounds.playPop();
    sounds.playFootstep();
    setAnimalStep(nextStep);
    setAnimalFacing(facing);

    const targetCell = currentPath[nextStep];
    if (targetCell.bonus) {
      sounds.playSuccess();
      setBonusesCollected((b) => b + 1);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    }

    if (nextStep >= currentPath.length - 1) {
      setReachedGoal(true);
      sounds.playWaterSplash();
      sounds.playSuccess();
      confetti({ particleCount: 90, spread: 80 });
      if (onRewardStar) onRewardStar();
      const win = `Youpi ! ${selectedAnimal.name} est arrivé(e) ${selectedAnimal.goalText} ! Tu es un champion du labyrinthe !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
    } else {
      const stepMsg = targetCell.bonus ? "Super trésor ramassé ! Continue !" : "En avant ! Pas à pas !";
      doraVoice.speak(stepMsg);
    }
  };

  // STRICT TILE VALIDATION: Only clicking the exact next step moves the animal!
  const handleCellClick = (r, c) => {
    if (reachedGoal) return;
    const currentPos = currentPath[animalStep];
    const nextPos = currentPath[animalStep + 1];

    if (!nextPos) return;

    if (nextPos.x === c && nextPos.y === r) {
      // The kid pressed the exact right next square!
      let facing = 'right';
      if (nextPos.x < currentPos.x) facing = 'left';
      else if (nextPos.x > currentPos.x) facing = 'right';
      else if (nextPos.y < currentPos.y) facing = 'up';
      else if (nextPos.y > currentPos.y) facing = 'down';

      advanceStep(animalStep + 1, facing);
    } else {
      // Wrong square pressed!
      sounds.playBloop();
      setWrongTileClicked({ r, c });
      setTimeout(() => setWrongTileClicked(null), 500);

      const dirName =
        nextPos.x > currentPos.x ? 'à droite ➡️' :
        nextPos.x < currentPos.x ? 'à gauche ⬅️' :
        nextPos.y > currentPos.y ? 'en bas ⬇️' : 'en haut ⬆️';
      const hint = `Regarde la dalle avec les empreintes dorées 👣 ! Elle est juste ${dirName} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleDirectionMove = (dx, dy) => {
    if (reachedGoal) return;
    const currentPos = currentPath[animalStep];
    const nextPos = currentPath[animalStep + 1];
    if (!nextPos) return;

    if (currentPos.x + dx === nextPos.x && currentPos.y + dy === nextPos.y) {
      const facing = dx > 0 ? 'right' : dx < 0 ? 'left' : dy > 0 ? 'down' : 'up';
      advanceStep(animalStep + 1, facing);
    } else {
      sounds.playBloop();
      const dirName =
        nextPos.x > currentPos.x ? 'à droite ➡️' :
        nextPos.x < currentPos.x ? 'à gauche ⬅️' :
        nextPos.y > currentPos.y ? 'en bas ⬇️' : 'en haut ⬆️';
      const hint = `Il faut aller ${dirName} ! Touche la case brillante !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const currentPos = currentPath[animalStep];
  const nextPos = currentPath[animalStep + 1] || null;
  const finishPos = currentPath[currentPath.length - 1];

  return (
    <div className="center-activity-card">
      {/* Activity Card Header */}
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #2ed573, #10ac84)' }}>
        <div className="header-info">
          <span className="card-badge-icon">{selectedAnimal.emoji}</span>
          <div>
            <h2 className="card-main-title">Le Labyrinthe Tactile 3D des Petits Animaux</h2>
            <p className="card-subtitle">Touche la prochaine dalle dorée 👣 pour faire avancer {selectedAnimal.name} pas à pas !</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div className="score-pill-header luxury-score-pill">
            <Star size={18} fill="#ffd32a" color="#ffd32a" />
            <span>Trésors : <strong>{bonusesCollected}</strong></span>
          </div>
          <button onClick={() => startMaze(levelIdx)} className="refresh-mission-btn">
            <RotateCcw size={18} /> Recommencer
          </button>
        </div>
      </div>

      {/* Animal Avatar Chooser */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          overflowX: 'auto',
          padding: '8px 12px',
          background: '#f1f2f6',
          borderRadius: '16px',
          marginBottom: '10px',
        }}
      >
        <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2f3542', whiteSpace: 'nowrap' }}>
          Choisis ton animal :
        </span>
        {ANIMAL_AVATARS.map((anim, idx) => (
          <button
            key={anim.id}
            onClick={() => {
              sounds.playPop();
              setAnimalIdx(idx);
            }}
            className={`num-mode-tab-btn ${animalIdx === idx ? 'active' : ''}`}
            style={{
              padding: '6px 14px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '1.3rem' }}>{anim.emoji}</span>
            <span>{anim.name}</span>
          </button>
        ))}
      </div>

      {/* Level Selector Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '12px' }}>
        {MAZE_LEVELS.map((lvl, idx) => (
          <button
            key={lvl.id}
            onClick={() => {
              sounds.playPop();
              setLevelIdx(idx);
            }}
            className={`num-mode-tab-btn ${levelIdx === idx ? 'active' : ''}`}
          >
            {lvl.title}
          </button>
        ))}
      </div>

      <div className="maze-playground-arena">
        {/* Visual 3D Maze Grid (5x4) */}
        <div
          className="maze-board-grid"
          style={{
            background: 'linear-gradient(180deg, #1b4d3e 0%, #13392d 100%)',
            padding: '16px',
            borderRadius: '26px',
            border: '5px solid #2ed573',
            boxShadow: '0 18px 36px rgba(0,0,0,0.3), inset 0 2px 6px rgba(255,255,255,0.2)',
          }}
        >
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="maze-row" style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {Array.from({ length: 5 }).map((_, c) => {
                const pathIndex = currentPath.findIndex((p) => p.x === c && p.y === r);
                const isPath = pathIndex !== -1;
                const isVisited = pathIndex !== -1 && pathIndex < animalStep;
                const isAnimalHere = currentPos.x === c && currentPos.y === r;
                const isNextStep = nextPos && nextPos.x === c && nextPos.y === r;
                const isFinish = finishPos.x === c && finishPos.y === r;
                const cellBonus = pathIndex > animalStep ? currentPath[pathIndex].bonus : null;
                const isWrong = wrongTileClicked && wrongTileClicked.r === r && wrongTileClicked.c === c;

                return (
                  <div
                    key={c}
                    onClick={() => handleCellClick(r, c)}
                    className={`maze-cell ${isPath ? 'is-path' : 'is-hedge'} ${isFinish ? 'is-finish-pond' : ''} ${isWrong ? 'animate-wiggle' : ''}`}
                    style={{
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: isPath ? '14px' : '16px',
                      cursor: isNextStep ? 'pointer' : 'default',
                      position: 'relative',
                      background: isAnimalHere
                        ? 'linear-gradient(135deg, #fff9db 0%, #ffe066 100%)'
                        : isNextStep
                        ? 'linear-gradient(135deg, #fff3bf 0%, #ffd43b 100%)'
                        : isVisited
                        ? 'linear-gradient(135deg, #d3f9d8 0%, #b2f2bb 100%)'
                        : isPath
                        ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                        : 'linear-gradient(135deg, #2b8a3e 0%, #237032 100%)', // Hedge bush
                      border: isNextStep
                        ? '3.5px solid #f59f00'
                        : isVisited
                        ? '2px solid #69db7c'
                        : isPath
                        ? '2px solid #ced4da'
                        : '3px solid #1e622b',
                      boxShadow: isNextStep
                        ? '0 0 18px rgba(245, 159, 0, 0.9), inset 0 2px 4px #fff'
                        : isVisited
                        ? 'inset 0 2px 4px rgba(0,0,0,0.06)'
                        : isPath
                        ? '0 4px 8px rgba(0,0,0,0.1), inset 0 2px 2px #fff'
                        : '0 6px 12px rgba(0,0,0,0.25), inset 0 -4px 8px rgba(0,0,0,0.2)',
                      transform: isNextStep ? 'scale(1.05)' : isAnimalHere ? 'scale(1.03)' : 'none',
                      transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                  >
                    {/* Animal Character on current tile */}
                    {isAnimalHere && (
                      <span
                        className="animate-bounce-soft"
                        style={{
                          fontSize: '2.4rem',
                          transform: `scaleX(${animalFacing === 'left' ? -1 : 1})`,
                          display: 'inline-block',
                          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))',
                        }}
                      >
                        {selectedAnimal.emoji}
                      </span>
                    )}

                    {/* Finish Line Objective */}
                    {!isAnimalHere && isFinish && (
                      <span style={{ fontSize: '2.2rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} className="animate-bounce-soft">
                        {selectedAnimal.finishEmoji}
                      </span>
                    )}

                    {/* Bonus treat or star on path */}
                    {!isAnimalHere && !isFinish && cellBonus && (
                      <span style={{ fontSize: '1.6rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} className="animate-bounce-soft">
                        {cellBonus}
                      </span>
                    )}

                    {/* Next Step Footprint Guide */}
                    {!isAnimalHere && isNextStep && !cellBonus && !isFinish && (
                      <span style={{ fontSize: '1.5rem', opacity: 0.9 }} className="animate-bounce-soft">
                        👣
                      </span>
                    )}

                    {/* Visited path flower decoration */}
                    {!isAnimalHere && isVisited && !isFinish && (
                      <span style={{ fontSize: '0.8rem', opacity: 0.55 }}>
                        🌸
                      </span>
                    )}

                    {/* Non-path hedge leaf texture */}
                    {!isPath && (
                      <span style={{ fontSize: '1rem', opacity: 0.4 }}>
                        🍃
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Directional & Touch Guide Assist */}
        {!reachedGoal ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%', marginTop: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.92rem', fontWeight: 800, color: '#2d3436', textAlign: 'center' }}>
              👉 Touche directement la dalle dorée 👣 avec ton doigt, ou utilise les flèches :
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => handleDirectionMove(-1, 0)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.05rem', background: 'linear-gradient(135deg, #0984e3, #74b9ff)', border: 'none' }}
              >
                ⬅️ Gauche
              </button>
              <button
                onClick={() => handleDirectionMove(0, -1)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.05rem', background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)', border: 'none' }}
              >
                ⬆️ Haut
              </button>
              <button
                onClick={() => handleDirectionMove(0, 1)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.05rem', background: 'linear-gradient(135deg, #e17055, #fab1a0)', border: 'none' }}
              >
                ⬇️ Bas
              </button>
              <button
                onClick={() => handleDirectionMove(1, 0)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.05rem', background: 'linear-gradient(135deg, #00b894, #55efc4)', border: 'none' }}
              >
                ➡️ Droite
              </button>
            </div>
          </div>
        ) : (
          <div
            className="duck-win-banner animate-pop"
            style={{
              background: 'linear-gradient(135deg, #d3f9d8 0%, #b2f2bb 100%)',
              border: '4px solid #2ed573',
              borderRadius: '24px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
              marginTop: '12px',
            }}
          >
            <span style={{ fontSize: '3.5rem' }}>🎉 {selectedAnimal.finishEmoji} ✨</span>
            <h3 style={{ margin: '8px 0', color: '#2b8a3e', fontSize: '1.35rem', fontWeight: 900 }}>
              Victoire ! {selectedAnimal.name} est bien arrivé(e) !
            </h3>
            <p style={{ margin: '4px 0 14px 0', color: '#2f3542', fontWeight: 700 }}>
              Tu as ramassé tous les trésors du sentier magique !
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setLevelIdx((i) => (i + 1) % MAZE_LEVELS.length)}
                className="action-button primary large"
                style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)', color: '#2d3436' }}
              >
                Niveau Suivant ! 🚀
              </button>
              <button onClick={() => startMaze(levelIdx)} className="action-button secondary">
                Rejouer ce niveau 🔄
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
