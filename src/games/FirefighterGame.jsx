import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Flame, Droplet, RotateCcw, ShieldCheck } from 'lucide-react';

const MISSIONS = [
  {
    id: 1,
    title: 'Mission 1 : Sauver la Forêt des Lapins 🐰',
    animal: '🐰',
    animalName: 'les petits lapins',
    backdropEmoji: '🌲 🌳 🌲',
  },
  {
    id: 2,
    title: 'Mission 2 : Sauver la Maison du Chaton 🐱',
    animal: '🐱',
    animalName: 'le petit chaton',
    backdropEmoji: '🏡 🌻 🌳',
  },
  {
    id: 3,
    title: 'Mission 3 : Sauver le Parc des Chiots 🐶',
    animal: '🐶',
    animalName: 'les petits chiots',
    backdropEmoji: '🎪 🎠 🌳',
  },
];

export default function FirefighterGame({ onTeacherPrompt }) {
  const [missionIdx, setMissionIdx] = useState(0);
  const [spots, setSpots] = useState([
    { id: 1, label: 'Feu Gauche', health: 2 },
    { id: 2, label: 'Grand Feu Central', health: 3 },
    { id: 3, label: 'Feu Droite', health: 2 },
  ]);
  const [isWaterSpraying, setIsWaterSpraying] = useState(false);
  const [firesExtinguished, setFiresExtinguished] = useState(0);

  const currentMission = MISSIONS[missionIdx % MISSIONS.length];
  const totalHealth = spots.reduce((sum, s) => sum + s.health, 0);
  const maxHealth = 7;

  useEffect(() => {
    startNewFire(missionIdx);
  }, [missionIdx]);

  const startNewFire = (idx = missionIdx) => {
    const m = MISSIONS[idx % MISSIONS.length];
    setSpots([
      { id: 1, label: 'Feu Gauche', health: 2 },
      { id: 2, label: 'Grand Feu Central', health: 3 },
      { id: 3, label: 'Feu Droite', health: 2 },
    ]);
    setIsWaterSpraying(false);
    const msg = `Alerte pompier ! ${m.title} ! Touche les flammes ou le gros bouton d'eau pour sauver ${m.animalName} !`;
    onTeacherPrompt(msg);
    teacher.speakBilingual(msg, "Firefighter alert! Spray water on the fire to rescue the animals!");
  };

  const spraySpot = (spotId = null) => {
    if (totalHealth <= 0) return;

    sounds.playWaterSplash();
    setIsWaterSpraying(true);
    setTimeout(() => setIsWaterSpraying(false), 320);

    let nextSpots = [...spots];
    const targetIndex =
      spotId !== null
        ? nextSpots.findIndex((s) => s.id === spotId && s.health > 0)
        : nextSpots.findIndex((s) => s.health > 0);

    if (targetIndex === -1) return;

    nextSpots[targetIndex] = {
      ...nextSpots[targetIndex],
      health: nextSpots[targetIndex].health - 1,
    };
    setSpots(nextSpots);

    const remaining = nextSpots.reduce((sum, s) => sum + s.health, 0);

    if (remaining <= 0) {
      sounds.playSuccess();
      confetti({ particleCount: 85, spread: 70, origin: { y: 0.6 } });
      setFiresExtinguished((c) => c + 1);
      const winMsg = `Bravo petit pompier ! Le feu est éteint et ${currentMission.animalName} sont sauvés !`;
      onTeacherPrompt(winMsg);
      teacher.speakBilingual(winMsg, "Great job little firefighter! All fires are out and the animals are safe!");
    } else if (nextSpots[targetIndex].health === 0) {
      sounds.playPop();
      teacher.speakFrench("Super ! Une flamme éteinte ! Continue !");
    } else {
      teacher.speakFrench("Pshhh ! Encore de l'eau !");
    }
  };

  return (
    <div className="game-card firefighter-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Droplet className="game-icon water-color" /> Pompier Héros : Sauvetage ! 🚒
        </h2>
        <div className="score-badge">
          <ShieldCheck className="shield-icon" />
          <span>Sauvetages : {firesExtinguished} 🏆</span>
        </div>
      </div>

      {/* Mission Selector Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '12px' }}>
        {MISSIONS.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => {
              sounds.playPop();
              setMissionIdx(idx);
            }}
            className={`num-mode-tab-btn ${missionIdx === idx ? 'active' : ''}`}
          >
            {m.animal} Mission {m.id}
          </button>
        ))}
      </div>

      <div className="fire-arena">
        <div className="fire-scene">
          <div style={{ fontSize: '1.8rem', marginBottom: '4px', opacity: 0.9 }}>
            {currentMission.backdropEmoji}
          </div>

          {totalHealth > 0 ? (
            <div className="fire-spot" style={{ width: '100%' }}>
              {/* 3 Interactive Fire Spots to Tap Directly */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '20px', flexWrap: 'wrap', margin: '10px 0' }}>
                {spots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => spraySpot(spot.id)}
                    style={{
                      background: spot.health > 0 ? 'rgba(255, 255, 255, 0.75)' : '#d1fae5',
                      border: spot.health > 0 ? '3px solid #ff4757' : '3px solid #10b981',
                      borderRadius: '22px',
                      padding: '12px 18px',
                      cursor: spot.health > 0 ? 'pointer' : 'default',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: '96px',
                      boxShadow: spot.health > 0 ? '0 6px 16px rgba(255, 71, 87, 0.25)' : 'none',
                      transition: 'all 0.2s',
                    }}
                    title="Touche pour arroser cette flamme !"
                  >
                    {spot.health > 0 ? (
                      <>
                        <div
                          className="flame-element animate-flicker"
                          style={{
                            fontSize: `${2.4 + spot.health * 0.55}rem`,
                            filter: 'drop-shadow(0 0 18px #ff7675)',
                            lineHeight: 1.1,
                          }}
                        >
                          🔥
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#c0392b', marginTop: '4px' }}>
                          💦 Touche ({spot.health})
                        </span>
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '2.5rem' }} className="animate-bounce-soft">
                          {currentMission.animal}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#065f46' }}>
                          Sauvé ! ✅
                        </span>
                      </>
                    )}
                  </button>
                ))}
              </div>

              <div className="wood-logs">🚒 💦 🪵🪵</div>
              <div className="health-bar-container">
                <div
                  className="health-bar-fill"
                  style={{ width: `${(totalHealth / maxHealth) * 100}%` }}
                />
              </div>
              <p className="fire-hint">Touche directement les flammes 🔥 ou le gros bouton d'eau 💦 !</p>
            </div>
          ) : (
            <div className="extinguished-scene animate-pop">
              <span className="safe-emoji">{currentMission.animal} 🌸 🌈 {currentMission.animal}</span>
              <h3 className="safe-title">Tous les feux sont éteints ! Bravo Héros ! 👏</h3>
              <p className="safe-sub">Tu as sauvé {currentMission.animalName} !</p>
              <button
                onClick={() => setMissionIdx((i) => (i + 1) % MISSIONS.length)}
                className="action-button primary"
              >
                <RotateCcw size={20} /> Mission Suivante ! 🚒
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
        {totalHealth > 0 && (
          <div className="hose-controls">
            <button
              onClick={() => spraySpot(null)}
              className={`giant-water-btn ${isWaterSpraying ? 'spraying' : ''}`}
            >
              <Droplet size={44} className="water-btn-icon" />
              <div className="water-btn-text">
                <span className="main-text">ARROSER D'EAU ! 💦</span>
                <span className="sub-text">Pshhhh ! Éteindre le feu</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
