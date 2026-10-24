import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Droplet, Flame, ShieldAlert, CheckCircle2, RotateCcw } from 'lucide-react';

export default function FireStationLocation({ onTeacherSpeech, onClose, onRewardStar }) {
  const [flameHealth, setFlameHealth] = useState(5);
  const [isWaterSpraying, setIsWaterSpraying] = useState(false);
  const [extinguished, setExtinguished] = useState(false);

  useEffect(() => {
    startNewMission();
  }, []);

  const startNewMission = () => {
    setFlameHealth(5);
    setExtinguished(false);
    setIsWaterSpraying(false);
    const msg = "Pin-pon pin-pon ! Alerte pompier ! Il y a un feu ! Arrose-le d'eau pour l'éteindre !";
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, "Firefighter alert! Put water on the fire to extinguish it!");
  };

  const sprayWater = () => {
    if (flameHealth <= 0) return;

    sounds.playWaterSplash();
    setIsWaterSpraying(true);
    setTimeout(() => setIsWaterSpraying(false), 300);

    const next = flameHealth - 1;
    setFlameHealth(next);

    if (next <= 0) {
      setExtinguished(true);
      sounds.playSuccess();
      confetti({ particleCount: 80, spread: 70 });
      if (onRewardStar) onRewardStar();
      const victory = "Bravo mon petit pompier héroïque ! Le feu est complètement éteint grâce à l'eau !";
      onTeacherSpeech(victory);
      teacher.speakBilingual(victory, "Great job little hero! The fire is completely extinguished with water!");
    } else {
      teacher.speakFrench("Pshhhh ! Encore un coup d'eau !");
    }
  };

  return (
    <div className="location-modal-card">
      <div className="location-modal-header fire-theme">
        <div className="modal-title-box">
          <span className="location-large-emoji">🚒</span>
          <div>
            <h2 className="modal-title">La Caserne des Pompiers</h2>
            <p className="modal-subtitle">Fire Station &bull; Mission Sauvetage et Eau Magique</p>
          </div>
        </div>
        <button onClick={onClose} className="close-modal-btn">✖ Retour à la ville</button>
      </div>

      <div className="fire-mission-arena">
        <div className="fire-display-card">
          {!extinguished ? (
            <div className="fire-target-box">
              <div 
                className="giant-flame animate-flicker"
                style={{ transform: `scale(${0.6 + flameHealth * 0.14})` }}
              >
                🔥
              </div>
              <p className="logs-under">🪵🪵🪵</p>
              
              <div className="fire-meter-wrap">
                <div 
                  className="fire-meter-fill"
                  style={{ width: `${(flameHealth / 5) * 100}%` }}
                ></div>
              </div>
              <p className="mission-instruction">Appuie fort sur la lance à eau bleue ! 💦</p>
            </div>
          ) : (
            <div className="extinguished-box animate-pop">
              <span className="rainbow-peace">🌈 🌸 🐰 🌿</span>
              <h3>Hourra ! La ville est sauvée ! 👏</h3>
              <p>Tu es le meilleur pompier du monde !</p>
              <button onClick={startNewMission} className="action-button primary">
                <RotateCcw size={20} /> Nouvelle mission pompier
              </button>
            </div>
          )}

          {isWaterSpraying && (
            <div className="water-spray-particles">
              <span className="spray-drop p1">💧</span>
              <span className="spray-drop p2">💦</span>
              <span className="spray-drop p3">💧</span>
              <span className="spray-drop p4">💦</span>
            </div>
          )}
        </div>

        {!extinguished && (
          <div className="water-nozzle-control">
            <button
              onClick={sprayWater}
              className={`giant-spray-btn ${isWaterSpraying ? 'active-spray' : ''}`}
            >
              <Droplet size={52} />
              <div>
                <span className="spray-title">JETER DE L'EAU ! 💦</span>
                <span className="spray-sub">Pshhhhh ! (Put Water On Fire)</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
