import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

const MAZE_PATH = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 2 },
  { x: 4, y: 3 }, // Finish bath pond
];

export default function DuckMazeGame({ onNiaSpeak, onRewardStar }) {
  const [duckStep, setDuckStep] = useState(0);
  const [reachedPond, setReachedPond] = useState(false);

  useEffect(() => {
    startMaze();
  }, []);

  const startMaze = () => {
    setDuckStep(0);
    setReachedPond(false);
    const welcome = "Aide le petit canard jaune à traverser le labyrinthe pour rejoindre son bain d'eau !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const moveDuck = () => {
    if (reachedPond) return;

    sounds.playPop();
    const nextStep = duckStep + 1;
    setDuckStep(nextStep);

    if (nextStep >= MAZE_PATH.length - 1) {
      // Reached finish!
      setReachedPond(true);
      sounds.playWaterSplash();
      sounds.playSuccess();
      confetti({ particleCount: 70, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = "Youpi ! Coin coin ! Le petit canard barbote dans l'eau ! Bravo mon ami !";
      onNiaSpeak(win);
      doraVoice.speak(win);
    } else {
      doraVoice.speak("Coin coin ! En avant !");
    }
  };

  const currentPos = MAZE_PATH[duckStep];

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #2ed573, #7bed9f)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🦆</span>
          <div>
            <h2 className="card-main-title">Le Labyrinthe du Petit Canard</h2>
            <p className="card-subtitle">Guide le canard vers son bain moussant !</p>
          </div>
        </div>
        <button onClick={startMaze} className="refresh-mission-btn">
          <RotateCcw size={18} /> Recommencer
        </button>
      </div>

      <div className="maze-playground-arena">
        {/* Visual Maze Grid (5x4) */}
        <div className="maze-board-grid">
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="maze-row">
              {Array.from({ length: 5 }).map((_, c) => {
                const isPath = MAZE_PATH.some((p) => p.x === c && p.y === r);
                const isDuckHere = currentPos.x === c && currentPos.y === r;
                const isFinish = c === 4 && r === 3;

                return (
                  <div
                    key={c}
                    className={`maze-cell ${isPath ? 'is-path' : 'is-hedge'} ${isFinish ? 'is-finish-pond' : ''}`}
                  >
                    {isDuckHere && (
                      <span className="maze-duck-player animate-bounce-soft">🦆</span>
                    )}
                    {isFinish && !isDuckHere && (
                      <span className="maze-finish-icon">🛁</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Big Walk Button for Toddlers */}
        {!reachedPond ? (
          <div className="maze-control-row">
            <button onClick={moveDuck} className="step-forward-btn">
              🦆 FAIRE AVANCER LE CANARD ! ➡️
            </button>
          </div>
        ) : (
          <div className="duck-win-banner animate-pop">
            <h3>🎉 Plouf ! Le canard est dans son bain ! 💦</h3>
            <button onClick={startMaze} className="action-button primary large">
              Rejouer le labyrinthe ! 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
