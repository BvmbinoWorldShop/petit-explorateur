import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, ArrowRight, ArrowDown, ArrowUp, ArrowLeft, Star } from 'lucide-react';

const MAZE_LEVELS = [
  {
    id: 1,
    title: 'Niveau 1 : La Mare aux Fleurs 🌸',
    finishEmoji: '🛁',
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
    title: 'Niveau 2 : La Rivière aux Étoiles ⭐',
    finishEmoji: '🌊',
    path: [
      { x: 0, y: 3 },
      { x: 0, y: 2, bonus: '⭐' },
      { x: 1, y: 2 },
      { x: 1, y: 1, bonus: '🍓' },
      { x: 2, y: 1 },
      { x: 3, y: 1, bonus: '⭐' },
      { x: 3, y: 0 },
      { x: 4, y: 0, bonus: '🐸' },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
    ],
  },
  {
    id: 3,
    title: 'Niveau 3 : Le Grand Bain Royal 👑',
    finishEmoji: '🛁',
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
];

export default function DuckMazeGame({ onNiaSpeak, onRewardStar }) {
  const [levelIdx, setLevelIdx] = useState(0);
  const [duckStep, setDuckStep] = useState(0);
  const [reachedPond, setReachedPond] = useState(false);
  const [bonusesCollected, setBonusesCollected] = useState(0);

  const currentLevel = MAZE_LEVELS[levelIdx];
  const currentPath = currentLevel.path;

  useEffect(() => {
    startMaze(levelIdx);
  }, [levelIdx]);

  const startMaze = (idx = levelIdx) => {
    setDuckStep(0);
    setReachedPond(false);
    const lvl = MAZE_LEVELS[idx];
    const welcome = `${lvl.title} ! Guide le petit canard jaune jusqu'à l'eau en ramassant les étoiles !`;
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const advanceStep = (nextStep) => {
    if (reachedPond || nextStep >= currentPath.length) return;

    sounds.playPop();
    setDuckStep(nextStep);

    const targetCell = currentPath[nextStep];
    if (targetCell.bonus) {
      sounds.playSuccess();
      setBonusesCollected((b) => b + 1);
      confetti({ particleCount: 25, spread: 45, origin: { y: 0.6 } });
    }

    if (nextStep >= currentPath.length - 1) {
      setReachedPond(true);
      sounds.playWaterSplash();
      sounds.playSuccess();
      confetti({ particleCount: 80, spread: 70 });
      if (onRewardStar) onRewardStar();
      const win = "Youpi ! Coin coin ! Le petit canard barbote dans son bain ! Bravo mon ami !";
      onNiaSpeak(win);
      doraVoice.speak(win);
    } else {
      doraVoice.speak(targetCell.bonus ? "Super étoile ! Coin coin !" : "Coin coin ! En avant !");
    }
  };

  const handleDirectionMove = (dx, dy) => {
    if (reachedPond) return;
    const currentPos = currentPath[duckStep];
    const nextPos = currentPath[duckStep + 1];
    if (!nextPos) return;

    if (currentPos.x + dx === nextPos.x && currentPos.y + dy === nextPos.y) {
      advanceStep(duckStep + 1);
    } else {
      // Friendly toddler assist: if they press another arrow, guide them or advance if close
      sounds.playBloop();
      const dirName =
        nextPos.x > currentPos.x ? 'à droite ➡️' :
        nextPos.x < currentPos.x ? 'à gauche ⬅️' :
        nextPos.y > currentPos.y ? 'en bas ⬇️' : 'en haut ⬆️';
      const hint = `Regarde la case brillante : va ${dirName} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const currentPos = currentPath[duckStep];
  const nextPos = currentPath[duckStep + 1] || null;
  const finishPos = currentPath[currentPath.length - 1];

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #2ed573, #10ac84)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🦆</span>
          <div>
            <h2 className="card-main-title">L'Aventure Labyrinthe du Petit Canard</h2>
            <p className="card-subtitle">Touche la case brillante ou utilise les flèches pour guider le canard !</p>
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

      {/* Level Selector Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '10px' }}>
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
        {/* Visual Maze Grid (5x4) */}
        <div className="maze-board-grid">
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="maze-row">
              {Array.from({ length: 5 }).map((_, c) => {
                const pathIndex = currentPath.findIndex((p) => p.x === c && p.y === r);
                const isPath = pathIndex !== -1;
                const isVisited = pathIndex !== -1 && pathIndex < duckStep;
                const isDuckHere = currentPos.x === c && currentPos.y === r;
                const isNextStep = nextPos && nextPos.x === c && nextPos.y === r;
                const isFinish = finishPos.x === c && finishPos.y === r;
                const cellBonus = pathIndex > duckStep ? currentPath[pathIndex].bonus : null;

                return (
                  <div
                    key={c}
                    onClick={() => {
                      if (isNextStep) advanceStep(duckStep + 1);
                      else if (pathIndex > duckStep) advanceStep(duckStep + 1);
                    }}
                    className={`maze-cell ${isPath ? 'is-path' : 'is-hedge'} ${isFinish ? 'is-finish-pond' : ''}`}
                    style={{
                      cursor: isPath && pathIndex > duckStep ? 'pointer' : 'default',
                      border: isNextStep ? '3px solid #f1c40f' : undefined,
                      boxShadow: isNextStep ? '0 0 16px rgba(241, 196, 15, 0.85)' : undefined,
                      background: isVisited ? '#d1fae5' : undefined,
                      position: 'relative',
                    }}
                  >
                    {isDuckHere && (
                      <span className="maze-duck-player animate-bounce-soft">🦆</span>
                    )}
                    {!isDuckHere && isFinish && (
                      <span className="maze-finish-icon">{currentLevel.finishEmoji}</span>
                    )}
                    {!isDuckHere && !isFinish && cellBonus && (
                      <span style={{ fontSize: '1.5rem' }} className="animate-bounce-soft">
                        {cellBonus}
                      </span>
                    )}
                    {!isDuckHere && isNextStep && !cellBonus && !isFinish && (
                      <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>👣</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Interactive Directional Controls + Smart Step Button */}
        {!reachedPond ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => handleDirectionMove(-1, 0)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #0984e3, #74b9ff)' }}
              >
                ⬅️ Gauche
              </button>
              <button
                onClick={() => handleDirectionMove(0, -1)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' }}
              >
                ⬆️ Haut
              </button>
              <button
                onClick={() => handleDirectionMove(0, 1)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #e17055, #fab1a0)' }}
              >
                ⬇️ Bas
              </button>
              <button
                onClick={() => handleDirectionMove(1, 0)}
                className="step-forward-btn"
                style={{ padding: '10px 18px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #00b894, #55efc4)' }}
              >
                ➡️ Droite
              </button>
            </div>

            <div className="maze-control-row">
              <button onClick={() => advanceStep(duckStep + 1)} className="step-forward-btn">
                🦆 FAIRE AVANCER LE CANARD ! ({duckStep} / {currentPath.length - 1}) ➡️
              </button>
            </div>
          </div>
        ) : (
          <div className="duck-win-banner animate-pop">
            <h3>🎉 Plouf ! Le canard est arrivé dans l'eau ! 💦</h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                onClick={() => setLevelIdx((i) => (i + 1) % MAZE_LEVELS.length)}
                className="action-button primary large"
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
