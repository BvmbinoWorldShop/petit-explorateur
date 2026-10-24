import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Flame, Droplet, RotateCcw, ShieldCheck } from 'lucide-react';

export default function FirefighterGame({ onTeacherPrompt }) {
  const [flameHealth, setFlameHealth] = useState(5); // 5 water squirts needed
  const [isWaterSpraying, setIsWaterSpraying] = useState(false);
  const [firesExtinguished, setFiresExtinguished] = useState(0);

  useEffect(() => {
    startNewFire();
  }, []);

  const startNewFire = () => {
    setFlameHealth(5);
    setIsWaterSpraying(false);
    const msg = "Alerte pompier ! Il y a un petit feu ! Arrose-le vite avec de l'eau !";
    onTeacherPrompt(msg);
    teacher.speakBilingual(msg, "Firefighter alert! There is a little fire! Put water on the fire!");
  };

  const sprayWater = () => {
    if (flameHealth <= 0) return;

    sounds.playWaterSplash();
    setIsWaterSpraying(true);
    setTimeout(() => setIsWaterSpraying(false), 300);

    const nextHealth = flameHealth - 1;
    setFlameHealth(nextHealth);

    if (nextHealth <= 0) {
      sounds.playSuccess();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setFiresExtinguished((c) => c + 1);
      const winMsg = "Bravo petit pompier ! Le feu est complètement éteint grâce à l'eau ! C'est magique !";
      onTeacherPrompt(winMsg);
      teacher.speakBilingual(winMsg, "Great job little firefighter! The fire is completely extinguished with water!");
    } else {
      teacher.speakFrench("Pshhh ! Encore un peu d'eau !");
    }
  };

  return (
    <div className="game-card firefighter-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Droplet className="game-icon water-color" /> Le Petit Pompier : De l'eau sur le feu ! 🚒
        </h2>
        <div className="score-badge">
          <ShieldCheck className="shield-icon" />
          <span>Feux éteints : {firesExtinguished}</span>
        </div>
      </div>

      <div className="fire-arena">
        {/* Fire target scene */}
        <div className="fire-scene">
          {flameHealth > 0 ? (
            <div className="fire-spot">
              {/* Flame animation scaled to remaining health */}
              <div 
                className="flame-element animate-flicker"
                style={{
                  transform: `scale(${0.6 + flameHealth * 0.15})`,
                  filter: 'drop-shadow(0 0 25px #ff7675)'
                }}
              >
                🔥
              </div>
              <div className="wood-logs">🪵🪵</div>
              <div className="health-bar-container">
                <div 
                  className="health-bar-fill" 
                  style={{ width: `${(flameHealth / 5) * 100}%` }}
                ></div>
              </div>
              <p className="fire-hint">Touche le gros bouton d'eau ! 💦</p>
            </div>
          ) : (
            <div className="extinguished-scene animate-pop">
              <span className="safe-emoji">🌸 🌿 🌈</span>
              <h3 className="safe-title">Le feu est éteint ! Bravo ! 👏</h3>
              <p className="safe-sub">La forêt et les animaux sont sauvés !</p>
              <button onClick={startNewFire} className="action-button primary">
                <RotateCcw size={22} /> Nouveau défi pompier
              </button>
            </div>
          )}

          {/* Water stream visuals */}
          {isWaterSpraying && (
            <div className="water-jet">
              <span className="water-drop d1">💧</span>
              <span className="water-drop d2">💦</span>
              <span className="water-drop d3">💧</span>
              <span className="water-drop d4">💦</span>
            </div>
          )}
        </div>

        {/* Big tactile Hose Sprayer Button */}
        {flameHealth > 0 && (
          <div className="hose-controls">
            <button
              onClick={sprayWater}
              className={`giant-water-btn ${isWaterSpraying ? 'spraying' : ''}`}
            >
              <Droplet size={48} className="water-btn-icon" />
              <div className="water-btn-text">
                <span className="main-text">ARROSER D'EAU ! 💦</span>
                <span className="sub-text">Pshhhh ! (Spray Water)</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
